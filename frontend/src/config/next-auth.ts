import type {
  Awaitable,
  NextAuthOptions,
  RequestInternal,
  User,
} from "next-auth";
import CredentialsProvder from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";

const nextAuthConfig = {
  secret: process.env.NEXT_AUTH_SECRET,
  adapter: DrizzleAdapter(db),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvder({
      name: "Credentials",

      credentials: {
        email: { label: "Username", type: "text", placeholder: "Your email" },
        password: {
          label: "Password",
          type: "Your password",
          placeholder: "Your password",
        },
      },
      authorize: function (
        credentials: Record<"email" | "password", string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ): Awaitable<User | null> {
        return { id: "123", name: "some name", email: "somemeail" };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    newUser: "/signup",
  },
} satisfies NextAuthOptions;
export default nextAuthConfig;
