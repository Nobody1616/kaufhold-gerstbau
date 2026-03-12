import { Shield, Award, Users, Heart } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionFadeIn from "@/components/SectionFadeIn";
import CTASection from "@/components/CTASection";

const values = [
  { icon: Shield, title: "Sicherheit", desc: "Sicherheit steht bei uns an erster Stelle. Alle Gerüste werden nach den neuesten Vorschriften errichtet." },
  { icon: Award, title: "Qualität", desc: "Wir verwenden ausschließlich geprüfte Materialien und arbeiten nach höchsten Qualitätsstandards." },
  { icon: Users, title: "Zuverlässigkeit", desc: "Termintreue und zuverlässige Ausführung sind die Grundpfeiler unserer Arbeit." },
  { icon: Heart, title: "Kundennähe", desc: "Persönliche Beratung und individuelle Lösungen für jeden Kunden." },
];

const UeberUns = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-primary scaffold-grid-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-up">
            Über uns
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Erfahren Sie mehr über Manfred Kaufhold Gerüstbauservice – Ihr Partner für professionellen Gerüstbau in Köln.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionFadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="structural-line pl-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Unsere Geschichte</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Manfred Kaufhold Gerüstbauservice wurde mit der Vision gegründet, professionellen 
                  Gerüstbau in Köln und Umgebung auf höchstem Niveau anzubieten.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mit Leidenschaft für das Handwerk und einem klaren Fokus auf Sicherheit und Qualität 
                  haben wir uns als verlässlicher Partner für Bauunternehmen, Architekten und 
                  Privatpersonen etabliert.
                </p>
              </div>
              <div className="scaffold-corner p-4">
                <ImagePlaceholder aspectRatio="4/3" />
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-muted scaffold-grid">
        <div className="container mx-auto px-4">
          <SectionFadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ImagePlaceholder aspectRatio="4/3" />
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Erfahrung im Gerüstbau</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unsere langjährige Erfahrung umfasst Projekte unterschiedlichster Größenordnungen – 
                  vom Einfamilienhaus bis zum industriellen Großprojekt.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Jedes Projekt wird mit der gleichen Sorgfalt und Professionalität behandelt. 
                  Unsere Gerüstbauer sind bestens ausgebildet und regelmäßig geschult.
                </p>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionFadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Sicherheitsstandards</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sicherheit ist das Fundament unserer Arbeit. Alle Gerüste werden nach den aktuellen 
                DIN-Normen und Berufsgenossenschaftlichen Vorschriften errichtet. Regelmäßige 
                Prüfungen und Wartungen garantieren höchste Sicherheit auf Ihrer Baustelle.
              </p>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionFadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Unsere Werte</h2>
          </SectionFadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <SectionFadeIn key={value.title}>
                <div className="card-scaffold p-6 text-center h-full">
                  <value.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionFadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Unser Team</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Engagierte Fachkräfte mit Leidenschaft für professionellen Gerüstbau.
            </p>
          </SectionFadeIn>
          <SectionFadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card-scaffold p-6 text-center">
                  <ImagePlaceholder aspectRatio="1/1" className="rounded-full w-32 h-32 mx-auto mb-4" />
                  <div className="h-4 w-32 bg-muted rounded mx-auto mb-2" />
                  <div className="h-3 w-24 bg-muted rounded mx-auto" />
                </div>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default UeberUns;
