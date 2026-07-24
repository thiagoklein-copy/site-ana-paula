import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <About />
      <Approach />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <CTABanner />
      <Footer />
    </main>
  );
}
