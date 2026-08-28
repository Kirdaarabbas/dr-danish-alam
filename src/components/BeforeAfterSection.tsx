import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BEFORE_AFTER_CASES } from '../data/clinicData';
import { Sparkles, Info, Sliders, ChevronsLeftRight, Check } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging && e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section id="results" className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with exact title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F2FAFC] border border-[#087E8B]/20 text-[#087E8B] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Clinical Treatment Transformations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B3954] tracking-tight">
            Before & <span className="text-[#087E8B] italic">After</span>
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-3 max-w-xl mx-auto leading-relaxed">
            Interactive visual comparison demonstrating representative dental restorations and aesthetic corrections.
          </p>
          <div className="w-12 h-1 bg-[#087E8B] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-3 mb-8 max-w-4xl mx-auto scrollbar-none">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                activeCaseIndex === idx
                  ? 'bg-[#0B3954] text-white shadow-sm'
                  : 'bg-[#F2FAFC] text-[#172B4D] hover:bg-slate-200 border border-gray-200'
              }`}
            >
              {activeCaseIndex === idx && <Check className="w-3 h-3 text-teal-300" />}
              <span>{item.title.split('&')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="max-w-4xl mx-auto bg-[#F2FAFC] rounded-3xl p-5 sm:p-8 border border-gray-200 shadow-xl">
          
          {/* Active Case Title & Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-[#087E8B] uppercase tracking-wider">
                {activeCase.category}
              </span>
              <h3 className="text-lg font-bold text-[#0B3954]">
                {activeCase.title}
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-3 py-1 rounded-md border border-slate-200">
              <Sliders className="w-3.5 h-3.5 text-[#087E8B]" />
              <span>Drag slider below to compare</span>
            </div>
          </div>

          {/* Slider Container */}
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[440px] rounded-xl overflow-hidden select-none cursor-ew-resize touch-none bg-slate-900 shadow-inner"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              if (e.touches.length > 0) handleMove(e.touches[0].clientX);
            }}
          >
            {/* AFTER Image (Full background) */}
            <img
              src={activeCase.afterImage}
              alt={`${activeCase.title} - ${activeCase.afterLabel || 'Clean and Clear Teeth'}`}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              referrerPolicy="no-referrer"
            />
            
            {/* AFTER Label Tag */}
            <div className="absolute top-4 right-4 bg-[#0B3954]/95 backdrop-blur-xs text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-lg pointer-events-none z-10 border border-teal-400/40 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>AFTER: {activeCase.afterLabel || 'Clean and Clear Teeth'}</span>
            </div>

            {/* BEFORE Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={activeCase.beforeImage}
                alt={`${activeCase.title} - ${activeCase.beforeLabel || 'Teeth with Cavity'}`}
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: '100%',
                }}
                referrerPolicy="no-referrer"
              />
              {/* BEFORE Label Tag */}
              <div className="absolute top-4 left-4 bg-slate-950/95 backdrop-blur-xs text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-lg z-10 border border-amber-400/40 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>BEFORE: {activeCase.beforeLabel || 'Teeth with Cavity'}</span>
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Drag Handle Button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#087E8B] text-white border-2 border-white shadow-xl flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                <ChevronsLeftRight className="w-5 h-5 text-white animate-pulse" />
              </div>
            </div>

          </div>

          {/* Quick Slider Range Bar for easy touch accessibility */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 bg-white p-3 rounded-2xl border border-gray-100 shadow-2xs">
            <span className="text-xs font-bold text-amber-700 shrink-0 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Before: {activeCase.beforeLabel || 'Teeth with Cavity'}
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#087E8B]"
              aria-label="Comparison slider position"
            />
            <span className="text-xs font-bold text-[#087E8B] shrink-0 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              After: {activeCase.afterLabel || 'Clean and Clear Teeth'}
            </span>
          </div>

          {/* Case Description & Representative Notice */}
          <div className="mt-4 pt-3 border-t border-slate-200 text-left text-xs text-[#667085] space-y-1">
            <p className="text-sm font-medium text-[#172B4D]">
              <strong>Clinical Procedure:</strong> {activeCase.description}
            </p>
            <p className="text-[11px] text-slate-500 italic">
              <strong>Representative Context:</strong> {activeCase.representativeNote}
            </p>
          </div>

        </div>

        {/* Required Prompt Disclaimer */}
        <div className="mt-8 max-w-2xl mx-auto flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-left">
          <Info className="w-4 h-4 text-[#087E8B] shrink-0 mt-0.5" />
          <p className="text-xs text-[#667085] leading-relaxed">
            <strong className="text-[#0B3954]">Disclaimer: </strong>
            Results vary by patient and treatment. Images are shown with appropriate permission where applicable. All treatment outcomes depend on individual oral anatomy, tissue health, and clinical assessment.
          </p>
        </div>

      </div>
    </section>
  );
};
