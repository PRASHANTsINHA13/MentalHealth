import NextAuth from "next-auth";
import nextAuthConfig from "./next-auth";
import bcrypt from "bcrypt";
import { z } from "zod";
import { users } from "@/db-schemas/schema";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import CredentialsProvder from "next-auth/providers/credentials";

const credentialSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const { auth, signIn, signOut } = NextAuth({
  ...nextAuthConfig,
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
      authorize: async (userCredential) => {
        const parsedPayload = credentialSchema.safeParse(userCredential);
        if (!parsedPayload.success) return null;
        const { email, password } = parsedPayload.data;
        const user = await db
          .select()
          .from(users)
          .where(eq(users.email, email));

        if (!user || user.length < 1) return null;

        if (!bcrypt.compareSync(password, user[0].hashedPassword)) return null;

        return { id: user[0].id, name: user[0].name, email: user[0].email };
      },
    }),
  ],
});
