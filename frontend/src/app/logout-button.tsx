"use client";
import React from "react";
import { useFormStatus } from "react-dom";

function LogoutButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-error flex flex-row  gap-x-1 px-2 btn-sm text-sm shadow-lg rounded-sm py-0.5 h-fit w-fit hover:btn-error/75"
      disabled={pending}
    >
      <span>Logout</span>
    </button>
  );
}

export default LogoutButton;
