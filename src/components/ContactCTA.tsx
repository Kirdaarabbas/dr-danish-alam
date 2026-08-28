import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { Calendar, Phone } from 'lucide-react';

interface ContactCTAProps {
  onOpenAppointmentModal: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#0B3954] text-white relative overflow-hidden">
      {/* Background dot pattern and ambient accents */}
      <div className="absolute inset-0 editorial-dots-dark opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#087E8B]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Exact Prompt Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
          Ready to Take Care of <span className="text-teal-300 italic">Your Smile?</span>
        </h2>

        {/* Exact Prompt Supporting Text */}
        <p className="text-base sm:text-lg text-slate-200 mt-4 max-w-xl mx-auto font-light leading-relaxed">
          Schedule your dental consultation with Dr. Danish Alam.
        </p>

        {/* 3 Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          
          {/* 1. Book Appointment */}
          <button
            onClick={onOpenAppointmentModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#087E8B] hover:bg-[#06606A] text-white font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
            id="cta-book-appointment-btn"
          >
            <Calendar className="w-4 h-4 text-teal-200" />
            <span>Book Appointment</span>
          </button>

          {/* 2. Call Now */}
          <a
            href={`tel:${CLINIC_DATA.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#0B3954] font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-full shadow-md transition-all duration-200"
            id="cta-call-now-btn"
          >
            <Phone className="w-4 h-4 text-[#087E8B]" />
            <span>Call Now</span>
          </a>

          {/* 3. WhatsApp Us */}
          <a
            href={`https://wa.me/91${CLINIC_DATA.whatsapp}?text=Hello%20Dr.%20Danish%20Alam%2C%20I%20would%20like%20to%20schedule%20a%20dental%20consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-full shadow-md transition-all duration-200"
            id="cta-whatsapp-us-btn"
          >
            {/* Official WhatsApp icon */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.201.301-.78 0.979-.955 1.18-.176.201-.351.226-.653.075-.301-.15-1.272-.469-2.424-1.496-.897-.799-1.503-1.786-1.68-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.633-.93-2.238-.244-.59-.493-.51-.678-.52l-.578-.01c-.201 0-.528.075-.804.377s-1.055 1.03-1.055 2.512c0 1.482 1.08 2.914 1.23 3.115.15.201 2.126 3.245 5.15 4.553.72.311 1.282.497 1.72.636.723.23 1.38.197 1.9.12.58-.087 1.78-.728 2.03-1.432.251-.703.251-1.306.176-1.432-.075-.126-.276-.201-.578-.351zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.99.59 3.84 1.61 5.39L2 22l4.87-1.69c1.5 1 3.27 1.58 5.17 1.58 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.06c-1.69 0-3.26-.52-4.57-1.42l-.33-.23-2.88 1 1-2.81-.24-.34A7.95 7.95 0 014.07 11.9c0-4.4 3.57-7.97 7.97-7.97 4.4 0 7.97 3.57 7.97 7.97 0 4.4-3.57 7.97-7.97 7.97z"/>
            </svg>
            <span>WhatsApp Us</span>
          </a>

        </div>

        {/* Emergency Availability reassurance */}
        <div className="mt-8 text-xs text-teal-200 font-medium tracking-wide flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>A-24, Green Park Main Market • 24/7 Dental Emergency On-Call</span>
        </div>

      </div>
    </section>
  );
};
