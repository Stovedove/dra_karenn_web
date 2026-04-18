import { Heart } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#formacion", label: "Formación" },
  { href: "#servicios", label: "Servicios" },
  { href: "#filosofia", label: "Mi filosofía" },
  { href: "#contacto", label: "Contacto" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-serif text-xl font-semibold">
              Dra. Karenn Cañón
            </span>
            <p className="mt-4 text-background/70 text-sm leading-relaxed">
              Médica General con Formación Internacional comprometida con tu salud. 
              Brindando atención médica de calidad con calidez humana.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>+34667367671</li>
              <li>dra.karennca@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} Dra. Karenn Cañón. Todos los derechos reservados.
          </p>
          <p className="text-sm text-background/50 flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> para mis pacientes
          </p>
        </div>
      </div>
    </footer>
  )
}
