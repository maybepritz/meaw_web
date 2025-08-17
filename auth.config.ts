import { NextAuthConfig } from "next-auth";
import { ZodError } from "zod";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "@/schemas";
import { getUserByToken } from "./data/user";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const validatedCredentials = loginSchema.safeParse(credentials);
          
          if (validatedCredentials.success) {
            const { token } = validatedCredentials.data;
            const user = await getUserByToken(token);
            
            if (!user) {
              return null;
            }
            
            return user;
          }
          
          return null;
        } catch (error) {
          if (error instanceof ZodError) {
            return null;
          }
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;