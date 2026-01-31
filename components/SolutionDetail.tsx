
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
    recruitment: "https://images.unsplash.com/photo-1521791136064-7986c2959443?auto=format&fit=crop&q=80&w=1200&h=600",
    audit: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1200&h=600",
    payroll: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200&h=600",
    training: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200&h=600",
    consulting: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200&h=600",
    specialized: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200&h=600"
  };

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

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <span className="text-emerald font-black tracking-[0.4em] text-xs uppercase mb-4 block">Detail Solution</span>
            <h1 className="text-navy text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight">
              {detail.title}
            </h1>
          </div>

          {/* Featured Image */}
          <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-16 h-[400px] relative">
            <img 
              src={images[id]} 
              alt={detail.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/20"></div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="prose prose-lg text-slate-600 font-light leading-relaxed">
                {detail.content.split('\n').map((line: string, i: number) => {
                   if (line.trim().startsWith('-')) {
                     return <li key={i} className="list-none flex gap-4 mb-4"><span className="text-emerald font-bold">•</span>{line.substring(line.indexOf('-') + 1).trim()}</li>
                   }
                   return <p key={i} className="mb-6">{line}</p>
                })}
              </div>
            </div>

            {/* Sidebar / CTA */}
            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h4 className="text-navy font-bold text-lg mb-4">Request Information</h4>
                <p className="text-slate-500 text-sm mb-6">Learn how Q MedPartner can transform your healthcare organization.</p>
                <a 
                  href="#contact" 
                  onClick={() => setActiveSolution(null)}
                  className="block w-full text-center bg-navy text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-emerald transition-colors shadow-lg shadow-navy/20"
                >
                  Contact Us
                </a>
              </div>

              <div className="p-8 rounded-3xl border border-emerald/20 bg-emerald/5">
                <h4 className="text-emerald font-bold text-lg mb-4">Support</h4>
                <p className="text-slate-600 text-sm">Our experts are available for a 1:1 consultation call to discuss your specific needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
