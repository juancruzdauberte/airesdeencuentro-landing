import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import BookingBar from "@/components/BookingBar";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import GallerySection from "@/components/sections/GallerySection";
import LocationSection from "@/components/sections/LocationSection";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream text-brand-charcoal">
      <Header />
      <HeroSection />
      <BookingBar />
      <AmenitiesSection />
      <GallerySection />
      <LocationSection />
      <FAQSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
