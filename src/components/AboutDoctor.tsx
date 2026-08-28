import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { GraduationCap, Building, Calendar, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import doctorPortrait from '../assets/images/dr_danish_alam_portrait_1787920086060.jpg';

export const AboutDoctor: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F2FAFC] border border-[#087E8B]/20 text-[#087E8B] text-xs font-bold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Clinical Background & Qualifications
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B3954] tracking-tight">
            Meet <span className="text-[#087E8B] italic">Dr. Danish Alam</span>
          </h2>
          <div className="w-12 h-1 bg-[#087E8B] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Doctor Portrait on Left / Top */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden bg-[#F2FAFC] border-8 border-[#087E8B]/10 shadow-xl">
                <img
                  src={doctorPortrait}
                  alt="Dr. Danish Alam - BDS Aligarh Muslim University, Dental Specialist"
                  className="w-full h-96 sm:h-[450px] object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3954]/90 via-[#0B3954]/20 to-transparent"></div>
                
                <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                  <div className="text-xl font-bold font-serif">Dr. Danish Alam</div>
                  <div className="text-xs text-teal-300 font-medium italic">BDS (Aligarh Muslim University)</div>
                  <div className="text-[11px] text-slate-200 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Ex-MAIDS, Delhi • Practising in Green Park Since 2015
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Qualification Cards on Right */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-[#172B4D] leading-relaxed font-light">
                <strong className="font-semibold text-[#0B3954]">Dr. Danish Alam</strong> is an experienced dental professional with a BDS degree from Aligarh Muslim University and professional experience at MAIDS, Delhi. His clinic was established in 2015 with a focus on providing comfortable, professional and patient-centred dental care.
              </p>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                With comprehensive training in clinical diagnosis, conservative restorative procedures, and gentle operative care, Dr. Danish Alam prioritizes clear patient communication, transparent treatment discussions, and high clinical hygiene standards for every individual visiting the Green Park practice.
              </p>
            </div>

            {/* 3 Qualification & Experience Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              {/* Card 1: BDS */}
              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-[#087E8B]/40 hover:shadow-md transition-all">
                <div className="w-9 h-9 rounded-xl bg-[#F2FAFC] text-[#087E8B] flex items-center justify-center border border-[#087E8B]/20 mb-3">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-base font-bold text-[#0B3954]">BDS</div>
                <div className="text-xs font-medium text-[#172B4D] mt-0.5">Aligarh Muslim University</div>
                <div className="text-[11px] font-semibold text-[#087E8B] mt-2 bg-[#F2FAFC] inline-block px-2.5 py-0.5 rounded-full border border-[#087E8B]/20 uppercase tracking-wider">
                  2001–2006
                </div>
              </div>

              {/* Card 2: MAIDS Experience */}
              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-[#087E8B]/40 hover:shadow-md transition-all">
                <div className="w-9 h-9 rounded-xl bg-[#F2FAFC] text-[#087E8B] flex items-center justify-center border border-[#087E8B]/20 mb-3">
                  <Building className="w-4 h-4" />
                </div>
                <div className="text-base font-bold text-[#0B3954]">Clinical Experience</div>
                <div className="text-xs font-medium text-[#172B4D] mt-0.5">MAIDS, Delhi</div>
                <div className="text-[11px] font-semibold text-[#087E8B] mt-2 bg-[#F2FAFC] inline-block px-2.5 py-0.5 rounded-full border border-[#087E8B]/20 uppercase tracking-wider">
                  2009–2014
                </div>
              </div>

              {/* Card 3: Established */}
              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-[#087E8B]/40 hover:shadow-md transition-all">
                <div className="w-9 h-9 rounded-xl bg-[#F2FAFC] text-[#087E8B] flex items-center justify-center border border-[#087E8B]/20 mb-3">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="text-base font-bold text-[#0B3954]">Practice Established</div>
                <div className="text-xs font-medium text-[#172B4D] mt-0.5">Green Park Clinic</div>
                <div className="text-[11px] font-semibold text-[#087E8B] mt-2 bg-[#F2FAFC] inline-block px-2.5 py-0.5 rounded-full border border-[#087E8B]/20 uppercase tracking-wider">
                  Since 2015
                </div>
              </div>

            </div>

            {/* Clinic Address & Hours Note */}
            <div className="p-4 rounded-2xl bg-[#F2FAFC] border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-bold text-[#0B3954]">Practice Location: </span>
                <span className="text-[#667085]">{CLINIC_DATA.address.full}</span>
              </div>
              <a
                href={`tel:${CLINIC_DATA.phone}`}
                className="shrink-0 font-bold text-[#087E8B] hover:text-[#0B3954] transition-colors inline-flex items-center gap-1"
              >
                <span>Call: {CLINIC_DATA.phone}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
