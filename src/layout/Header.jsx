import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import { NAV_LINKS } from '../data/siteData';
import logo from '../assets/maxev-logo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-glass shadow-sm py-3' : 'bg-white/90 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="MAX EV" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-700 hover:text-sky-600 hover:bg-sky-50 font-medium text-sm transition-all duration-200"
                  >
                    {link.label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden slide-up">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.path}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                        >
                          <Zap size={13} className="text-sky-400" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-sky-600 bg-sky-50'
                        : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="btn-primary text-sm py-2.5 px-6"
            >
              <Zap size={15} />
              Enquire Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <img src={logo} alt="MAX EV" className="h-9 w-auto" />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="p-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive ? 'bg-sky-50 text-sky-600' : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
                {link.dropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                      >
                        <Zap size={12} className="text-sky-400" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="p-4 border-t border-gray-100">
            <Link to="/contact" className="btn-primary w-full justify-center text-sm">
              <Zap size={15} />
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
