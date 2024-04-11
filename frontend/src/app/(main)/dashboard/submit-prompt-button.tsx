import React from "react";
import { Disc3, SendHorizonal } from "lucide-react";
import { useFormStatus } from "react-dom";

function SubmitPromptButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="btn btn-circle rounded-xl btn-primary   "
    >
      {pending ? (
        <Disc3 className="animate-spin text-inherit text-base" />
      ) : (
        <SendHorizonal />
      )}
    </button>
  );
}

export default SubmitPromptButton;
