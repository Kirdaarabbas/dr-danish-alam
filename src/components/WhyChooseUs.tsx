import React from 'react';
import { WHY_CHOOSE_US } from '../data/clinicData';
import { 
  Stethoscope, 
  GraduationCap, 
  Building, 
  HeartHandshake, 
  ShieldCheck, 
  Clock, 
  CheckCircle 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Building': return <Building className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'ClockAlert': return <Clock className="w-5 h-5" />;
      default: return <CheckCircle className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with exact prompt title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F2FAFC] border border-[#087E8B]/20 text-[#087E8B] text-xs font-bold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Commitment to Quality & Ethics
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B3954] tracking-tight">
            Why Choose <span className="text-[#087E8B] italic">Dr. Danish Alam?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-3 max-w-xl mx-auto leading-relaxed">
            Ethical dental practice combining premier institutional training with personalized patient care.
          </p>
          <div className="w-12 h-1 bg-[#087E8B] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 6 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="group p-6 rounded-2xl bg-[#F2FAFC] hover:bg-white border border-slate-200/80 hover:border-[#087E8B]/40 hover:shadow-md transition-all duration-200 text-left flex flex-col justify-between"
              id={`why-card-${item.id}`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white group-hover:bg-[#0B3954] text-[#087E8B] group-hover:text-white border border-slate-200/80 flex items-center justify-center transition-colors shadow-2xs">
                    {getIcon(item.icon)}
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-bold text-[#087E8B] bg-white px-2.5 py-0.5 rounded-full border border-[#087E8B]/20 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-[#0B3954] leading-snug group-hover:text-[#087E8B] transition-colors font-serif">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#667085] mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Clinical Practice</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
