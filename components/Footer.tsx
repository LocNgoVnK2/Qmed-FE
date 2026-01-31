
import React from 'react';
import { useTranslation } from '../App';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-navy pt-20 pb-10 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                 <div className="w-8 h-8 bg-navy flex items-center justify-center text-white font-bold text-lg rounded-full border border-emerald">Q</div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl tracking-tighter">Q MEDPARTNER INSIGHT</span>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-emerald uppercase">{t.contact.thanks}</h3>
            <p className="text-slate-400 text-lg italic">{t.contact.companion}</p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">{t.nav.contact}</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald transition-colors">
                  <svg className="w-5 h-5 text-emerald group-hover:text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-slate-300 font-medium">+84 9327 37 885</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald transition-colors">
                  <svg className="w-5 h-5 text-emerald group-hover:text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-slate-300 font-medium lowercase">{t.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">Menu</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-emerald transition-colors">{t.nav.goCourse}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald transition-colors">{t.nav.allCourses}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald transition-colors">{t.nav.ebook}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald transition-colors">{t.nav.support}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:row items-center justify-between gap-6 text-sm text-slate-500">
          <p>© 2024 Q MedPartner Insight. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald">Privacy Policy</a>
            <a href="#" className="hover:text-emerald">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
