
import React, { useState, useEffect, createContext, useContext } from 'react';
import { translations } from './translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarketInsight } from './components/MarketInsight';
import { Solutions } from './components/Solutions';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Experts } from './components/Experts';
import { Footer } from './components/Footer';
import { SolutionDetail } from './components/SolutionDetail';

type Language = 'vi' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: any;
  activeSolution: string | null;
  setActiveSolution: (id: string | null) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within LanguageProvider");
  return context;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('vi');
  const [activeSolution, setActiveSolution] = useState<string | null>(null);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Scroll to top when opening a detail page
  useEffect(() => {
    if (activeSolution) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSolution]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, activeSolution, setActiveSolution }}>
      <div className="min-h-screen">
        <Header />
        <main>
          {activeSolution ? (
            <SolutionDetail id={activeSolution} />
          ) : (
            <>
              <Hero />
              <MarketInsight />
              <Solutions />
              <WhyChooseUs />
              <Experts />
            </>
          )}
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
