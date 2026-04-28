"use client"

import { useInView } from "@/hooks/use-in-view"
import { useLanguage } from "@/components/language-provider"
import { getTranslations } from "@/lib/translations"
import { cn } from "@/lib/utils"
import { 
  Activity, 
  HeartPulse, 
  Shield, 
  Video,
  Pill,
  ClipboardCheck,
  Stethoscope,
  Brain
} from "lucide-react"

export function ServicesSection() {
  const { ref, isInView } = useInView()
  const { language } = useLanguage()
  const t = getTranslations(language).services
  const services = [
    { icon: Stethoscope, ...t.items[0] },
    { icon: Shield, ...t.items[1] },
    { icon: Video, ...t.items[2] },
    { icon: ClipboardCheck, ...t.items[3] },
    { icon: Activity, ...t.items[4] },
    { icon: Brain, ...t.items[5] },
  ]

  return (
    <section
      id="servicios"
      ref={ref}
      className="py-24 lg:py-32 bg-card"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              {t.badge}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance">
              {t.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
              {t.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group bg-background rounded-2xl p-8 border border-border transition-all duration-500 hover:shadow-lg hover:border-primary/20",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/20">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
