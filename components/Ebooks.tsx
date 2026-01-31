
import React, { useState } from 'react';
import { useTranslation } from '../App';
import { Modal } from './Modal';

export const Ebooks: React.FC = () => {
  const { t } = useTranslation();
  const [selectedEbook, setSelectedEbook] = useState<string | null>(null);

  return (
    <section id="ebooks" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <span className="text-emerald font-black tracking-[0.4em] text-xs uppercase mb-6 block">{t.nav.ebook}</span>
            <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 uppercase leading-none">{t.ebooks.title}</h2>
            <p className="text-white/50 text-xl font-light leading-relaxed mb-12">
              {t.ebooks.subtitle}
            </p>
            <div className="grid gap-6">
              {t.ebooks.items.map((ebook: any) => (
                <div 
                  key={ebook.id} 
                  className="group bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-emerald/40 hover:bg-white/10 transition-all cursor-pointer flex items-center justify-between"
                  onClick={() => setSelectedEbook(ebook.title)}
                >
                  <div className="flex gap-6 items-center">
                    <div className="w-12 h-12 bg-emerald/20 text-emerald rounded-xl flex items-center justify-center group-hover:bg-emerald group-hover:text-navy transition-all">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1 group-hover:text-emerald transition-colors">{ebook.title}</h3>
                      <p className="text-white/40 text-sm font-light">{ebook.desc}</p>
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-white/20 group-hover:text-emerald transition-all transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-3 transform group hover:rotate-0 transition-transform duration-700">
                <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200" alt="Ebook Library" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy/40"></div>
             </div>
             {/* Abstract elements */}
             <div className="absolute -top-10 -right-10 w-64 h-64 border-2 border-emerald/20 rounded-full animate-pulse"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald opacity-20 rounded-3xl -rotate-12"></div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={!!selectedEbook} 
        onClose={() => setSelectedEbook(null)} 
        title={t.forms.downloadTitle} 
        type="ebook" 
        itemName={selectedEbook || undefined}
      />
    </section>
  );
};
