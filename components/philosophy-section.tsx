"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Clock, MessageCircle, UserCheck, Sparkles } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Tiempo dedicado",
    description: "Cada consulta dura entre 45-60 minutos. Sin prisas, sin interrupciones.",
  },
  {
    icon: MessageCircle,
    title: "Escucha activa",
    description: "Empezamos conversando sobre cómo te sientes, tus preocupaciones y objetivos de salud.",
  },
  {
    icon: UserCheck,
    title: "Decisiones compartidas",
    description: "Juntos definimos el mejor plan de acción. Tu opinión siempre cuenta.",
  },
  {
    icon: Sparkles,
    title: "Explicaciones claras",
    description: "Te explico todo en términos sencillos. Sin jerga médica innecesaria.",
  },
]

export function PhilosophySection() {
  const { ref, isInView } = useInView()

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
              Mi filosofía
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance">
              Una hora contigo
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Soy fiel creyente de una medicina basada en la comunicación y en el valor de la escucha.
              </p>
              <p className="leading-relaxed">
                Entiendo que cada persona tiene una historia única, que merece ser comprendida con una mirada que vaya más allá de los síntomas. Por eso, mi enfoque profesional se centra en crear espacios donde puedas expresarte con tranquilidad y sentirte realmente acompañado.
              </p>
              <p className="leading-relaxed">
                Quiero comprender lo que vives, lo que sientes y lo que necesitas. No eres una enfermedad.
              </p>
              <p className="leading-relaxed">
                Para mí, esto es darle sentido a la medicina.
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
              {'"El secreto del cuidado del paciente está en interesarse verdaderamente por él."'}
            </p>
            <footer className="mt-6 text-muted-foreground">
              — Francis Weld Peabody
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
