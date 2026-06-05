import { Hero } from "@/components/sections/home/Hero";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { Overview } from "@/components/sections/home/Overview";
import { ServicesPreview } from "@/components/sections/home/ServicesPreview";
import { WhyLunar } from "@/components/sections/home/WhyLunar";
import { Process } from "@/components/sections/home/Process";
import { ProjectsPreview } from "@/components/sections/home/ProjectsPreview";
import { GlobalReach } from "@/components/sections/home/GlobalReach";
import { Principles } from "@/components/sections/home/Principles";
import { CTA } from "@/components/sections/shared/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Overview />
      <ServicesPreview />
      <WhyLunar />
      <Process />
      <ProjectsPreview />
      <GlobalReach />
      <Principles />
      <CTA />
    </>
  );
}
