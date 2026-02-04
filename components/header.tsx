"use client"

import { useState } from "react"
import { Search, Bell, User, Menu, X, Globe, ChevronDown } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { key: "home", href: "#" },
    { key: "movies", href: "#" },
    { key: "series", href: "#" },
    { key: "myList", href: "#" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/95 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-black tracking-tight text-primary">
              FLEX
            </h1>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Globe className="h-5 w-5" />
                  <span className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-primary text-primary-foreground rounded px-1">
                    {language.toUpperCase()}
                  </span>
                  <span className="sr-only">{t("language")}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem 
                  onClick={() => setLanguage("en")}
                  className={language === "en" ? "bg-primary/10 text-primary" : ""}
                >
                  <span className="mr-2">EN</span>
                  {t("english")}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage("ar")}
                  className={language === "ar" ? "bg-primary/10 text-primary" : ""}
                >
                  <span className="mr-2">AR</span>
                  {t("arabic")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">{t("search")}</span>
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
              <span className="sr-only">{t("notifications")}</span>
            </Button>
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">{t("profile")}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
