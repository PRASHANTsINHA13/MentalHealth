"use server";
import { redirect } from "next/navigation";
export async function prompt(formData: FormData) {
  console.log("function called");
  redirect("/temp");
}
