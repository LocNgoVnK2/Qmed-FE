
import React, { useState } from 'react';
import { useTranslation } from '../App';
import { Modal } from './Modal';

interface EbooksProps {
  limit?: number;
}

export const Ebooks: React.FC<EbooksProps> = ({ limit }) => {
  const { t, setCurrentView } = useTranslation();
  const [selectedEbook, setSelectedEbook] = useState<string | null>(null);

  const displayItems = limit ? t.ebooks.items.slice(0, limit) : t.ebooks.items;
  const isHome = !!limit;

  return (
    <section id="ebooks" className={`py-32 relative overflow-hidden ${isHome ? 'bg-slate-900' : 'bg-white min-h-screen'}`}>
      {/* Decorative bg (Only for dark mode on home) */}
      {isHome && (
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col ${isHome ? 'lg:flex-row' : ''} items-center gap-20`}>
          <div className={isHome ? 'lg:w-1/2' : 'w-full max-w-4xl mx-auto'}>
            <div className={`${!isHome ? 'text-center mb-20' : ''}`}>
              <span className="text-emerald font-black tracking-[0.4em] text-xs uppercase mb-6 block">Resources & Insights</span>
              <h2 className={`${isHome ? 'text-white' : 'text-navy'} text-4xl md:text-7xl font-extrabold tracking-tighter mb-8 uppercase leading-none`}>
                {t.ebooks.title}
              </h2>
              <p className={`${isHome ? 'text-white/50' : 'text-slate-400'} text-xl font-light leading-relaxed mb-12`}>
                {t.ebooks.subtitle}
              </p>
            </div>

            <div className={`grid ${!isHome ? 'md:grid-cols-2' : 'grid-cols-1'} gap-6`}>
              {displayItems.map((ebook: any) => (
                <div 
                  key={ebook.id} 
                  className={`group p-8 rounded-[2.5rem] border transition-all cursor-pointer flex items-center justify-between ${
                    isHome 
                    ? 'bg-white/5 border-white/10 hover:border-emerald/40 hover:bg-white/10' 
                    : 'bg-slate-50 border-slate-100 hover:border-emerald hover:bg-white hover:shadow-xl'
                  }`}
                  onClick={() => setSelectedEbook(ebook.title)}
                >
                  <div className="flex gap-6 items-center">
                    <div className="w-14 h-14 bg-emerald/20 text-emerald rounded-2xl flex items-center justify-center group-hover:bg-emerald group-hover:text-navy transition-all">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`${isHome ? 'text-white' : 'text-navy'} font-extrabold text-lg mb-1 transition-colors`}>{ebook.title}</h3>
                      <p className={`${isHome ? 'text-white/40' : 'text-slate-400'} text-sm font-light`}>{ebook.desc}</p>
                    </div>
                  </div>
                  <svg className={`w-6 h-6 transition-all transform group-hover:translate-x-2 ${isHome ? 'text-white/20' : 'text-slate-200'} group-hover:text-emerald`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              ))}
            </div>

            {isHome && (
              <div className="mt-12">
                <button 
                  onClick={() => setCurrentView('ebooks')}
                  className="px-10 py-5 border-2 border-emerald text-emerald font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-emerald hover:text-navy transition-all"
                >
                  Khám phá toàn bộ thư viện
                </button>
              </div>
            )}
          </div>

          {isHome && (
            <div className="lg:w-1/2 relative hidden lg:block">
               <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-1000">
                  <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200" alt="Ebook Library" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-navy/40"></div>
               </div>
               <div className="absolute -top-10 -right-10 w-64 h-64 border-2 border-emerald/20 rounded-full animate-pulse"></div>
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald opacity-20 rounded-3xl -rotate-12"></div>
            </div>
          )}
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
