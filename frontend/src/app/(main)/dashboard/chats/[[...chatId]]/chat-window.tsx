"use client";
import React from "react";
import { useOptimistic } from "react";
import MessageThread from "./message-thread";
import PromptInput from "./prompt-input";
import { ChatThreadProps } from "./type";
import { v4 as uuidv4 } from "uuid";

function ChatWindow(props: { chatId?: string; chatData: ChatThreadProps[] }) {
  const { chatId, chatData } = props;
  const [optimisticChatData, addOptimisticChat] = useOptimistic<
    ChatThreadProps[],
    string
  >(chatData, (state, newChat) => [
    ...state,
    {
      id: uuidv4(),
      composedBy: "user",
      message: newChat,
      isLocallyAdded: true,
    },
  ]);
  return (
    <>
      <MessageThread chatData={optimisticChatData} />
      <PromptInput chatId={chatId} addOptimisticChat={addOptimisticChat} />
    </>
  );
}

export default ChatWindow;
