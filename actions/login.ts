"use server";

import * as z from "zod";
import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import { loginSchema } from "@/schemas";

export const login = async (credentials: z.infer<typeof loginSchema>) => {
  const validatedCredentials = loginSchema.safeParse(credentials);

  if (!validatedCredentials.success) {
    return {
      error: "Неверный формат данных.",
    };
  }

  const { token } = validatedCredentials.data;
  token.toUpperCase();

  try {
    await signIn("credentials", {
      token,
      redirectTo: "/main",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Неверный токен доступа." };
        default:
          return { error: "Произошла непредвиденная ошибка. Попробуйте позже." };
      }
    }
    throw error;
  }
};