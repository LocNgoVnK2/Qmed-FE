
import React from 'react';
import { useTranslation } from '../App';

interface NewsDetailProps {
  id: string;
}

export const NewsDetail: React.FC<NewsDetailProps> = ({ id }) => {
  const { t, setActiveNews } = useTranslation();
  const article = t.news.items.find((item: any) => item.id === id);

  if (!article) return null;

  const images: Record<string, string> = {
    n1: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1600",
    n2: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=1600",
    n3: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=1600",
    n4: "https://images.unsplash.com/photo-1576091160550-2173bdd99802?auto=format&fit=crop&q=80&w=1600"
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 animate-fade-up">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Actions */}
          <button 
            onClick={() => setActiveNews(null)}
            className="flex items-center gap-3 text-navy hover:text-emerald transition-colors font-bold mb-12 group"
          >
            <div className="w-8 h-8 rounded-full border border-navy group-hover:border-emerald flex items-center justify-center transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l-7-7m7 7h18" />
              </svg>
            </div>
            <span className="uppercase tracking-widest text-xs">{t.nav.back}</span>
          </button>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center gap-6 mb-8">
              <span className="bg-emerald/10 text-emerald text-[11px] font-black uppercase tracking-widest px-6 py-2 rounded-full border border-emerald/20">
                {article.tag}
              </span>
              <time className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                {article.date}
              </time>
            </div>
            <h1 className="text-navy text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight">
              {article.title}
            </h1>
            <p className="text-slate-500 text-2xl font-light italic border-l-4 border-emerald pl-8 leading-relaxed">
              {article.desc}
            </p>
          </div>

          {/* Feature Image */}
          <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-16 h-[500px] relative">
            <img src={images[article.id] || images.n1} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy/10"></div>
          </div>

          {/* Article Body */}
          <div className="prose prose-xl prose-navy max-w-none text-slate-700 font-light leading-relaxed">
            {article.content.split('\n').map((para: string, idx: number) => (
              para.trim() ? <p key={idx} className="mb-8">{para}</p> : <br key={idx} />
            ))}
          </div>

          {/* Share / Footer */}
          <div className="mt-20 pt-10 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Share this</span>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all">
                   <span className="font-bold text-[10px]">FB</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all">
                   <span className="font-bold text-[10px]">LN</span>
                </button>
              </div>
            </div>
            <button 
              onClick={() => setActiveNews(null)}
              className="text-emerald font-black uppercase text-[10px] tracking-widest border-b-2 border-emerald pb-1"
            >
              Back to list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
