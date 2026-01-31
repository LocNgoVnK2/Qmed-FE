
import React, { useState, useEffect, createContext, useContext } from 'react';
import { translations } from './translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarketInsight } from './components/MarketInsight';
import { Solutions } from './components/Solutions';
import { WhyChooseUs } from './components/WhyChooseUs';
import { News } from './components/News';
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
  const [showBackToTop, setShowBackToTop] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]);

  // Scroll to top when opening a detail page
  useEffect(() => {
    if (activeSolution) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSolution]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, activeSolution, setActiveSolution }}>
      <div className="min-h-screen relative">
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
              <News />
              <Experts />
            </>
          )}
        </main>
        <Footer />

        {/* Back to Top Button */}
        <button 
          onClick={scrollToTop}
          className={`fixed bottom-10 right-10 z-[110] w-14 h-14 bg-emerald text-navy rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 transform ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:-translate-y-2 hover:bg-white border-2 border-emerald group`}
          aria-label="Back to Top"
        >
          <svg className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
