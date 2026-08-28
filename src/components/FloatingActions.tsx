import React, { useState } from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { Phone } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none"
      id="floating-actions-container"
    >
      {/* 1. Floating Circular Call Button */}
      <div className="relative group pointer-events-auto">
        <a
          href={`tel:${CLINIC_DATA.phone}`}
          className="w-13 h-13 rounded-full bg-[#0B3954] hover:bg-[#087E8B] text-white flex items-center justify-center shadow-xl border-2 border-white transition-all transform hover:scale-108 active:scale-95 cursor-pointer"
          aria-label={`Call Dr. Danish Alam clinic at ${CLINIC_DATA.phone}`}
          id="floating-call-btn"
        >
          <Phone className="w-6 h-6 animate-pulse" />
        </a>
        
        {/* Tooltip on hover */}
        <div className="absolute right-15 top-1/2 -translate-y-1/2 bg-[#0B3954] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block border border-white/10">
          Call: {CLINIC_DATA.phone}
        </div>
      </div>

      {/* 2. Floating Circular Official WhatsApp Button */}
      <div className="relative group pointer-events-auto">
        <a
          href={`https://wa.me/91${CLINIC_DATA.whatsapp}?text=Hello%20Dr.%20Danish%20Alam%2C%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl border-2 border-white transition-all transform hover:scale-108 active:scale-95 cursor-pointer"
          aria-label="Chat on WhatsApp with Dr. Danish Alam"
          id="floating-whatsapp-btn"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Official WhatsApp Logo SVG */}
          <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.201.301-.78 0.979-.955 1.18-.176.201-.351.226-.653.075-.301-.15-1.272-.469-2.424-1.496-.897-.799-1.503-1.786-1.68-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.633-.93-2.238-.244-.59-.493-.51-.678-.52l-.578-.01c-.201 0-.528.075-.804.377s-1.055 1.03-1.055 2.512c0 1.482 1.08 2.914 1.23 3.115.15.201 2.126 3.245 5.15 4.553.72.311 1.282.497 1.72.636.723.23 1.38.197 1.9.12.58-.087 1.78-.728 2.03-1.432.251-.703.251-1.306.176-1.432-.075-.126-.276-.201-.578-.351zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.99.59 3.84 1.61 5.39L2 22l4.87-1.69c1.5 1 3.27 1.58 5.17 1.58 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.06c-1.69 0-3.26-.52-4.57-1.42l-.33-.23-2.88 1 1-2.81-.24-.34A7.95 7.95 0 014.07 11.9c0-4.4 3.57-7.97 7.97-7.97 4.4 0 7.97 3.57 7.97 7.97 0 4.4-3.57 7.97-7.97 7.97z"/>
          </svg>
        </a>

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#172B4D] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block border border-white/10">
          Chat on WhatsApp
        </div>
      </div>
    </div>
  );
};
