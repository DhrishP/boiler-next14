// src/utils/database.ts
import { Kysely } from "kysely";
import { NeonDialect } from "kysely-neon";

// to be modified according to your folder/file structure
import { DB } from "../app/db/types";

export const db = new Kysely<DB>({
  dialect: new NeonDialect({
    connectionString: process.env.DATABASE_URL,
  }),
});
