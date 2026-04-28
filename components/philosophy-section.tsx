"use client"

import { useInView } from "@/hooks/use-in-view"
import { useLanguage } from "@/components/language-provider"
import { getTranslations } from "@/lib/translations"
import { cn } from "@/lib/utils"
import { Clock, MessageCircle, UserCheck, Sparkles } from "lucide-react"

export function PhilosophySection() {
  const { ref, isInView } = useInView()
  const { language } = useLanguage()
  const t = getTranslations(language).philosophy
  const features = [
    { icon: Clock, ...t.features[0] },
    { icon: MessageCircle, ...t.features[1] },
    { icon: UserCheck, ...t.features[2] },
    { icon: Sparkles, ...t.features[3] },
  ]

  return (
    <section
      id="filosofia"
      ref={ref}
      className="py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={cn(
              "transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
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
          </div>

          {/* Features */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={cn(
                    "bg-card rounded-xl p-6 border border-border transition-all duration-500",
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div
          className={cn(
            "mt-20 text-center transition-all duration-700 delay-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-serif text-2xl sm:text-3xl text-foreground italic leading-relaxed">
              {t.quote}
            </p>
            <footer className="mt-6 text-muted-foreground">
              — {t.quoteAuthor}
            </footer>
          </blockquote>
          <div className="mt-10 mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-muted">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src="/whatsapp-chat-horizontal.jpg"
                alt={t.chatImageAlt}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
