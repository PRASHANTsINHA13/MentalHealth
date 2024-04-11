import React from "react";
import Link from "next/link";
import { ibmPlex } from "../../components/fonts";
import { signOut } from "@/config/auth";
import LogoutButton from "./dashboard/logout-button";

function Navbar() {
  return (
    <nav className="navbar bg-base-100 shadow-md items-center justify-between">
      <div className="flex-1">
        <Link
          href="/dashboard"
          className={`
            ${ibmPlex.className}    text-xl bg-gradient-to-r from-primary  to-secondary inline-block text-transparent bg-clip-text`}
        >
          Mental health care bot
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                width={20}
                height={20}
                alt="Profile picture"
                src="https://api.dicebear.com/8.x/identicon/svg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-fit"
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
