import { AskedQuestions } from "@/components/AskedQuestions";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Products } from "@/components/Products";
// import { UsefulFeatures } from "@/components/UsefulFeature";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Brands />
      <Products />
      {/* <Testimonials /> */}
      {/* <UsefulFeatures/> */}
      {/* <Testimonials /> */}
      <AskedQuestions/>
      <Contact />
    </>
  );
}
