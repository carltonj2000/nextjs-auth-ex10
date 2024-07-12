"use server";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";

export async function getUserFromDb(email: string, password: string) {
  try {
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!existingUser) return { success: false, message: "User not found." };
    if (existingUser.password !== password)
      return { success: false, message: "Password incorrect" };

    return { success: true, data: existingUser };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}
