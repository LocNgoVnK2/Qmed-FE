
import React from 'react';
import { useTranslation } from '../App';

export const Solutions: React.FC = () => {
  const { t, setActiveSolution } = useTranslation();

  const cards = [
    { id: 'recruitment', title: t.solutions.recruitment, desc: t.solutions.recruitmentDesc, icon: 'user-group' },
    { id: 'audit', title: t.solutions.audit, desc: t.solutions.auditDesc, icon: 'clipboard-check' },
    { id: 'payroll', title: t.solutions.payroll, desc: t.solutions.payrollDesc, icon: 'currency-dollar' },
    { id: 'training', title: t.solutions.training, desc: t.solutions.trainingDesc, icon: 'academic-cap' },
    { id: 'consulting', title: t.solutions.consulting, desc: t.solutions.consultingDesc, icon: 'cog' },
    { id: 'specialized', title: t.solutions.specialized, desc: t.solutions.specializedDesc, icon: 'star' },
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-emerald font-bold tracking-[0.3em] text-sm uppercase mb-4 block">{t.nav.allCourses}</span>
          <h2 className="text-navy text-4xl md:text-5xl font-bold mb-6">{t.solutions.title}</h2>
          <div className="w-20 h-1 bg-navy mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-3xl border border-slate-100 bg-white hover:bg-navy transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full cursor-pointer"
              onClick={() => setActiveSolution(card.id)}
            >
              <div className="mb-6 w-14 h-14 rounded-2xl bg-emerald/10 text-emerald flex items-center justify-center group-hover:bg-emerald group-hover:text-navy transition-colors">
                <Icon name={card.icon} />
              </div>
              <h3 className="text-navy group-hover:text-emerald text-xl font-bold mb-4 transition-colors">
                {card.title}
              </h3>
              <p className="text-slate-600 group-hover:text-slate-300 leading-relaxed font-light mb-8 flex-grow">
                {card.desc}
              </p>
              <button 
                className="text-emerald font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-wider"
              >
                {t.solutions.learnMore}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'user-group':
      return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 14v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case 'clipboard-check':
      return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case 'currency-dollar':
      return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 1v22m5-18H8.5a3.5 3.5 0 0 0 0 7h7a3.5 3.5 0 0 1 0 7H7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case 'academic-cap':
      return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 10v6M2 10l10 5 10-5"/></svg>;
    case 'cog':
      return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case 'star':
      return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    default:
      return null;
  }
};
