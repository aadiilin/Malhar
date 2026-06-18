import Hero from "@/components/sections/Hero";
import MissionSection from "@/components/sections/MissionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProgramsPreview from "@/components/sections/ProgramsPreview";
import LocationSection from "@/components/sections/LocationSection";
import GetInvolved from "@/components/sections/GetInvolved";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactPreview from "@/components/sections/ContactPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <FeaturesSection />
      <ProgramsPreview />
      <LocationSection />
      <GetInvolved />
      <TestimonialsSection />
      <ContactPreview />
    </>
  );
}
