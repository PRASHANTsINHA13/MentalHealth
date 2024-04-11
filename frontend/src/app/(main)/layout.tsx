import React from "react";
import Navbar from "./navbar";

function layout({ children }: React.PropsWithChildren) {
  return (
    <section className="flex flex-col w-screen h-screen max-h-screen ">
      <div className="flex-none">
        <Navbar />
      </div>
      <div className="flex-grow overflow-y-hidden max-h-full">{children}</div>
    </section>
  );
}

export default layout;
