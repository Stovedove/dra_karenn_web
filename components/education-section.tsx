"use client"

import React from "react"
import { useInView } from "@/hooks/use-in-view"
import { useLanguage } from "@/components/language-provider"
import { getTranslations } from "@/lib/translations"
import { cn } from "@/lib/utils"
import { GraduationCap, Award, BookOpen, Globe } from "lucide-react"

export function EducationSection() {
  const { ref, isInView } = useInView()
  const { language } = useLanguage()
  const t = getTranslations(language).education
  const education = [
    { icon: GraduationCap, ...t.educationItems[0] },
    { icon: Award, ...t.educationItems[1] },
    { icon: BookOpen, ...t.educationItems[2] },
  ]
  const languageList = t.languageList.map((item) => ({ ...item, icon: Globe }))
  const certifications = t.certifications

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
              {t.badge}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance">
              {t.title}
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-2 gap-16 h-full">
          {/* Education Timeline */}
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-semibold text-foreground mb-8">
              {t.studiesTitle}
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

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-foreground mb-8">
                {t.languagesTitle}
              </h3>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
                <div className="space-y-8">
                  {languageList.map((item, index) => (
                    <div
                      key={item.language}
                      className={cn(
                        "relative pl-16 transition-all duration-500",
                        isInView
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                      )}
                      style={{ transitionDelay: `${200 + index * 150}ms` }}
                    >
                      <div className="absolute left-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mt-1">
                          {item.language}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          {item.level}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div
            className={cn(
              "transition-all duration-700 delay-500 flex flex-col h-full",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h3 className="text-xl font-semibold text-foreground mb-8">
              {t.certificationsTitle}
            </h3>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      {cert.map((line, i) => (
                        <React.Fragment key={i}>
                          <span className={i === 0 ? "font-semibold text-foreground" : i === cert.length - 1 ? "text-sm text-muted-foreground" : "text-muted-foreground"}>
                            {line}
                          </span>
                          {i < cert.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
