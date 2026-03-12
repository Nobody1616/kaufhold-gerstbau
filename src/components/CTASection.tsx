import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionFadeIn from "./SectionFadeIn";

const CTASection = () => {
  return (
    <section className="blueprint-bg py-20 relative overflow-hidden">
      {/* Beam scan effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-beam-scan" />
      </div>
      <SectionFadeIn className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Bereit für Ihr nächstes Projekt?
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
          Kontaktieren Sie uns für ein unverbindliches Angebot. Wir beraten Sie gerne.
        </p>
        <Link
          to="/kontakt"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-sm font-semibold text-sm hover:gap-4 transition-all duration-300 hover:shadow-lg"
        >
          Angebot anfragen
          <ArrowRight className="w-4 h-4" />
        </Link>
      </SectionFadeIn>
    </section>
  );
};

export default CTASection;
