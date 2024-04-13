import React from "react";
import { getChatBySessionId } from "@/app/actions/chats";
import ChatWindow from "./chat-window";

interface Params {
  chatId?: string[];
}
interface Props {
  params: Params;
}

async function Page({ params }: Props) {
  const { chatId } = params;
  const chatData =
    chatId && chatId[0] ? await getChatBySessionId(chatId[0]) : [];

  return (
    <main className="artboard  artboard-demo h-full w-full max-w-full max-h-full  flex flex-col  py-4 px-4">
      <section className="w-4/5 px-4 mx-auto h-full max-h-full flex flex-col ">
        <ChatWindow
          chatId={chatId ? chatId[0] : undefined}
          chatData={chatData}
        />
      </section>
    </main>
  );
}

export default Page;
