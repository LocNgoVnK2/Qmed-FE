
import React from 'react';
import { useTranslation } from '../App';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  // Robust splitting of the title to prevent rendering issues
  const titleParts = t.hero.title.split(' ');
  const firstWord = titleParts[0];
  const restOfTitle = titleParts.slice(1).join(' ');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Healthcare" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-[zoom-slow_20s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Main Copy */}
          <div className="lg:w-3/5 animate-fade-up">
            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-[10px] font-black tracking-[0.4em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
              Specialized Medical HR
            </span>
            <h1 className="text-white text-5xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-[0.95] lg:max-w-3xl">
              {firstWord} <br/>
              <span className="text-emerald">
                {restOfTitle}
              </span>
            </h1>
            <p className="text-white/70 max-w-xl text-xl font-light leading-relaxed mb-10 border-l-2 border-emerald/30 pl-6">
              Empowering Vietnam's booming healthcare sector through strategic talent acquisition and operational excellence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#solutions" 
                className="px-10 py-5 bg-emerald text-navy font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-white transition-all shadow-2xl shadow-emerald/20 hover:-translate-y-1 inline-block"
              >
                Explore Solutions
              </a>
            </div>
          </div>

          {/* Cards Column */}
          <div className="lg:w-2/5 space-y-6">
            <div className="glass-panel p-8 rounded-[2rem] hover:border-emerald/40 transition-all duration-700 group animate-fade-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-12 h-12 bg-emerald/20 rounded-xl flex items-center justify-center group-hover:bg-emerald transition-all duration-500">
                  <svg className="w-6 h-6 text-emerald group-hover:text-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold tracking-tight uppercase">{t.hero.vision}</h3>
              </div>
              <p className="text-white/80 leading-relaxed font-light italic text-base">
                "{t.hero.visionDesc}"
              </p>
            </div>

            <div className="glass-panel p-8 rounded-[2rem] hover:border-emerald/40 transition-all duration-700 group animate-fade-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-12 h-12 bg-emerald/20 rounded-xl flex items-center justify-center group-hover:bg-emerald transition-all duration-500">
                  <svg className="w-6 h-6 text-emerald group-hover:text-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold tracking-tight uppercase">{t.hero.mission}</h3>
              </div>
              <p className="text-white/80 leading-relaxed font-light text-base">
                {t.hero.missionDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-12 right-12 hidden xl:block animate-fade-up" style={{animationDelay: '0.6s'}}>
        <div className="flex gap-12">
          <div className="text-center">
            <div className="text-white text-3xl font-black">20+</div>
            <div className="text-emerald text-[10px] font-bold tracking-widest uppercase opacity-60">Years XP</div>
          </div>
          <div className="text-center">
            <div className="text-white text-3xl font-black">100%</div>
            <div className="text-emerald text-[10px] font-bold tracking-widest uppercase opacity-60">Medical Focus</div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes zoom-slow {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}} />
    </section>
  );
};
