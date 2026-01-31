
import React from 'react';
import { useTranslation } from '../App';

export const MarketInsight: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-16">
          {/* Visual Column */}
          <div className="lg:w-1/2 relative min-h-[500px]">
            <div className="absolute top-0 left-0 w-full h-full rounded-[3rem] overflow-hidden shadow-3xl bg-navy group">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200&h=800" 
                alt="Healthcare Excellence" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1576091160550-2173bdd99802?auto=format&fit=crop&q=80&w=1200&h=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 z-20 hidden md:block">
              <div className="flex flex-col">
                <span className="text-navy text-6xl font-black leading-none">20+</span>
                <span className="text-emerald font-bold uppercase tracking-widest text-xs mt-2">Years Of Expertise</span>
                <div className="w-12 h-1 bg-emerald mt-6"></div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <span className="text-emerald font-black tracking-[0.4em] text-xs uppercase mb-6 block">Why Partner With Us</span>
            <h2 className="text-navy text-4xl md:text-6xl font-extrabold mb-10 tracking-tighter leading-[1.1]">
              {t.market.title}
            </h2>
            <p className="text-slate-500 text-xl font-light leading-relaxed mb-12">
              {t.market.intro}
            </p>
            
            <div className="space-y-8">
              {[t.market.value1, t.market.value2, t.market.value3].map((val, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-navy group-hover:bg-emerald group-hover:text-white transition-all duration-500 font-bold border border-slate-100">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-slate-800 text-lg font-semibold group-hover:text-emerald transition-colors">{val.split(':')[0]}</p>
                    <p className="text-slate-500 text-sm font-light mt-1">{val.split(':')[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
