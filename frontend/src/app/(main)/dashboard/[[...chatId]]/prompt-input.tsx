"use client";
import React, { useRef } from "react";
import { prompt } from "@/app/actions/prompt";
import SubmitPromptButton from "../submit-prompt-button";

function PromptInput({ chatId }: { chatId?: string }) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (formData) => {
        formRef.current?.reset();
        await prompt(formData);
      }}
      ref={formRef}
      className="flex-none w-full rounded-xl flex space-x-2   border transition-all focus-within:border-none border-primary focus-within:ring-2 focus-within:ring-primary ring-offset-2 ring-offset-base-300"
    >
      <input type="hidden" name="chatId" value={chatId} />
      <input
        autoComplete="off"
        required
        name="prompt"
        type="text"
        className="input rounded-xl w-full bg-base-300 focus:bg-base-300 focus:border-none focus:outline-none"
        placeholder="Message with this bot"
      />

      <SubmitPromptButton />
    </form>
  );
}

export default PromptInput;
