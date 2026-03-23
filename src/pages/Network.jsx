import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Search, Zap } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { useReveal, useStaggerReveal } from '../hooks/useReveal';
import { NETWORK_LOCATIONS, COVERAGE_CITIES } from '../data/siteData';

export default function Network() {
  const [search, setSearch] = useState('');
  const introRef = useReveal();
  const gridRef = useStaggerReveal();

  const filtered = NETWORK_LOCATIONS.filter(
    loc =>
      loc.city.toLowerCase().includes(search.toLowerCase()) ||
      loc.venue.toLowerCase().includes(search.toLowerCase())
  );

  // Group by first letter of city for display
  const cityGroups = filtered.reduce((acc, loc) => {
    const key = loc.city;
    if (!acc[key]) acc[key] = [];
    acc[key].push(loc);
    return acc;
  }, {});

  return (
    <>
      <PageBanner
        title="Charging Network"
        subtitle="Active MAX EV charging stations across Tamil Nadu and beyond — at hotels, restaurants, tourist spots, and parking facilities."
        breadcrumbs={[{ label: 'Charging Network' }]}
      />

      {/* Coverage Cities Strip */}
      <section className="bg-sky-600 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">
            <span className="text-sky-100 text-sm font-semibold uppercase tracking-wider mr-2">Coverage:</span>
            {COVERAGE_CITIES.map(city => (
              <span key={city} className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full">
                <MapPin size={12} /> {city}
              </span>
            ))}
            <span className="text-sky-200 text-sm">& more...</span>
          </div>
        </div>
      </section>

      {/* Stats + Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={introRef} className="reveal grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge mb-5">Active Network</div>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 mb-5 leading-tight">
                Powering Journeys Across Tamil Nadu
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                MAX EV charging stations are strategically placed at popular restaurants, hotels, tourist destinations, highway toll corridors, and parking facilities — making long-distance EV travel confident and convenient.
              </p>
              <p className="text-gray-500 leading-relaxed">
                From Kanyakumari in the south to Hosur in the north, our network covers the entire state — and is actively expanding into new cities and regions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: '📍', value: `${NETWORK_LOCATIONS.length}+`, label: 'Active Locations' },
                { icon: '🌆', value: '5+', label: 'Coverage Cities' },
                { icon: '🛣️', value: '100%', label: 'Highway Ready' },
                { icon: '⚡', value: '24/7', label: 'Always On' },
              ].map(s => (
                <div key={s.label} className="card-premium p-6 text-center">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <div className="font-display font-bold text-2xl text-gray-900 mb-1">{s.value}</div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10">
            <div>
              <h3 className="font-display font-bold text-2xl text-gray-900">All Charging Locations</h3>
              <p className="text-gray-500 text-sm mt-1">{filtered.length} locations found</p>
            </div>
            <div className="relative w-full sm:w-72">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search city or venue..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 bg-white transition-all"
              />
            </div>
          </div>

          {/* Location cards grid */}
          <div ref={gridRef} className="stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((loc, i) => (
              <div key={loc.id} className="reveal card-premium p-5 flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-sky-50 group-hover:bg-sky-100 transition-colors flex items-center justify-center shrink-0">
                  <MapPin size={17} className="text-sky-600" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 truncate">{loc.venue}</div>
                  <div className="text-sm text-sky-600 font-medium mt-0.5">{loc.city}</div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-xs text-gray-400">Active</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <MapPin size={40} className="mx-auto mb-3 opacity-30" />
              <p>No locations found for "{search}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="badge mb-4 mx-auto">Coverage Map</div>
            <h3 className="font-display font-bold text-3xl text-gray-900">Find Us on the Map</h3>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="MAX EV Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3!2d80.2107!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMTInMzguNSJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">
            Anna Nagar West Extension, Chennai – 600101
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <Zap size={36} className="text-sky-400 mx-auto mb-5" />
          <h2 className="font-display font-bold text-4xl mb-4">Host a MAX EV Charger</h2>
          <p className="text-gray-400 text-lg mb-8">
            Want to add EV charging at your property? Contact us to become a network partner.
          </p>
          <Link to="/contact" className="btn-secondary">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
