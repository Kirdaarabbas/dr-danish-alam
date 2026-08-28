import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { MapPin, Navigation, Clock, Phone, Mail, Compass, ExternalLink } from 'lucide-react';

export const ClinicLocation: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CLINIC_DATA.address.full)}`;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent('A-24, Green Park Main Market, Green Park, New Delhi 110016')}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#F2FAFC] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#087E8B]/20 text-[#087E8B] text-xs font-bold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Central South Delhi Practice
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B3954] tracking-tight">
            Visit Our <span className="text-[#087E8B] italic">Clinic</span>
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-3 max-w-xl mx-auto leading-relaxed">
            Conveniently situated in Green Park Main Market with easy access from Green Park Metro Station.
          </p>
          <div className="w-12 h-1 bg-[#087E8B] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Hours, & Directions Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 text-left">
            
            {/* Address & Landmark Card */}
            <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#0B3954] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#087E8B] uppercase tracking-wider">Clinic Address</div>
                  <h3 className="text-base font-bold text-[#0B3954] mt-0.5 font-serif">
                    {CLINIC_DATA.address.line1}
                  </h3>
                  <p className="text-xs text-[#172B4D] font-medium leading-relaxed">
                    {CLINIC_DATA.address.line2}, {CLINIC_DATA.address.locality}
                  </p>
                  <p className="text-xs text-[#667085]">
                    {CLINIC_DATA.address.city} – {CLINIC_DATA.address.pinCode}, {CLINIC_DATA.address.country}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#F2FAFC] rounded-2xl border border-gray-100 text-xs text-[#667085] space-y-1">
                <div className="font-bold text-[#0B3954] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#087E8B]" />
                  Accessibility & Metro Landmark
                </div>
                <p className="text-xs leading-relaxed">
                  Located on the 2nd Floor in Green Park Main Market, 2 minutes walking distance from Green Park Metro Station (Yellow Line).
                </p>
              </div>

              {/* Get Directions CTA Button */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#087E8B] hover:bg-[#06606A] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-xs transition-all cursor-pointer"
                id="get-directions-btn"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
              </a>
            </div>

            {/* Structured Opening Hours Card (Section 13) */}
            <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#087E8B]" />
                  <h3 className="text-xs font-bold text-[#0B3954] uppercase tracking-wider">
                    Clinic Hours
                  </h3>
                </div>
                <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-100 uppercase tracking-wider">
                  Open All 7 Days
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="font-semibold text-[#172B4D]">Monday – Sunday</span>
                  <span className="text-[#667085] text-right font-medium">
                    10:00 AM – 2:00 PM <br />
                    5:00 PM – 10:00 PM
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-[#0B3954] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Emergency Availability
                  </span>
                  <span className="font-extrabold text-[#087E8B] text-xs">
                    24 Hours / 7 Days
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#667085]">
                <a href={`tel:${CLINIC_DATA.phone}`} className="hover:text-[#087E8B] flex items-center gap-1 font-semibold">
                  <Phone className="w-3.5 h-3.5 text-[#087E8B]" />
                  {CLINIC_DATA.phone}
                </a>
                <a href={`mailto:${CLINIC_DATA.email}`} className="hover:text-[#087E8B] flex items-center gap-1 font-semibold">
                  <Mail className="w-3.5 h-3.5 text-[#087E8B]" />
                  {CLINIC_DATA.email}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Google Maps Iframe */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-full min-h-[380px] lg:min-h-[460px] rounded-3xl overflow-hidden border border-gray-200 shadow-md bg-slate-100">
              <iframe
                title="Dr. Danish Alam Dental Clinic Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
              
              {/* Floating map pin indicator card */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl shadow-md border border-slate-200/80 max-w-xs text-left hidden sm:block pointer-events-none">
                <div className="text-xs font-bold text-[#0B3954]">Dr. Danish Alam Dental Clinic</div>
                <div className="text-[11px] text-[#667085] leading-tight mt-0.5">
                  A-24, 2nd Floor, Green Park Main Market, New Delhi
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
