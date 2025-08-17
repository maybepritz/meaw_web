"use client";

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useTheme } from "next-themes";

export function ThemeSelect() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-2">
      <Label>Тема</Label>
      <Select value={theme} onValueChange={setTheme}>
        <SelectTrigger>
          <SelectValue placeholder="Выберите тему" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Светлая</SelectItem>
          <SelectItem value="dark">Тёмная</SelectItem>
          <SelectItem value="system">Системная</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
