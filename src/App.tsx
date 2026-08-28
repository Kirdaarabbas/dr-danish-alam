import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutDoctor } from './components/AboutDoctor';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ReviewsSection } from './components/ReviewsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AppointmentSection } from './components/AppointmentSection';
import { ClinicLocation } from './components/ClinicLocation';
import { ContactCTA } from './components/ContactCTA';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedConcern, setSelectedConcern] = useState('');

  const handleOpenAppointmentModal = (concern?: string) => {
    setSelectedConcern(concern || '');
    setModalOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedConcern(serviceTitle);
    // Scroll smoothly to appointment section and fill concern or open modal
    const element = document.querySelector('#contact');
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#172B4D] flex flex-col selection:bg-[#087E8B]/20 selection:text-[#0B3954]">
      {/* 3. Compact Sticky Header */}
      <Header onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 4. Hero Section */}
        <Hero onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* 5. Quick Trust Bar */}
        <TrustBar />

        {/* 6. About Dr. Danish Alam */}
        <AboutDoctor />

        {/* 7. Services Provide (All 15 Conditions & Solutions) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 8. Before & After Results (Interactive Horizontal Slider) */}
        <BeforeAfterSection />

        {/* 9. Patient Reviews */}
        <ReviewsSection />

        {/* 10. Why Choose Us */}
        <WhyChooseUs />

        {/* 11. Appointment Section */}
        <AppointmentSection initialConcern={selectedConcern} />

        {/* 12 & 13. Clinic Location & Opening Hours */}
        <ClinicLocation />

        {/* 14. Contact CTA */}
        <ContactCTA onOpenAppointmentModal={() => handleOpenAppointmentModal()} />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* 15. Floating Call & WhatsApp Buttons */}
      <FloatingActions />

      {/* Quick Booking Modal */}
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialConcern={selectedConcern}
      />
    </div>
  );
}
