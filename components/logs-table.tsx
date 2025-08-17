"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  IconShield, 
  IconUserMinus, 
  IconMessageCircle,
  IconSettings,
  IconVolume3,
  IconTrash,
  IconAlertTriangle,
  IconEye
} from "@tabler/icons-react";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

// Моковые данные для примера
const mockLogsData = [
  {
    id: "1",
    timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 минут назад
    admin: {
      name: "Админ #1",
      avatar: "/avatars/admin1.jpg",
      role: "Администратор"
    },
    action: "ban",
    target: "Пользователь123",
    reason: "Спам в чате",
    duration: "24 часа",
    details: "Массовые сообщения в #general"
  },
  {
    id: "2",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 минут назад
    admin: {
      name: "Модератор #1",
      avatar: "/avatars/mod1.jpg",
      role: "Модератор"
    },
    action: "delete",
    target: "Пользователь456",
    reason: "Нарушение правил",
    details: "Удалено сообщение: 'Неподходящий контент'"
  },
  {
    id: "3",
    timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 минут назад
    admin: {
      name: "Админ #2",
      avatar: "/avatars/admin2.jpg",
      role: "Администратор"
    },
    action: "warn",
    target: "Пользователь789",
    reason: "Флуд",
    details: "Предупреждение за частые сообщения"
  },
  {
    id: "4",
    timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 час назад
    admin: {
      name: "Админ #1",
      avatar: "/avatars/admin1.jpg",
      role: "Администратор"
    },
    action: "mute",
    target: "Пользователь101",
    reason: "Нарушение правил",
    duration: "1 час",
    details: "Мут за неуважительное поведение"
  },
  {
    id: "5",
    timestamp: new Date(Date.now() - 1000 * 60 * 90), // 1.5 часа назад
    admin: {
      name: "Админ #2",
      avatar: "/avatars/admin2.jpg",
      role: "Администратор"
    },
    action: "settings",
    target: "Канал #general",
    reason: "Настройка канала",
    details: "Изменены права доступа"
  },
];

const getActionIcon = (action: string) => {
  switch (action) {
    case "ban":
      return <IconUserMinus className="size-4 text-red-500" />;
    case "kick":
      return <IconUserMinus className="size-4 text-orange-500" />;
    case "warn":
      return <IconAlertTriangle className="size-4 text-yellow-500" />;
    case "mute":
      return <IconVolume3 className="size-4 text-blue-500" />;
    case "delete":
      return <IconTrash className="size-4 text-red-500" />;
    case "settings":
      return <IconSettings className="size-4 text-gray-500" />;
    default:
      return <IconShield className="size-4 text-gray-500" />;
  }
};

const getActionBadge = (action: string) => {
  switch (action) {
    case "ban":
      return <Badge variant="destructive">Блокировка</Badge>;
    case "kick":
      return <Badge variant="destructive">Кик</Badge>;
    case "warn":
      return <Badge variant="secondary">Предупреждение</Badge>;
    case "mute":
      return <Badge variant="outline">Мут</Badge>;
    case "delete":
      return <Badge variant="destructive">Удаление</Badge>;
    case "settings":
      return <Badge variant="secondary">Настройки</Badge>;
    default:
      return <Badge variant="outline">Действие</Badge>;
  }
};

const getRoleBadge = (role: string) => {
  switch (role) {
    case "Администратор":
      return <Badge variant="secondary">Админ</Badge>;
    case "Модератор":
      return <Badge variant="secondary">Мод</Badge>;
    default:
      return <Badge variant="outline">{role}</Badge>;
  }
};

interface AdminLogsTableProps {
  data?: typeof mockLogsData;
}

export function AdminLogsTable({ data = mockLogsData }: AdminLogsTableProps) {
  return (
    <div className="px-4 lg:px-6">
      <Card>
        <CardHeader>
          <CardTitle>История действий</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Администратор</TableHead>
                <TableHead>Действие</TableHead>
                <TableHead>Цель</TableHead>
                <TableHead>Причина</TableHead>
                <TableHead>Время</TableHead>
                <TableHead>Подробности</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="size-8">
                        <AvatarImage src={log.admin.avatar} />
                        <AvatarFallback>
                          {log.admin.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium">{log.admin.name}</span>
                        {getRoleBadge(log.admin.role)}
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getActionIcon(log.action)}
                      {getActionBadge(log.action)}
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <span className="font-medium">{log.target}</span>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{log.reason}</span>
                      {log.duration && (
                        <span className="text-sm text-muted-foreground">
                          Длительность: {log.duration}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <span className="text-sm text-muted-foreground">
                      {formatDistanceToNow(log.timestamp, { 
                        addSuffix: true,
                        locale: ru
                      })}
                    </span>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground max-w-48 truncate">
                        {log.details}
                      </span>
                      <Button variant="ghost" size="sm">
                        <IconEye className="size-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}