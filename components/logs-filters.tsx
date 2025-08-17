"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconFilter, IconDownload, IconRefresh } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";

export function AdminLogsFilters() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <IconFilter className="size-5" />
          Фильтры
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <Label>Администратор</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Выберите админа" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все администраторы</SelectItem>
                <SelectItem value="admin1">Админ #1</SelectItem>
                <SelectItem value="admin2">Админ #2</SelectItem>
                <SelectItem value="admin3">Модератор #1</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Тип действия</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Все действия" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все действия</SelectItem>
                <SelectItem value="ban">Блокировка</SelectItem>
                <SelectItem value="kick">Кик</SelectItem>
                <SelectItem value="warn">Предупреждение</SelectItem>
                <SelectItem value="mute">Мут</SelectItem>
                <SelectItem value="delete">Удаление сообщения</SelectItem>
                <SelectItem value="settings">Настройки</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Период</Label>
            <Select defaultValue="today">
              <SelectTrigger>
                <SelectValue placeholder="Выберите период" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Сегодня</SelectItem>
                <SelectItem value="yesterday">Вчера</SelectItem>
                <SelectItem value="week">Неделя</SelectItem>
                <SelectItem value="month">Месяц</SelectItem>
                <SelectItem value="custom">Свой период</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Поиск</Label>
            <Input placeholder="Поиск по логам..." />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Найдено: 47 записей</Badge>
            <Badge variant="outline">Сегодня</Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <IconRefresh className="size-4" />
              Обновить
            </Button>
            <Button variant="outline" size="sm">
              <IconDownload className="size-4" />
              Экспорт
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}