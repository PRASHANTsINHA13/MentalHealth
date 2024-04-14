import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2";
import { sql } from "drizzle-orm";

export const users = sqliteTable("user", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name"),
  email: text("email").notNull(),
  hashedPassword: text("hashedPassword").notNull(),
});

export const sessions = sqliteTable("session", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  sessionCreatedUserId: text("sessionCreatedUserId")
    .notNull()
    .references(() => users.id),
  createdOn: text("createdOn").default(sql`(CURRENT_TIMESTAMP)`),
});

export const chats = sqliteTable("chats", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  sessionId: text("sessionId")
    .notNull()
    .references(() => sessions.id),
  userType: text("userType", { enum: ["user", "bot"] }).notNull(),
  messageString: text("string"),
  messagedOn: text("messagedOn").default(sql`(CURRENT_TIMESTAMP)`),
});
