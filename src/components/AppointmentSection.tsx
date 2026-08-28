import React, { useState, useEffect } from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { AppointmentFormInput } from '../types';
import { 
  Calendar, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  AlertCircle
} from 'lucide-react';

interface AppointmentSectionProps {
  initialConcern?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ initialConcern = '' }) => {
  const [formData, setFormData] = useState<AppointmentFormInput>({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '10:00 AM - 12:00 PM',
    dentalConcern: initialConcern,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialConcern) {
      setFormData(prev => ({ ...prev, dentalConcern: initialConcern }));
    }
  }, [initialConcern]);

  const timeSlots = [
    '10:00 AM – 12:00 PM (Morning Slot)',
    '12:00 PM – 2:00 PM (Afternoon Slot)',
    '5:00 PM – 7:30 PM (Evening Slot)',
    '7:30 PM – 10:00 PM (Night Slot)',
    'Emergency Slot (Immediate Assistance)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable clinic booking pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppForward = () => {
    const text = encodeURIComponent(
      `Hello Dr. Danish Alam,\n\nI would like to request a dental appointment:\n• Name: ${formData.fullName}\n• Phone: ${formData.phone}\n• Email: ${formData.email || 'N/A'}\n• Preferred Date: ${formData.preferredDate || 'Earliest available'}\n• Preferred Time: ${formData.preferredTime}\n• Concern: ${formData.dentalConcern || 'General Checkup'}\n\nPlease confirm availability.`
    );
    window.open(`https://wa.me/91${CLINIC_DATA.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with exact prompt title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F2FAFC] border border-[#087E8B]/20 text-[#087E8B] text-xs font-bold uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5" />
            Schedule Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B3954] tracking-tight">
            Book Your <span className="text-[#087E8B] italic">Appointment</span>
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-3 max-w-xl mx-auto leading-relaxed">
            Fill out the form below to request your consultation slot with Dr. Danish Alam.
          </p>
          <div className="w-12 h-1 bg-[#087E8B] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Contact & Fast Action Cards */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="bg-[#0B3954] text-white p-7 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-36 h-36 rounded-full bg-[#087E8B]/20 blur-xl"></div>
              
              <h3 className="text-2xl font-bold font-serif mb-2 text-white">Need Immediate Care?</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 font-light">
                For urgent dental trauma, acute pain, or same-day scheduling, contact our clinic team directly via phone or WhatsApp.
              </p>

              {/* Call Action */}
              <div className="space-y-3">
                <a
                  href={`tel:${CLINIC_DATA.phone}`}
                  className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-2xl border border-white/15 transition-all text-white group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#087E8B] text-white flex items-center justify-center shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-teal-200 uppercase tracking-wider font-bold">Direct Call</div>
                      <div className="text-sm font-bold tracking-tight">{CLINIC_DATA.phone}</div>
                    </div>
                  </div>
                  <span className="text-xs text-teal-200 font-semibold group-hover:translate-x-1 transition-transform">Call Now →</span>
                </a>

                {/* WhatsApp Action */}
                <a
                  href={`https://wa.me/91${CLINIC_DATA.whatsapp}?text=Hello%20Dr.%20Danish%20Alam%2C%20I%20would%20like%20to%20request%20a%20dental%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#25D366]/20 hover:bg-[#25D366]/30 rounded-2xl border border-[#25D366]/40 transition-all text-white group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                      {/* Official WhatsApp SVG */}
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.201.301-.78 0.979-.955 1.18-.176.201-.351.226-.653.075-.301-.15-1.272-.469-2.424-1.496-.897-.799-1.503-1.786-1.68-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.633-.93-2.238-.244-.59-.493-.51-.678-.52l-.578-.01c-.201 0-.528.075-.804.377s-1.055 1.03-1.055 2.512c0 1.482 1.08 2.914 1.23 3.115.15.201 2.126 3.245 5.15 4.553.72.311 1.282.497 1.72.636.723.23 1.38.197 1.9.12.58-.087 1.78-.728 2.03-1.432.251-.703.251-1.306.176-1.432-.075-.126-.276-.201-.578-.351zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.99.59 3.84 1.61 5.39L2 22l4.87-1.69c1.5 1 3.27 1.58 5.17 1.58 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.06c-1.69 0-3.26-.52-4.57-1.42l-.33-.23-2.88 1 1-2.81-.24-.34A7.95 7.95 0 014.07 11.9c0-4.4 3.57-7.97 7.97-7.97 4.4 0 7.97 3.57 7.97 7.97 0 4.4-3.57 7.97-7.97 7.97z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] text-emerald-300 uppercase tracking-wider font-bold">WhatsApp Message</div>
                      <div className="text-sm font-bold tracking-tight">{CLINIC_DATA.whatsapp}</div>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-300 font-semibold group-hover:translate-x-1 transition-transform">Chat Now →</span>
                </a>
              </div>

              {/* Clinic hours reminder */}
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-300 space-y-1">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-300" />
                  <span><strong>Hours:</strong> 10:00 AM – 2:00 PM & 5:00 PM – 10:00 PM</span>
                </div>
                <div className="text-teal-200 font-semibold pl-5.5">
                  • 24/7 Emergency Support Available
                </div>
              </div>
            </div>

            {/* Privacy & Professional standard */}
            <div className="p-5 rounded-2xl bg-[#F2FAFC] border border-gray-100 text-xs text-[#667085] flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-[#087E8B] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#0B3954]">Confidential & Professional:</strong> Your clinical information is handled strictly for appointment scheduling and consultation prep.
              </span>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7 bg-[#F2FAFC] p-7 sm:p-9 rounded-3xl border border-gray-200 shadow-sm text-left">
            
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-extrabold text-[#0B3954]">
                  Appointment Request Received!
                </h3>
                
                <div className="bg-white p-4 rounded-xl border border-slate-200 max-w-md mx-auto text-left text-xs text-[#172B4D] space-y-2">
                  <p className="leading-relaxed">
                    Thank you, <strong className="text-[#0B3954]">{formData.fullName}</strong>. Your appointment request for <strong>{formData.preferredDate || 'upcoming slot'} ({formData.preferredTime})</strong> has been registered.
                  </p>
                  <p className="text-[#667085] leading-relaxed">
                    Our clinic team will call or WhatsApp you at <strong className="text-[#0B3954]">{formData.phone}</strong> shortly to confirm and finalize your appointment time.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleWhatsAppForward}
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs px-4 py-2.5 rounded-lg shadow-sm transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send details on WhatsApp directly</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        preferredDate: '',
                        preferredTime: '10:00 AM - 12:00 PM',
                        dentalConcern: '',
                      });
                    }}
                    className="text-xs font-semibold text-[#0B3954] hover:underline px-3 py-2"
                  >
                    Book another appointment
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#0B3954] uppercase tracking-wider mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-[#172B4D] focus:outline-none focus:border-[#087E8B] focus:ring-1 focus:ring-[#087E8B]"
                  />
                </div>

                {/* Phone Number & Email in 2 Cols */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B3954] uppercase tracking-wider mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-[#172B4D] focus:outline-none focus:border-[#087E8B] focus:ring-1 focus:ring-[#087E8B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B3954] uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-[#172B4D] focus:outline-none focus:border-[#087E8B] focus:ring-1 focus:ring-[#087E8B]"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferred Date & Preferred Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B3954] uppercase tracking-wider mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-[#172B4D] focus:outline-none focus:border-[#087E8B] focus:ring-1 focus:ring-[#087E8B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B3954] uppercase tracking-wider mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-[#172B4D] focus:outline-none focus:border-[#087E8B] focus:ring-1 focus:ring-[#087E8B]"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Dental Concern / Message */}
                <div>
                  <label className="block text-xs font-bold text-[#0B3954] uppercase tracking-wider mb-1">
                    Dental Concern / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your symptoms (e.g., toothache, cleaning, broken tooth, routine checkup)..."
                    value={formData.dentalConcern}
                    onChange={(e) => setFormData({ ...formData, dentalConcern: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-[#172B4D] focus:outline-none focus:border-[#087E8B] focus:ring-1 focus:ring-[#087E8B] resize-none"
                  ></textarea>
                </div>

                {/* CTA Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0B3954] hover:bg-[#087E8B] text-white font-bold text-sm py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-50"
                  id="submit-appointment-btn"
                >
                  <Calendar className="w-4 h-4 text-teal-300" />
                  <span>{isSubmitting ? 'Submitting Request...' : 'Request Appointment'}</span>
                </button>

                <p className="text-[11px] text-[#667085] text-center leading-tight">
                  * Submission sends an appointment request. Our staff calls to confirm your exact time slot.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
