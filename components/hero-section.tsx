"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { useInView } from "@/hooks/use-in-view"
import { getTranslations } from "@/lib/translations"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const { ref, isInView } = useInView()
  const { language } = useLanguage()
  const t = getTranslations(language).hero

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(230,57,57,0.03),transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div
            className={cn(
              "text-center lg:text-left transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              {t.badge}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance">
              Dra. Karenn Cañón
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              {t.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                <a href="#contacto">{t.bookConsultation}</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-foreground/20 hover:bg-accent px-8"
              >
                <a href="#sobre-mi">{t.meetMe}</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div
            className={cn(
              "relative transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-muted">
                <img
                  src="/doctor-karenn-canon.jpg"
                  alt={t.doctorImageAlt}
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
