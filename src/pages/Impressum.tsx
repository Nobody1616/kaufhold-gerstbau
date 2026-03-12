const Impressum = () => {
  return (
    <>
      <section className="py-20 bg-primary scaffold-grid-dark">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground animate-fade-up">Impressum</h1>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-sm max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Angaben gemäß § 5 TMG</h2>
              <p className="text-muted-foreground">
                Manfred Kaufhold<br />
                Gerüstbauservice<br />
                Edelhofstraße 14<br />
                51061 Köln
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Kontakt</h2>
              <p className="text-muted-foreground">
                Telefon: 0178 2881291
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Haftung für Inhalte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Haftung für Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                der Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Urheberrecht</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impressum;
