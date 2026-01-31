
import React from 'react';
import { useTranslation } from '../App';

export const News: React.FC = () => {
  const { t } = useTranslation();

  // Use more reliable placeholder images
  const images = [
    "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
  ];

  const newsItems = t.news.items;

  return (
    <section id="news" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/50 rounded-full -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-emerald font-black tracking-[0.4em] text-xs uppercase mb-6 block animate-fade-up">Intelligence & Updates</span>
            <h2 className="text-navy text-4xl md:text-6xl font-extrabold tracking-tighter animate-fade-up leading-none">
              {t.news.title}
            </h2>
          </div>
          <div className="animate-fade-up">
            <a href="#" className="group flex items-center gap-4 text-navy font-bold text-sm uppercase tracking-widest border-b-2 border-emerald/20 hover:border-emerald transition-all pb-2">
              Explore All Articles
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Asymmetrical Creative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Large Card (Left) */}
          <article className="lg:col-span-7 group relative rounded-[3rem] overflow-hidden shadow-2xl h-[600px] flex items-end bg-navy">
            <div className="absolute inset-0">
              <img 
                src={images[0]} 
                alt={newsItems[0].title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60" 
              />
              {/* Ensure high contrast with a strong gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
            </div>
            
            <div className="relative p-12 text-white w-full z-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-emerald text-navy text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                  {newsItems[0].tag}
                </span>
                <time className="text-white/80 text-xs font-bold uppercase tracking-widest">
                  {newsItems[0].date}
                </time>
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tighter leading-[1.1] text-white">
                {newsItems[0].title}
              </h3>
              <p className="text-white/80 text-lg font-light mb-8 max-w-xl transition-all duration-500">
                {newsItems[0].desc}
              </p>
              <button className="flex items-center gap-3 text-emerald font-bold text-xs uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                {t.news.readMore}
                <div className="w-10 h-10 rounded-full border border-emerald/30 flex items-center justify-center group-hover:bg-emerald group-hover:text-navy transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </div>
          </article>

          {/* Vertical Stack (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {newsItems.slice(1, 3).map((item: any, idx: number) => (
              <article 
                key={idx} 
                className="group bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:border-emerald/30 hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row gap-8 items-center h-full overflow-hidden"
              >
                <div className="w-full md:w-40 h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-100">
                  <img 
                    src={images[idx + 1]} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-emerald font-black text-[9px] uppercase tracking-widest">{item.tag}</span>
                    <span className="text-slate-300">•</span>
                    <time className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">{item.date}</time>
                  </div>
                  <h3 className="text-navy text-xl font-extrabold mb-4 tracking-tight group-hover:text-emerald transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-light mb-4 line-clamp-2">
                    {item.desc}
                  </p>
                  <button className="text-navy font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:text-emerald transition-colors">
                    View Article
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
