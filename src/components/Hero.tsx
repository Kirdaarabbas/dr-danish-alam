import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { Phone, Calendar, ArrowRight, ShieldCheck, CheckCircle2, Award, Clock, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenAppointmentModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-white via-[#F2FAFC] to-white pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden border-b border-gray-100">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#087E8B]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#0B3954]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy & Editorial Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Editorial pill badge */}
            <div>
              <span className="inline-block px-3.5 py-1.5 bg-[#F2FAFC] text-[#087E8B] text-xs font-bold rounded-full border border-[#087E8B]/20 uppercase tracking-widest">
                ESTABLISHED 2015 • NEW DELHI
              </span>
            </div>

            {/* Main Headline - Editorial Serif */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] text-[#0B3954] tracking-tight">
              Healthy Smiles.<br />
              <span className="text-[#087E8B] italic">Confident You.</span>
            </h1>

            {/* Supporting Editorial Paragraph */}
            <p className="text-[#667085] text-base sm:text-lg max-w-xl leading-relaxed">
              Comprehensive dental care by <strong className="text-[#0B3954] font-semibold">Dr. Danish Alam</strong>, combining clinical excellence with a patient-first approach in the heart of Green Park.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenAppointmentModal}
                className="bg-[#0B3954] hover:bg-[#087E8B] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                id="hero-book-cta"
              >
                <span>Book Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${CLINIC_DATA.phone}`}
                className="border-2 border-[#0B3954] hover:bg-[#0B3954]/5 text-[#0B3954] px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all duration-200 text-center"
                id="hero-call-cta"
              >
                <Phone className="w-4 h-4 text-[#0B3954]" />
                <span>Call {CLINIC_DATA.phone}</span>
              </a>
            </div>

            {/* Editorial Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-left">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#087E8B]" />
                  <h4 className="text-[#0B3954] font-bold text-sm">MAIDS Experience</h4>
                </div>
                <p className="text-[#667085] text-xs mt-1 italic">
                  Practised 2009–2014 at Delhi's premier institute.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-left">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <h4 className="text-[#0B3954] font-bold text-sm">24/7 Emergency</h4>
                </div>
                <p className="text-[#667085] text-xs mt-1 italic">
                  Urgent dental care available around the clock.
                </p>
              </div>
            </div>

            {/* Micro reassurance line */}
            <div className="flex items-center gap-4 text-xs text-[#667085] pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#087E8B]" />
                Open 7 Days: 10 AM–2 PM & 5 PM–10 PM
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-700 font-semibold">Sanitized & Safe Clinic</span>
            </div>

          </div>

          {/* Right Column: Editorial Hero Showcase with Deep Navy Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-[#0B3954] p-6 sm:p-8 shadow-2xl overflow-hidden text-white border border-[#0B3954]/50">
              
              {/* Subtle dot matrix overlay */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#F2FAFC 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />

              <div className="relative z-10 space-y-6">
                
                {/* Doctor Visual Card Frame */}
                <div className="w-full aspect-[4/3] sm:aspect-[4/3] rounded-[28px] bg-[#F2FAFC] overflow-hidden shadow-xl border-4 border-[#087E8B]/30 relative group">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"
                    alt="Dr. Danish Alam Dental Care Green Park"
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3954]/90 via-[#0B3954]/30 to-transparent" />
                  
                  {/* Overlay text */}
                  <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                    <div className="text-base font-bold tracking-tight">Dr. Danish Alam</div>
                    <div className="text-xs text-teal-200 font-medium font-serif italic">BDS (AMU) • Ex-MAIDS Delhi</div>
                    <div className="text-[11px] text-slate-300 mt-0.5">Green Park Main Market, New Delhi</div>
                  </div>
                </div>

                {/* Editorial Location and Hours Showcase in Navy Frame */}
                <div className="space-y-4 text-left pt-2 border-t border-white/10">
                  <div className="flex items-start space-x-3.5">
                    <div className="bg-[#087E8B] p-2 rounded-lg shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-teal-300">
                        Clinic Location
                      </p>
                      <p className="text-xs text-slate-200 font-light mt-0.5 leading-relaxed">
                        {CLINIC_DATA.address.full}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-white/10">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-teal-300">
                        Clinical Hours
                      </p>
                      <p className="text-xs text-slate-200 font-light mt-0.5">
                        10:00 AM – 2:00 PM | 5:00 PM – 10:00 PM
                      </p>
                    </div>

                    <div className="text-right">
                      <a
                        href={`https://wa.me/91${CLINIC_DATA.whatsapp}?text=Hello%20Dr.%20Danish%20Alam%2C%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#087E8B] hover:bg-[#066a75] text-white p-2.5 rounded-full inline-flex items-center justify-center shadow-lg transition-all transform hover:scale-105"
                        aria-label="Chat on WhatsApp"
                      >
                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.201.301-.78 0.979-.955 1.18-.176.201-.351.226-.653.075-.301-.15-1.272-.469-2.424-1.496-.897-.799-1.503-1.786-1.68-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.633-.93-2.238-.244-.59-.493-.51-.678-.52l-.578-.01c-.201 0-.528.075-.804.377s-1.055 1.03-1.055 2.512c0 1.482 1.08 2.914 1.23 3.115.15.201 2.126 3.245 5.15 4.553.72.311 1.282.497 1.72.636.723.23 1.38.197 1.9.12.58-.087 1.78-.728 2.03-1.432.251-.703.251-1.306.176-1.432-.075-.126-.276-.201-.578-.351zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.99.59 3.84 1.61 5.39L2 22l4.87-1.69c1.5 1 3.27 1.58 5.17 1.58 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.06c-1.69 0-3.26-.52-4.57-1.42l-.33-.23-2.88 1 1-2.81-.24-.34A7.95 7.95 0 014.07 11.9c0-4.4 3.57-7.97 7.97-7.97 4.4 0 7.97 3.57 7.97 7.97 0 4.4-3.57 7.97-7.97 7.97z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
