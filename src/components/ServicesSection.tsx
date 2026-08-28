import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/clinicData';
import { ServiceItem } from '../types';
import { 
  Zap, 
  Sparkles, 
  Activity, 
  Scissors, 
  ShieldAlert, 
  Droplets, 
  Flame, 
  ShieldCheck, 
  Grid, 
  Wind, 
  HelpCircle, 
  Maximize2, 
  Sun, 
  AlertOctagon, 
  Search,
  ArrowRight,
  Stethoscope
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Restorative', 'Periodontics', 'Cosmetic', 'Emergency'];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Scissors': return <Scissors className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Droplets': return <Droplets className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Grid': return <Grid className="w-5 h-5" />;
      case 'Wind': return <Wind className="w-5 h-5" />;
      case 'HelpCircle': return <HelpCircle className="w-5 h-5" />;
      case 'Maximize2': return <Maximize2 className="w-5 h-5" />;
      case 'Sun': return <Sun className="w-5 h-5" />;
      case 'AlertOctagon': return <AlertOctagon className="w-5 h-5" />;
      default: return <Stethoscope className="w-5 h-5" />;
    }
  };

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.solution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.condition.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F2FAFC] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with exact prompt heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#087E8B]/20 text-[#087E8B] text-xs font-bold uppercase tracking-widest mb-3">
            <Stethoscope className="w-3.5 h-3.5" />
            Comprehensive Dental Care in Green Park
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B3954] tracking-tight">
            Services <span className="text-[#087E8B] italic">Provided</span>
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-3 max-w-xl mx-auto leading-relaxed">
            Clinical diagnosis and patient-first restorative solutions tailored to your specific dental condition.
          </p>
          <div className="w-12 h-1 bg-[#087E8B] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0B3954] text-white shadow-sm'
                    : 'bg-white text-[#172B4D] hover:bg-slate-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#667085] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search condition or treatment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3.5 py-2 bg-white border border-gray-200 rounded-full text-xs text-[#172B4D] placeholder-slate-400 focus:outline-none focus:border-[#087E8B] focus:ring-1 focus:ring-[#087E8B]"
            />
          </div>
        </div>

        {/* Services Grid (All 15 Conditions & Solutions) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#087E8B]/40 transition-all duration-200 flex flex-col justify-between text-left group"
              id={`service-card-${service.id}`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#F2FAFC] group-hover:bg-[#0B3954] text-[#087E8B] group-hover:text-white border border-[#087E8B]/20 flex items-center justify-center transition-colors shadow-2xs">
                    {getIcon(service.icon)}
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                    service.category === 'Emergency' 
                      ? 'bg-rose-50 text-rose-700 border border-rose-200' 
                      : 'bg-[#F2FAFC] text-[#087E8B] border border-[#087E8B]/20'
                  }`}>
                    {service.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0B3954] group-hover:text-[#087E8B] transition-colors leading-snug font-serif">
                  {service.title}
                </h3>

                <div className="text-xs text-slate-500 font-medium mt-1.5 mb-2.5">
                  Condition: <span className="text-[#172B4D] font-semibold">{service.condition}</span>
                </div>

                <p className="text-xs text-[#667085] leading-relaxed line-clamp-3">
                  {service.solution}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087E8B] hover:text-[#0B3954] transition-colors cursor-pointer group-hover:translate-x-0.5 transform duration-150"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                {service.category === 'Emergency' && (
                  <span className="text-[10px] text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                    24/7 On-Call
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 max-w-md mx-auto shadow-sm">
            <p className="text-sm text-[#667085]">No matching dental services found for "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs font-bold text-[#087E8B] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Ethical Medical Notice */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm max-w-2xl mx-auto text-center text-xs text-[#667085] leading-relaxed">
          <span className="font-bold text-[#0B3954]">Medical Note: </span>
          All clinical solutions begin with an in-person assessment, oral examination, and relevant diagnostic radiography before determining the optimal treatment plan.
        </div>

      </div>
    </section>
  );
};
