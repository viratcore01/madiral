import Hero from "@/components/landing/Hero";
// import VisionBenefits from "@/components/landing/VisionBenefits";
import ParallaxBanner from "@/components/landing/ParallaxBanner";
import AppComingSoon from "@/components/landing/AppComingSoon";
import AboutUs from "@/components/landing/AboutUs";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      {/* <VisionBenefits /> */}
      <ParallaxBanner />
      <AppComingSoon />
      <ContactForm />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default Index;
