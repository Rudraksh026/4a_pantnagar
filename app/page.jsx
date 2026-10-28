"use client";

import { useRef } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import DemoDialog from "./components/shared/DemoDialog";
import AlumniSection from "./components/sections/AlumniSection";
import EventsSection from "./components/sections/EventsSection";
import GallerySection from "./components/sections/GallerySection";
import HeroCarousel from "./components/sections/HeroCarousel";
import HeroSection from "./components/sections/HeroSection";
import LeadershipSection from "./components/sections/LeadershipSection";
import ResourcesSection from "./components/sections/ResourcesSection";
import UniversitySection from "./components/sections/UniversitySection";

export default function Home() {
  const registrationDialog = useRef(null);
  const loginDialog = useRef(null);

  function openRegistration() {
    registrationDialog.current?.open();
  }

  function openLogin() {
    loginDialog.current?.open();
  }

  return (
    <>
      <Header onRegister={openRegistration} onLogin={openLogin} />
      <HeroCarousel />
      <main id="main">
        <HeroSection onRegister={openRegistration} />
        <EventsSection onRegister={openRegistration} />
        <LeadershipSection />
        <UniversitySection />
        <ResourcesSection />
        <GallerySection />
        <AlumniSection />
      </main>
      <Footer />
      <DemoDialog ref={registrationDialog} type="reg" />
      <DemoDialog ref={loginDialog} type="log" />
    </>
  );
}
