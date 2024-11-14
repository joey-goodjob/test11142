"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GameController, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", name: "English" },
  { code: "zh", name: "中文" },
];

export function Header() {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/zh") ? "zh" : "en";

  const navigation = [
    { name: "Home", href: `/${currentLang === "en" ? "" : currentLang}` },
    { name: "Games", href: `/${currentLang}/games` },
    { name: "Features", href: `/${currentLang}/#features` },
    { name: "FAQ", href: `/${currentLang}/#faq` },
  ];

  return (
    <header className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href={`/${currentLang === "en" ? "" : currentLang}`} className="-m-1.5 p-1.5">
            <span className="flex items-center space-x-2">
              <GameController className="h-8 w-8" />
              <span className="font-bold text-xl">Joeybert Gaming</span>
            </span>
          </Link>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-muted-foreground hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                {languages.find((l) => l.code === currentLang)?.name}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code}>
                  <Link href={lang.code === "en" ? "/" : `/${lang.code}`} className="w-full">
                    {lang.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}