"use client"

import { useInView } from "@/hooks/use-in-view"
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

const services = [
  {
    icon: Stethoscope,
    title: "Consulta médica general",
    description: "Valoración integral del paciente, orientada al diagnóstico, tratamiento y resolución de problemas de salud frecuentes, con un enfoque cercano y personalizado.",
  },
  {
    icon: Shield,
    title: "Medicina preventiva y promoción de la salud",
    description: "Evaluación de factores de riesgo y orientación en hábitos saludables para prevenir enfermedades y mejorar la calidad de vida a largo plazo.",
  },
  {
    icon: Video,
    title: "Telemedicina",
    description: "Atención médica online segura y accesible, ideal para consultas, orientación clínica y seguimiento sin necesidad de desplazamientos.",
  },
  {
    icon: ClipboardCheck,
    title: "Seguimiento y control de enfermedades",
    description: "Acompañamiento continuo en patologías agudas y crónicas, con ajuste de tratamientos y monitoreo de la evolución clínica.",
  },
  {
    icon: Activity,
    title: "Chequeo médico integral",
    description: "Evaluación completa del estado de salud mediante historia clínica, exploración física y estudios complementarios, enfocada en la detección temprana.",
  },
  {
    icon: Brain,
    title: "Evaluación inicial en salud mental",
    description: "Valoración médica de síntomas como ansiedad, estrés o alteraciones del estado de ánimo, con orientación inicial y derivación oportuna si se requiere.",
  },
]

export function ServicesSection() {
  const { ref, isInView } = useInView()

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
            Servicios
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance">
            Mi práctica clínica
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Como médico general, te ofrezco una atención médica integral, combinando mi experiencia clínica con un enfoque cercano y personalizado para cuidar tu salud.
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
