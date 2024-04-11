import React from "react";
import { SendHorizonal } from "lucide-react";

import { prompt } from "@/app/actions/prompt";

function PromptInput() {
  return (
    <form
      action={prompt}
      className="flex-none w-full rounded-xl flex space-x-2   border transition-all focus-within:border-none border-primary focus-within:ring-2 focus-within:ring-primary ring-offset-2 ring-offset-base-300"
    >
      <input
        autoComplete="off"
        name="prompt"
        type="text"
        className="input   rounded-xl w-full bg-base-300 focus:bg-base-300 focus:border-none focus:outline-none"
        placeholder="Message with this bot"
      />
      <button type="submit" className="btn btn-circle rounded-xl btn-primary ">
        <SendHorizonal />
      </button>
    </form>
  );
}

export default PromptInput;
