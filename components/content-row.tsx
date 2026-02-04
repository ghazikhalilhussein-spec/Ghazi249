"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import { ContentCard } from "./content-card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

interface ContentItem {
  id: number
  title: string
  image: string
  year?: string
  rating?: number
  progress?: number
}

interface ContentRowProps {
  title: string
  items: ContentItem[]
}

export function ContentRow({ title, items }: ContentRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { dir } = useLanguage()

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      const currentScroll = scrollRef.current.scrollLeft
      const newScroll = direction === "left" 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount
      
      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>

        {/* Scrollable Row */}
        <div className="group relative">
          {/* Left Arrow */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full rounded-none bg-gradient-to-r from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll(dir === "rtl" ? "right" : "left")}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          {/* Content */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {items.map((item) => (
              <ContentCard
                key={item.id}
                title={item.title}
                image={item.image}
                year={item.year}
                rating={item.rating}
                progress={item.progress}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full rounded-none bg-gradient-to-l from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll(dir === "rtl" ? "left" : "right")}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </section>
  )
}
