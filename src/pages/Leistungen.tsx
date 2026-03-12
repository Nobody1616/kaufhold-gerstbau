import { Link } from "react-router-dom";
import { ArrowRight, Building, HardHat, Wrench, Shield, Truck, ClipboardList, Settings } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionFadeIn from "@/components/SectionFadeIn";
import CTASection from "@/components/CTASection";

export const servicesData = [
  { slug: "fassadengerueste", icon: Building, title: "Fassadengerüste", desc: "Sichere und stabile Fassadengerüste für Neubau, Sanierung und Renovierungsarbeiten.", benefits: ["Schnelle Montage", "Hohe Tragfähigkeit", "Flexible Anpassung"], projects: ["Fassadensanierung", "Wärmedämmung", "Malerarbeiten", "Verputzarbeiten"], process: "Nach einer Vor-Ort-Besichtigung erstellen wir einen detaillierten Plan und montieren das Gerüst termingerecht." },
  { slug: "baugerueste", icon: HardHat, title: "Baugerüste", desc: "Flexible Baugerüste für Hoch- und Tiefbauprojekte jeder Größenordnung.", benefits: ["Modularer Aufbau", "Für jede Gebäudehöhe", "TÜV-geprüft"], projects: ["Neubau", "Umbau", "Aufstockungen", "Dacharbeiten"], process: "Wir planen und errichten Baugerüste passgenau für Ihr Bauvorhaben." },
  { slug: "industriegerueste", icon: Wrench, title: "Industriegerüste", desc: "Spezialgerüste für industrielle Anlagen, Produktionsstätten und Großprojekte.", benefits: ["Schwerlastfähig", "Individuelle Konstruktion", "Wartungszugänge"], projects: ["Industrieanlagen", "Kraftwerke", "Brücken", "Türme"], process: "Unsere Ingenieure planen komplexe Gerüstkonstruktionen nach Ihren Spezifikationen." },
  { slug: "schutzgerueste", icon: Shield, title: "Schutzgerüste", desc: "Schutzgerüste für maximale Sicherheit auf der Baustelle.", benefits: ["Fangnetze", "Schutzdächer", "Absturzsicherung"], projects: ["Dacharbeiten", "Fassadenarbeiten", "Abrissarbeiten"], process: "Wir analysieren die Gefahrensituation und installieren passende Schutzmaßnahmen." },
  { slug: "geruestvermietung", icon: Truck, title: "Gerüstvermietung", desc: "Flexible Vermietung von Gerüstmaterial für Ihr eigenes Projekt.", benefits: ["Günstige Konditionen", "Kurz- und Langzeitmiete", "Lieferung frei Haus"], projects: ["Eigenheime", "Gewerbeobjekte", "Veranstaltungen"], process: "Wählen Sie das passende Material und wir liefern es direkt auf Ihre Baustelle." },
  { slug: "geruestplanung", icon: ClipboardList, title: "Gerüstplanung", desc: "Professionelle Gerüstplanung mit statischer Berechnung und 3D-Visualisierung.", benefits: ["Statische Berechnungen", "3D-Planung", "Behördenkonforme Dokumentation"], projects: ["Komplexe Bauvorhaben", "Sonderkonstruktionen", "Großprojekte"], process: "Unsere Planer erstellen detaillierte Aufbaupläne inklusive aller Sicherheitsberechnungen." },
  { slug: "montage-demontage", icon: Settings, title: "Montage und Demontage", desc: "Fachgerechte Montage und Demontage durch erfahrene Gerüstbauer.", benefits: ["Geschultes Personal", "Schnelle Durchführung", "Sicherheitsabnahme"], projects: ["Alle Gerüstarten", "Express-Service", "Nacht- und Wochenendarbeit"], process: "Unser erfahrenes Team montiert und demontiert Ihr Gerüst sicher und termingerecht." },
];

const Leistungen = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-primary scaffold-grid-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-up">
            Unsere Leistungen
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Umfassende Gerüstbaulösungen für jeden Bedarf – von der Planung bis zur Demontage.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background scaffold-grid">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, i) => (
              <SectionFadeIn key={service.slug}>
                <Link to={`/leistungen/${service.slug}`} className="block card-scaffold p-6 h-full group">
                  <service.icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h2 className="font-bold text-foreground mb-2 text-lg">{service.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                  <ImagePlaceholder aspectRatio="16/9" className="mb-4" />
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all duration-200">
                    Details ansehen <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Leistungen;
