"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar"

interface Translations {
  [key: string]: {
    en: string
    ar: string
  }
}

export const translations: Translations = {
  // Header
  home: { en: "Home", ar: "الرئيسية" },
  movies: { en: "Movies", ar: "أفلام" },
  series: { en: "Series", ar: "مسلسلات" },
  myList: { en: "My List", ar: "قائمتي" },
  search: { en: "Search", ar: "بحث" },
  notifications: { en: "Notifications", ar: "إشعارات" },
  profile: { en: "Profile", ar: "الملف الشخصي" },
  
  // Marquee
  newRelease: { en: "NEW RELEASE", ar: "إصدار جديد" },
  watchNow: { en: "Watch Now", ar: "شاهد الآن" },
  exclusive: { en: "EXCLUSIVE", ar: "حصري" },
  trending: { en: "TRENDING", ar: "رائج" },
  limited: { en: "LIMITED TIME", ar: "لوقت محدود" },
  
  // Hero
  heroTitle: { en: "The Last Kingdom", ar: "المملكة الأخيرة" },
  heroDescription: { 
    en: "A gripping saga of kingdoms at war, epic battles, and the fight for destiny. Follow the journey of a hero torn between two worlds.",
    ar: "ملحمة مثيرة عن ممالك في حرب، معارك أسطورية، والكفاح من أجل المصير. تابع رحلة بطل ممزق بين عالمين."
  },
  play: { en: "Play", ar: "تشغيل" },
  moreInfo: { en: "More Info", ar: "مزيد من المعلومات" },
  
  // Sections
  continueWatching: { en: "Continue Watching", ar: "متابعة المشاهدة" },
  trendingNow: { en: "Trending Now", ar: "الرائج الآن" },
  topRated: { en: "Top Rated", ar: "الأعلى تقييماً" },
  newReleases: { en: "New Releases", ar: "إصدارات جديدة" },
  action: { en: "Action & Adventure", ar: "أكشن ومغامرات" },
  
  // Language
  language: { en: "Language", ar: "اللغة" },
  english: { en: "English", ar: "الإنجليزية" },
  arabic: { en: "Arabic", ar: "العربية" },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLang = localStorage.getItem("flex-language") as Language
    if (savedLang && (savedLang === "en" || savedLang === "ar")) {
      setLanguage(savedLang)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("flex-language", language)
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  const dir = language === "ar" ? "rtl" : "ltr"

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
