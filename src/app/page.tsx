"use client";
import HeroSection from "./sections/herosection";
import Events from "./components/events";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Events />
      <Footer />
    </>
  );
}
