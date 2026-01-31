
import React, { useState } from 'react';
import { useTranslation } from '../App';

export const SupportPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeTag, setActiveTag] = useState(t.forms.tags[0]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <section className="bg-slate-50 min-h-screen py-32 animate-fade-up">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald font-black tracking-[0.4em] text-xs uppercase mb-6 block">Support Center</span>
            <h1 className="text-navy text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 leading-none uppercase">
              How can we <span className="text-emerald">help?</span>
            </h1>
            <p className="text-slate-400 text-lg font-light italic">
              Our support team is ready to assist you with any inquiries or technical issues.
            </p>
          </div>

          <div className="bg-white p-8 md:p-16 rounded-[3.5rem] shadow-2xl border border-slate-100">
            {success ? (
              <div className="text-center py-10 animate-fade-up">
                <div className="w-24 h-24 bg-emerald/10 text-emerald rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-extrabold text-navy mb-4">{t.forms.success}</h2>
                <button 
                   onClick={() => setSuccess(false)}
                   className="text-emerald font-bold uppercase tracking-widest border-b border-emerald"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Support Tags */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 text-center">
                    {t.forms.supportTag}
                  </label>
                  <div className="flex flex-wrap justify-center gap-3">
                    {t.forms.tags.map((tag: string) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setActiveTag(tag)}
                        className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
                          activeTag === tag 
                            ? 'bg-navy border-navy text-white shadow-lg' 
                            : 'bg-white border-slate-100 text-slate-400 hover:border-emerald'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">{t.forms.name}</label>
                    <input required type="text" className="w-full px-8 py-5 rounded-[2rem] bg-slate-50 border border-slate-100 focus:border-emerald focus:bg-white outline-none transition-all font-medium" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">{t.forms.phone}</label>
                    <input required type="tel" className="w-full px-8 py-5 rounded-[2rem] bg-slate-50 border border-slate-100 focus:border-emerald focus:bg-white outline-none transition-all font-medium" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">{t.forms.email}</label>
                  <input required type="email" className="w-full px-8 py-5 rounded-[2rem] bg-slate-50 border border-slate-100 focus:border-emerald focus:bg-white outline-none transition-all font-medium" />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">{t.forms.message}</label>
                  <textarea rows={4} className="w-full px-8 py-5 rounded-[2rem] bg-slate-50 border border-slate-100 focus:border-emerald focus:bg-white outline-none transition-all font-medium resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-6 bg-emerald text-navy font-black text-xs uppercase tracking-[0.4em] rounded-[2rem] hover:bg-navy hover:text-white transition-all shadow-xl shadow-emerald/20 hover:-translate-y-1">
                  {t.forms.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
