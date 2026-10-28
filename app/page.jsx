"use client";

import { useRef } from "react";
import AlumniSection from "./components/AlumniSection";
import DemoDialog from "./components/DemoDialog";
import EventsSection from "./components/EventsSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import HeroSection from "./components/HeroSection";
import LeadershipSection from "./components/LeadershipSection";
import ResourcesSection from "./components/ResourcesSection";
import UniversitySection from "./components/UniversitySection";

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
