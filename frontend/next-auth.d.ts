import NextAuth from "next-auth";
import { DefaultJWT, JWT } from "@auth/core";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      userId?: string;
      name: string;
      email: string;
    };
  }
}

declare module "@auth/core" {
  interface JWT {
    userId: string;
  }
}
