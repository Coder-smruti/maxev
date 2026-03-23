import { Link } from 'react-router-dom';
import { ArrowRight, Download, Zap, Shield, Wifi } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { useReveal } from '../hooks/useReveal';
import { DC60_SPECS } from '../data/siteData';

function SpecTable({ title, rows }) {
  return (
    <div className="card-premium overflow-hidden">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
        <h4 className="font-display font-bold text-gray-900">{title}</h4>
      </div>
      <div className="divide-y divide-gray-50">
        {rows.map((row, i) => (
          <div key={i} className={`px-6 py-3.5 flex items-start gap-4 ${i % 2 === 1 ? 'bg-gray-50/50' : ''}`}>
            <span className="text-sm text-gray-500 w-48 shrink-0">{row.label}</span>
            <span className="text-sm font-semibold text-gray-900">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DC60() {
  const heroRef = useReveal();
  const featRef = useReveal();
  const specRef = useReveal();
  const ctaRef = useReveal();

  return (
    <>
      <PageBanner
        title="DC 60 Power Class"
        subtitle="2x30 kW / 200 A — Premium dual-connector DC fast charger for indoor and outdoor deployment."
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: 'DC 60 Power Class' }]}
      />

      {/* Product Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroRef} className="reveal grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/15 to-blue-500/10 rounded-3xl blur-2xl scale-110" />
                <div className="relative bg-gradient-to-br from-sky-50 to-white rounded-3xl p-10 shadow-2xl border border-sky-100 float-animate">
                  {/* Charger visual */}
                  <div className="w-52 h-80 mx-auto relative">
                    <div className="absolute inset-x-6 top-3 bottom-0 bg-gradient-to-b from-gray-200 to-gray-300 rounded-2xl shadow-inner flex flex-col items-center pt-5 gap-3">
                      <div className="w-24 h-14 bg-gray-800 rounded-xl flex items-center justify-center shadow-inner">
                        <div className="text-center">
                          <div className="text-sky-400 text-[9px] font-mono font-bold">MAX EV</div>
                          <div className="text-green-400 text-[9px] font-mono">READY ●</div>
                        </div>
                      </div>
                      <div className="w-16 h-8 bg-white/70 rounded-lg border border-gray-300 flex items-center justify-center gap-1">
                        <Wifi size={10} className="text-sky-500" />
                        <span className="text-[8px] text-gray-500 font-bold">RFID</span>
                      </div>
                      <div className="flex gap-3 mt-3">
                        <div className="w-9 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                          <Zap size={10} className="text-yellow-400" />
                        </div>
                        <div className="w-9 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                          <Zap size={10} className="text-yellow-400" />
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-sky-400 pulse-ring" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 inset-x-2 h-5 bg-gray-400 rounded-b-xl" />
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -right-5 top-16 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <Shield size={14} className="text-sky-500" />
                      <div>
                        <div className="text-xs font-bold text-gray-900">IP55</div>
                        <div className="text-[10px] text-gray-500">All-Weather</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -left-5 top-32 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <Zap size={14} className="text-amber-500" />
                      <div>
                        <div className="text-xs font-bold text-gray-900">60 kW</div>
                        <div className="text-[10px] text-gray-500">DC Output</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-5 bottom-20 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-2.5">
                    <div className="text-xs font-bold text-gray-900">OCPP 2.0.1</div>
                    <div className="text-[10px] text-gray-500">Compliant</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="badge mb-4">DC Power Class</div>
              <h1 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 mb-2">DC 60</h1>
              <p className="text-sky-600 font-bold text-xl mb-6">2x30 kW / 200 A</p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">{DC60_SPECS.description}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { v: '60 kW', l: 'Total Output' },
                  { v: '200 A', l: 'DC Current' },
                  { v: 'IP55', l: 'Rating' },
                  { v: '2×', l: 'CCS-2 Guns' },
                ].map(s => (
                  <div key={s.l} className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-100">
                    <div className="font-display font-bold text-xl text-sky-600 mb-1">{s.v}</div>
                    <div className="text-xs text-gray-500">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Enquire Now <ArrowRight size={16} />
                </Link>
                <a href="/maxev-brochure.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <Download size={15} /> Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={featRef} className="reveal text-center mb-14">
            <div className="badge mb-4 mx-auto">Key Features</div>
            <h2 className="font-display font-bold text-4xl text-gray-900">
              Engineered for Excellence
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DC60_SPECS.features.map(f => (
              <div key={f.title} className="card-premium p-6">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={specRef} className="reveal">
            <div className="text-center mb-14">
              <div className="badge mb-4 mx-auto">Technical Specifications</div>
              <h2 className="font-display font-bold text-4xl text-gray-900">
                DC 60 Full Datasheet
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <SpecTable title="Power Output" rows={DC60_SPECS.powerOutput} />
              <SpecTable title="Main Input" rows={DC60_SPECS.mainInput} />
              <SpecTable title="Mechanical" rows={DC60_SPECS.mechanical} />
              <SpecTable title="Protection & Safety" rows={DC60_SPECS.protection} />
              <div className="lg:col-span-2">
                <SpecTable title="User Interface & Communications" rows={DC60_SPECS.comms} />
              </div>
              <div className="lg:col-span-2">
                <SpecTable title="Standards & Certifications" rows={DC60_SPECS.certifications} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-sky-600 to-blue-700 text-white text-center">
        <div className="reveal max-w-2xl mx-auto px-4">
          <h2 className="font-display font-bold text-4xl mb-4">Ready to Deploy DC 60?</h2>
          <p className="text-sky-100 text-lg mb-8">
            Contact MAX EV for site assessment, pricing, and installation support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-sky-600 font-bold px-8 py-3.5 rounded-full hover:bg-sky-50 transition-all hover:-translate-y-0.5">
              Get in Touch <ArrowRight size={16} />
            </Link>
            <a href="/maxev-brochure.pdf" target="_blank" className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all hover:-translate-y-0.5">
              <Download size={16} /> Download Datasheet
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
