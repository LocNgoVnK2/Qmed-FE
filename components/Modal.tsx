
import React, { useState } from 'react';
import { useTranslation } from '../App';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'course' | 'ebook';
  itemName?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, type, itemName }) => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy/80 backdrop-blur-md animate-fade-in" 
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="relative bg-white w-full max-w-xl rounded-[3rem] overflow-hidden shadow-2xl animate-fade-up">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-navy/20 hover:text-navy transition-colors z-10"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-12">
          {submitted ? (
            <div className="text-center py-20 animate-fade-up">
              <div className="w-20 h-20 bg-emerald/10 text-emerald rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{t.forms.success}</h3>
            </div>
          ) : (
            <>
              <span className="text-emerald font-black tracking-[0.4em] text-xs uppercase mb-4 block">
                {type === 'course' ? t.forms.registerTitle : t.forms.downloadTitle}
              </span>
              <h2 className="text-navy text-3xl font-extrabold tracking-tighter mb-2">{title}</h2>
              {itemName && <p className="text-slate-400 font-medium mb-8 italic">{itemName}</p>}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-2">{t.forms.name}</label>
                  <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-emerald outline-none transition-all font-medium" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-2">{t.forms.email}</label>
                    <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-emerald outline-none transition-all font-medium" />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-2">{t.forms.phone}</label>
                    <input required type="tel" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-emerald outline-none transition-all font-medium" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-2">{t.forms.company}</label>
                  <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-emerald outline-none transition-all font-medium" />
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-navy text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-emerald transition-all shadow-xl shadow-navy/10 mt-8"
                >
                  {t.forms.submit}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
