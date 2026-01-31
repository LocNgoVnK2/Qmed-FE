
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../App';
import { Modal } from './Modal';

interface CoursesProps {
  limit?: number;
}

export const Courses: React.FC<CoursesProps> = ({ limit }) => {
  const { t, setCurrentView } = useTranslation();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const images = [
    "https://images.unsplash.com/photo-1576091160550-2173bdd99802?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1454165833767-027ffea70418?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1505751172107-573256a703d2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800"
  ];

  const fallbackImage = "https://images.unsplash.com/photo-1504813184591-01592fd03cfd?auto=format&fit=crop&q=80&w=800";

  const isHome = !!limit;
  
  // Pagination logic
  const totalItems = t.courses.items;
  const totalPages = Math.ceil(totalItems.length / itemsPerPage);
  
  const displayItems = isHome 
    ? totalItems.slice(0, limit) 
    : totalItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    if (!isHome) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, isHome]);

  return (
    <section id="courses" className={`py-32 ${isHome ? 'bg-white' : 'bg-slate-50 min-h-screen'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-emerald font-black tracking-[0.4em] text-xs uppercase mb-6 block">Professional Development</span>
          <h2 className="text-navy text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 uppercase">{t.courses.title}</h2>
          <p className="text-slate-400 text-xl font-light">{t.courses.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((course: any, idx: number) => {
            const imageIndex = isHome ? idx : ((currentPage - 1) * itemsPerPage + idx);
            return (
              <div 
                key={course.id} 
                className="group flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-emerald/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="relative h-60 overflow-hidden bg-navy/5">
                  <img 
                    src={images[imageIndex % images.length] || fallbackImage} 
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
            );
          })}
        </div>

        {isHome && t.courses.items.length > limit ? (
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
        ) : !isHome && totalPages > 1 ? (
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
        ) : null}
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
