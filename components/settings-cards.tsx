"use client";
import {
  IconBell,
  IconShield,
  IconPalette,
  IconServer,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SettingsCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-3">

      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <IconShield className="size-5" />
            <CardTitle className="text-lg">Безопасность</CardTitle>
          </div>
          <CardDescription>
            Пароль, двухфакторная аутентификация
          </CardDescription>
          <CardAction>
            <div className="flex items-center gap-2">
              <Badge variant="outline">2FA включена</Badge>
              <Button variant="outline" size="sm">
                Настроить
              </Button>
            </div>
          </CardAction>
        </CardHeader>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <IconServer className="size-5" />
            <CardTitle className="text-lg">Сервер</CardTitle>
          </div>
          <CardDescription>Настройки сервера и модерации</CardDescription>
          <CardAction>
            <Button variant="outline" size="sm">
              Настроить
            </Button>
          </CardAction>
        </CardHeader>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <IconSettings className="size-5" />
            <CardTitle className="text-lg">Расширенные</CardTitle>
          </div>
          <CardDescription>
            Дополнительные настройки и интеграции
          </CardDescription>
          <CardAction>
            <Button variant="outline" size="sm">
              Настроить
            </Button>
          </CardAction>
        </CardHeader>
      </Card>
    </div>
  );
}
