import type { NextAuthConfig } from "next-auth";

const nextAuthConfig = {
  secret: process.env.NEXT_AUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: ({ auth, request }) => {
      const { nextUrl } = request;

      const isLoggedIn = Boolean(auth?.user);
      if (nextUrl.pathname.startsWith("/dashboard")) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        const callbackUrl = nextUrl.searchParams.get("callbackUrl");
        if (callbackUrl !== null) {
          return Response.redirect(callbackUrl);
        }

        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
export default nextAuthConfig;
