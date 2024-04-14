"use server";
import { db } from "@/db";
import { users } from "@/db-schemas/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { ServerActionResponse } from "./types";
import { formSchema } from "./models";

const saltRounds = 10;
export async function registerUser(
  _prevState: any, //this variable is not used so added underscore
  formData: FormData
): Promise<ServerActionResponse> {
  const parsedData = formSchema.safeParse(Object.fromEntries(formData));
  if (!parsedData.success) {
    return { type: "error", message: "Invalid data entered" };
  }
  const { email, name, password } = parsedData.data;
  bcrypt;
  const doesUserExists = await db
    .select()
    .from(users)
    .where(eq(users.email, email));

  if (doesUserExists.length > 0) {
    return { type: "error", message: "user alredy exists" };
  }

  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  try {
    await db.insert(users).values({
      email: email,
      name: name,
      hashedPassword: hashedPassword,
    });
  } catch (e) {
    return { type: "error", message: "some error occured in server" };
  }
  redirect("/login");
}
