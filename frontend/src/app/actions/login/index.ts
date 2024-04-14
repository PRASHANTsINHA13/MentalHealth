"use server";
import { signIn } from "@/config/auth";
import { AuthError } from "next-auth";
import { ErrorResponse } from "./types";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
): Promise<ErrorResponse | undefined> {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { type: "error", message: "Invalid credentials." };

        default:
          return {
            type: "error",
            message: "Something went wrong.in server side",
          };
      }
    }
    throw error;
  }
}
