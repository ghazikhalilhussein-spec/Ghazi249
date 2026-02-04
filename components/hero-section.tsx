"use client"

import { Play, Info, Star } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[85vh] flex items-end pb-20 pt-32">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded">
              FLEX ORIGINAL
            </span>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium text-foreground">9.2</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
            {t("heroTitle")}
          </h2>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span>2024</span>
            <span className="w-1 h-1 bg-muted-foreground rounded-full" />
            <span>5 Seasons</span>
            <span className="w-1 h-1 bg-muted-foreground rounded-full" />
            <span className="px-2 py-0.5 border border-muted-foreground rounded text-xs">TV-MA</span>
            <span className="w-1 h-1 bg-muted-foreground rounded-full" />
            <span>4K Ultra HD</span>
          </div>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
            {t("heroDescription")}
          </p>

          <div className="flex items-center gap-4">
            <Button size="lg" className="gap-2 text-base font-semibold px-8">
              <Play className="h-5 w-5 fill-current" />
              {t("play")}
            </Button>
            <Button size="lg" variant="secondary" className="gap-2 text-base font-semibold px-8">
              <Info className="h-5 w-5" />
              {t("moreInfo")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
