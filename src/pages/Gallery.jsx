import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { useReveal } from '../hooks/useReveal';

// Gallery items — using gradient placeholders since actual images need client upload
// Client should replace these with real image URLs
const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'exhibition',
    label: 'Exhibition Booth',
    caption: 'MAX EV at industry exhibition — showcasing next-gen DC chargers',
    bg: 'from-blue-900 via-blue-800 to-slate-900',
    accent: 'text-blue-300',
  },
  {
    id: 2,
    category: 'exhibition',
    label: 'Charger Display',
    caption: 'PLUGZMRT dual-connector DC charger on display',
    bg: 'from-slate-800 via-gray-800 to-slate-900',
    accent: 'text-sky-300',
  },
  {
    id: 3,
    category: 'exhibition',
    label: 'Live Demo',
    caption: 'Live product demonstration at the exhibition floor',
    bg: 'from-indigo-900 via-blue-900 to-slate-900',
    accent: 'text-indigo-300',
  },
  {
    id: 4,
    category: 'exhibition',
    label: 'Visitor Engagement',
    caption: 'Visitors exploring MAX EV charging solutions',
    bg: 'from-sky-900 via-blue-800 to-slate-900',
    accent: 'text-sky-300',
  },
  {
    id: 5,
    category: 'exhibition',
    label: 'Product Showcase',
    caption: 'Detailed product showcase — single and dual connector models',
    bg: 'from-gray-800 via-slate-800 to-gray-900',
    accent: 'text-gray-300',
  },
  {
    id: 6,
    category: 'exhibition',
    label: 'Team Presentation',
    caption: 'MAX EV team presenting DC charger capabilities',
    bg: 'from-blue-800 via-blue-900 to-indigo-900',
    accent: 'text-blue-300',
  },
  {
    id: 7,
    category: 'exhibition',
    label: 'Industry Event',
    caption: 'MAX EV presence at the smart EV charging industry event',
    bg: 'from-slate-700 via-gray-800 to-slate-900',
    accent: 'text-slate-300',
  },
  {
    id: 8,
    category: 'product',
    label: 'DC Single Connector',
    caption: 'EV DC 30/60 kW single connector fast charger',
    bg: 'from-sky-50 via-blue-50 to-sky-100',
    accent: 'text-sky-600',
    light: true,
  },
  {
    id: 9,
    category: 'product',
    label: 'DC Dual Connector',
    caption: 'EV DC 60/120 kW dual connector commercial charger',
    bg: 'from-gray-100 via-sky-50 to-gray-200',
    accent: 'text-gray-600',
    light: true,
  },
  {
    id: 10,
    category: 'product',
    label: 'DC 60 Power Class',
    caption: 'DC 60 — IP55-rated, OCPP 2.0.1 compliant, 2x30 kW',
    bg: 'from-white via-sky-50 to-blue-50',
    accent: 'text-blue-600',
    light: true,
  },
  {
    id: 11,
    category: 'network',
    label: 'EV Charging in Action',
    caption: 'MAX EV charger in operation — vehicle connected and charging',
    bg: 'from-green-900 via-emerald-800 to-slate-900',
    accent: 'text-green-300',
  },
  {
    id: 12,
    category: 'network',
    label: 'Network Station',
    caption: 'Active MAX EV charging station on the network',
    bg: 'from-teal-900 via-cyan-800 to-slate-900',
    accent: 'text-teal-300',
  },
];

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'product', label: 'Products' },
  { key: 'exhibition', label: 'Exhibitions' },
  { key: 'network', label: 'Network' },
];

function GalleryCard({ item, onClick }) {
  return (
    <div
      className="group relative cursor-pointer rounded-2xl overflow-hidden aspect-[4/3] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      onClick={() => onClick(item)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${item.bg}`} />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
            <ZoomIn size={20} className="text-white" />
          </div>
        </div>
      </div>
      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className={`text-sm font-semibold ${item.light ? 'text-gray-800' : 'text-white'}`}>{item.label}</div>
        <div className={`text-xs mt-0.5 ${item.light ? 'text-gray-500' : 'text-gray-300'}`}>{item.caption}</div>
      </div>
      {/* Category badge */}
      <div className="absolute top-3 left-3">
        <span className="text-xs font-semibold bg-black/40 text-white px-2.5 py-1 rounded-full backdrop-blur-sm capitalize">
          {item.category}
        </span>
      </div>
    </div>
  );
}

function Lightbox({ item, items, onClose, onPrev, onNext }) {
  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <X size={20} className="text-white" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <ChevronLeft size={22} className="text-white" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <ChevronRight size={22} className="text-white" />
      </button>
      <div
        className="max-w-3xl w-full"
        onClick={e => e.stopPropagation()}
      >
        <div className={`w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${item.bg} mb-4`} />
        <div className="text-center">
          <div className="text-white font-display font-bold text-xl">{item.label}</div>
          <div className="text-gray-400 text-sm mt-1">{item.caption}</div>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);
  const introRef = useReveal();

  const filtered = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(i => i.category === activeCategory);

  const currentIndex = lightboxItem ? filtered.findIndex(i => i.id === lightboxItem.id) : -1;
  const handlePrev = () => setLightboxItem(filtered[(currentIndex - 1 + filtered.length) % filtered.length]);
  const handleNext = () => setLightboxItem(filtered[(currentIndex + 1) % filtered.length]);

  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="MAX EV in action — product showcases, industry exhibitions, and network installations."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={introRef} className="reveal text-center">
            <div className="badge mb-4 mx-auto">Visual Showcase</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 mb-4">
              See MAX EV in the Real World
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              From industry exhibitions to live deployments — MAX EV chargers connecting EVs across India.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap mb-10">
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-200'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-sky-300 hover:text-sky-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
            <span className="ml-2 text-sm text-gray-400 self-center">{filtered.length} photos</span>
          </div>

          {/* Masonry-ish grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {filtered.map(item => (
              <div key={item.id} className="break-inside-avoid">
                <GalleryCard item={item} onClick={setLightboxItem} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-gray-400">
              📸 Additional installation and site photos — contact MAX EV for the complete media kit.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">Interested in MAX EV?</h2>
          <p className="text-gray-500 text-lg mb-8">
            Contact us for product enquiries, installation information, or network partnerships.
          </p>
          <Link to="/contact" className="btn-secondary">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <Lightbox
          item={lightboxItem}
          items={filtered}
          onClose={() => setLightboxItem(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
}
