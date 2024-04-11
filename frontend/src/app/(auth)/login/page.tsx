import React from "react";
import { authenticate } from "@/app/actions/login";
import LoginForm from "./login-form";

function Page() {
  return <LoginForm action={authenticate} />;
}

export default Page;
