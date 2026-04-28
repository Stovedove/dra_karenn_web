"use client"

import { useState, useEffect } from "react"
import { Globe, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useLanguage, type Language } from "@/components/language-provider"
import { getTranslations } from "@/lib/translations"
import { cn } from "@/lib/utils"

const languageOptions: Array<{ value: Language; label: string }> = [
  { value: "es", label: "ES" },
  { value: "en", label: "EN" },
  { value: "ru", label: "RU" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const t = getTranslations(language).navigation

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDarkMode = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="w-full px-4 sm:px-6 lg:px-10">
          <div className="grid h-24 grid-cols-[auto_1fr_auto] items-center gap-6">
            <a
              href="#inicio"
              className="flex min-w-[220px] flex-shrink-0 items-center gap-2 lg:min-w-[250px]"
            >
              <span className="font-serif text-lg lg:text-xl font-semibold leading-none whitespace-nowrap text-foreground">
                Dra. Karenn Cañón
              </span>
            </a>

            <div className="hidden md:flex md:items-center md:justify-center md:gap-8 lg:gap-10">
              {t.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex md:items-center md:justify-end md:gap-3">
              <div
                className="flex items-center gap-1 rounded-full border border-border/70 bg-background/80 px-2 py-1.5"
                aria-label={t.languageSelector}
                role="group"
              >
                <Globe className="h-3.5 w-3.5 text-muted-foreground" />
                {languageOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setLanguage(option.value)}
                    className={cn(
                      "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
                      language === option.value
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-label={`${t.languageSelector}: ${option.label}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#contacto">{t.bookConsultation}</a>
              </Button>
            </div>

            <button
              className="justify-self-end p-2 text-foreground md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? t.closeMenu : t.openMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300",
              isOpen ? "max-h-[40rem] pb-6" : "max-h-0"
            )}
          >
            <div className="flex flex-col gap-4 pt-4">
              <div
                className="flex w-fit items-center gap-1 rounded-full border border-border/70 bg-background/80 px-2 py-1.5"
                aria-label={t.languageSelector}
                role="group"
              >
                <Globe className="h-3.5 w-3.5 text-muted-foreground" />
                {languageOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setLanguage(option.value)}
                    className={cn(
                      "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
                      language === option.value
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-label={`${t.languageSelector}: ${option.label}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {t.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#contacto" onClick={() => setIsOpen(false)}>
                  {t.bookConsultation}
                </a>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <div className="fixed bottom-6 right-6 z-[60]">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="rounded-full border-border/70 bg-background/90 shadow-md backdrop-blur"
          onClick={toggleTheme}
          aria-label={isDarkMode ? t.activateLightMode : t.activateDarkMode}
        >
          {mounted && isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
    </>
  )
}
