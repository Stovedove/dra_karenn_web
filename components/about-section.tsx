"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Heart, Stethoscope, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Empatía",
    description: "Cada paciente es único y merece ser escuchado con atención y comprensión.",
  },
  {
    icon: Stethoscope,
    title: "Ciencia",
    description: "Decisiones basadas en evidencia científica actualizada y mejores prácticas.",
  },
  {
    icon: Users,
    title: "Cercanía",
    description: "Relación médico-paciente basada en confianza y comunicación abierta.",
  },
]

export function AboutSection() {
  const { ref, isInView } = useInView()

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
                  alt="Dra. María Elena García en su consultorio"
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
              Sobre mí
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance">
              Mi historia y vocación
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Desde pequeña supe que quería dedicar mi vida a cuidar de los demás. 
                La medicina me encontró como una forma de combinar mi pasión por la ciencia 
                con mi deseo de hacer una diferencia real en la vida de las personas.
              </p>
              <p className="leading-relaxed">
                Con más de 15 años de experiencia, he aprendido que cada paciente trae 
                consigo una historia única. Mi compromiso es escuchar, comprender y 
                acompañar en cada paso del camino hacia una mejor salud.
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
