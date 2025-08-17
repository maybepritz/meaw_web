"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "@/schemas";
import { useEffect, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { login } from "@/actions/login";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      token: "",
    },
  });

  useEffect(() => {
    const tokenFromUrl = searchParams.get("token");
    if (tokenFromUrl) {
      const value = tokenFromUrl.toUpperCase().replace(/[^A-Z0-9]/g, "");
      const parts = value.match(/.{1,4}/g) || [];
      const formatted = parts.join("-");
      form.setValue("token", formatted);
    }
  }, [searchParams, form]);

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    startTransition(() => {
      login(values).then((data) => {
        if (data?.error) {
          toast.error(data.error);
        }
      });
    });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <a
                href="#"
                className="flex flex-col items-center gap-2 font-medium"
              >
                <div className="flex size-8 items-center justify-center rounded-md">
                  <Image
                    src="/logo.png"
                    alt="MEAW logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="sr-only">MEAW</span>
              </a>
              <h1 className="text-xl font-bold">Добро пожаловать в MEAW</h1>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="token"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ключ доступа</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="1234-5678-90AB-CDEF"
                          maxLength={19}
                          disabled={isPending}
                          {...field}
                          onChange={(e) => {
                            let value = e.target.value
                              .toUpperCase()
                              .replace(/[^A-Z0-9]/g, "");
                            const parts = value.match(/.{1,4}/g) || [];
                            const formatted = parts.join("-");
                            form.setValue("token", formatted);
                          }}
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" loading={isPending} className="w-full">
                Продолжить
              </Button>
            </div>
          </div>
        </form>
      </Form>

      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        Нажимая «Продолжить», вы соглашаетесь с нашими{" "}
        <a href="#">Условиями использования</a> и{" "}
        <a href="#">Политикой конфиденциальности</a>.
      </div>
    </div>
  );
}