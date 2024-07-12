import { pgTable, text } from "drizzle-orm/pg-core";

export const users = pgTable("users_ex10", {
  id: text("id")
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
});
