// import { Layout } from "@/components/layout/Layout";

import { HeroSection } from "@/components/home/HeroSection";
import { QuickActions } from "@/components/home/QuickActions";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { DoctorsPreview } from "@/components/home/DoctorsPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <QuickActions />
      <ServicesPreview />
      <DoctorsPreview />
      <Testimonials />
      <CTASection />
    </>

  );
};

export default Index;
