import { eq } from "drizzle-orm";
import { db } from "../lib/db";
import { users } from "../lib/schema";

export function SignUp() {
  return (
    <form
      action={async (formData) => {
        "use server";

        const email = formData.get("email") as string;
        if (!email) return { success: false, message: "Email is required" };

        const password = formData.get("password") as string;
        if (!password)
          return { success: false, message: "Password is required" };

        const existingUser = await db.query.users.findFirst({
          where: eq(users.email, email),
        });
        await db.insert(users).values({ email, password });
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign Up</button>
    </form>
  );
}
