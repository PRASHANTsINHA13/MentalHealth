import React from "react";
import Link from "next/link";
import Navbar from "./NavBar";

function Page() {
  return (
    <main className=" flex flex-col h-screen max-h-screen w-screen ">
      <section className="flex-none ">
        <Navbar />
      </section>
      <section className="flex-grow overflow-y-auto">
        <div className="h-screen max-h-screen w-screen max-w-full grid grid-cols-2">
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
          <section className="my-3 grid  place-items-center">
            <Link
              href="/dashboard/affirmations"
              className="card p-12 bg-base-100 group  shadow-xl hover:shadow-2xl border border-primary hover:border-dashed transition-all hover:bg-primary/5"
            >
              <div className="card-body">
                <h2 className="card-title"> Go to Affirmations</h2>
              </div>
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Page;
