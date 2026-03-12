import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-up">
      <div className="container mx-auto max-w-3xl bg-card border border-border rounded-lg shadow-2xl p-6">
        <p className="text-sm text-foreground mb-4">
          Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
          Weitere Informationen finden Sie in unserer{" "}
          <Link to="/datenschutz" className="text-accent underline hover:no-underline">
            Datenschutzerklärung
          </Link>.
        </p>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-sm text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
          >
            Akzeptieren
          </button>
          <button
            onClick={decline}
            className="bg-muted text-muted-foreground px-6 py-2 rounded-sm text-sm font-medium hover:bg-secondary transition-colors duration-300"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
