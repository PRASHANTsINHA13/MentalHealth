import { db } from "@/db";
import { users } from "@/db/schema";
import { randomUUID } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(
    await db
      .insert(users)
      .values({ id: randomUUID(), email: "someemail", name: "some name" })
  );
  res.status(200).json({ message: "Hello from Next.js!" });
}

export { handler as GET, handler as POST };
