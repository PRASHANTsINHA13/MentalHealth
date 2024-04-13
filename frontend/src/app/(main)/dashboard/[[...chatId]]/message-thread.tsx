"use client";
import React, { ElementRef, useEffect } from "react";
import ChatBubble from "@/components/chat-bubble";
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
