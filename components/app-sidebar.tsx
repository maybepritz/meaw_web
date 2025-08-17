"use client";

import * as React from "react";
import {
  IconDashboard,
  IconDatabase,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSettings,
} from "@tabler/icons-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import type { User } from "next-auth";

const DEFAULT_USER = {
  name: "Неизвестный пользователь",
  email: "",
  avatar: "/avatars/shadcn.jpg",
} as const;

const data = {
  navMain: [
    {
      title: "Главная",
      url: "/main",
      icon: IconDashboard,
    },
    {
      title: "Логи",
      url: "/logs",
      icon: IconListDetails,
    },
  ],
  navSecondary: [
    {
      title: "Настройки",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Помощь",
      url: "/help",
      icon: IconHelp,
    },
  ],
  documents: [
    {
      name: "База данных",
      url: "/database",
      icon: IconDatabase,
    },
    {
      name: "Тикеты",
      url: "/tickets",
      icon: IconReport,
    },
  ],
};

export function AppSidebar({
  user,
  ...props
}: {
  user?: User;
} & React.ComponentProps<typeof Sidebar>) {
  const sidebarUser = React.useMemo(() => ({
    name: user?.name ?? DEFAULT_USER.name,
    email: user?.email ?? DEFAULT_USER.email,
    avatar: user?.image ?? DEFAULT_USER.avatar,
  }), [user]);

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/main">
                <Image
                  src="/logo.png"
                  alt="MEAW Logo"
                  width={32}
                  height={32}
                  priority
                />
                <span className="text-base font-semibold">MEAW</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarUser} />
      </SidebarFooter>
    </Sidebar>
  );
}