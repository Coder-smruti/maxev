import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, Zap } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { useReveal } from '../hooks/useReveal';
import { CONTACT } from '../data/siteData';

function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submit delay — replace with actual API/email integration
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
          <CheckCircle size={30} className="text-green-500" />
        </div>
        <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-500 max-w-xs">
          Thank you for reaching out. The MAX EV team will get back to you shortly.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', subject: '', message: '' }); }}
          className="mt-6 text-sm text-sky-600 font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 transition-all bg-gray-50 focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 transition-all bg-gray-50 focus:bg-white"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 transition-all bg-gray-50 focus:bg-white"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 transition-all bg-gray-50 focus:bg-white text-gray-700"
        >
          <option value="">Select a subject</option>
          <option value="product-enquiry">Product Enquiry</option>
          <option value="installation">Installation & Deployment</option>
          <option value="network-partnership">Network Partnership</option>
          <option value="technical-support">Technical Support</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your enquiry..."
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 transition-all bg-gray-50 focus:bg-white resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full btn-secondary justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send size={16} />
            Send Message
          </span>
        )}
      </button>
    </form>
  );
}

export default function Contact() {
  const formRef = useReveal();
  const infoRef = useReveal();

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with the MAX EV team for product enquiries, installation support, or network partnerships."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Info */}
            <div ref={infoRef} className="reveal">
              <div className="badge mb-5">Get in Touch</div>
              <h2 className="font-display font-bold text-4xl text-gray-900 mb-5 leading-tight">
                We're Ready to<br />Help You Go Electric
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Whether you're enquiring about our chargers, planning an installation, or looking to join our charging network — our team is here to assist.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-sky-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Office Address</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{CONTACT.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-sky-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <a href={`tel:${CONTACT.phone}`} className="text-sky-600 font-semibold hover:text-sky-700 transition-colors">
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-sky-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <a href={`mailto:${CONTACT.email}`} className="text-sky-600 font-semibold hover:text-sky-700 transition-colors break-all">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Enquiry Topics */}
              <div className="mt-10">
                <div className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">We can help with</div>
                <div className="flex flex-wrap gap-2">
                  {['Product Enquiries', 'Installation Support', 'Network Partnership', 'Technical Specs', 'Site Assessment', 'Remote Management'].map(t => (
                    <span key={t} className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div ref={formRef} className="reveal">
              <div className="card-premium p-8">
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-sky-500 flex items-center justify-center">
                    <Zap size={15} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-900">Send Us a Message</h3>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="MAX EV Charging Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3!2d80.1984!3d13.0869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTMuMDg2OSwgODAuMTk4NA!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <p className="text-center text-sm text-gray-400 mt-3">
            3/17, Pancharatna Apartments, Welcome Colony, Anna Nagar West Extension, Chennai – 600101
          </p>
        </div>
      </section>
    </>
  );
}
