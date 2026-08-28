import React, { useState, useEffect } from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenAppointmentModal: (concern?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointmentModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Results', href: '#results' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
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
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top micro-bar for emergency & location */}
      <div className="bg-[#0B3954] text-white text-xs py-1.5 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-teal-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              24/7 Emergency Dental Availability in Green Park
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#087E8B]" />
              A-24, 2nd Floor, Green Park Main Market, New Delhi
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#087E8B]" />
              10 AM–2 PM | 5 PM–10 PM
            </span>
            <a 
              href={`tel:${CLINIC_DATA.phone}`}
              className="flex items-center gap-1 font-semibold text-white hover:text-teal-200 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#087E8B]" />
              {CLINIC_DATA.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation bar */}
      <div className={`w-full bg-white transition-all duration-200 ${
        isScrolled 
          ? 'shadow-md border-b border-gray-100 py-3' 
          : 'border-b border-gray-100 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between">
          {/* Logo and Doctor Brand (Left) */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 group text-left shrink-0"
            id="brand-logo-link"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0B3954] flex items-center justify-center text-white shadow-sm border border-[#087E8B]/30 group-hover:bg-[#087E8B] transition-colors">
              {/* Dental Tooth Minimalist Emblem */}
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 7 2.5 10 .8 2.4 2.5 3.5 3.5 3.5s2.7-1.1 3.5-3.5c1-3 2.5-6.5 2.5-10 0-3.5-2.5-6-6-6z" />
                <path d="M12 6v6" />
                <path d="M9 9h6" />
              </svg>
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-[#0B3954] leading-tight tracking-tight uppercase font-serif">
                {CLINIC_DATA.name}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#087E8B] font-semibold">
                BDS | Dental Specialist
              </div>
            </div>
          </a>

          {/* Book Appointment CTA centered in middle of screen */}
          <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
            <button
              onClick={() => onOpenAppointmentModal()}
              className="bg-[#087E8B] hover:bg-[#066a75] text-white px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer inline-flex items-center gap-2 transform hover:-translate-y-0.5"
              id="header-book-appointment-btn"
            >
              <Calendar className="w-4 h-4 text-teal-200" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Right Navigation & Quick Call */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-5 text-xs font-bold uppercase tracking-wider text-[#667085]" aria-label="Main Navigation">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className="hover:text-[#087E8B] transition-colors relative py-1"
                  id={`nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href={`tel:${CLINIC_DATA.phone}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3954] bg-[#F2FAFC] hover:bg-slate-100 px-3.5 py-2 rounded-full border border-gray-200 transition-colors"
              id="header-call-btn"
            >
              <Phone className="w-3.5 h-3.5 text-[#087E8B]" />
              <span>{CLINIC_DATA.phone}</span>
            </a>
          </div>

          {/* Mobile / Tablet Middle & Right Controls */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={() => onOpenAppointmentModal()}
              className="sm:hidden bg-[#087E8B] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-full shadow-xs"
              id="mobile-quick-book-btn"
            >
              Book
            </button>
            <a
              href={`tel:${CLINIC_DATA.phone}`}
              className="p-2 text-[#0B3954] bg-[#F2FAFC] border border-gray-200 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Call clinic"
            >
              <Phone className="w-4 h-4 text-[#087E8B]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0B3954] hover:text-[#087E8B] hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="text-base font-medium text-[#172B4D] hover:text-[#087E8B] hover:bg-[#F2FAFC] px-3 py-2.5 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 mt-2 flex flex-col gap-2.5">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAppointmentModal(); }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0B3954] text-white font-semibold py-3 rounded-lg text-sm shadow-sm"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                Book Appointment
              </button>
              <a
                href={`tel:${CLINIC_DATA.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F2FAFC] text-[#0B3954] font-semibold py-2.5 rounded-lg text-sm border border-slate-200"
              >
                <Phone className="w-4 h-4 text-[#087E8B]" />
                Call {CLINIC_DATA.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
