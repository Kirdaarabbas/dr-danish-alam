import React from 'react';
import { Award, Hospital, Building2, Clock } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      id: 'exp',
      title: 'Experienced Dental Care',
      description: 'Professional dental care backed by clinical experience.',
      icon: Award,
    },
    {
      id: 'maids',
      title: 'MAIDS Experience',
      description: 'Practised at MAIDS, Delhi from 2009–2014.',
      icon: Hospital,
    },
    {
      id: 'since2015',
      title: 'Since 2015',
      description: 'Serving patients through a dedicated dental practice.',
      icon: Building2,
    },
    {
      id: 'emergency',
      title: '24/7 Emergency Support',
      description: 'Emergency availability around the clock.',
      icon: Clock,
    },
  ];

  return (
    <section className="bg-white py-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group p-5 rounded-2xl bg-[#F2FAFC] hover:bg-white border border-gray-100 hover:border-[#087E8B]/30 hover:shadow-md transition-all duration-200 text-left flex items-start gap-4"
                id={`trust-card-${item.id}`}
              >
                <div className="w-11 h-11 rounded-xl bg-white group-hover:bg-[#0B3954] text-[#087E8B] group-hover:text-white border border-gray-100 flex items-center justify-center shrink-0 transition-colors shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-serif text-[#0B3954] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#667085] mt-1 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
