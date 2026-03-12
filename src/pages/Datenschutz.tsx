const Datenschutz = () => {
  return (
    <>
      <section className="py-20 bg-primary scaffold-grid-dark">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground animate-fade-up">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-semibold text-foreground mb-2">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">2. Verantwortliche Stelle</h2>
              <p className="text-muted-foreground">
                Manfred Kaufhold<br />
                Gerüstbauservice<br />
                Edelhofstraße 14<br />
                51061 Köln<br />
                Telefon: 0178 2881291
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">3. Datenerfassung auf dieser Website</h2>
              <h3 className="text-lg font-semibold text-foreground mb-2">Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem 
                Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot 
                nutzerfreundlicher, effektiver und sicherer zu machen.
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-2">Kontaktformular</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">4. Ihre Rechte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck 
                Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, 
                die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung 
                zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die 
                Zukunft widerrufen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">5. Hosting</h2>
              <p className="text-muted-foreground leading-relaxed">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website 
                erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich 
                v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, 
                Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert 
                werden, handeln.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Datenschutz;
