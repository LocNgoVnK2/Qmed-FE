
import React, { useState } from 'react';
import { useTranslation } from '../App';
import { Modal } from './Modal';

interface CoursesProps {
  limit?: number;
}

export const Courses: React.FC<CoursesProps> = ({ limit }) => {
  const { t, setCurrentView } = useTranslation();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const images = [
    "https://images.unsplash.com/photo-1576091160550-2173bdd99802?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1454165833767-027ffea70418?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1505751172107-573256a703d2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800"
  ];

  const fallbackImage = "https://images.unsplash.com/photo-1504813184591-01592fd03cfd?auto=format&fit=crop&q=80&w=800";

  const displayItems = limit ? t.courses.items.slice(0, limit) : t.courses.items;
  const isHome = !!limit;

  return (
    <section id="courses" className={`py-32 ${isHome ? 'bg-white' : 'bg-slate-50 min-h-screen'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-emerald font-black tracking-[0.4em] text-xs uppercase mb-6 block">Professional Development</span>
          <h2 className="text-navy text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 uppercase">{t.courses.title}</h2>
          <p className="text-slate-400 text-xl font-light">{t.courses.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((course: any, idx: number) => (
            <div 
              key={course.id} 
              className="group flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-emerald/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-60 overflow-hidden bg-navy/5">
                <img 
                  src={images[idx % images.length] || fallbackImage} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-navy text-2xl font-extrabold mb-4 leading-tight group-hover:text-emerald transition-colors">{course.title}</h3>
                <p className="text-slate-500 text-base font-light mb-8 flex-grow leading-relaxed">{course.desc}</p>
                <button 
                  onClick={() => setSelectedCourse(course.title)}
                  className="w-full py-5 bg-slate-50 text-navy font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-emerald hover:text-white transition-all border border-slate-100"
                >
                  {t.courses.register}
                </button>
              </div>
            </div>
          ))}
        </div>

        {isHome && t.courses.items.length > limit && (
          <div className="mt-20 text-center">
            <button 
              onClick={() => setCurrentView('courses')}
              className="group inline-flex items-center gap-4 text-navy font-bold text-sm uppercase tracking-[0.3em] border-b-2 border-emerald pb-2 hover:text-emerald transition-all"
            >
              Xem tất cả khóa học
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <Modal 
        isOpen={!!selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
        title={t.forms.registerTitle} 
        type="course" 
        itemName={selectedCourse || undefined}
      />
    </section>
  );
};
