import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db-schemas/schema.ts",
  out: "./drizzle",
  driver: "better-sqlite", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    url: "./sqlite.db",
  },
  verbose: true,
  strict: true,
} satisfies Config;
