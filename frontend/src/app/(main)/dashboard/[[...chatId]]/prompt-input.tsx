"use client";
import React, { useRef } from "react";
import { prompt } from "@/app/actions/prompt";
import { Disc3, SendHorizonal } from "lucide-react";
import { useFormStatus } from "react-dom";

function PromptInput({
  chatId,
  addOptimisticChat,
}: {
  chatId?: string;
  addOptimisticChat?: (message: string) => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (formData) => {
        formRef.current?.reset();
        const chatMessage = formData.get("prompt")?.toString();
        if (addOptimisticChat && chatMessage) {
          addOptimisticChat(chatMessage);
        }

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
