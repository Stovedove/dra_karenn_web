"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Instagram,
  Linkedin,
  MessageCircle
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+52 55 1234 5678",
    href: "tel:+525512345678",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+52 55 1234 5678",
    href: "https://wa.me/525512345678",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "contacto@dramariaelena.com",
    href: "mailto:contacto@dramariaelena.com",
  },
  {
    icon: MapPin,
    label: "Consultorio",
    value: "Av. Insurgentes Sur 1234, Col. Del Valle, CDMX",
    href: "https://maps.google.com",
  },
]

const schedule = [
  { day: "Lunes - Viernes", hours: "9:00 - 18:00" },
  { day: "Sábados", hours: "9:00 - 14:00" },
  { day: "Domingos", hours: "Cerrado" },
]

export function ContactSection() {
  const { ref, isInView } = useInView()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section
      id="contacto"
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
            Contacto
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance">
            Agenda tu consulta
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Estoy aquí para ayudarte. Contáctame para agendar una cita o resolver tus dudas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <div className="bg-card rounded-2xl p-8 border border-border">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-muted-foreground">
                    Me pondré en contacto contigo pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Tu teléfono"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reason">Motivo de consulta</Label>
                    <Input
                      id="reason"
                      placeholder="Ej: Consulta general, seguimiento, etc."
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje (opcional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntame más sobre tu situación..."
                      rows={4}
                      className="bg-background resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={cn(
              "transition-all duration-700 delay-300",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Información de contacto
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="font-medium text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Schedule */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Horario de atención
                </h3>
                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="space-y-3">
                    {schedule.map((item) => (
                      <div
                        key={item.day}
                        className="flex justify-between items-center"
                      >
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className="font-medium text-foreground">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Sígueme
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/20 hover:bg-primary/5 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-muted-foreground" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/20 hover:bg-primary/5 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
