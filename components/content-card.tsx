"use client"

import { Play, Plus, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContentCardProps {
  title: string
  image: string
  year?: string
  rating?: number
  progress?: number
}

export function ContentCard({ title, image, year, rating, progress }: ContentCardProps) {
  return (
    <div className="group relative flex-shrink-0 w-[180px] md:w-[220px] cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-card">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Button size="sm" className="h-8 w-8 rounded-full p-0">
                <Play className="h-4 w-4 fill-current" />
              </Button>
              <Button size="sm" variant="secondary" className="h-8 w-8 rounded-full p-0">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            {rating && (
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="h-3 w-3 fill-current" />
                <span className="text-xs font-medium text-foreground">{rating}</span>
              </div>
            )}
          </div>
        </div>

        {/* Progress Bar (for continue watching) */}
        {progress !== undefined && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
            <div 
              className="h-full bg-primary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      {/* Title & Info */}
      <div className="mt-2">
        <h3 className="text-sm font-medium truncate group-hover:text-primary transition-colors">
          {title}
        </h3>
        {year && (
          <p className="text-xs text-muted-foreground">{year}</p>
        )}
      </div>
    </div>
  )
}
