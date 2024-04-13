import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div className="h-screen max-h-screen w-screen max-w-full grid grid-cols-">
      <section className=" grid  place-items-center">
        <Link
          href="/dashboard/chats"
          className="card p-12 bg-base-100 group  shadow-xl hover:shadow-2xl border border-primary hover:border-dashed transition-all hover:bg-primary/5"
        >
          <div className="card-body">
            <h2 className="card-title"> Go to chat Bot</h2>
          </div>
        </Link>
      </section>
      <section></section>
    </div>
  );
}

export default Page;
