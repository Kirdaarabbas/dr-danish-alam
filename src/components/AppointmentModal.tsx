import React, { useState, useEffect } from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { AppointmentFormInput } from '../types';
import { 
  X, 
  Calendar, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Send, 
  AlertCircle
} from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialConcern?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialConcern = '',
}) => {
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

  if (!isOpen) return null;

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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleWhatsAppForward = () => {
    const text = encodeURIComponent(
      `Hello Dr. Danish Alam,\n\nI would like to request an appointment:\n• Name: ${formData.fullName}\n• Phone: ${formData.phone}\n• Email: ${formData.email || 'N/A'}\n• Date: ${formData.preferredDate || 'Earliest available'}\n• Slot: ${formData.preferredTime}\n• Concern: ${formData.dentalConcern || 'General Dental Consultation'}\n\nPlease confirm availability.`
    );
    window.open(`https://wa.me/91${CLINIC_DATA.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-7 sm:p-8 shadow-2xl border border-gray-100 animate-fadeIn text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-[#0B3954]">
              Appointment Request Sent!
            </h3>
            
            <div className="bg-[#F2FAFC] p-5 rounded-2xl border border-gray-200 text-xs text-[#172B4D] space-y-2 text-left">
              <p className="leading-relaxed">
                Thank you, <strong className="text-[#0B3954]">{formData.fullName}</strong>. Your consultation request has been submitted.
              </p>
              <p className="text-[#667085] leading-relaxed">
                Our clinic staff will call you at <strong className="text-[#0B3954]">{formData.phone}</strong> to confirm your slot time.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <button
                onClick={handleWhatsAppForward}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-full shadow-xs transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send details on WhatsApp directly</span>
              </button>
              
              <button
                onClick={onClose}
                className="w-full bg-slate-100 hover:bg-slate-200 text-[#0B3954] text-xs font-semibold py-3 rounded-full transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6 pr-6">
              <div className="text-[11px] font-bold text-[#087E8B] uppercase tracking-widest">
                Dr. Danish Alam Dental Practice
              </div>
              <h3 className="text-2xl font-bold font-serif text-[#0B3954] mt-1">
                Book an <span className="text-[#087E8B] italic">Appointment</span>
              </h3>
              <p className="text-xs text-[#667085] mt-1">
                A-24, Green Park Main Market • 10 AM–2 PM & 5 PM–10 PM
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full px-3.5 py-2.5 bg-[#F2FAFC] border border-gray-200 rounded-xl text-sm text-[#172B4D] focus:outline-none focus:border-[#087E8B] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#0B3954] uppercase tracking-wider mb-1">
                    Phone <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F2FAFC] border border-gray-200 rounded-xl text-sm text-[#172B4D] focus:outline-none focus:border-[#087E8B] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B3954] uppercase tracking-wider mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="Optional"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F2FAFC] border border-gray-200 rounded-xl text-sm text-[#172B4D] focus:outline-none focus:border-[#087E8B] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#0B3954] uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F2FAFC] border border-gray-200 rounded-xl text-sm text-[#172B4D] focus:outline-none focus:border-[#087E8B] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B3954] uppercase tracking-wider mb-1">
                    Preferred Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F2FAFC] border border-gray-200 rounded-xl text-xs text-[#172B4D] focus:outline-none focus:border-[#087E8B] focus:bg-white"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0B3954] uppercase tracking-wider mb-1">
                  Dental Concern / Reason
                </label>
                <input
                  type="text"
                  placeholder="e.g. Toothache, Teeth cleaning, Cavity checkup..."
                  value={formData.dentalConcern}
                  onChange={(e) => setFormData({ ...formData, dentalConcern: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F2FAFC] border border-gray-200 rounded-xl text-sm text-[#172B4D] focus:outline-none focus:border-[#087E8B] focus:bg-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0B3954] hover:bg-[#087E8B] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-full shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  <Calendar className="w-4 h-4 text-teal-300" />
                  <span>{isSubmitting ? 'Submitting...' : 'Request Appointment'}</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <a
                  href={`tel:${CLINIC_DATA.phone}`}
                  className="text-xs font-bold text-[#087E8B] hover:underline"
                >
                  Or Call Direct: {CLINIC_DATA.phone}
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
