"use client"

import { useInView } from "@/hooks/use-in-view"
import { useLanguage } from "@/components/language-provider"
import { getTranslations } from "@/lib/translations"
import { cn } from "@/lib/utils"
import { Heart, Stethoscope, Users } from "lucide-react"

export function AboutSection() {
  const { ref, isInView } = useInView()
  const { language } = useLanguage()
  const t = getTranslations(language).about
  const values = [
    { icon: Heart, ...t.values[0] },
    { icon: Stethoscope, ...t.values[1] },
    { icon: Users, ...t.values[2] },
  ]

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="py-24 lg:py-32 bg-card"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={cn(
              "relative order-2 lg:order-1 transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-secondary/10 rounded-2xl -rotate-3" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="/doctor-about.jpg"
                  alt={t.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={cn(
              "order-1 lg:order-2 transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              {t.badge}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance">
              {t.title}
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                {t.paragraphs[0]}
              </p>
              <p className="leading-relaxed">
                {t.paragraphs[1]}
              </p>
              <p className="leading-relaxed">
                {t.paragraphs[2]}
              </p>
              <p className="leading-relaxed">
                {t.paragraphs[3]}
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={cn(
                    "transition-all duration-500",
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
