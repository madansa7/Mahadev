
import React, { useState, useMemo } from 'react';
import { SHIVA_FORMS, GLOSSARY, NAMES_108 } from './data';
import { ShivaForm, FormClassification } from './types';

// --- Sub-components ---

const Header: React.FC = () => (
  <header className="relative py-20 px-6 text-center border-b border-stone-800 bg-stone-950 overflow-hidden">
    <div className="absolute inset-0 opacity-20 pointer-events-none">
       <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900 via-transparent to-transparent"></div>
    </div>
    <div className="relative z-10">
      <h1 className="text-6xl md:text-8xl font-bold tracking-[0.2em] text-amber-500 mb-6 font-cinzel uppercase">Mahadeva</h1>
      <p className="text-xl md:text-2xl text-stone-400 max-w-3xl mx-auto italic font-lora">
        An Interactive Scholarly Compendium of the Great God
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <span className="px-4 py-2 bg-amber-950/40 text-amber-200 border border-amber-900/50 rounded-full text-[10px] uppercase tracking-widest backdrop-blur-sm">Scripture-Anchored</span>
        <span className="px-4 py-2 bg-amber-950/40 text-amber-200 border border-amber-900/50 rounded-full text-[10px] uppercase tracking-widest backdrop-blur-sm">{SHIVA_FORMS.length} Primary Forms</span>
        <span className="px-4 py-2 bg-amber-950/40 text-amber-200 border border-amber-900/50 rounded-full text-[10px] uppercase tracking-widest backdrop-blur-sm">Ontological Glossary</span>
      </div>
    </div>
  </header>
);

const FormCard: React.FC<{ 
  form: ShivaForm; 
  onOpen: (f: ShivaForm) => void;
}> = ({ form, onOpen }) => (
  <div 
    className="group relative bg-stone-900/40 border border-stone-800 rounded-2xl cursor-pointer transition-all hover:border-amber-700/50 hover:bg-stone-800/60 overflow-hidden flex flex-col shadow-xl"
    onClick={() => onOpen(form)}
  >
    <div className="relative h-72 bg-stone-950 overflow-hidden">
      <img 
        src={form.imageUrl} 
        alt={form.nameIAST} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-6 left-6 flex gap-2">
        <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] bg-black/70 px-3 py-1 rounded-md backdrop-blur-sm border border-white/5">{form.classification}</span>
      </div>
    </div>

    <div className="p-8 flex-1 flex flex-col">
      <div className="mb-4">
        <h3 className="text-3xl font-bold text-stone-100 font-devanagari mb-1">{form.nameDevanagari}</h3>
        <p className="text-amber-200/60 italic text-sm font-lora">{form.nameIAST}</p>
      </div>
      <p className="text-stone-400 line-clamp-3 text-base mb-8 leading-relaxed flex-1 font-lora">
        {form.summary}
      </p>
      <div className="flex justify-between items-center pt-6 border-t border-stone-800/50">
        <span className="text-[10px] text-stone-600 uppercase tracking-widest">{form.era.split(' ')[0]}</span>
        <button className="text-amber-500 text-xs font-bold uppercase tracking-widest group-hover:text-amber-400 flex items-center gap-2">
          Deep Dive <i className="fa-solid fa-arrow-right-long transition-transform group-hover:translate-x-1"></i>
        </button>
      </div>
    </div>
  </div>
);

const Modal: React.FC<{ form: ShivaForm; onClose: () => void }> = ({ form, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl overflow-y-auto" onClick={onClose}>
    <div 
      className="bg-stone-900 border border-stone-700 w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-300" 
      onClick={e => e.stopPropagation()}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-stone-400 hover:text-white z-10 text-2xl bg-black/60 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:rotate-90 border border-white/10"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <div className="md:flex h-full max-h-[90vh] overflow-y-auto">
        <div className="md:w-5/12 bg-stone-950 border-r border-stone-800/50">
          <div className="aspect-[4/5] bg-stone-900 relative">
            <img src={form.imageUrl} alt={form.nameIAST} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h2 className="text-5xl font-bold text-stone-100 font-devanagari mb-2">{form.nameDevanagari}</h2>
              <p className="text-amber-200/80 italic text-2xl font-lora">{form.nameIAST}</p>
            </div>
          </div>
          
          <div className="p-10 space-y-8">
             <section className="border-l-2 border-amber-900/50 pl-6">
               <h4 className="text-stone-500 font-bold uppercase text-[10px] tracking-[0.3em] mb-3">Etymology</h4>
               <p className="text-stone-300 text-base leading-relaxed">{form.meaning}</p>
             </section>
             <section className="border-l-2 border-amber-900/50 pl-6">
               <h4 className="text-stone-500 font-bold uppercase text-[10px] tracking-[0.3em] mb-3">Historical Era</h4>
               <p className="text-stone-300 text-base">{form.era}</p>
             </section>
             <section className="border-l-2 border-amber-900/50 pl-6">
               <h4 className="text-stone-500 font-bold uppercase text-[10px] tracking-[0.3em] mb-3">Scriptural Anchor</h4>
               <p className="text-stone-400 text-base italic leading-relaxed">{form.scriptureRef}</p>
             </section>
          </div>
        </div>

        <div className="md:w-7/12 p-10 md:p-16 space-y-12 bg-stone-900/30">
          <section>
            <h3 className="text-3xl font-bold text-amber-500 mb-8 font-cinzel flex items-center gap-6">
              Narrative & Historical Summary
              <div className="h-px flex-1 bg-amber-900/30"></div>
            </h3>
            <p className="text-stone-300 leading-relaxed text-xl font-light">{form.summary}</p>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <section className="bg-black/20 p-8 rounded-2xl border border-stone-800 shadow-inner">
              <h4 className="text-amber-400 font-bold uppercase text-xs tracking-widest mb-6 flex items-center">
                <i className="fa-solid fa-om mr-4 text-amber-600"></i> Philosophy
              </h4>
              <p className="text-stone-400 text-sm leading-relaxed">{form.symbolism}</p>
            </section>
            <section className="bg-black/20 p-8 rounded-2xl border border-stone-800 shadow-inner">
              <h4 className="text-amber-400 font-bold uppercase text-xs tracking-widest mb-6 flex items-center">
                <i className="fa-solid fa-eye mr-4 text-amber-600"></i> Iconography
              </h4>
              <ul className="text-stone-400 text-sm space-y-3">
                <li className="flex gap-2"><span className="text-stone-600 font-bold whitespace-nowrap">Weapons:</span> {form.iconography.weapons.join(', ')}</li>
                <li className="flex gap-2"><span className="text-stone-600 font-bold whitespace-nowrap">Posture:</span> {form.iconography.posture}</li>
                <li className="flex gap-2"><span className="text-stone-600 font-bold whitespace-nowrap">Attributes:</span> {form.iconography.attributes.join(', ')}</li>
                {form.iconography.vahanas.length > 0 && <li className="flex gap-2"><span className="text-stone-600 font-bold whitespace-nowrap">Vahana:</span> {form.iconography.vahanas.join(', ')}</li>}
              </ul>
            </section>
          </div>

          <section>
             <h4 className="text-amber-400 font-bold uppercase text-xs tracking-widest mb-6 flex items-center gap-4">
                <i className="fa-solid fa-location-dot text-amber-600"></i> Sacred Geography
              </h4>
              <div className="flex flex-wrap gap-3">
                {form.temples.map(t => (
                  <span key={t} className="px-5 py-2 bg-amber-950/20 text-amber-400 border border-amber-900/30 rounded-xl text-xs backdrop-blur-sm transition-all hover:bg-amber-900/30">
                    {t}
                  </span>
                ))}
              </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);

const MasterNames: React.FC = () => (
  <section className="py-32 px-6 bg-stone-950">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-amber-500 mb-6 font-cinzel">The Master List</h2>
        <p className="text-stone-500 italic">Select names from the Shivasahasranama (1000 Names) with primary philosophical meanings.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {NAMES_108.map((item, idx) => (
          <div key={idx} className="p-6 bg-stone-900/30 border border-stone-800/50 rounded-2xl transition-all hover:bg-stone-800/50 hover:border-amber-900/30 group">
            <h4 className="text-amber-500 text-lg font-bold mb-2 font-lora group-hover:text-amber-300">{item.name}</h4>
            <p className="text-stone-600 text-[10px] uppercase tracking-wider">{item.meaning}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  const [selectedForm, setSelectedForm] = useState<ShivaForm | null>(null);
  const [filter, setFilter] = useState<FormClassification | 'All'>('All');

  const filteredForms = useMemo(() => {
    if (filter === 'All') return SHIVA_FORMS;
    return SHIVA_FORMS.filter(f => f.classification === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-24">
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-10 text-center md:text-left">
            <div>
              <h2 className="text-5xl font-bold text-amber-500 mb-4 font-cinzel uppercase">The Pantheon of Forms</h2>
              <p className="text-stone-500 text-lg">Curated dataset of historical and scriptural manifestations.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {['All', ...Object.values(FormClassification)].map(c => (
                <button
                  key={c}
                  onClick={() => setFilter(c as any)}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] transition-all border ${filter === c ? 'bg-amber-700 border-amber-600 text-white shadow-lg' : 'bg-stone-900/50 border-stone-800 text-stone-500 hover:text-stone-300 hover:border-stone-600'}`}
                >
                  {c.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredForms.map(f => (
              <FormCard 
                key={f.id} 
                form={f} 
                onOpen={setSelectedForm} 
              />
            ))}
          </div>
        </section>

        <MasterNames />
        
        <section className="py-32 bg-amber-950/5 rounded-[3rem] border border-stone-800/50 px-8 md:px-20 mb-32">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold text-amber-500 mb-6 font-cinzel uppercase">Ontological Glossary</h2>
            <p className="text-stone-500 text-lg">Essential concepts of non-dualist and dualist Shaivite systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {GLOSSARY.map((item, idx) => (
              <div key={idx} className="group p-10 rounded-3xl bg-stone-900/40 border border-stone-800 transition-all hover:bg-stone-900/60 hover:-translate-y-2">
                <h4 className="text-amber-500 font-bold text-3xl mb-6 font-cinzel uppercase">{item.term}</h4>
                <p className="text-stone-300 text-lg mb-8 leading-relaxed font-light">{item.definition}</p>
                <div className="text-xs text-stone-500 border-t border-stone-800 pt-8 italic">
                  <span className="text-amber-800 font-bold uppercase tracking-widest block mb-2 not-italic">Core Significance</span>
                  {item.significance}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-stone-950 border-t border-stone-900 py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <i className="fa-solid fa-om text-amber-900 text-6xl mb-10 opacity-30"></i>
          <p className="text-stone-400 italic mb-10 text-xl font-lora leading-relaxed">
            "Him the gods and the seers of old knew, and being filled with His spirit, they became immortal."
          </p>
          <div className="h-px bg-stone-900 w-32 mx-auto mb-10"></div>
          <p className="text-stone-700 text-xs uppercase tracking-[0.5em] font-cinzel">
            The Mahadeva Compendium &copy; {new Date().getFullYear()} — Dedicated to Academic Study
          </p>
        </div>
      </footer>

      {selectedForm && (
        <Modal 
          form={selectedForm} 
          onClose={() => setSelectedForm(null)} 
        />
      )}
    </div>
  );
};

export default App;
