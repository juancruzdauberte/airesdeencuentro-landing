"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import QuickFactsSection from "@/components/sections/QuickFactsSection";
import GallerySection from "@/components/sections/GallerySection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import PoliciesSection from "@/components/sections/PoliciesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LocationSection from "@/components/sections/LocationSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="w-full bg-surface min-h-screen flex flex-col">
      <Header />

      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)] flex-1">
        <HeroSection />
        <QuickFactsSection />
        <GallerySection />
        <AmenitiesSection />
        <PoliciesSection />
        <TestimonialsSection />
        <LocationSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
