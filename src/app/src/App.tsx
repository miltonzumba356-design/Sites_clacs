import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Solutions Section */}
        <SolutionsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}