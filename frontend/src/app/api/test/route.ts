import { db } from "@/db";
import { NextResponse } from "next/server";
import { users } from "@/db-schemas/schema";
import { randomUUID } from "crypto";

async function handler(request: Request) {
  console.log("function hut");
  console.log(
    await db.insert(users).values({ id: randomUUID(), email: "some" })
  );
  return NextResponse.json({ message: "function hit success" });
}
export { handler as GET, handler as POST };
