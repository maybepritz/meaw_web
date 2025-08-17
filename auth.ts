import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import authConfig from "@/auth.config";
import { getUserByDiscordId } from "@/data/user";

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async signIn({ user}) {
      const existingUser = await getUserByDiscordId(user.id);

      if(!existingUser) {
        console.error("User not found during signIn callback:", user.id);
        return false;
      }
      return true;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (typeof token.locale === "string" && session.user) {
        session.user.locale = token.locale;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const user = await getUserByDiscordId(token.sub);

      if (!user) return token;

      if (typeof user.locale === "string") {
        token.locale = user.locale;
      }

      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  ...authConfig,
});