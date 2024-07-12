import NextAuth, { User } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./lib/db";
import Credentials from "next-auth/providers/credentials";
import { getUserFromDb } from "./actions/user.actions";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        // const pwHash = saltAndHashPassword(credentials.password);
        // user = await getUserFromDb(credentials.email, pwHash);

        user = await getUserFromDb(
          credentials.email as string,
          credentials.password as string
        );

        if (!user.success) throw new Error(user.message);

        return user.data as User;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET!,
  session: {
    strategy: "jwt",
    maxAge: 5 * 24 * 60 * 60, // 5 days
  },
});
