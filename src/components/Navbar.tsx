import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "Startseite" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/kontakt", label: "Kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm group-hover:bg-accent transition-colors duration-300">
            <span className="text-primary-foreground font-bold text-lg group-hover:text-accent-foreground transition-colors duration-300">MK</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-foreground text-sm leading-tight block">Manfred Kaufhold</span>
            <span className="text-muted-foreground text-xs">Gerüstbauservice</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-accent ${
                location.pathname === link.to ? "text-accent" : "text-foreground"
              } after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-3/4 ${
                location.pathname === link.to ? "after:w-3/4" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Phone CTA desktop */}
        <a
          href="tel:01782881291"
          className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-sm text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
        >
          <Phone className="w-4 h-4" />
          0178 2881291
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors duration-200"
          aria-label="Menü"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-card border-b border-border ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-sm text-sm font-medium transition-all duration-200 hover:bg-muted hover:pl-6 ${
                location.pathname === link.to
                  ? "bg-muted text-accent border-l-3 border-accent"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:01782881291"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-sm text-sm font-medium mt-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            0178 2881291
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
