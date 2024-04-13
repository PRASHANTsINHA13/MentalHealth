"use client";
import React from "react";
import { useFormStatus } from "react-dom";

function LogoutButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-error px-2 rounded-sm py-0.5 h-fit w-fit"
      disabled={pending}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
