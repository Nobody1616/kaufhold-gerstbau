import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="beam-divider" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-sm">
                <span className="text-accent-foreground font-bold text-lg">MK</span>
              </div>
              <div>
                <span className="font-bold text-sm block">Manfred Kaufhold</span>
                <span className="text-primary-foreground/70 text-xs">Gerüstbauservice</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Professioneller Gerüstbau in Köln. Sicherheit, Qualität und Zuverlässigkeit seit Jahren.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-accent">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200">Startseite</Link>
              <Link to="/leistungen" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200">Leistungen</Link>
              <Link to="/ueber-uns" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200">Über uns</Link>
              <Link to="/kontakt" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200">Kontakt</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-accent">Rechtliches</h4>
            <div className="flex flex-col gap-2">
              <Link to="/impressum" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200">Impressum</Link>
              <Link to="/datenschutz" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200">Datenschutz</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-accent">Kontakt</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:01782881291" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200">
                <Phone className="w-4 h-4 shrink-0" />
                0178 2881291
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Edelhofstraße 14<br />51061 Köln</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Manfred Kaufhold Gerüstbauservice. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
