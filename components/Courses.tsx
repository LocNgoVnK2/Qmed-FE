
import React, { useState } from 'react';
import { useTranslation } from '../App';
import { Modal } from './Modal';

export const Courses: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  // Reliable healthcare training images from Unsplash
  const images = [
    "https://images.unsplash.com/photo-1576091160550-2173bdd99802?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1454165833767-027ffea70418?auto=format&fit=crop&q=80&w=800"
  ];

  const fallbackImage = "https://images.unsplash.com/photo-1504813184591-01592fd03cfd?auto=format&fit=crop&q=80&w=800";

  return (
    <section id="courses" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-emerald font-black tracking-[0.4em] text-xs uppercase mb-6 block">{t.nav.allCourses}</span>
          <h2 className="text-navy text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 uppercase">{t.courses.title}</h2>
          <p className="text-slate-400 text-xl font-light">{t.courses.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.courses.items.map((course: any, idx: number) => (
            <div 
              key={course.id} 
              className="group flex flex-col h-full bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-emerald/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden bg-navy/5">
                <img 
                  src={images[idx] || fallbackImage} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-navy text-xl font-extrabold mb-4 leading-tight group-hover:text-emerald transition-colors">{course.title}</h3>
                <p className="text-slate-500 text-sm font-light mb-8 flex-grow leading-relaxed">{course.desc}</p>
                <button 
                  onClick={() => setSelectedCourse(course.title)}
                  className="w-full py-4 bg-white border border-slate-200 text-navy font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-emerald hover:text-white hover:border-emerald transition-all"
                >
                  {t.courses.register}
                </button>
              </div>
            </div>
          ))}
        </div>
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
