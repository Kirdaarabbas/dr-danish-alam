import React, { useState } from 'react';
import { PATIENT_REVIEWS } from '../data/clinicData';
import { Star, ShieldCheck, MessageSquareQuote, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const displayedReviews = showAllReviews ? PATIENT_REVIEWS : PATIENT_REVIEWS.slice(0, 4);

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#F2FAFC] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with exact prompt title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#087E8B]/20 text-[#087E8B] text-xs font-bold uppercase tracking-widest mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Patient Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B3954] tracking-tight">
            What Our <span className="text-[#087E8B] italic">Patients Say</span>
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-3 max-w-xl mx-auto leading-relaxed">
            Honest feedback from patients receiving care at Dr. Danish Alam's dental clinic in Green Park.
          </p>
          <div className="w-12 h-1 bg-[#087E8B] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left relative"
              id={`review-card-${review.id}`}
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#087E8B] bg-[#F2FAFC] px-2.5 py-0.5 rounded-full border border-[#087E8B]/20">
                    {review.treatmentType}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-[#172B4D] leading-relaxed italic mb-5 font-light">
                  “{review.quote}”
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#0B3954] text-white flex items-center justify-center text-xs font-bold font-serif">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B3954] flex items-center gap-1">
                      {review.author}
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" />
                    </div>
                    <div className="text-[10px] text-[#667085]">{review.date}</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                  <ShieldCheck className="w-3 h-3" />
                  Verified Visit
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Reviews Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAllReviews(!showAllReviews)}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#0B3954] hover:text-[#087E8B] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full border border-gray-200 shadow-sm transition-all cursor-pointer"
            id="view-more-reviews-btn"
          >
            <span>{showAllReviews ? 'Show Fewer Reviews' : 'View More Reviews'}</span>
            {showAllReviews ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Notice on patient feedback */}
        <div className="mt-8 text-center text-xs text-[#667085]">
          All reviews reflect authentic patient experiences regarding consultation, clinic environment, and treatment communications.
        </div>

      </div>
    </section>
  );
};
