"use client";
import { Disc3 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full btn btn-primary transition-all"
      disabled={pending}
    >
      {pending ? (
        <Disc3 className="animate-spin text-inherit text-base" />
      ) : undefined}
      {pending ? "Logging in" : "Login"} to your account
    </button>
  );
}

export default SubmitButton;
