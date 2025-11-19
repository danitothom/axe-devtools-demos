import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css"; // estilos personalizados opcionales

export default function CustomCarousel({ slides = [] }) {
  return (
    <div className="carousel-wrapper">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={4000}
        showStatus={false}
        emulateTouch
        swipeable
        showIndicators={true}
        dynamicHeight={false}
        stopOnHover={true}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.image} alt={slide.alt || `Slide ${index + 1}`} />
            {slide.caption && (
              <p className="legend carousel-caption">{slide.caption}</p>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}