
import React from 'react';
import { useTranslation } from '../App';

export const WhyChooseUs: React.FC = () => {
  const { t } = useTranslation();

  const points = [
    {
      title: t.whyChooseUs.point1,
      desc: t.whyChooseUs.point1Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: t.whyChooseUs.point2,
      desc: t.whyChooseUs.point2Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: t.whyChooseUs.point3,
      desc: t.whyChooseUs.point3Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: t.whyChooseUs.point4,
      desc: t.whyChooseUs.point4Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald opacity-[0.02] -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-emerald font-black tracking-[0.4em] text-xs uppercase mb-6 block animate-fade-up">Differentiators</span>
          <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 animate-fade-up">
            {t.whyChooseUs.title}
          </h2>
          <p className="text-white/50 text-xl font-light max-w-2xl mx-auto animate-fade-up">
            {t.whyChooseUs.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, idx) => (
            <div 
              key={idx} 
              className="glass-panel p-10 rounded-[2.5rem] border-white/5 hover:border-emerald/40 transition-all duration-700 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald/10 text-emerald flex items-center justify-center mb-8 group-hover:bg-emerald group-hover:text-navy transition-all duration-500">
                {point.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-4 group-hover:text-emerald transition-colors">
                {point.title}
              </h3>
              <p className="text-white/40 font-light leading-relaxed text-sm">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
