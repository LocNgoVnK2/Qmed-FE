
import React from 'react';
import { useTranslation } from '../App';

interface SolutionDetailProps {
  id: string;
}

export const SolutionDetail: React.FC<SolutionDetailProps> = ({ id }) => {
  const { t, setActiveSolution } = useTranslation();
  const detail = t.details[id];

  if (!detail) return null;

  const images: Record<string, string> = {
    recruitment: "https://images.unsplash.com/photo-1521791136064-7986c2959443?auto=format&fit=crop&q=80&w=1600&h=900",
    audit: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600&h=900",
    payroll: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1600&h=900",
    training: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1600&h=900",
    consulting: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600&h=900",
    specialized: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600&h=900"
  };

  const fallbackImg = "https://images.unsplash.com/photo-1576091160550-2173bdd99802?auto=format&fit=crop&q=80&w=1600&h=900";

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 animate-fade-up">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <button 
          onClick={() => setActiveSolution(null)}
          className="flex items-center gap-3 text-navy hover:text-emerald transition-colors font-bold mb-12 group"
        >
          <div className="w-8 h-8 rounded-full border border-navy group-hover:border-emerald flex items-center justify-center transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l-7-7m7 7h18" />
            </svg>
          </div>
          <span className="uppercase tracking-widest text-sm">{t.nav.back}</span>
        </button>

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <span className="text-emerald font-black tracking-[0.4em] text-xs uppercase mb-4 block">Detail Solution</span>
            <h1 className="text-navy text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight">
              {detail.title}
            </h1>
          </div>

          {/* Featured Image */}
          <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-16 h-[500px] relative bg-navy/10">
            <img 
              src={images[id] || fallbackImg} 
              alt={detail.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = fallbackImg;
              }}
            />
            <div className="absolute inset-0 bg-navy/10"></div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none text-slate-600 font-light leading-relaxed">
                {detail.content.split('\n').map((line: string, i: number) => {
                   const trimmedLine = line.trim();
                   if (trimmedLine.startsWith('-')) {
                     return (
                       <li key={i} className="list-none flex gap-4 mb-4">
                         <span className="text-emerald font-bold mt-1 flex-shrink-0">•</span>
                         <span>{trimmedLine.substring(1).trim()}</span>
                       </li>
                     );
                   }
                   return trimmedLine ? <p key={i} className="mb-6">{trimmedLine}</p> : <br key={i} />;
                })}
              </div>
            </div>

            {/* Sidebar / CTA */}
            <div className="space-y-8">
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h4 className="text-navy font-bold text-xl mb-4">Request Information</h4>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">Learn how Q MedPartner can transform your healthcare organization through expert HR strategies.</p>
                <a 
                  href="#contact" 
                  onClick={() => setActiveSolution(null)}
                  className="block w-full text-center bg-navy text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-emerald transition-all shadow-xl shadow-navy/10 hover:shadow-emerald/20 hover:-translate-y-1"
                >
                  Contact Us
                </a>
              </div>

              <div className="p-10 rounded-[2.5rem] border border-emerald/20 bg-emerald/5">
                <h4 className="text-emerald font-bold text-xl mb-4">Expert Support</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Our managing partners are available for a 1:1 consultation call to discuss your specific medical personnel needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
