import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Zap } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { useReveal } from '../hooks/useReveal';
import { EV_COMPATIBILITY } from '../data/siteData';

export default function Compatibility() {
  const [search, setSearch] = useState('');
  const tableRef = useReveal();

  const filtered = EV_COMPATIBILITY.filter(ev =>
    ev.model.toLowerCase().includes(search.toLowerCase())
  );

  const getBarWidth = (kwh) => Math.min((kwh / 115) * 100, 100);
  const getBarColor = (kwh) => {
    if (kwh < 30) return 'bg-green-400';
    if (kwh < 60) return 'bg-sky-400';
    if (kwh < 90) return 'bg-blue-500';
    return 'bg-indigo-500';
  };

  const brands = [...new Set(EV_COMPATIBILITY.map(e => e.model.split(' ')[0]))];

  return (
    <>
      <PageBanner
        title="EV Compatibility"
        subtitle="MAX EV chargers support 30+ electric vehicle models — from mass market to luxury."
        breadcrumbs={[{ label: 'EV Compatibility' }]}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge mb-5">Wide Compatibility</div>
              <h2 className="font-display font-bold text-4xl text-gray-900 mb-5 leading-tight">
                Supports Every Major EV Brand in India
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                From the TATA Punch EV to the Rolls Royce Spectre, MAX EV's CCS-2 DC fast chargers are compatible with India's full range of electric vehicles — supporting battery capacities from 17.3 kWh to 111.5 kWh.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {brands.map(brand => (
                <span key={brand} className="px-4 py-2 bg-sky-50 border border-sky-100 text-sky-700 rounded-full text-sm font-semibold">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={tableRef} className="reveal">
            {/* Search */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
              <div>
                <h3 className="font-display font-bold text-2xl text-gray-900">Battery Reference Table</h3>
                <p className="text-gray-500 text-sm mt-1">Vehicle models and battery capacity in kWh</p>
              </div>
              <div className="relative w-full sm:w-72">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search vehicle model..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 transition-all bg-white"
                />
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block card-premium overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">#</th>
                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Vehicle Model</th>
                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Battery Capacity</th>
                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider w-48">Range Indicator</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filtered.map((ev, i) => (
                    <tr key={i} className={`hover:bg-sky-50 transition-colors ${i % 2 === 1 ? 'bg-gray-50/50' : 'bg-white'}`}>
                      <td className="px-6 py-4 text-sm text-gray-400 font-mono">{String(i + 1).padStart(2, '0')}</td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-gray-900">{ev.model.replace(' ⚠️', '')}</span>
                        {ev.model.includes('⚠️') && (
                          <span className="ml-2 text-xs text-amber-500 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full">
                            Verify model name
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Zap size={14} className="text-sky-500" />
                          <span className="font-bold text-gray-900">{ev.battery}</span>
                          <span className="text-gray-500 text-sm">kWh</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden w-36">
                          <div
                            className={`h-full rounded-full transition-all ${getBarColor(ev.battery)}`}
                            style={{ width: `${getBarWidth(ev.battery)}%` }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filtered.length === 0 && (
                <div className="text-center py-10 text-gray-400">No vehicles found for "{search}"</div>
              )}
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-3">
              {filtered.map((ev, i) => (
                <div key={i} className="card-premium p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900 text-sm">{ev.model.replace(' ⚠️', '')}</span>
                    <div className="flex items-center gap-1">
                      <Zap size={13} className="text-sky-500" />
                      <span className="font-bold text-sky-600 text-sm">{ev.battery} kWh</span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${getBarColor(ev.battery)}`} style={{ width: `${getBarWidth(ev.battery)}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-gray-400">
              ⚠️ Models marked for verification — vehicle names interpreted from brochure. Please confirm with MAX EV.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sky-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display font-bold text-4xl mb-4">Don't See Your EV?</h2>
          <p className="text-sky-100 text-lg mb-8">Contact our team to check compatibility for your specific vehicle.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-sky-600 font-bold px-8 py-3.5 rounded-full hover:bg-sky-50 transition-all hover:-translate-y-0.5">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
