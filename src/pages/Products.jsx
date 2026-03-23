import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ChevronRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { useReveal, useStaggerReveal } from '../hooks/useReveal';
import { PRODUCTS } from '../data/siteData';

function ProductCard({ product }) {
  return (
    <div className="card-premium overflow-hidden flex flex-col">
      {/* Header visual */}
      <div className={`relative h-48 flex items-center justify-center ${
        product.color === 'red' 
          ? 'bg-gradient-to-br from-red-50 via-orange-50 to-red-50' 
          : 'bg-gradient-to-br from-sky-50 via-blue-50 to-sky-50'
      }`}>
        {product.featured && (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
        <div className="text-center">
          <div className={`font-display font-black text-5xl mb-2 ${
            product.color === 'red' ? 'text-red-500' : 'text-sky-500'
          }`}>
            {product.power}
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Zap size={14} className={product.color === 'red' ? 'text-red-400' : 'text-sky-400'} />
            <span className="text-sm font-semibold text-gray-600">{product.type}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-4 w-fit ${
          product.color === 'red' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-sky-50 text-sky-600 border border-sky-100'
        }`}>
          {product.tag}
        </div>
        <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-500 mb-5 leading-relaxed">{product.highlight}</p>
        
        <ul className="space-y-2 flex-1 mb-6">
          {product.features.map(f => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                product.color === 'red' ? 'bg-red-400' : 'bg-sky-400'
              }`} />
              {f}
            </li>
          ))}
        </ul>

        <Link
          to={product.id === 'ev-dc-60-dual' ? '/dc60' : '#'}
          className={`inline-flex items-center gap-2 font-semibold text-sm transition-colors ${
            product.color === 'red' ? 'text-red-600 hover:text-red-700' : 'text-sky-600 hover:text-sky-700'
          }`}
        >
          {product.id === 'ev-dc-60-dual' ? 'View Full Specifications' : 'View Details'}
          <ChevronRight size={15} />
        </Link>
      </div>
    </div>
  );
}

export default function Products() {
  const titleRef = useReveal();
  const gridRef = useStaggerReveal();

  return (
    <>
      <PageBanner
        title="Our Products"
        subtitle="Commercial-grade DC fast chargers — single and dual connector, from 30 kW to 120 kW."
        breadcrumbs={[{ label: 'Products' }]}
      />

      {/* Intro strip */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={titleRef} className="reveal flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div className="badge mb-4">EV DC Chargers</div>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-2">
                Complete Charging Lineup
              </h2>
              <p className="text-gray-500 text-lg max-w-xl">
                Single-gun and dual-gun DC fast chargers — built for commercial, public, and hospitality deployments.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Link to="/dc60" className="btn-secondary">
                DC 60 Spotlight <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Enquire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single Connector */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="font-display font-bold text-lg text-gray-400 uppercase tracking-widest px-4">
                Single Connector
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <div ref={gridRef} className="stagger grid sm:grid-cols-2 gap-6">
              {PRODUCTS.filter(p => p.tag === 'Single Connector').map(p => (
                <div key={p.id} className="reveal">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>

          {/* Dual Connector */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="font-display font-bold text-lg text-gray-400 uppercase tracking-widest px-4">
                Dual Connector
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <div className="stagger grid sm:grid-cols-2 gap-6">
              {PRODUCTS.filter(p => p.tag === 'Dual Connector').map(p => (
                <div key={p.id} className="reveal">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display font-bold text-4xl mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Contact our team for site assessment, product selection guidance, and installation support.
          </p>
          <Link to="/contact" className="btn-secondary">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
