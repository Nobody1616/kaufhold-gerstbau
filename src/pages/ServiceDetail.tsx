import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { servicesData } from "./Leistungen";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionFadeIn from "@/components/SectionFadeIn";
import CTASection from "@/components/CTASection";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/leistungen" replace />;

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-primary scaffold-grid-dark">
        <div className="container mx-auto px-4">
          <Link
            to="/leistungen"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent text-sm mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" /> Zurück zu Leistungen
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <service.icon className="w-12 h-12 text-accent animate-fade-up" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground animate-fade-up">
              {service.title}
            </h1>
          </div>
          <p className="text-primary-foreground/70 text-lg max-w-2xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {service.desc}
          </p>
        </div>
      </section>

      {/* Description + Image */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionFadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Beschreibung</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                <p className="text-muted-foreground leading-relaxed">
                  Wir bieten individuelle Lösungen, die genau auf Ihre Anforderungen zugeschnitten sind. 
                  Unser erfahrenes Team sorgt für eine professionelle Umsetzung von der Planung bis zur Fertigstellung.
                </p>
              </div>
              <div className="scaffold-corner p-4">
                <ImagePlaceholder aspectRatio="4/3" />
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionFadeIn>
            <h2 className="text-2xl font-bold text-foreground mb-8">Ihre Vorteile</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 p-6 bg-card rounded-sm border border-border hover:border-accent transition-colors duration-300">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionFadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Typische Projekte</h2>
                <div className="grid grid-cols-2 gap-3">
                  {service.projects.map((project) => (
                    <div key={project} className="p-4 bg-muted rounded-sm border border-border text-sm font-medium text-foreground hover:border-accent transition-colors duration-300">
                      {project}
                    </div>
                  ))}
                </div>
              </div>
              <ImagePlaceholder aspectRatio="4/3" />
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionFadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ImagePlaceholder aspectRatio="4/3" />
              <div className="structural-line pl-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Unser Ablauf</h2>
                <p className="text-muted-foreground leading-relaxed">{service.process}</p>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ServiceDetail;
