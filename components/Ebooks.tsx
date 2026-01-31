
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../App';
import { Modal } from './Modal';

interface EbooksProps {
  limit?: number;
}

export const Ebooks: React.FC<EbooksProps> = ({ limit }) => {
  const { t, setCurrentView } = useTranslation();
  const [selectedEbook, setSelectedEbook] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const isHome = !!limit;
  const totalItems = t.ebooks.items;
  const totalPages = Math.ceil(totalItems.length / itemsPerPage);

  const displayItems = isHome 
    ? totalItems.slice(0, limit) 
    : totalItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    if (!isHome) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, isHome]);

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
          <div className={isHome ? 'lg:w-1/2' : 'w-full max-w-6xl mx-auto'}>
            <div className={`${!isHome ? 'text-center mb-20' : ''}`}>
              <span className="text-emerald font-black tracking-[0.4em] text-xs uppercase mb-6 block">Resources & Insights</span>
              <h2 className={`${isHome ? 'text-white' : 'text-navy'} text-4xl md:text-7xl font-extrabold tracking-tighter mb-8 uppercase leading-none`}>
                {t.ebooks.title}
              </h2>
              <p className={`${isHome ? 'text-white/50' : 'text-slate-400'} text-xl font-light leading-relaxed mb-12`}>
                {t.ebooks.subtitle}
              </p>
            </div>

            <div className={`grid ${!isHome ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
              {displayItems.map((ebook: any) => (
                <div 
                  key={ebook.id} 
                  className={`group p-8 rounded-[2.5rem] border transition-all cursor-pointer flex flex-col justify-between ${
                    isHome 
                    ? 'bg-white/5 border-white/10 hover:border-emerald/40 hover:bg-white/10 flex-row items-center' 
                    : 'bg-slate-50 border-slate-100 hover:border-emerald hover:bg-white hover:shadow-xl'
                  }`}
                  onClick={() => setSelectedEbook(ebook.title)}
                >
                  <div className={`flex gap-6 items-center ${!isHome ? 'flex-col text-center mb-6' : ''}`}>
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
                  {isHome ? (
                    <svg className={`w-6 h-6 transition-all transform group-hover:translate-x-2 ${isHome ? 'text-white/20' : 'text-slate-200'} group-hover:text-emerald`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  ) : (
                    <div className="text-emerald text-xs font-black uppercase tracking-widest border-t border-slate-100 pt-4 mt-auto">
                      {t.ebooks.download}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {isHome ? (
              <div className="mt-12">
                <button 
                  onClick={() => setCurrentView('ebooks')}
                  className="px-10 py-5 border-2 border-emerald text-emerald font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-emerald hover:text-navy transition-all"
                >
                  Khám phá toàn bộ thư viện
                </button>
              </div>
            ) : totalPages > 1 ? (
              <div className="mt-16 flex justify-center items-center gap-4">
                <button 
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  className={`p-4 rounded-full border transition-all ${currentPage === 1 ? 'text-slate-200 border-slate-100 cursor-not-allowed' : 'text-navy border-slate-200 hover:border-emerald hover:text-emerald'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-12 h-12 rounded-full font-black text-xs transition-all ${currentPage === page ? 'bg-navy text-white shadow-xl' : 'bg-white text-navy border border-slate-100 hover:border-emerald'}`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button 
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  className={`p-4 rounded-full border transition-all ${currentPage === totalPages ? 'text-slate-200 border-slate-100 cursor-not-allowed' : 'text-navy border-slate-200 hover:border-emerald hover:text-emerald'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            ) : null}
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
