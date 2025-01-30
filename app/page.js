import FaqUI from "@/components/landing/faqUI";
import FeaturesUI from "@/components/landing/featuresUI";
import HeroSection from "@/components/landing/hero";
import HowItWorksUI from "@/components/landing/howItWorksUI";
import TestimonialsUI from "@/components/landing/testimonialsUI";

export default function Home() {
  return (
    <>
      <div className="grid-background"> </div>

      <HeroSection />
      <FeaturesUI />
      <HowItWorksUI />
      <TestimonialsUI />
      <FaqUI />
    </>
  );
}
