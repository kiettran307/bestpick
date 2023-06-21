import { AskedQuestions } from "@/components/AskedQuestions";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import SubFeatures from "@/components/SubFeature";
import Hero from "@/components/Hero";
import { News } from "@/components/News";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { UsefulFeatures } from "@/components/UsefulFeature";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <SubFeatures />
      {/* <Testimonials /> */}
      <UsefulFeatures/>
      <News/>
      <Brands />
      <AskedQuestions/>
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Brands />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
