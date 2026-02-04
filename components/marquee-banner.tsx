"use client"

import { useLanguage } from "@/context/language-context"
import { Flame, Star, Clock, Sparkles } from "lucide-react"

export function MarqueeBanner() {
  const { t } = useLanguage()

  const announcements = [
    { icon: Sparkles, text: t("newRelease"), highlight: "The Last Kingdom S5" },
    { icon: Flame, text: t("trending"), highlight: "Action Movies" },
    { icon: Star, text: t("exclusive"), highlight: "FLEX Originals" },
    { icon: Clock, text: t("limited"), highlight: "50% Off Premium" },
    { icon: Sparkles, text: t("newRelease"), highlight: "The Last Kingdom S5" },
    { icon: Flame, text: t("trending"), highlight: "Action Movies" },
    { icon: Star, text: t("exclusive"), highlight: "FLEX Originals" },
    { icon: Clock, text: t("limited"), highlight: "50% Off Premium" },
  ]

  return (
    <div className="fixed top-[72px] left-0 right-0 z-40 bg-primary/10 border-y border-primary/20 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-2">
        {announcements.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mx-8 text-sm font-medium"
          >
            <item.icon className="h-4 w-4 text-primary" />
            <span className="text-primary font-bold">{item.text}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-foreground">{item.highlight}</span>
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {announcements.map((item, index) => (
          <div
            key={`dup-${index}`}
            className="flex items-center gap-2 mx-8 text-sm font-medium"
          >
            <item.icon className="h-4 w-4 text-primary" />
            <span className="text-primary font-bold">{item.text}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-foreground">{item.highlight}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
