"use client";

import { useEffect, useRef, useState } from "react";
import Photo from "../shared/Photo";
import { slides } from "../../data/site-data";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (paused) return undefined;
    const interval = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [paused]);

  function changeSlide(direction) {
    setCurrentSlide((current) => (current + direction + slides.length) % slides.length);
  }

  return (
    <div
      className="slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const distance = touchStartX.current - event.changedTouches[0].clientX;
        if (distance > 50) changeSlide(1);
        else if (distance < -50) changeSlide(-1);
        touchStartX.current = null;
      }}
      aria-label="Featured stories"
    >
      <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div className="slide" key={slide.title}>
            <Photo src={slide.image} alt={slide.alt} />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="slider-arrow prev" type="button" aria-label="Previous slide" onClick={() => changeSlide(-1)}>‹</button>
      <button className="slider-arrow next" type="button" aria-label="Next slide" onClick={() => changeSlide(1)}>›</button>
      <div className="slider-nav">
        {slides.map((slide, index) => (
          <button
            className={`slider-dot${index === currentSlide ? " active" : ""}`}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : undefined}
            key={slide.title}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
