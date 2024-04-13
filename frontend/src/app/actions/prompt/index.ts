"use server";
import { URLSearchParams, URL } from "node:url";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { propmtFormSchema } from "./model";
import { randomUUID } from "node:crypto";
import { auth } from "@/config/auth";
import { db } from "@/db";
import { chats, sessions } from "@/db-schemas/schema";

export async function prompt(formData: FormData) {
  const parsedData = propmtFormSchema.safeParse(Object.fromEntries(formData));
  if (!parsedData.success) {
    return;
  }
  const sessionData = await auth();
  if (!sessionData) {
    return;
  }
  const { userId } = sessionData.user;
  if (!userId) {
    return;
  }
  const { chatId, prompt } = parsedData.data;

  if (!chatId) {
    const uuid = randomUUID();
    await db
      .insert(sessions)
      .values({ sessionCreatedUserId: userId, id: uuid });

    await db.insert(chats).values({
      sessionId: uuid,
      userType: "user",
      messageString: prompt,
    });

    //part where model will generate its response
    try {
      const params = new URLSearchParams();
      params.set("msg", prompt);
      const url = new URL("/get", process.env.AI_MODEL_URL);

      // const aiResponse = await fetch(`${url.toString()}?${params.toString()}`);
      // const aiOutput = await aiResponse.text();
    } catch (e) {}

    redirect(`/dashboard/${uuid}`);
  } else {
    console.log("block executed");
    await db
      .insert(chats)
      .values({ sessionId: chatId, userType: "user", messageString: prompt });
    //part where model will generate its response
    try {
      const params = new URLSearchParams();
      params.set("msg", prompt);
      const url = new URL("/get", process.env.AI_MODEL_URL);
      // const aiResponse = await fetch(`${url.toString()}?${params.toString()}`);
      // const aiOutput = await aiResponse.text();
    } catch (e) {}

    revalidatePath(`/dashboard/${chatId}`);
  }
}
