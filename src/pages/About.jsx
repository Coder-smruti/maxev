import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Wifi, Monitor, Thermometer, CheckCircle } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { useReveal, useStaggerReveal } from '../hooks/useReveal';
import { WHY_MAXEV } from '../data/siteData';

export default function About() {
  const sec1 = useReveal();
  const sec2 = useReveal();
  const gridRef = useStaggerReveal();

  return (
    <>
      <PageBanner
        title="About MAX EV"
        subtitle="Building India's smart EV charging network — one charger at a time."
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={sec1} className="reveal grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge mb-5">Who We Are</div>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                MAX EV — Your All-In-One Charging Solution
              </h2>
              <div className="space-y-4 text-gray-500 text-lg leading-relaxed">
                <p>
                  MAX EV is a dedicated EV charging solutions provider, delivering commercial-grade DC fast chargers for India's growing electric vehicle ecosystem.
                </p>
                <p>
                  From single-connector 30 kW chargers to dual-connector 120 kW powerhouses, MAX EV provides charging infrastructure engineered for performance, connectivity, and long-term reliability.
                </p>
                <p>
                  Our chargers are deployed across Tamil Nadu — at restaurants, hotels, tourist destinations, parking facilities, and highway corridors — enabling confident, long-distance EV travel across India.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: '⚡', label: 'DC Fast Charging', desc: 'Up to 1000 VDC output' },
                { icon: '🌍', label: 'Growing Network', desc: '37+ active locations' },
                { icon: '🔌', label: 'Dual Connector', desc: 'Charge 2 EVs simultaneously' },
                { icon: '📡', label: 'Smart Connected', desc: 'OCPP 2.0.1 compliant' },
              ].map(s => (
                <div key={s.label} className="card-premium p-6">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <div className="font-display font-bold text-gray-900 mb-1">{s.label}</div>
                  <div className="text-sm text-gray-500">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={sec2} className="reveal text-center mb-16">
            <div className="badge mb-4 mx-auto">What We Offer</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 mb-4">
              Complete EV Charging Solutions
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              MAX EV provides the full stack — from hardware to connectivity to remote management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="text-sky-600" size={22} />,
                title: 'DC Fast Chargers',
                desc: 'Single and dual connector DC chargers from 30 kW to 120 kW, delivering up to 1000 VDC output for rapid EV charging.',
              },
              {
                icon: <Wifi className="text-sky-600" size={22} />,
                title: 'Smart Connectivity',
                desc: 'OCPP 1.6J & 2.0.1 remote management with Ethernet, Wi-Fi, and 4G options for real-time monitoring and control.',
              },
              {
                icon: <Monitor className="text-sky-600" size={22} />,
                title: 'Intuitive Interface',
                desc: '7" high-brightness colour touchscreen with real-time charging visualization and status LED indication.',
              },
              {
                icon: <Shield className="text-sky-600" size={22} />,
                title: 'Certified Safety',
                desc: 'IEC 61851 safety certified with integrated over-current, over-voltage, and DC insulation monitoring.',
              },
              {
                icon: <Thermometer className="text-sky-600" size={22} />,
                title: 'All-Weather Operation',
                desc: 'IP55-rated design ensures reliable operation in extreme temperatures and challenging outdoor environments.',
              },
              {
                icon: <CheckCircle className="text-sky-600" size={22} />,
                title: 'Network Management',
                desc: 'RFID, QR Code, and Plug & Charge authentication with energy cost management and remote administration.',
              },
            ].map(item => (
              <div key={item.title} className="card-premium p-7">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge mb-4 mx-auto">Core Strengths</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 mb-4">
              Built for Performance. Built for Trust.
            </h2>
          </div>
          <div ref={gridRef} className="stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_MAXEV.map(item => (
              <div key={item.title} className="reveal card-premium p-7">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-sky-600 to-blue-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display font-bold text-4xl mb-4">Partner with MAX EV</h2>
          <p className="text-sky-100 text-lg mb-8">
            Looking to install a charging station at your property or join our growing network?
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-sky-600 font-bold px-8 py-3.5 rounded-full hover:bg-sky-50 transition-all duration-300 hover:-translate-y-0.5">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
