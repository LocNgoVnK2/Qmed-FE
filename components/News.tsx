
import React from 'react';
import { useTranslation } from '../App';

export const News: React.FC = () => {
  const { t } = useTranslation();

  const images = [
    "https://images.unsplash.com/photo-1576091160550-2173bdd99802?auto=format&fit=crop&q=80&w=1200&h=800",
    "https://images.unsplash.com/photo-1582213782179-a0c5550f84ac?auto=format&fit=crop&q=80&w=800&h=600",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800&h=600"
  ];

  const newsItems = t.news.items;

  return (
    <section id="news" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full -ml-48 -mb-48"></div>

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
          <article className="lg:col-span-7 group relative rounded-[3rem] overflow-hidden shadow-2xl h-[600px] flex items-end">
            <div className="absolute inset-0">
              <img 
                src={images[0]} 
                alt={newsItems[0].title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent"></div>
            </div>
            
            <div className="relative p-12 text-white w-full">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-emerald text-navy text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                  {newsItems[0].tag}
                </span>
                <time className="text-white/60 text-xs font-bold uppercase tracking-widest">
                  {newsItems[0].date}
                </time>
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tighter leading-[1.1]">
                {newsItems[0].title}
              </h3>
              <p className="text-white/60 text-lg font-light mb-8 max-w-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {newsItems[0].desc}
              </p>
              <button className="flex items-center gap-3 text-emerald font-bold text-xs uppercase tracking-[0.2em]">
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
            {newsItems.slice(1).map((item: any, idx: number) => (
              <article 
                key={idx} 
                className="group bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-full md:w-40 h-40 flex-shrink-0 rounded-2xl overflow-hidden">
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
                  <button className="text-navy/40 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:text-navy transition-colors">
                    View Article
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}

            {/* Newsletter CTA placeholder card */}
            <div className="bg-navy p-8 rounded-[2.5rem] text-white flex flex-col justify-center items-center text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                 <svg className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                 </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Join Our Insight List</h4>
              <p className="text-white/50 text-xs font-light mb-6">Receive curated medical HR intelligence monthly.</p>
              <div className="flex w-full bg-white/5 border border-white/10 rounded-xl p-1">
                 <input type="text" placeholder="Email" className="bg-transparent border-none text-white text-xs p-3 w-full focus:outline-none" />
                 <button className="bg-emerald text-navy px-4 rounded-lg font-black text-[10px] uppercase tracking-widest">Join</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
