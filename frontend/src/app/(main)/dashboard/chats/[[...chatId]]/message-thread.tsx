"use client";
import React, { ElementRef, useEffect } from "react";
import { useRef } from "react";
import { ChatThreadProps } from "./type";

function MessageThread(props: { chatData?: ChatThreadProps[] }) {
  const { chatData } = props;
  const doesChatDataContainLocllyAddedData = chatData?.some(
    (itm) => itm.isLocallyAdded
  );

  const endAnchorPointRef = useRef<ElementRef<"div">>(null);
  useEffect(() => {
    endAnchorPointRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatData]);
  return (
    <div className="flex flex-grow w-full flex-col mb-6 pb-4 overflow-y-auto scrollbar-track-slate-300 scrollbar-thin">
      <ChatBubble message="Mental health care bot" type="bot" />
      {chatData?.map((message) => {
        return (
          <ChatBubble
            key={message.id}
            message={message.message}
            type={message.composedBy}
          />
        );
      })}
      {doesChatDataContainLocllyAddedData ? <ChatTypingBubble /> : undefined}
      <div ref={endAnchorPointRef} />
    </div>
  );
}

export default MessageThread;

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
        <div className="chat-header">
          {type === "user" ? "User" : "Pandora Ai Bot"}
        </div>

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

function ChatTypingBubble() {
  return (
    <div className="chat chat-start">
      <div className="chat-header"> AI Bot</div>
      <div className="chat-bubble chat-bubble-secondary">
        <span className="loading loading-dots loading-md"></span>
      </div>
    </div>
  );
}
