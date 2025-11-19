import React from "react";
import PropTypes from "prop-types";
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
        {slides.map((slide) => (
          <div key={slide.id || slide.image} className="carousel-slide">
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

CustomCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      image: PropTypes.string.isRequired,
      alt: PropTypes.string,
      caption: PropTypes.string,
    })
  ),
};