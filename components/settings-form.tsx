"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

import { ThemeSelect } from "./settings-theme-select";

interface SettingsFormProps {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export function SettingsForm({ user }: SettingsFormProps) {
  return (
    <div className="grid grid-cols-1 gap-6 @5xl/main:grid-cols-2">

      <Card>
        <CardHeader>
          <CardTitle>Основные настройки</CardTitle>
          <CardDescription>
            Управление основной информацией профиля
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Имя пользователя</Label>
            <Input
              id="name"
              placeholder="Введите имя пользователя"
              defaultValue={user?.name || ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Введите email"
              defaultValue={user?.email || ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">О себе</Label>
            <Textarea
              id="bio"
              placeholder="Расскажите о себе"
              className="min-h-[80px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone">Часовой пояс</Label>
            <Select defaultValue="europe/moscow">
              <SelectTrigger>
                <SelectValue placeholder="Выберите часовой пояс" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="europe/moscow">Москва (GMT+3)</SelectItem>
                <SelectItem value="europe/kiev">Киев (GMT+2)</SelectItem>
                <SelectItem value="europe/minsk">Минск (GMT+3)</SelectItem>
                <SelectItem value="asia/almaty">Алматы (GMT+6)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Настройки уведомлений */}
      <Card>
        <CardHeader>
          <CardTitle>Уведомления</CardTitle>
          <CardDescription>
            Настройка уведомлений и оповещений
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Новые сообщения</Label>
              <p className="text-sm text-muted-foreground">
                Уведомления о новых сообщениях
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Упоминания</Label>
              <p className="text-sm text-muted-foreground">
                Когда вас упоминают в сообщениях
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Системные уведомления</Label>
              <p className="text-sm text-muted-foreground">
                Важные системные сообщения
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email уведомления</Label>
              <p className="text-sm text-muted-foreground">
                Получать уведомления на email
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Настройки внешнего вида */}
      <Card>
        <CardHeader>
          <CardTitle>Внешний вид</CardTitle>
          <CardDescription>
            Настройка темы и персонализации
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ThemeSelect />

          <div className="space-y-2">
            <Label>Язык</Label>
            <Select defaultValue="ru">
              <SelectTrigger>
                <SelectValue placeholder="Выберите язык" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ru">Русский</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="uk">Українська</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Компактный режим</Label>
              <p className="text-sm text-muted-foreground">
                Уменьшенные отступы и размеры
              </p>
            </div>
            <Switch />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Анимации</Label>
              <p className="text-sm text-muted-foreground">
                Показывать анимации интерфейса
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}