
import React from 'react';
import { useTranslation } from '../App';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-navy overflow-hidden">
      {/* Visual Background Accents */}
      <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[70%] bg-emerald/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 animate-fade-up">
            <span className="inline-block py-2 px-6 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-xs font-bold tracking-[0.4em] uppercase mb-8">
              Premium HR Consulting
            </span>
            <h1 className="text-white text-5xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-[0.9]">
              {t.hero.title.split(' ')[0]} <span className="text-emerald">{t.hero.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-white/40 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Elevating Healthcare Personnel Excellence in Vietnam.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="glass-panel p-10 rounded-[2.5rem] hover:border-emerald/40 transition-all duration-700 group animate-fade-up" style={{animationDelay: '0.2s'}}>
              <div className="w-14 h-14 bg-emerald/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald group-hover:scale-110 transition-all duration-500">
                <svg className="w-7 h-7 text-emerald group-hover:text-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-emerald text-2xl font-extrabold mb-4 uppercase tracking-tighter">{t.hero.vision}</h3>
              <p className="text-white/70 leading-relaxed font-light text-lg italic">
                "{t.hero.visionDesc}"
              </p>
            </div>

            {/* Mission Card */}
            <div className="glass-panel p-10 rounded-[2.5rem] hover:border-emerald/40 transition-all duration-700 group animate-fade-up" style={{animationDelay: '0.4s'}}>
              <div className="w-14 h-14 bg-emerald/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald group-hover:scale-110 transition-all duration-500">
                <svg className="w-7 h-7 text-emerald group-hover:text-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-emerald text-2xl font-extrabold mb-4 uppercase tracking-tighter">{t.hero.mission}</h3>
              <p className="text-white/70 leading-relaxed font-light text-lg">
                {t.hero.missionDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator - Removed "Scroll" text per request */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-emerald to-transparent"></div>
      </div>
    </section>
  );
};
