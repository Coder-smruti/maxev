import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Zap, ArrowRight } from 'lucide-react';
import logo from '../assets/maxev-logo.png';
import { CONTACT } from '../data/siteData';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About MAX EV', path: '/about' },
  { label: 'Charging Network', path: '/network' },
  { label: 'Upcoming Projects', path: '/projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
];

const productLinks = [
  { label: 'All Chargers', path: '/products' },
  { label: 'EV DC 30 kW', path: '/products' },
  { label: 'EV DC 60 kW Single', path: '/products' },
  { label: 'EV DC 60 kW Dual', path: '/products' },
  { label: 'EV DC 120 kW Dual', path: '/products' },
  { label: 'DC 60 Power Class', path: '/dc60' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* CTA Strip */}
      <div className="bg-gradient-to-r from-sky-600 to-sky-500 py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            <Zap size={12} /> Power Up Your Journey
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Ready to Go Electric?
          </h2>
          <p className="text-sky-100 mb-8 text-lg max-w-xl mx-auto">
            Reach out to MAX EV today for charger enquiries, network partnerships, or installation information.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-sky-600 font-bold px-8 py-3.5 rounded-full hover:bg-sky-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Enquire Now <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <img src={logo} alt="MAX EV" className="h-11 w-auto mb-4 brightness-0 invert" />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Your all-in-one EV charging solution — building a smarter, greener charging network across India.
            </p>
            <div className="flex items-center gap-2 text-sky-400">
              <Zap size={16} />
              <span className="text-sm font-semibold">MAX EV CHARGING</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    className="text-sm text-gray-400 hover:text-sky-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 duration-200" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    className="text-sm text-gray-400 hover:text-sky-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 duration-200" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-sky-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-sky-400 shrink-0" />
                <a href={`tel:${CONTACT.phone}`} className="text-sm text-gray-400 hover:text-sky-400 transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-sky-400 shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="text-sm text-gray-400 hover:text-sky-400 transition-colors break-all">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} MAX EV Charging. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-500">
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
