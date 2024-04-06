import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const UserTable = pgTable("test_user", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
});
