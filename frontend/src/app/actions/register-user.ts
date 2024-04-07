"use server";
import { z } from "zod";
import { db } from "@/db";
import { users } from "@/db-schemas/schema";
import { eq } from "drizzle-orm";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(4).max(8),
});

export async function registerUser(formData: FormData) {
  const parsedData = formSchema.safeParse(Object.fromEntries(formData));
  if (!parsedData.success) {
    const errors = parsedData.error.flatten().formErrors;

    return "some error occured";
  }
  const { email } = parsedData.data;
  const doesUserExists = await db
    .select()
    .from(users)
    .where(eq(users.email, email));

  if (doesUserExists.length > 0) {
    return "user exists";
  }
}
