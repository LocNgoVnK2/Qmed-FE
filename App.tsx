
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
import { Courses } from './components/Courses';
import { Ebooks } from './components/Ebooks';
import { ContactPage } from './components/ContactPage';
import { SupportPage } from './components/SupportPage';
import { NewsDetail } from './components/NewsDetail';

type Language = 'vi' | 'en';
type View = 'home' | 'courses' | 'ebooks' | 'news' | 'news-detail' | 'contact' | 'support' | 'solution-detail';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: any;
  activeSolution: string | null;
  setActiveSolution: (id: string | null) => void;
  activeNews: string | null;
  setActiveNews: (id: string | null) => void;
  currentView: View;
  setCurrentView: (v: View) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within LanguageProvider");
  return context;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('vi');
  const [currentView, setCurrentView] = useState<View>('home');
  const [activeSolution, setActiveSolution] = useState<string | null>(null);
  const [activeNews, setActiveNews] = useState<string | null>(null);
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, activeSolution, activeNews]);

  const renderView = () => {
    if (activeSolution) {
      return <SolutionDetail id={activeSolution} />;
    }
    
    if (activeNews) {
      return <NewsDetail id={activeNews} />;
    }

    switch (currentView) {
      case 'courses':
        return <div className="pt-20 animate-fade-up"><Courses /></div>;
      case 'ebooks':
        return <div className="pt-20 animate-fade-up"><Ebooks /></div>;
      case 'news':
        return <div className="pt-20 animate-fade-up"><News isPage={true} /></div>;
      case 'contact':
        return <div className="pt-20 animate-fade-up"><ContactPage /></div>;
      case 'support':
        return <div className="pt-20 animate-fade-up"><SupportPage /></div>;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <MarketInsight />
            <Solutions />
            <Courses limit={3} />
            <WhyChooseUs />
            <News limit={3} />
            <Ebooks limit={3} />
            <Experts />
          </>
        );
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      lang, setLang, t, activeSolution, setActiveSolution, activeNews, setActiveNews, currentView, setCurrentView 
    }}>
      <div className="min-h-screen relative font-['Montserrat'] bg-white">
        <Header />
        <main>
          {renderView()}
        </main>
        <Footer />

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
