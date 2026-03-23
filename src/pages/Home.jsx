import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Wifi, MapPin, ChevronRight } from 'lucide-react';
import { useReveal, useStaggerReveal } from '../hooks/useReveal';
import { WHY_MAXEV, PRODUCTS, UPCOMING_PROJECTS, NETWORK_LOCATIONS } from '../data/siteData';

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero-mesh min-h-screen flex items-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Electric accent blobs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-red-400/8 rounded-full blur-3xl" style={{animationDelay:'1s',animation:'pulse 4s ease-in-out infinite'}} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest slide-up">
            <Zap size={12} className="text-sky-500" /> MAX EV Charging
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-gray-900 slide-up" style={{animationDelay:'0.1s'}}>
            Your{' '}
            <span className="shimmer-text">All-In-One</span>
            <br />
            Charging
            <br />
            <span className="text-red-600">Solution</span>
          </h1>

          <p className="text-gray-500 text-xl leading-relaxed max-w-md slide-up" style={{animationDelay:'0.2s'}}>
            Premium DC fast charging infrastructure — engineered for performance, built for India's EV future.
          </p>

          <div className="flex flex-wrap gap-4 slide-up" style={{animationDelay:'0.3s'}}>
            <Link to="/products" className="btn-secondary">
              Explore Chargers <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline">
              Enquire Now
            </Link>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-3 slide-up" style={{animationDelay:'0.4s'}}>
            {['IP55 Rated', 'OCPP 2.0.1', 'IEC 61851 Certified', 'Dual Connector'].map(chip => (
              <span key={chip} className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />{chip}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Visual */}
        <div className="flex justify-center lg:justify-end slide-up" style={{animationDelay:'0.2s'}}>
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-blue-500/10 rounded-3xl blur-2xl scale-110" />
            {/* Charger illustration box */}
            <div className="relative bg-gradient-to-br from-white via-sky-50 to-white rounded-3xl p-8 shadow-2xl border border-sky-100 float-animate">
              {/* Charger graphic */}
              <div className="w-56 h-72 sm:w-64 sm:h-80 mx-auto relative">
                {/* Charger body */}
                <div className="absolute inset-x-8 top-4 bottom-0 bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl shadow-inner flex flex-col items-center justify-start pt-6 gap-3">
                  {/* Screen */}
                  <div className="w-20 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-sky-400 text-xs font-mono font-bold">READY</div>
                  </div>
                  {/* RFID area */}
                  <div className="w-16 h-8 bg-white/60 rounded-lg border border-gray-300 flex items-center justify-center">
                    <Wifi size={14} className="text-sky-500" />
                  </div>
                  {/* Connectors */}
                  <div className="flex gap-4 mt-2">
                    <div className="w-8 h-10 bg-gray-700 rounded-lg" />
                    <div className="w-8 h-10 bg-gray-700 rounded-lg" />
                  </div>
                  {/* Status LED */}
                  <div className="flex gap-2 mt-2">
                    <div className="w-2 h-2 rounded-full bg-sky-400 pulse-ring" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                </div>
                {/* Cables */}
                <div className="absolute bottom-0 left-6 w-2 h-16 bg-gray-400 rounded-b-lg" />
                <div className="absolute bottom-0 right-6 w-2 h-16 bg-gray-400 rounded-b-lg" />
                {/* Base */}
                <div className="absolute bottom-0 inset-x-2 h-4 bg-gray-300 rounded-b-xl" />

                {/* Power label */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  MAX EV DC 60kW
                </div>
              </div>

              {/* IP55 badge */}
              <div className="absolute -right-4 top-12 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <Shield size={13} className="text-sky-500" />
                  <span className="text-xs font-bold text-gray-700">IP55</span>
                </div>
              </div>
              {/* Output badge */}
              <div className="absolute -left-4 bottom-16 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <Zap size={13} className="text-amber-500" />
                  <span className="text-xs font-bold text-gray-700">1000 VDC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}

// ─── Brand Intro ───────────────────────────────────────────────────────────────
function BrandIntro() {
  const ref = useReveal();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="badge mb-5">About MAX EV</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
              Powering India's EV Revolution
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              MAX EV delivers commercial-grade DC fast charging solutions for every EV on Indian roads — from mass market to premium luxury. Our chargers are engineered for reliability, smart connectivity, and 24/7 operation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-secondary">
                Learn About Us <ArrowRight size={16} />
              </Link>
              <Link to="/network" className="btn-outline">
                View Network
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: '⚡', value: '1000V', label: 'Max DC Output' },
              { icon: '🔌', value: 'Dual', label: 'Connector Options' },
              { icon: '📡', value: 'OCPP 2.0', label: 'Protocol Compliant' },
              { icon: '🗺️', value: '37+', label: 'Active Locations' },
            ].map(stat => (
              <div key={stat.label} className="card-premium p-6 text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="font-display font-bold text-2xl text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Products ──────────────────────────────────────────────────────────────────
function ProductsSection() {
  const ref = useStaggerReveal();
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal" ref={useReveal()}>
          <div className="badge mb-4 mx-auto">Our Products</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 mb-4">
            Charging Solutions for Every Need
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Single and dual connector DC fast chargers from 30 kW to 120 kW — built for commercial deployment.
          </p>
        </div>

        <div ref={ref} className="stagger grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="reveal card-premium p-6 flex flex-col">
              {/* Power badge */}
              <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-4 ${
                p.color === 'red' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-sky-50 text-sky-600 border border-sky-100'
              }`}>
                <Zap size={11} /> {p.tag}
              </div>

              {/* Charger mini visual */}
              <div className={`w-full h-36 rounded-xl mb-5 flex items-center justify-center ${
                p.color === 'red' ? 'bg-gradient-to-br from-red-50 to-orange-50' : 'bg-gradient-to-br from-sky-50 to-blue-50'
              }`}>
                <div className="text-center">
                  <div className={`font-display font-black text-4xl mb-1 ${p.color === 'red' ? 'text-red-500' : 'text-sky-500'}`}>
                    {p.power}
                  </div>
                  <div className="text-xs text-gray-500 font-semibold">{p.type}</div>
                </div>
              </div>

              <h3 className="font-display font-bold text-lg text-gray-900 mb-1">{p.name}</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed flex-1">{p.highlight}</p>

              <ul className="space-y-1.5 mb-5">
                {p.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="w-1 h-1 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to={p.id === 'ev-dc-60-dual' ? '/dc60' : '/products'}
                className={`text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                  p.color === 'red' ? 'text-red-600 hover:text-red-700' : 'text-sky-600 hover:text-sky-700'
                }`}
              >
                View Details <ChevronRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products" className="btn-secondary">
            View All Products <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Why MAX EV ────────────────────────────────────────────────────────────────
function WhyMaxEV() {
  const titleRef = useReveal();
  const gridRef = useStaggerReveal();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="reveal text-center mb-16">
          <div className="badge mb-4 mx-auto">Why Choose MAX EV</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 mb-4">
            Built for Performance. Built for Trust.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Every MAX EV charger is engineered to the highest standards — for operators and drivers alike.
          </p>
        </div>

        <div ref={gridRef} className="stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_MAXEV.map((item) => (
            <div key={item.title} className="reveal group card-premium p-7">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 group-hover:bg-sky-100 transition-colors flex items-center justify-center text-2xl mb-5">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── DC 60 Feature Section ─────────────────────────────────────────────────────
function DC60Feature() {
  const ref = useReveal();
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-400 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
              <Zap size={12} /> Featured Product
            </div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-3 leading-tight">
              DC 60 Power Class
            </h2>
            <p className="text-sky-400 font-semibold text-lg mb-6">2x30 kW / 200 A</p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              IP55-rated all-weather dual charging station with OCPP 2.0.1 compliance, 7" touchscreen, Bluetooth configuration, and simultaneous dual EV support.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'DC Output', value: '60 kW' },
                { label: 'DC Voltage', value: '100–1000 V' },
                { label: 'Connectors', value: '2× CCS-2' },
                { label: 'IP Rating', value: 'IP55' },
              ].map(s => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-gray-400 text-xs mb-1">{s.label}</div>
                  <div className="text-white font-bold font-display">{s.value}</div>
                </div>
              ))}
            </div>
            <Link to="/dc60" className="btn-secondary">
              Full Specifications <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right: spec list */}
          <div className="space-y-4">
            {[
              { icon: '🛡️', title: 'IP55 All-Weather', desc: 'Indoor and outdoor rated — fully sealed against dust and water' },
              { icon: '📺', title: '7" Colour Touchscreen', desc: 'High-brightness full colour display with graphical charging visualization' },
              { icon: '🔐', title: 'RFID + QR + PnC Auth', desc: 'Flexible user authentication — RFID, QR Code, or Plug & Charge' },
              { icon: '📶', title: 'Ethernet / Wi-Fi / 4G', desc: 'Triple connectivity options for cloud management' },
              { icon: '🔋', title: 'Conversion Efficiency >95%', desc: 'Industry-leading efficiency with <20W standby power' },
            ].map(f => (
              <div key={f.title} className="flex gap-4 bg-white/5 border border-white/8 rounded-2xl p-5 hover:bg-white/8 transition-colors">
                <div className="text-2xl shrink-0">{f.icon}</div>
                <div>
                  <div className="font-semibold text-white mb-1">{f.title}</div>
                  <div className="text-sm text-gray-400">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Network Preview ───────────────────────────────────────────────────────────
function NetworkPreview() {
  const ref = useReveal();
  const featured = NETWORK_LOCATIONS.slice(0, 6);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="badge mb-4">Charging Network</div>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900">
                Charge Across India
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl">
                MAX EV chargers are active across Tamil Nadu and growing — at restaurants, hotels, parking zones, and tourist destinations.
              </p>
            </div>
            <Link to="/network" className="btn-outline whitespace-nowrap">
              View Full Network <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map(loc => (
              <div key={loc.id} className="flex items-center gap-3 bg-gray-50 hover:bg-sky-50 rounded-xl px-5 py-4 transition-all duration-200 group cursor-default border border-transparent hover:border-sky-100">
                <div className="w-9 h-9 rounded-full bg-sky-100 group-hover:bg-sky-200 transition-colors flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-sky-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">{loc.venue}</div>
                  <div className="text-xs text-gray-500">{loc.city}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center text-sm text-gray-400">
            + {NETWORK_LOCATIONS.length - 6} more active locations across Tamil Nadu
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Upcoming Projects Preview ─────────────────────────────────────────────────
function ProjectsPreview() {
  const ref = useReveal();
  return (
    <section className="py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="badge mb-4">Upcoming Projects</div>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900">
                Expanding Our Network
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl">
                MAX EV is rapidly expanding across Chennai's most iconic locations — parks, beaches, and public spaces.
              </p>
            </div>
            <Link to="/projects" className="btn-outline whitespace-nowrap">
              See All Projects <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {UPCOMING_PROJECTS.slice(0, 6).map((p, i) => (
              <div key={p.id} className="card-premium p-5 flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold font-display text-sm shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div className="font-bold text-gray-900 font-display">{p.area}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{p.venue}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Gallery Preview ───────────────────────────────────────────────────────────
function GalleryPreview() {
  const ref = useReveal();
  const photos = [
    { label: 'Exhibition Booth', bg: 'from-blue-100 to-sky-200' },
    { label: 'Charger Display', bg: 'from-sky-100 to-blue-100' },
    { label: 'Live Demo', bg: 'from-gray-100 to-gray-200' },
    { label: 'Product Showcase', bg: 'from-sky-50 to-blue-50' },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal text-center mb-12">
          <div className="badge mb-4 mx-auto">Gallery</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 mb-4">
            See MAX EV in Action
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From exhibitions to live deployments — MAX EV chargers in the real world.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {photos.map((p) => (
            <div key={p.label} className={`bg-gradient-to-br ${p.bg} rounded-2xl aspect-square flex items-end p-4`}>
              <span className="text-sm font-semibold text-gray-700">{p.label}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/gallery" className="btn-secondary">
            View Gallery <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── EV Compatibility Teaser ───────────────────────────────────────────────────
function CompatibilityTeaser() {
  const ref = useReveal();
  const brands = ['TATA', 'MG', 'Mahindra', 'BYD', 'Jaguar', 'KIA', 'Hyundai', 'Audi', 'Volvo', 'BMW', 'Rolls Royce'];
  return (
    <section className="py-24 bg-gray-950 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={ref} className="reveal">
          <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-400 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
            EV Compatibility
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-4">
            Compatible with 30+ EV Models
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            From mass-market EVs to ultra-premium luxury vehicles — MAX EV supports them all.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {brands.map(b => (
              <span key={b} className="px-5 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-full text-sm font-medium hover:bg-sky-500/20 hover:border-sky-500/30 hover:text-sky-300 transition-all duration-200 cursor-default">
                {b}
              </span>
            ))}
          </div>
          <Link to="/compatibility" className="btn-secondary">
            View Compatibility Table <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <ProductsSection />
      <WhyMaxEV />
      <DC60Feature />
      <NetworkPreview />
      <ProjectsPreview />
      <GalleryPreview />
      <CompatibilityTeaser />
    </>
  );
}
