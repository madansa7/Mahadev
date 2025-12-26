
import React, { useState, useMemo } from 'react';
import { SHIVA_FORMS, GLOSSARY, NAMES_108, JYOTIRLINGAS } from './data';
import { ShivaForm, FormClassification } from './types';

// --- Sub-components ---

const Header: React.FC = () => (
  <header className="relative py-24 px-6 text-center border-b border-stone-800 bg-stone-950 overflow-hidden">
    <div className="absolute inset-0 opacity-20 pointer-events-none">
       <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900 via-transparent to-transparent"></div>
    </div>
    <div className="relative z-10">
      <h1 className="text-6xl md:text-9xl font-bold tracking-[0.2em] text-amber-500 mb-8 font-cinzel uppercase drop-shadow-2xl">Mahadeva</h1>
      <p className="text-xl md:text-3xl text-stone-300 max-w-4xl mx-auto italic font-lora mb-12 leading-relaxed">
        An Interactive Scholarly Compendium of the Great God
      </p>
      
      <div className="max-w-4xl mx-auto mb-12 p-8 border border-amber-900/30 bg-stone-900/40 rounded-3xl backdrop-blur-md shadow-2xl">
        <p className="text-stone-300 text-lg leading-relaxed font-lora">
          Lord Shiva is a prominent deity in Hinduism and is considered one of the principal gods in the Hindu trinity, alongside Brahma (the creator) and Vishnu (the preserver). Shiva is often referred to as “The Destroyer” in the trinity, but this destruction is seen as a necessary part of the cycle of creation, preservation, and dissolution.
        </p>
        <div className="mt-8 text-2xl font-cinzel text-amber-500 tracking-[0.3em] font-bold">
          || Har Har Mahadev ||
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <span className="px-5 py-2 bg-amber-950/40 text-amber-200 border border-amber-900/50 rounded-full text-[10px] uppercase tracking-widest backdrop-blur-sm shadow-sm">Scripture-Anchored</span>
        <span className="px-5 py-2 bg-amber-950/40 text-amber-200 border border-amber-900/50 rounded-full text-[10px] uppercase tracking-widest backdrop-blur-sm shadow-sm">{SHIVA_FORMS.length} Primary Forms</span>
        <span className="px-5 py-2 bg-amber-950/40 text-amber-200 border border-amber-900/50 rounded-full text-[10px] uppercase tracking-widest backdrop-blur-sm shadow-sm">Ontological Glossary</span>
      </div>
    </div>
  </header>
);

const FormCard: React.FC<{ 
  form: ShivaForm; 
  onOpen: (f: ShivaForm) => void;
}> = ({ form, onOpen }) => (
  <div 
    className="group relative bg-stone-900/40 border border-stone-800 rounded-3xl cursor-pointer transition-all hover:border-amber-700/50 hover:bg-stone-800/60 overflow-hidden flex flex-col shadow-xl"
    onClick={() => onOpen(form)}
  >
    <div className="relative h-80 bg-stone-950 overflow-hidden">
      <img 
        src={form.imageUrl} 
        alt={form.nameIAST} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-6 left-6 flex gap-2">
        <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] bg-black/70 px-4 py-2 rounded-xl backdrop-blur-md border border-white/5">{form.classification}</span>
      </div>
    </div>

    <div className="p-8 flex-1 flex flex-col">
      <div className="mb-6">
        <h3 className="text-4xl font-bold text-stone-100 font-devanagari mb-2 tracking-tight">{form.nameDevanagari}</h3>
        <p className="text-amber-200/60 italic text-base font-lora">{form.nameIAST}</p>
      </div>
      <p className="text-stone-400 line-clamp-3 text-lg mb-10 leading-relaxed flex-1 font-lora">
        {form.summary}
      </p>
      <div className="flex justify-between items-center pt-8 border-t border-stone-800/50">
        <span className="text-[10px] text-stone-600 uppercase tracking-widest font-bold">{form.era.split(' ')[0]} Era</span>
        <button className="text-amber-500 text-xs font-bold uppercase tracking-widest group-hover:text-amber-400 flex items-center gap-3">
          Explore Detail <i className="fa-solid fa-arrow-right-long transition-transform group-hover:translate-x-2"></i>
        </button>
      </div>
    </div>
  </div>
);

const Modal: React.FC<{ form: ShivaForm; onClose: () => void }> = ({ form, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl overflow-y-auto" onClick={onClose}>
    <div 
      className="bg-stone-900 border border-stone-700 w-full max-w-7xl rounded-[2.5rem] overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-500" 
      onClick={e => e.stopPropagation()}
    >
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-stone-400 hover:text-white z-20 text-3xl bg-black/60 w-14 h-14 rounded-full flex items-center justify-center transition-all hover:rotate-90 border border-white/10"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <div className="md:flex h-full max-h-[95vh] overflow-y-auto">
        <div className="md:w-5/12 bg-stone-950 border-r border-stone-800/50">
          <div className="aspect-[3/4] bg-stone-900 relative">
            <img src={form.imageUrl} alt={form.nameIAST} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <h2 className="text-6xl font-bold text-stone-100 font-devanagari mb-4">{form.nameDevanagari}</h2>
              <p className="text-amber-400 italic text-3xl font-lora">{form.nameIAST}</p>
            </div>
          </div>
          
          <div className="p-12 space-y-10">
             <section className="border-l-4 border-amber-900/50 pl-8 transition-all hover:border-amber-600">
               <h4 className="text-stone-500 font-bold uppercase text-[10px] tracking-[0.4em] mb-4">Etymology</h4>
               <p className="text-stone-200 text-lg leading-relaxed">{form.meaning}</p>
             </section>
             <section className="border-l-4 border-amber-900/50 pl-8 transition-all hover:border-amber-600">
               <h4 className="text-stone-500 font-bold uppercase text-[10px] tracking-[0.4em] mb-4">Historical Era</h4>
               <p className="text-stone-200 text-lg">{form.era}</p>
             </section>
             <section className="border-l-4 border-amber-900/50 pl-8 transition-all hover:border-amber-600">
               <h4 className="text-stone-500 font-bold uppercase text-[10px] tracking-[0.4em] mb-4">Scriptural Anchor</h4>
               <p className="text-stone-400 text-lg italic leading-relaxed">{form.scriptureRef}</p>
             </section>
          </div>
        </div>

        <div className="md:w-7/12 p-12 md:p-20 space-y-16 bg-stone-900/40">
          <section>
            <h3 className="text-4xl font-bold text-amber-500 mb-10 font-cinzel flex items-center gap-8">
              Analysis & Narrative
              <div className="h-px flex-1 bg-amber-900/30"></div>
            </h3>
            <p className="text-stone-300 leading-relaxed text-2xl font-light font-lora">{form.summary}</p>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <section className="bg-black/40 p-10 rounded-[2rem] border border-stone-800 shadow-xl transition-all hover:border-amber-900/50">
              <h4 className="text-amber-400 font-bold uppercase text-sm tracking-widest mb-8 flex items-center">
                <i className="fa-solid fa-om mr-5 text-amber-600 text-xl"></i> Philosophy
              </h4>
              <p className="text-stone-300 text-base leading-relaxed font-lora">{form.symbolism}</p>
            </section>
            <section className="bg-black/40 p-10 rounded-[2rem] border border-stone-800 shadow-xl transition-all hover:border-amber-900/50">
              <h4 className="text-amber-400 font-bold uppercase text-sm tracking-widest mb-8 flex items-center">
                <i className="fa-solid fa-eye mr-5 text-amber-600 text-xl"></i> Attributes
              </h4>
              <ul className="text-stone-300 text-base space-y-4 font-lora">
                <li className="flex gap-3"><span className="text-stone-500 font-bold uppercase text-[10px] tracking-widest mt-1">Weapons:</span> {form.iconography.weapons.join(', ')}</li>
                <li className="flex gap-3"><span className="text-stone-500 font-bold uppercase text-[10px] tracking-widest mt-1">Posture:</span> {form.iconography.posture}</li>
                <li className="flex gap-3"><span className="text-stone-500 font-bold uppercase text-[10px] tracking-widest mt-1">Symbols:</span> {form.iconography.attributes.join(', ')}</li>
                {form.iconography.vahanas.length > 0 && <li className="flex gap-3"><span className="text-stone-500 font-bold uppercase text-[10px] tracking-widest mt-1">Vahana:</span> {form.iconography.vahanas.join(', ')}</li>}
              </ul>
            </section>
          </div>

          <section>
             <h4 className="text-amber-400 font-bold uppercase text-xs tracking-[0.3em] mb-10 flex items-center gap-6">
                <i className="fa-solid fa-location-dot text-amber-600 text-lg"></i> Major Sacred Centers
              </h4>
              <div className="flex flex-wrap gap-4">
                {form.temples.map(t => (
                  <span key={t} className="px-6 py-3 bg-amber-950/20 text-amber-400 border border-amber-900/40 rounded-2xl text-sm font-bold backdrop-blur-sm transition-all hover:bg-amber-900/40 hover:scale-105 cursor-default">
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
  <section className="py-32 px-6 bg-stone-950 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent"></div>
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl font-bold text-amber-500 mb-8 font-cinzel">The Eternal Names</h2>
        <p className="text-stone-500 italic max-w-2xl mx-auto text-lg">Selection from the Shivasahasranama (1000 Names) denoting supreme ontological qualities.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {NAMES_108.map((item, idx) => (
          <div key={idx} className="p-8 bg-stone-900/20 border border-stone-800/40 rounded-[2rem] transition-all hover:bg-stone-900/60 hover:border-amber-900/50 hover:-translate-y-2 group shadow-sm">
            <h4 className="text-amber-500 text-xl font-bold mb-3 font-lora group-hover:text-amber-300">{item.name}</h4>
            <p className="text-stone-500 text-[10px] uppercase tracking-[0.2em] leading-tight font-bold">{item.meaning}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const JyotirlingaSection: React.FC = () => (
  <section className="py-40 px-6 bg-stone-950 relative">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-6xl font-bold text-amber-500 mb-8 font-cinzel uppercase tracking-wider">The Twelve Jyotirlingas</h2>
        <p className="text-stone-500 text-xl font-lora max-w-3xl mx-auto">The radiant pillars of light, manifesting as the supreme devotional destinations of Shaivism across the Indian subcontinent.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {JYOTIRLINGAS.map((linga, idx) => (
          <div key={idx} className="p-10 bg-stone-900/30 border border-stone-800 rounded-3xl transition-all hover:border-amber-700/50 hover:bg-stone-900/50 group">
            <div className="text-amber-900/20 text-7xl font-cinzel absolute -mt-4 opacity-0 group-hover:opacity-100 transition-opacity">{(idx + 1).toString().padStart(2, '0')}</div>
            <h4 className="text-amber-500 text-2xl font-bold mb-4 font-cinzel relative z-10">{linga.name}</h4>
            <div className="text-stone-600 font-bold text-[10px] uppercase tracking-widest mb-6 flex items-center gap-2">
              <i className="fa-solid fa-location-crosshairs text-amber-800"></i> {linga.location}
            </div>
            <p className="text-stone-400 text-sm leading-relaxed font-lora">{linga.description}</p>
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
    <div className="min-h-screen bg-stone-950 text-stone-200 selection:bg-amber-900 selection:text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-32">
        <section className="mb-48">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 gap-12 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-6xl font-bold text-amber-500 mb-6 font-cinzel uppercase tracking-wide">The Pantheon of Forms</h2>
              <p className="text-stone-500 text-xl font-lora">A curated dataset of historical, symbolic, and scriptural manifestations from Vedic to Medieval periods.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {['All', ...Object.values(FormClassification)].map(c => (
                <button
                  key={c}
                  onClick={() => setFilter(c as any)}
                  className={`px-8 py-3 rounded-2xl text-[10px] font-bold tracking-[0.3em] transition-all border shadow-lg ${filter === c ? 'bg-amber-700 border-amber-600 text-white translate-y-[-2px]' : 'bg-stone-900/60 border-stone-800 text-stone-500 hover:text-stone-300 hover:border-amber-900/50'}`}
                >
                  {c.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {filteredForms.map(f => (
              <FormCard 
                key={f.id} 
                form={f} 
                onOpen={setSelectedForm} 
              />
            ))}
          </div>
        </section>

        <JyotirlingaSection />

        <MasterNames />
        
        <section className="py-40 bg-stone-900/20 rounded-[4rem] border border-stone-800/50 px-8 md:px-24 mb-48 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-900/5 rounded-full blur-[100px] -mr-48 -mb-48"></div>
          <div className="text-center mb-32 relative z-10">
            <h2 className="text-6xl font-bold text-amber-500 mb-8 font-cinzel uppercase tracking-widest">Ontological Glossary</h2>
            <p className="text-stone-500 text-xl max-w-3xl mx-auto font-lora">Essential philosophical concepts of non-dualist (Advaita) and dualist Shaivite metaphysical systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 relative z-10">
            {GLOSSARY.map((item, idx) => (
              <div key={idx} className="group p-12 rounded-[2.5rem] bg-stone-900/40 border border-stone-800 transition-all hover:bg-stone-900/80 hover:border-amber-900/50 hover:-translate-y-4 shadow-2xl">
                <h4 className="text-amber-500 font-bold text-4xl mb-8 font-cinzel uppercase tracking-tighter">{item.term}</h4>
                <p className="text-stone-300 text-xl mb-10 leading-relaxed font-light font-lora italic">{item.definition}</p>
                <div className="text-sm text-stone-500 border-t border-stone-800 pt-10 font-lora">
                  <span className="text-amber-800 font-bold uppercase tracking-[0.2em] block mb-4 not-italic text-[10px]">Metaphysical Import</span>
                  {item.significance}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-stone-950 border-t border-stone-900 py-48 px-6 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-amber-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto">
          <i className="fa-solid fa-om text-amber-900/40 text-8xl mb-16 animate-pulse"></i>
          <p className="text-stone-400 italic mb-12 text-2xl font-lora leading-relaxed max-w-2xl mx-auto">
            "Him the gods and the seers of old knew, and being filled with His spirit, they became immortal."
          </p>
          <div className="h-px bg-stone-900 w-48 mx-auto mb-16"></div>
          <p className="text-stone-600 text-[10px] uppercase tracking-[0.6em] font-cinzel mb-4">
            The Mahadeva Compendium &copy; {new Date().getFullYear()}
          </p>
          <p className="text-stone-800 text-[8px] uppercase tracking-[0.4em] font-lora">
            Dedicated to the Academic and Philosophical Study of Universal Consciousness
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
