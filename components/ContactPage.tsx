
import React from 'react';
import { useTranslation } from '../App';

export const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white min-h-screen py-32 animate-fade-up">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left side info */}
            <div>
              <span className="text-emerald font-black tracking-[0.4em] text-xs uppercase mb-6 block">Direct Inquiry</span>
              <h1 className="text-navy text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-none">
                BUILDING <span className="text-emerald block">PARTNERSHIPS.</span>
              </h1>
              <p className="text-slate-500 text-xl font-light leading-relaxed mb-12 max-w-lg">
                Connect with our specialized consulting team to drive growth in your healthcare organization.
              </p>

              <div className="space-y-10">
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center text-navy group-hover:bg-emerald group-hover:text-white transition-all duration-500 shadow-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-navy text-2xl font-bold">+84 9327 37 885</p>
                  </div>
                </div>

                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center text-navy group-hover:bg-emerald group-hover:text-white transition-all duration-500 shadow-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Email</p>
                    <p className="text-navy text-2xl font-bold lowercase">{t.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-2xl shadow-navy/5">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">{t.forms.name}</label>
                    <input type="text" className="w-full px-8 py-5 rounded-[2rem] bg-white border border-slate-100 focus:border-emerald focus:ring-4 focus:ring-emerald/5 outline-none transition-all font-medium" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">{t.forms.company}</label>
                    <input type="text" className="w-full px-8 py-5 rounded-[2rem] bg-white border border-slate-100 focus:border-emerald focus:ring-4 focus:ring-emerald/5 outline-none transition-all font-medium" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">{t.forms.email}</label>
                  <input type="email" className="w-full px-8 py-5 rounded-[2rem] bg-white border border-slate-100 focus:border-emerald focus:ring-4 focus:ring-emerald/5 outline-none transition-all font-medium" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">{t.forms.message}</label>
                  <textarea rows={4} className="w-full px-8 py-5 rounded-[2rem] bg-white border border-slate-100 focus:border-emerald focus:ring-4 focus:ring-emerald/5 outline-none transition-all font-medium resize-none"></textarea>
                </div>
                <button className="w-full py-6 bg-navy text-white font-black text-xs uppercase tracking-[0.4em] rounded-[2rem] hover:bg-emerald transition-all shadow-xl shadow-navy/10 hover:shadow-emerald/20 hover:-translate-y-1">
                  {t.forms.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
