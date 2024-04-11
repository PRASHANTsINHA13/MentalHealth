"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { propmtFormSchema } from "./model";
export async function prompt(formData: FormData) {
  const parsedData = propmtFormSchema.safeParse(Object.fromEntries(formData));
  if (!parsedData.success) {
    return;
  }
  const { chatId } = parsedData.data;
  await new Promise((res, rej) => {
    setTimeout(() => res(10), 2000);
  });
  if (!chatId) {
    redirect("/dashboard/123");
  } else {
    revalidatePath("/");
  }
}
