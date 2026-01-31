
import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from '../App';

interface NewsProps {
  limit?: number;
  isPage?: boolean;
}

export const News: React.FC<NewsProps> = ({ limit, isPage = false }) => {
  const { t, setCurrentView, setActiveNews } = useTranslation();
  const [activeFilter, setActiveFilter] = useState(t.news.newsTags[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const images = [
    "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1576091160550-2173bdd99802?auto=format&fit=crop&q=80&w=800"
  ];

  const filteredItems = useMemo(() => {
    let items = t.news.items;
    if (activeFilter !== t.news.newsTags[0]) {
      items = items.filter((item: any) => item.tag === activeFilter);
    }
    return items;
  }, [t.news.items, activeFilter, t.news.newsTags]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  
  const displayItems = useMemo(() => {
    if (limit) return filteredItems.slice(0, limit);
    return filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }, [filteredItems, limit, currentPage]);

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  useEffect(() => {
    if (isPage) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, isPage]);

  if (!displayItems || displayItems.length === 0) return null;

  return (
    <section id="news" className={`py-32 relative overflow-hidden animate-fade-up ${isPage ? 'bg-white min-h-screen' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-emerald font-black tracking-[0.4em] text-xs uppercase mb-6 block">Intelligence & Updates</span>
            <h2 className="text-navy text-4xl md:text-6xl font-extrabold tracking-tighter leading-none">
              {t.news.title}
            </h2>
          </div>
          
          {!isPage && (
            <div className="animate-fade-up">
              <button 
                onClick={() => setCurrentView('news')}
                className="group flex items-center gap-4 text-navy font-bold text-sm uppercase tracking-widest border-b-2 border-emerald/20 hover:border-emerald transition-all pb-2"
              >
                Explore All Articles
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Filter Bar - only on page mode */}
        {isPage && (
          <div className="flex flex-wrap gap-4 mb-16 justify-center">
            {t.news.newsTags.map((tag: string) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all border-2 ${
                  activeFilter === tag 
                    ? 'bg-navy border-navy text-white shadow-xl scale-105' 
                    : 'bg-white border-slate-100 text-slate-400 hover:border-emerald'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {isPage ? (
          /* List Layout for Page Mode */
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {displayItems.map((item: any, idx: number) => {
                const globalIdx = (currentPage - 1) * itemsPerPage + idx;
                return (
                  <article 
                    key={item.id} 
                    onClick={() => setActiveNews(item.id)}
                    className="group bg-white rounded-[2.5rem] border border-slate-100 hover:border-emerald/30 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer flex flex-col h-full"
                  >
                    <div className="relative h-64 overflow-hidden bg-slate-100">
                      <img src={images[globalIdx % images.length]} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-6 left-6">
                        <span className="bg-emerald text-navy text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">{item.tag}</span>
                      </div>
                    </div>
                    <div className="p-10 flex flex-col flex-grow">
                      <time className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4 block">{item.date}</time>
                      <h3 className="text-navy text-2xl font-extrabold mb-4 tracking-tight group-hover:text-emerald transition-colors leading-snug">{item.title}</h3>
                      <p className="text-slate-500 text-base font-light mb-8 line-clamp-3 leading-relaxed">{item.desc}</p>
                      <div className="mt-auto flex items-center gap-2 text-navy font-black text-xs uppercase tracking-widest group-hover:text-emerald">
                        Learn More
                        <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            
            {totalPages > 1 && (
              <div className="mt-20 flex justify-center items-center gap-4">
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
            )}
          </>
        ) : (
          /* Feature/Grid Layout for Home Mode */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <article 
              className="lg:col-span-7 group relative rounded-[3rem] overflow-hidden shadow-2xl h-[600px] flex items-end bg-navy cursor-pointer"
              onClick={() => setActiveNews(displayItems[0].id)}
            >
              <div className="absolute inset-0">
                <img src={images[0]} alt={displayItems[0].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
              </div>
              <div className="relative p-12 text-white w-full z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-emerald text-navy text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">{displayItems[0].tag}</span>
                  <time className="text-white/80 text-xs font-bold uppercase tracking-widest">{displayItems[0].date}</time>
                </div>
                <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tighter leading-[1.1]">{displayItems[0].title}</h3>
                <p className="text-white/90 text-lg font-light mb-8 max-w-xl">{displayItems[0].desc}</p>
                <button className="flex items-center gap-3 text-emerald font-bold text-xs uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                  {t.news.readMore}
                  <div className="w-10 h-10 rounded-full border border-emerald/30 flex items-center justify-center group-hover:bg-emerald group-hover:text-navy transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </button>
              </div>
            </article>

            <div className="lg:col-span-5 flex flex-col gap-8">
              {displayItems.slice(1, 3).map((item: any, idx: number) => (
                <article 
                  key={item.id} 
                  onClick={() => setActiveNews(item.id)}
                  className="group bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:border-emerald/30 hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row gap-8 items-center h-full overflow-hidden cursor-pointer"
                >
                  <div className="w-full md:w-40 h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-100">
                    <img src={images[idx + 1]} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-emerald font-black text-[9px] uppercase tracking-widest">{item.tag}</span>
                      <time className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">{item.date}</time>
                    </div>
                    <h3 className="text-navy text-xl font-extrabold mb-2 tracking-tight group-hover:text-emerald transition-colors leading-snug">{item.title}</h3>
                    <p className="text-slate-600 text-sm font-light mb-4 line-clamp-2">{item.desc}</p>
                    <button className="text-navy font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:text-emerald transition-colors">
                      View Article
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
