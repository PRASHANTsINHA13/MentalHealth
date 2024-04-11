import { BrainCircuit } from "lucide-react";
import React from "react";

interface ChatProps {
  message: string;
  /**wether sent by user or by bot */
  type: "user" | "bot";
}

function ChatBubble(props: ChatProps) {
  const { message, type } = props;
  return (
    <div>
      <div className={`chat ${type === "user" ? "chat-end" : "chat-start"}`}>
        <div className="chat-header">{type === "user" ? "User" : "AI Bot"}</div>

        <div
          className={`chat-bubble ${
            type === "user" ? "chat-bubble-primary" : "chat-bubble-secondary"
          }`}
        >
          {message}
        </div>
      </div>
    </div>
  );
}

export default ChatBubble;
