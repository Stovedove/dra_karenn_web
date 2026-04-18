"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const education = [
  {
    icon: GraduationCap,
    year: "2005 - 2011",
    title: "Medicina General",
    institution: "Universidad Nacional Autónoma",
    description: "Título de Médico Cirujano con honores",
  },
  {
    icon: Award,
    year: "2012 - 2016",
    title: "Especialidad en Medicina Interna",
    institution: "Hospital Central Universitario",
    description: "Residencia médica con subespecialidad en enfermedades metabólicas",
  },
  {
    icon: BookOpen,
    year: "2018 - 2020",
    title: "Maestría en Investigación Clínica",
    institution: "Instituto de Ciencias Médicas",
    description: "Enfoque en metodología de investigación y medicina basada en evidencia",
  },
]

const certifications = [
  "Certificación del Consejo de Medicina Interna",
  "Diplomado en Diabetes y Enfermedades Metabólicas",
  "Curso Avanzado de Cardiología Preventiva",
  "Certificación en Telemedicina y Salud Digital",
]

export function EducationSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="formacion"
      ref={ref}
      className="py-24 lg:py-32"
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
            Formación académica
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance">
            Preparación continua para cuidarte mejor
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8">
              Estudios
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div
                    key={item.title}
                    className={cn(
                      "relative pl-16 transition-all duration-500",
                      isInView
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    )}
                    style={{ transitionDelay: `${200 + index * 150}ms` }}
                  >
                    {/* Icon */}
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    
                    <div>
                      <span className="text-sm text-primary font-medium">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-semibold text-foreground mt-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground mt-1">
                        {item.institution}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div
            className={cn(
              "transition-all duration-700 delay-500",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h3 className="text-xl font-semibold text-foreground mb-8">
              Certificaciones y cursos
            </h3>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <span className="block text-3xl font-serif font-semibold text-primary">
                      15+
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Años de experiencia
                    </span>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <span className="block text-3xl font-serif font-semibold text-primary">
                      5000+
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Pacientes atendidos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
