"use client"

import { LanguageProvider, useLanguage } from "@/context/language-context"
import { Header } from "@/components/header"
import { MarqueeBanner } from "@/components/marquee-banner"
import { HeroSection } from "@/components/hero-section"
import { ContentRow } from "@/components/content-row"

const continueWatchingItems = [
  { id: 1, title: "Breaking Bad", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80", progress: 65 },
  { id: 2, title: "The Witcher", image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&q=80", progress: 30 },
  { id: 3, title: "Dark", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80", progress: 80 },
  { id: 4, title: "Stranger Things", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80", progress: 45 },
  { id: 5, title: "The Crown", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80", progress: 20 },
  { id: 6, title: "Peaky Blinders", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&q=80", progress: 55 },
]

const trendingItems = [
  { id: 1, title: "Dune: Part Two", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80", year: "2024", rating: 9.1 },
  { id: 2, title: "Oppenheimer", image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&q=80", year: "2023", rating: 8.9 },
  { id: 3, title: "Poor Things", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80", year: "2023", rating: 8.5 },
  { id: 4, title: "The Zone", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&q=80", year: "2024", rating: 8.7 },
  { id: 5, title: "Killers of the Flower Moon", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&q=80", year: "2023", rating: 8.8 },
  { id: 6, title: "The Holdovers", image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&q=80", year: "2023", rating: 8.4 },
]

const topRatedItems = [
  { id: 1, title: "The Shawshank Redemption", image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&q=80", year: "1994", rating: 9.3 },
  { id: 2, title: "The Godfather", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80", year: "1972", rating: 9.2 },
  { id: 3, title: "The Dark Knight", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80", year: "2008", rating: 9.0 },
  { id: 4, title: "Schindler's List", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80", year: "1993", rating: 9.0 },
  { id: 5, title: "Pulp Fiction", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&q=80", year: "1994", rating: 8.9 },
  { id: 6, title: "Fight Club", image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&q=80", year: "1999", rating: 8.8 },
]

const actionItems = [
  { id: 1, title: "John Wick 4", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80", year: "2023", rating: 8.6 },
  { id: 2, title: "Mission Impossible", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&q=80", year: "2023", rating: 8.4 },
  { id: 3, title: "Fast X", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80", year: "2023", rating: 7.5 },
  { id: 4, title: "Extraction 2", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&q=80", year: "2023", rating: 7.8 },
  { id: 5, title: "The Equalizer 3", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80", year: "2023", rating: 7.6 },
  { id: 6, title: "Rebel Moon", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80", year: "2023", rating: 7.2 },
]

function AppContent() {
  const { t, dir } = useLanguage()

  return (
    <div dir={dir} className="min-h-screen bg-background">
      <Header />
      <MarqueeBanner />
      
      <main className="pt-[40px]">
        <HeroSection />
        
        <div className="relative z-10 -mt-20 bg-gradient-to-t from-background via-background to-transparent pb-12">
          <ContentRow title={t("continueWatching")} items={continueWatchingItems} />
          <ContentRow title={t("trendingNow")} items={trendingItems} />
          <ContentRow title={t("topRated")} items={topRatedItems} />
          <ContentRow title={t("action")} items={actionItems} />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 FLEX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
