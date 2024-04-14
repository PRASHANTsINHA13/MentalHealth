import React from "react";
import SignUpForm from "./signup-form";
import { registerUser } from "@/app/actions/register-user";

function Page() {
  return <SignUpForm action={registerUser} />;
}

export default Page;
