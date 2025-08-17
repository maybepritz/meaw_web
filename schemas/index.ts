import * as z from "zod";

export const loginSchema = z.object({
  token: z
    .string()
    .min(1, "Токен обязателен")
    .max(19, "Токен не должен превышать 19 символов")
    .regex(
      /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/,
      "Неверный формат токена."
    ),
});
