import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function PageBanner({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      {/* Blue accent glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link to="/" className="flex items-center gap-1 hover:text-sky-400 transition-colors">
            <Home size={13} /> Home
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              <ChevronRight size={13} className="text-gray-600" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-sky-400 transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-gray-300">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}

        {/* Decorative line */}
        <div className="mt-8 flex items-center gap-3">
          <div className="h-1 w-12 bg-sky-500 rounded-full" />
          <div className="h-1 w-6 bg-red-500 rounded-full" />
          <div className="h-1 w-3 bg-gray-600 rounded-full" />
        </div>
      </div>
    </section>
  );
}
