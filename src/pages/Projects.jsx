import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Zap } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { useReveal, useStaggerReveal } from '../hooks/useReveal';
import { UPCOMING_PROJECTS } from '../data/siteData';

export default function Projects() {
  const introRef = useReveal();
  const gridRef = useStaggerReveal();

  return (
    <>
      <PageBanner
        title="Upcoming Projects"
        subtitle="MAX EV is expanding rapidly across Chennai's most iconic public locations — parks, beaches, and community spaces."
        breadcrumbs={[{ label: 'Upcoming Projects' }]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={introRef} className="reveal grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="badge mb-5">Expansion in Progress</div>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                Chennai's EV Charging Future is Arriving
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                MAX EV is installing chargers at Chennai's most visited public landmarks — from the iconic Marina Beach to cultural parks and neighbourhood grounds.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                These upcoming locations have been selected to maximise convenience for EV owners — covering North Chennai, South Chennai, and Central business districts.
              </p>
              <div className="flex items-center gap-3 text-sky-600 font-semibold">
                <Clock size={18} />
                <span>Projects currently in progress — locations subject to confirmation</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: '🏗️', value: `${UPCOMING_PROJECTS.length}`, label: 'Upcoming Locations' },
                { icon: '🌆', value: 'Chennai', label: 'Primary Focus' },
                { icon: '🌳', value: 'Parks', label: 'Type: Public Spaces' },
                { icon: '📍', value: 'City-Wide', label: 'Coverage' },
              ].map(s => (
                <div key={s.label} className="card-premium p-6 text-center">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <div className="font-display font-bold text-xl text-gray-900 mb-1">{s.value}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge mb-4 mx-auto">Confirmed Upcoming Locations</div>
            <h3 className="font-display font-bold text-3xl text-gray-900">
              9 New Stations Coming to Chennai
            </h3>
          </div>

          <div ref={gridRef} className="stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {UPCOMING_PROJECTS.map((p, i) => (
              <div key={p.id} className="reveal card-premium overflow-hidden group">
                {/* Top accent */}
                <div className="h-1.5 bg-gradient-to-r from-sky-400 to-blue-500" />
                <div className="p-6">
                  {/* Number */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-display font-bold text-lg shadow-md shadow-sky-200">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full">
                      <Clock size={10} /> Coming Soon
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-2.5 mb-3">
                    <MapPin size={16} className="text-sky-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-display font-bold text-xl text-gray-900">{p.area}</div>
                      <div className="text-gray-500 text-sm mt-0.5">{p.venue}</div>
                    </div>
                  </div>

                  {/* Charger info */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                    <Zap size={13} className="text-sky-500" />
                    <span className="text-xs text-gray-500 font-medium">MAX EV DC Fast Charger</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400 italic">
              * Upcoming project locations are subject to confirmation. Contact MAX EV for latest status.
            </p>
          </div>
        </div>
      </section>

      {/* Map visual area */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge mb-4 mx-auto">Chennai Coverage</div>
          <h3 className="font-display font-bold text-3xl text-gray-900 mb-6">
            Spreading Across the City
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {['Besant Nagar', 'Ambattur', 'T.Nagar', 'Semmozhi Park', 'Marina Beach', 'Anna Nagar', 'Mylapore'].map(area => (
              <div key={area} className="bg-sky-50 border border-sky-100 rounded-xl py-3 px-2 text-center">
                <MapPin size={16} className="text-sky-500 mx-auto mb-1" />
                <span className="text-xs font-semibold text-gray-700 leading-tight block">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-sky-600 to-blue-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display font-bold text-4xl mb-4">Want a Charger Near You?</h2>
          <p className="text-sky-100 text-lg mb-8">
            Submit a location request or partner with MAX EV to bring charging to your area.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-sky-600 font-bold px-8 py-3.5 rounded-full hover:bg-sky-50 transition-all hover:-translate-y-0.5">
            Contact MAX EV <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
