"use client";

import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch"; // Adjust the import path as necessary

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center">
      <Switch
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <span className="ml-2">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
    </div>
  );
}