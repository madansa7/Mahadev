
import React, { useState, useMemo, useEffect } from 'react';
import { SHIVA_FORMS, GLOSSARY, NAMES_108, TIMELINE_DATA } from './data';
import { ShivaForm, FormClassification } from './types';
import { askScholar, generateFormVisual } from './geminiService';

// --- Sub-components ---

const Header: React.FC = () => (
  <header className="relative py-12 px-6 text-center border-b border-stone-800 bg-stone-950 overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
       <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900 via-transparent to-transparent"></div>
    </div>
    <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-amber-500 mb-4 cinzel">MAHADEVA</h1>
    <p className="text-xl md:text-2xl text-stone-400 max-w-3xl mx-auto italic">
      An Interactive Scholarly Compendium of the Great God
    </p>
    <div className="mt-8 flex justify-center space-x-4">
      <span className="px-3 py-1 bg-amber-900/30 text-amber-200 border border-amber-900/50 rounded-full text-xs uppercase tracking-widest">Scripture-Anchored</span>
      <span className="px-3 py-1 bg-amber-900/30 text-amber-200 border border-amber-900/50 rounded-full text-xs uppercase tracking-widest">{SHIVA_FORMS.length} Major Forms</span>
    </div>
  </header>
);

const FormCard: React.FC<{ 
  form: ShivaForm; 
  onOpen: (f: ShivaForm) => void;
  imageUrl: string | null;
  onGenerate: (id: string, prompt: string) => void;
  isGenerating: boolean;
}> = ({ form, onOpen, imageUrl, onGenerate, isGenerating }) => (
  <div 
    className="group relative bg-stone-900 border border-stone-800 rounded-xl cursor-pointer transition-all hover:border-amber-700/50 hover:bg-stone-800/50 overflow-hidden flex flex-col"
    onClick={() => onOpen(form)}
  >
    <div className="relative h-64 bg-stone-950 overflow-hidden">
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={form.nameIAST} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
          <i className={`fa-solid ${isGenerating ? 'fa-spinner fa-spin' : 'fa-image'} text-stone-700 text-4xl mb-4`}></i>
          {!isGenerating && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onGenerate(form.id, form.imagePrompts.museumStyle);
              }}
              className="bg-stone-800 hover:bg-amber-900 text-stone-400 hover:text-amber-100 text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border border-stone-700 transition-colors"
            >
              Visualize Form
            </button>
          )}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-60"></div>
      <div className="absolute bottom-4 left-4">
        <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded">{form.classification}</span>
      </div>
    </div>

    <div className="p-6 flex-1 flex flex-col">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-stone-100 devanagari">{form.nameDevanagari}</h3>
        <p className="text-amber-200/70 italic text-sm">{form.nameIAST}</p>
      </div>
      <p className="text-stone-400 line-clamp-2 text-sm mb-6 leading-relaxed flex-1">
        {form.summary}
      </p>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-[10px] text-stone-600 uppercase tracking-tighter">{form.era.split(' ')[0]}</span>
        <button className="text-amber-500 text-xs font-bold uppercase tracking-wider group-hover:underline">
          Deep Dive <i className="fa-solid fa-arrow-right ml-1"></i>
        </button>
      </div>
    </div>
  </div>
);

const Modal: React.FC<{ form: ShivaForm; imageUrl: string | null; onClose: () => void }> = ({ form, imageUrl, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md overflow-y-auto">
    <div className="bg-stone-900 border border-stone-700 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl relative">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-stone-400 hover:text-white z-10 text-2xl bg-black/40 w-10 h-10 rounded-full flex items-center justify-center"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <div className="md:flex h-full max-h-[90vh] overflow-y-auto">
        {/* Left Column: Visual & Stats */}
        <div className="md:w-2/5 bg-stone-950 border-r border-stone-800">
          <div className="aspect-square bg-stone-900 relative">
            {imageUrl ? (
              <img src={imageUrl} alt={form.nameIAST} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-stone-700 italic">
                No visual generated yet
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-4xl font-bold text-stone-100 devanagari">{form.nameDevanagari}</h2>
              <p className="text-amber-200/80 italic text-xl">{form.nameIAST}</p>
            </div>
          </div>
          
          <div className="p-8 space-y-6">
             <section>
               <h4 className="text-stone-500 font-bold uppercase text-[10px] tracking-widest mb-2 border-b border-stone-800 pb-1">Meaning</h4>
               <p className="text-stone-300 text-sm">{form.meaning}</p>
             </section>
             <section>
               <h4 className="text-stone-500 font-bold uppercase text-[10px] tracking-widest mb-2 border-b border-stone-800 pb-1">Era</h4>
               <p className="text-stone-300 text-sm">{form.era}</p>
             </section>
             <section>
               <h4 className="text-stone-500 font-bold uppercase text-[10px] tracking-widest mb-2 border-b border-stone-800 pb-1">Primary Scripture</h4>
               <p className="text-stone-300 text-sm italic">{form.scriptureRef}</p>
             </section>
          </div>
        </div>

        {/* Right Column: Detailed Info */}
        <div className="md:w-3/5 p-8 md:p-12 space-y-10 bg-stone-900/50">
          <section>
            <h3 className="text-2xl font-bold text-amber-500 mb-6 cinzel flex items-center">
              <span className="w-8 h-px bg-amber-900 mr-4"></span> Narrative & History
            </h3>
            <p className="text-stone-300 leading-relaxed text-lg">{form.summary}</p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <section className="bg-stone-950/40 p-6 rounded-xl border border-stone-800">
              <h4 className="text-amber-400/80 font-bold uppercase text-xs tracking-widest mb-4 flex items-center">
                <i className="fa-solid fa-om mr-3"></i> Philosophical Aspect
              </h4>
              <p className="text-stone-400 text-sm leading-relaxed">{form.symbolism}</p>
            </section>
            <section className="bg-stone-950/40 p-6 rounded-xl border border-stone-800">
              <h4 className="text-amber-400/80 font-bold uppercase text-xs tracking-widest mb-4 flex items-center">
                <i className="fa-solid fa-sculpture mr-3"></i> Iconography
              </h4>
              <ul className="text-stone-400 text-sm space-y-2">
                <li><span className="text-stone-600 font-bold mr-2">Weapons:</span> {form.iconography.weapons.join(', ')}</li>
                <li><span className="text-stone-600 font-bold mr-2">Posture:</span> {form.iconography.posture}</li>
                <li><span className="text-stone-600 font-bold mr-2">Attributes:</span> {form.iconography.attributes.join(', ')}</li>
                {form.iconography.vahanas.length > 0 && <li><span className="text-stone-600 font-bold mr-2">Vahana:</span> {form.iconography.vahanas.join(', ')}</li>}
              </ul>
            </section>
          </div>

          <section>
             <h4 className="text-amber-400/80 font-bold uppercase text-xs tracking-widest mb-4 flex items-center">
                <i className="fa-solid fa-gopuram mr-3"></i> Sacred Geography
              </h4>
              <div className="flex flex-wrap gap-2">
                {form.temples.map(t => (
                  <span key={t} className="px-3 py-1 bg-amber-900/20 text-amber-300/80 border border-amber-900/40 rounded-full text-xs">
                    {t}
                  </span>
                ))}
              </div>
          </section>

          <section className="bg-black/40 p-6 rounded-xl border border-stone-800">
            <h4 className="text-stone-500 font-bold mb-4 flex items-center text-xs uppercase tracking-widest">
              <i className="fa-solid fa-code mr-3 text-amber-700"></i> AI Generation Metadata
            </h4>
            <div className="space-y-4 text-[10px]">
              <div>
                <span className="text-stone-600 font-bold block mb-1">EDUCATIONAL DIAGRAM STYLE:</span>
                <p className="text-stone-500 italic pl-3 border-l border-stone-800">{form.imagePrompts.educationalDiagram}</p>
              </div>
              <div>
                <span className="text-stone-600 font-bold block mb-1">CINEMATIC DEVOTIONAL STYLE:</span>
                <p className="text-stone-500 italic pl-3 border-l border-stone-800">{form.imagePrompts.cinematicStyle}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);

const Timeline: React.FC = () => (
  <section className="py-24 px-6 max-w-5xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-amber-500 mb-4 cinzel">Evolution Timeline</h2>
      <p className="text-stone-500">The historical journey of Shaivite thought through the millennia.</p>
    </div>
    <div className="relative border-l-2 border-stone-800 ml-4 md:ml-0 md:left-1/2">
      {TIMELINE_DATA.map((item, idx) => (
        <div key={idx} className={`mb-16 relative ${idx % 2 === 0 ? 'md:left-[-50%] md:pr-12 text-right' : 'md:left-[0%] md:pl-12 text-left'}`}>
          <div className="absolute top-2 w-4 h-4 bg-amber-600 rounded-full border-4 border-stone-950 -left-[9px] md:left-auto md:right-[-9px] translate-x-0 md:translate-x-1/2 shadow-[0_0_10px_rgba(217,119,6,0.5)]" />
          <div className={`ml-8 md:ml-0 bg-stone-900/50 border border-stone-800 p-8 rounded-2xl inline-block w-full md:w-96 shadow-2xl backdrop-blur-sm transition-all hover:border-amber-900/50`}>
            <span className="text-amber-600 font-bold text-[10px] uppercase tracking-[0.2em]">{item.era}</span>
            <p className="text-stone-200 mt-4 text-base leading-relaxed font-light">{item.event}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const NamesGrid: React.FC = () => {
  const [search, setSearch] = useState('');
  const filtered = NAMES_108.filter(n => n.name.toLowerCase().includes(search.toLowerCase()) || n.meaning.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="py-24 px-6 bg-stone-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-10 gap-4 rotate-12 -translate-y-20">
          {Array.from({length: 100}).map((_, i) => (
            <i key={i} className="fa-solid fa-om text-3xl text-amber-900"></i>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-bold text-amber-500 mb-2 cinzel">The 108 Names</h2>
            <p className="text-stone-500">The Ashtottara Shatanamavali — meanings and etymology.</p>
          </div>
          <div className="relative w-full md:w-96">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-stone-600"></i>
            <input 
              type="text" 
              placeholder="Filter names or meanings..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-stone-900 border border-stone-800 text-stone-200 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-amber-700 text-sm transition-all"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map((n, i) => (
            <div key={i} className="bg-stone-900/40 border border-stone-800 p-5 rounded-xl hover:bg-stone-800/60 transition-all hover:-translate-y-1">
              <h4 className="text-amber-100 font-bold text-lg mb-1">{n.name}</h4>
              <p className="text-stone-500 text-[10px] leading-tight uppercase tracking-wider">{n.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ScholarChat: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const result = await askScholar(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section className="py-24 px-6 bg-stone-900/20 border-t border-stone-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-amber-900/20 rounded-full mb-6 border border-amber-900/40">
            <i className="fa-solid fa-scroll text-amber-500 text-2xl"></i>
          </div>
          <h2 className="text-4xl font-bold text-amber-500 mb-4 cinzel">The Scholar's Gateway</h2>
          <p className="text-stone-400 text-lg">Direct inquiry into scriptural nuances and historical evidence via the AI Knowledge Stream.</p>
        </div>
        
        <div className="bg-stone-950 p-2 rounded-2xl border border-stone-800 shadow-2xl flex flex-col sm:flex-row gap-2 mb-8">
          <input 
            type="text" 
            placeholder="e.g. Discuss the archaeological evidence of Pashupati seals in Mohenjo-Daro."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
            className="flex-1 bg-transparent px-6 py-4 text-stone-200 focus:outline-none text-base"
          />
          <button 
            onClick={handleAsk}
            disabled={loading}
            className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? <i className="fa-solid fa-spinner fa-spin"></i> : <i className="fa-solid fa-paper-plane"></i>}
            <span>{loading ? 'Consulting...' : 'Inquire'}</span>
          </button>
        </div>

        {response && (
          <div className="bg-stone-950 p-10 rounded-2xl border border-amber-900/20 shadow-inner max-h-[600px] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="prose prose-invert max-w-none text-stone-300 text-lg leading-relaxed whitespace-pre-wrap font-light">
              {response}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [selectedForm, setSelectedForm] = useState<ShivaForm | null>(null);
  const [filter, setFilter] = useState<FormClassification | 'All'>('All');
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  const [generatingIds, setGeneratingIds] = useState<Set<string>>(new Set());

  const filteredForms = useMemo(() => {
    if (filter === 'All') return SHIVA_FORMS;
    return SHIVA_FORMS.filter(f => f.classification === filter);
  }, [filter]);

  const handleGenerateImage = async (id: string, prompt: string) => {
    setGeneratingIds(prev => new Set(prev).add(id));
    const url = await generateFormVisual(prompt);
    if (url) {
      setGeneratedImages(prev => ({ ...prev, [id]: url }));
    }
    setGeneratingIds(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 selection:bg-amber-900 selection:text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Manifestations Section */}
        <section id="avatars">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-amber-500 mb-2 cinzel">Divine Manifestations</h2>
              <p className="text-stone-500">Exploring {SHIVA_FORMS.length} distinct forms from across epochs.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['All', ...Object.values(FormClassification)].map(c => (
                <button
                  key={c}
                  onClick={() => setFilter(c as any)}
                  className={`px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] transition-all border ${filter === c ? 'bg-amber-700 border-amber-600 text-white shadow-[0_0_15px_rgba(180,83,9,0.3)]' : 'bg-stone-900 border-stone-800 text-stone-500 hover:border-stone-600'}`}
                >
                  {c.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredForms.map(f => (
              <FormCard 
                key={f.id} 
                form={f} 
                onOpen={setSelectedForm} 
                imageUrl={generatedImages[f.id] || null}
                isGenerating={generatingIds.has(f.id)}
                onGenerate={handleGenerateImage}
              />
            ))}
          </div>
        </section>

        <Timeline />
        <NamesGrid />
        
        {/* Glossary Section */}
        <section className="py-24 bg-stone-900/10 rounded-3xl border border-stone-800 px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-500 mb-4 cinzel">Metaphysical Glossary</h2>
            <p className="text-stone-500">Key terminologies of Shaiva philosophy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {GLOSSARY.map((item, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-stone-950 border border-stone-800 hover:border-amber-900/40 transition-all">
                <div className="w-12 h-1 bg-amber-900 mb-6 group-hover:w-20 transition-all"></div>
                <h4 className="text-amber-500 font-bold text-2xl mb-4 cinzel">{item.term}</h4>
                <p className="text-stone-300 text-base mb-6 leading-relaxed font-light">{item.definition}</p>
                <div className="text-[10px] text-stone-600 uppercase tracking-widest border-t border-stone-900 pt-6">
                  <span className="text-amber-900 font-bold mr-2">Core Significance:</span> {item.significance}
                </div>
              </div>
            ))}
          </div>
        </section>

        <ScholarChat />
      </main>

      <footer className="bg-stone-950 border-t border-stone-900 py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <i className="fa-solid fa-om text-amber-900 text-5xl mb-8 opacity-40"></i>
          <p className="text-stone-500 italic mb-6 text-lg">
            "By knowing the Lord of the Universe, the One who is hidden in all beings like the film that rises on butter, by knowing the God who is the creator of the world and has many forms, one is released from all fetters."
          </p>
          <div className="h-px bg-stone-900 w-24 mx-auto mb-6"></div>
          <p className="text-stone-700 text-xs uppercase tracking-widest">
            Scholarly Mahadeva Compendium &copy; {new Date().getFullYear()} — Built for Indological Awareness
          </p>
        </div>
      </footer>

      {selectedForm && (
        <Modal 
          form={selectedForm} 
          imageUrl={generatedImages[selectedForm.id] || null} 
          onClose={() => setSelectedForm(null)} 
        />
      )}
    </div>
  );
};

export default App;
