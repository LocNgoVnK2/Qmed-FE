
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../App';

export const Header: React.FC = () => {
  const { lang, setLang, t, setActiveSolution, currentView, setCurrentView } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: any) => {
    setActiveSolution(null);
    setCurrentView(view);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled || currentView !== 'home'
          ? 'bg-navy shadow-2xl py-3 border-b border-white/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden transition-transform group-hover:rotate-12">
             <div className="w-7 h-7 bg-navy flex items-center justify-center text-white font-black text-sm rounded-lg border-2 border-emerald shadow-inner">Q</div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-xl leading-none tracking-tighter">Q MEDPARTNER</span>
            <span className="text-emerald text-[9px] font-bold tracking-[0.3em] uppercase">Insight</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {/* Action CTA Button */}
          <button 
            onClick={() => handleNavClick('courses')}
            className="px-6 py-2 bg-emerald text-navy font-black text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all shadow-lg mr-6"
          >
            {t.nav.goCourse}
          </button>

          {[
            { label: t.nav.allCourses, view: 'courses' },
            { label: t.nav.ebook, view: 'ebooks' },
            { label: t.nav.news, view: 'news' },
            { label: t.nav.contact, view: 'contact' },
            { label: t.nav.support, view: 'support' }
          ].map((item, idx) => (
            <button 
              key={idx} 
              onClick={() => handleNavClick(item.view)}
              className={`px-4 py-2 hover:text-emerald transition-all font-semibold text-[11px] uppercase tracking-widest relative group ${
                currentView === item.view ? 'text-emerald' : 'text-white'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-emerald transform transition-transform origin-left ${
                currentView === item.view ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </button>
          ))}
          
          <div className="h-6 w-[1px] bg-white/20 mx-4"></div>
          
          <button 
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            className="group flex items-center gap-2 text-white hover:text-emerald transition-all font-bold text-[10px] border-2 border-white/10 hover:border-emerald px-4 py-1.5 rounded-full uppercase tracking-widest bg-white/5"
          >
            <span className={lang === 'vi' ? 'text-emerald' : 'text-white'}>VN</span>
            <span className="text-white/20">|</span>
            <span className={lang === 'en' ? 'text-emerald' : 'text-white'}>EN</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="xl:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};
