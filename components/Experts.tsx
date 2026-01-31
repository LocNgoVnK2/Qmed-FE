
import React from 'react';
import { useTranslation } from '../App';

export const Experts: React.FC = () => {
  const { t } = useTranslation();

  const team = [
    { 
      data: t.experts.quynh, 
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800' 
    },
    { 
      data: t.experts.hang, 
      img: 'https://images.unsplash.com/photo-1559839734-2b71f1536780?auto=format&fit=crop&q=80&w=600&h=800' 
    },
    { 
      data: t.experts.thu, 
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600&h=800' 
    }
  ];

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #10B981 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-emerald font-black tracking-[0.4em] text-xs uppercase mb-6 block">The Minds Behind Q MedPartner</span>
            <h2 className="text-white text-4xl md:text-7xl font-extrabold tracking-tighter uppercase">{t.experts.title}</h2>
          </div>
          <div className="w-24 h-1 bg-emerald"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {team.map((person, idx) => (
            <div key={idx} className="flex flex-col h-full group">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl transition-all duration-700 group-hover:-translate-y-4 bg-navy">
                <img 
                  src={person.img} 
                  alt={person.data.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Social Overlay */}
                <div className="absolute top-8 right-8 flex flex-col gap-4 translate-x-20 group-hover:translate-x-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:bg-emerald hover:text-navy transition-all cursor-pointer">
                    <span className="font-bold text-[10px]">IN</span>
                  </div>
                  <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:bg-emerald hover:text-navy transition-all cursor-pointer">
                    <span className="font-bold text-[10px]">FB</span>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10">
                  <span className="text-emerald font-black tracking-[0.3em] text-[10px] uppercase block mb-2">{person.data.role}</span>
                  <h3 className="text-white text-3xl font-extrabold tracking-tighter uppercase leading-none">{person.data.name}</h3>
                </div>
              </div>
              
              <div className="px-4">
                <p className="text-emerald font-bold text-xs uppercase tracking-widest mb-4 inline-block border-b-2 border-emerald/20 pb-1">
                  {person.data.title}
                </p>
                <p className="text-slate-400 font-light leading-relaxed italic text-sm md:text-base">
                  "{person.data.desc}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
