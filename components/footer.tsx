"use client"

import { Heart } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { getTranslations } from "@/lib/translations"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()
  const t = getTranslations(language)

  return (
    <footer className="bg-zinc-900 text-zinc-100 py-16 dark:bg-gradient-to-b dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-serif text-xl font-semibold">
              Dra. Karenn Cañón
            </span>
            <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
              {t.footer.brandDescription}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.navigationTitle}</h4>
            <ul className="space-y-3">
              {t.navigation.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>+34667367671</li>
              <li>dra.karennca@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            © {currentYear} Dra. Karenn Cañón. {t.footer.rightsReserved}
          </p>
          <p className="text-sm text-zinc-500 flex items-center gap-1">
            {t.footer.madeWith} <Heart className="w-4 h-4 text-primary fill-primary" />{" "}
            {t.footer.forPatients}
          </p>
        </div>
      </div>
    </footer>
  )
}
