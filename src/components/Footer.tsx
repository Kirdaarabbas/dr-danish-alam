import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerNavLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Doctor', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Before & After', href: '#results' },
    { label: 'Patient Reviews', href: '#reviews' },
    { label: 'Book Appointment', href: '#contact' },
    { label: 'Clinic Location', href: '#location' },
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#072437] text-white pt-16 pb-6 border-t border-[#0B3954] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10 text-left">
          
          {/* Col 1: Brand & Doctor Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#087E8B] flex items-center justify-center text-white font-serif font-bold text-base shadow-sm">
                DA
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-white leading-tight">
                  {CLINIC_DATA.name}
                </h3>
                <p className="text-xs text-teal-300 font-medium tracking-wide">
                  {CLINIC_DATA.qualifications}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-light">
              Comprehensive, gentle and hygienic dental care in Green Park, New Delhi. Practised at MAIDS, Delhi (2009–2014) and serving patients through dedicated private practice since 2015.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-800/40 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Emergency Availability: 24 Hours / 7 Days</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-teal-300 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-xs text-slate-300 hover:text-white transition-colors block py-0.5 hover:translate-x-1 transform duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Hours Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-teal-300 uppercase tracking-widest">
              Clinic Contact & Hours
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#087E8B] shrink-0 mt-0.5" />
                <span>{CLINIC_DATA.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#087E8B] shrink-0" />
                <a href={`tel:${CLINIC_DATA.phone}`} className="hover:text-white font-bold text-white">
                  {CLINIC_DATA.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#087E8B] shrink-0" />
                <a href={`mailto:${CLINIC_DATA.email}`} className="hover:text-white">
                  {CLINIC_DATA.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#087E8B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Clinic Hours:</div>
                  <div>10:00 AM – 2:00 PM & 5:00 PM – 10:00 PM</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Editorial Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-medium">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 uppercase tracking-wider">
            <span>© {new Date().getFullYear()} Dr. Danish Alam Dental Care</span>
            <span>BDS (Aligarh Muslim University)</span>
          </div>

          <div className="flex items-center space-x-3 uppercase tracking-widest text-[10px]">
            <span className="text-teal-400">Excellent hygiene</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span>Modern equipment</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span>Patient-first care</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-teal-300 hover:text-white transition-colors cursor-pointer text-xs font-semibold"
            id="footer-scroll-top-btn"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
