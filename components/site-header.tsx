"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

const pageTitles: Record<string, string> = {
  "/": "Главная",
  "/dashboard": "Панель управления",
  "/settings": "Настройки",
  "/profile": "Профиль",
  "/tickets": "Обращения",
  "/logs": "Логи администрации",
};

function getPageTitle(pathname: string) {
  // точное совпадение
  if (pageTitles[pathname]) return pageTitles[pathname];

  // beginsWith fallback (для вложенных маршрутов)
  const match = Object.keys(pageTitles).find((key) =>
    pathname.startsWith(key)
  );
  return match ? pageTitles[match] : "Страница";
}

export function SiteHeader() {
  const pathname = usePathname();
  const title = getPageTitle(pathname);

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{title}</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              href="https://discord.gg/meaw"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              Сервер
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}