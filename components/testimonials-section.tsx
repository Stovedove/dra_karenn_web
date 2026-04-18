"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carmen Rodríguez",
    role: "Paciente desde 2019",
    content: "La Dra. María Elena cambió mi forma de ver las consultas médicas. Por primera vez sentí que alguien realmente me escuchaba y se tomaba el tiempo de explicarme todo con paciencia.",
    rating: 5,
  },
  {
    name: "Roberto Martínez",
    role: "Paciente desde 2020",
    content: "Después de años luchando con mi diabetes sin buenos resultados, la doctora diseñó un plan que realmente funciona para mi estilo de vida. Los números hablan por sí solos.",
    rating: 5,
  },
  {
    name: "Ana Lucía Fernández",
    role: "Paciente desde 2021",
    content: "Lo que más valoro es su honestidad y calidez humana. Me hace sentir como una persona, no como un número más. Siempre sale de consulta más tranquila.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const { ref, isInView } = useInView()

  return (
    <section
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
            Testimonios
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance">
            Lo que dicen mis pacientes
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={cn(
                "relative bg-background rounded-2xl p-8 border border-border transition-all duration-500",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
