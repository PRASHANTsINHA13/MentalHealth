"use server";
import { db } from "@/db";
import { chats, sessions } from "@/db-schemas/schema";
import { asc, eq } from "drizzle-orm";
import { Chats } from "./type";

export async function getChatBySessionId(sessionId: string): Promise<Chats[]> {
  const data = await db
    .select({
      id: chats.id,
      message: chats.messageString,
      composedBy: chats.userType,
      date: chats.messagedOn,
    })
    .from(chats)
    .innerJoin(sessions, eq(sessions.id, chats.sessionId))
    .where(eq(sessions.id, sessionId))
    .orderBy(asc(chats.messagedOn));
  const mapedData = data.map((itm) => ({ ...itm, message: itm.message ?? "" }));

  return mapedData;
}
