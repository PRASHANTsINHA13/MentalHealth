import React from "react";
import PromptInput from "./prompt-input";
import ChatBubble from "@/components/chat-bubble";

interface Params {
  chatId?: string[];
}
interface Props {
  params: Params;
}

function Page({ params }: Props) {
  const { chatId } = params;

  return (
    <main className="artboard  artboard-demo h-full w-full max-w-full max-h-full  flex flex-col  py-4 px-4">
      <section className="w-4/5 px-4 mx-auto h-full max-h-full flex flex-col ">
        <div className="flex flex-grow w-full flex-col mb-6 pb-4 overflow-y-auto scrollbar-track-slate-300 scrollbar-thin">
          <ChatBubble
            message="Hello give me some tips and tricks"
            type="user"
          />

          <ChatBubble message="What kind of nonsense is this" type="user" />

          <ChatBubble
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum hendrerit quam ac vestibulum. Nunc tempor eget nibh ut malesuada. Nulla hendrerit dui ut diam feugiat, at faucibus nisl mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean nec lectus vitae est consequat fringilla. Donec et lorem finibus, sodales risus id, dapibus tellus. Vestibulum sed leo sapien. Ut laoreet vehicula tortor. Duis feugiat sollicitudin massa. Proin tincidunt laoreet leo, eu fringilla nisl tristique a. Etiam efficitur vulputate mi eu vestibulum. Nulla sit amet accumsan magna. Integer lobortis risus eget lacinia pharetra. Maecenas malesuada sem volutpat, tristique velit nec, vehicula nibh. Nunc aliquam mauris libero, vitae consectetur dolor vehicula sed. Donec molestie, mi at mollis euismod, felis quam dapibus magna, eget dapibus urna velit quis enim."
            type="bot"
          />

          {/**Copied text */}

          <ChatBubble
            message="Hello give me some tips and tricks"
            type="user"
          />

          <ChatBubble message="What kind of nonsense is this" type="user" />

          <ChatBubble
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum hendrerit quam ac vestibulum. Nunc tempor eget nibh ut malesuada. Nulla hendrerit dui ut diam feugiat, at faucibus nisl mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean nec lectus vitae est consequat fringilla. Donec et lorem finibus, sodales risus id, dapibus tellus. Vestibulum sed leo sapien. Ut laoreet vehicula tortor. Duis feugiat sollicitudin massa. Proin tincidunt laoreet leo, eu fringilla nisl tristique a. Etiam efficitur vulputate mi eu vestibulum. Nulla sit amet accumsan magna. Integer lobortis risus eget lacinia pharetra. Maecenas malesuada sem volutpat, tristique velit nec, vehicula nibh. Nunc aliquam mauris libero, vitae consectetur dolor vehicula sed. Donec molestie, mi at mollis euismod, felis quam dapibus magna, eget dapibus urna velit quis enim."
            type="bot"
          />
        </div>

        <PromptInput chatId={chatId ? chatId[0] : undefined} />
      </section>
    </main>
  );
}

export default Page;
