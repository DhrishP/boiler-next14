"use server";
import { db } from "@/lib/database";

export default async function SubmitUser(): Promise<{ success: boolean }> {
  const res = await db
    .insertInto("User")
    .values({
      email: "dummy2@gmail.com",
      name: "dummy2",
    })
    .executeTakeFirst();

  const res2 = await db.selectFrom("User").selectAll().execute();
  console.log(res2);
  if (res) {
    return { success: true };
  }
  return { success: false };
}
