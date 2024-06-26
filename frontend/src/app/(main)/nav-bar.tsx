import React from "react";
import Link from "next/link";
import { ibmPlex } from "../../ui/fonts";
import { signOut } from "@/config/auth";
import LogoutButton from "@/app/logout-button";
import { auth } from "@/config/auth";

async function Navbar() {
  const sessionData = await auth();
  sessionData?.user.name;
  const dicebearUrl = `https://api.dicebear.com/8.x/identicon/svg?seed=${sessionData?.user?.name}`;
  return (
    <nav className="navbar bg-base-100 shadow-md items-center justify-between">
      <div className="flex-1">
        <Link
          href="/"
          className={`
            ${ibmPlex.className} text-xl bg-gradient-to-r from-primary  to-secondary inline-block text-transparent bg-clip-text`}
        >
          Ai mental health chatbot using deep neural network
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar border border-secondary "
          >
            <div className="w-10 rounded-full">
              <img
                width={20}
                height={20}
                alt="Profile picture"
                src={dicebearUrl}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1]  shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-fit"
          >
            <li>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <LogoutButton />
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
