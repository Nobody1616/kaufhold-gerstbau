import { useState, FormEvent } from "react";
import { Phone, MapPin, Mail, Send } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionFadeIn from "@/components/SectionFadeIn";
import { toast } from "sonner";

const Kontakt = () => {
  const [form, setForm] = useState({ name: "", telefon: "", email: "", nachricht: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Nachricht gesendet! Wir melden uns in Kürze.");
      setForm({ name: "", telefon: "", email: "", nachricht: "" });
    }, 1000);
  };

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-primary scaffold-grid-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-up">
            Kontakt
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Nehmen Sie Kontakt mit uns auf – wir beraten Sie gerne.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <SectionFadeIn>
              <h2 className="text-2xl font-bold text-foreground mb-6">Nachricht senden</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-200"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Telefon</label>
                  <input
                    type="tel"
                    value={form.telefon}
                    onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-200"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">E-Mail *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-200"
                    placeholder="Ihre E-Mail-Adresse"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Nachricht *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.nachricht}
                    onChange={(e) => setForm({ ...form, nachricht: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                    placeholder="Ihre Nachricht"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-sm font-semibold text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {sending ? "Wird gesendet..." : "Nachricht senden"}
                </button>
              </form>
            </SectionFadeIn>

            {/* Contact Info */}
            <SectionFadeIn>
              <h2 className="text-2xl font-bold text-foreground mb-6">Kontaktdaten</h2>
              <div className="space-y-6 mb-8">
                <a href="tel:01782881291" className="flex items-center gap-4 p-4 bg-muted rounded-sm border border-border hover:border-accent transition-colors duration-300">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Telefon</span>
                    <span className="font-medium text-foreground">0178 2881291</span>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-muted rounded-sm border border-border">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Adresse</span>
                    <span className="font-medium text-foreground">Edelhofstraße 14, 51061 Köln</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <h3 className="font-bold text-foreground mb-3">Standort</h3>
              <ImagePlaceholder aspectRatio="16/9" className="rounded-sm" />
            </SectionFadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontakt;
