import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, CheckCircle, Wrench, HardHat, Building } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionFadeIn from "@/components/SectionFadeIn";
import CTASection from "@/components/CTASection";

const services = [
  { icon: Building, title: "Fassadengerüste", desc: "Sichere Fassadengerüste für Neubau und Sanierung." },
  { icon: HardHat, title: "Baugerüste", desc: "Flexible Baugerüste für jedes Bauprojekt." },
  { icon: Wrench, title: "Industriegerüste", desc: "Spezialgerüste für industrielle Anforderungen." },
];

const workflow = [
  { step: "01", title: "Beratung", desc: "Individuelle Analyse Ihrer Anforderungen vor Ort." },
  { step: "02", title: "Planung", desc: "Detaillierte Gerüstplanung nach Sicherheitsstandards." },
  { step: "03", title: "Montage", desc: "Fachgerechte Montage durch erfahrene Gerüstbauer." },
  { step: "04", title: "Abnahme", desc: "Qualitätskontrolle und Sicherheitsabnahme." },
];

const reasons = [
  { icon: Shield, title: "Sicherheit", desc: "Höchste Sicherheitsstandards bei jedem Projekt." },
  { icon: Clock, title: "Termintreue", desc: "Pünktliche Montage und Demontage garantiert." },
  { icon: CheckCircle, title: "Qualität", desc: "Geprüfte Materialien und fachgerechte Ausführung." },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center scaffold-grid overflow-hidden">
        {/* Structural corner accents */}
        <div className="absolute top-8 left-8 w-24 h-24 border-t-4 border-l-4 border-accent hidden md:block" />
        <div className="absolute bottom-8 right-8 w-24 h-24 border-b-4 border-r-4 border-accent hidden md:block" />
        
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-accent/10 border border-accent/30 rounded-sm px-3 py-1 text-xs font-mono text-accent-foreground mb-6 animate-fade-up">
                Gerüstbauservice in Köln
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Professioneller <br />
                <span className="text-accent">Gerüstbau</span> in Köln
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Sichere Gerüstlösungen für Bau, Renovierung und Industrie. 
                Zuverlässig, termingerecht und nach höchsten Sicherheitsstandards.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <Link
                  to="/leistungen"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold text-sm hover:bg-accent hover:text-accent-foreground hover:gap-4 transition-all duration-300"
                >
                  Leistungen ansehen
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-sm font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Angebot anfragen
                </Link>
              </div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="scaffold-corner p-4">
                <ImagePlaceholder aspectRatio="4/3" className="rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionFadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <ImagePlaceholder aspectRatio="3/2" />
              </div>
              <div className="structural-line pl-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Ihr Partner für Gerüstbau in Köln
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Manfred Kaufhold Gerüstbauservice steht für professionellen Gerüstbau mit höchsten 
                  Qualitäts- und Sicherheitsstandards. Wir bieten maßgeschneiderte Gerüstlösungen 
                  für private und gewerbliche Bauprojekte in Köln und Umgebung.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mit langjähriger Erfahrung und einem engagierten Team garantieren wir 
                  termingerechte Montage und fachgerechte Ausführung bei jedem Projekt.
                </p>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-muted scaffold-grid">
        <div className="container mx-auto px-4">
          <SectionFadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Unsere Leistungen</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Vom Fassadengerüst bis zur Industrielösung – wir bieten das passende Gerüst für jedes Projekt.
            </p>
          </SectionFadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <SectionFadeIn key={service.title}>
                <div className="card-scaffold p-6" style={{ animationDelay: `${i * 0.1}s` }}>
                  <service.icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                  <ImagePlaceholder aspectRatio="16/9" className="mb-4" />
                  <Link
                    to={`/leistungen/${service.title.toLowerCase().replace(/ü/g, 'ue').replace(/ä/g, 'ae')}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all duration-200"
                  >
                    Mehr erfahren <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </SectionFadeIn>
            ))}
          </div>
          <SectionFadeIn className="text-center mt-8">
            <Link
              to="/leistungen"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent hover:gap-3 transition-all duration-200"
            >
              Alle Leistungen ansehen <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionFadeIn>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionFadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Unser Ablauf</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Von der Beratung bis zur Abnahme – so arbeiten wir.
            </p>
          </SectionFadeIn>
          <div className="grid md:grid-cols-4 gap-6">
            {workflow.map((item, i) => (
              <SectionFadeIn key={item.step}>
                <div className="relative p-6 border border-border rounded-sm bg-background hover:border-accent transition-colors duration-300">
                  <span className="text-4xl font-bold text-accent/20 absolute top-4 right-4 font-mono">{item.step}</span>
                  <h3 className="font-bold text-foreground mb-2 mt-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  {i < workflow.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-5 h-5 text-accent" />
                    </div>
                  )}
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionFadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Warum Kaufhold?</h2>
          </SectionFadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <SectionFadeIn key={reason.title}>
                <div className="text-center p-8 bg-card rounded-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.desc}</p>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};

export default Index;
