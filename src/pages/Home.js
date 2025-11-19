import React from "react";
import CustomCarousel from "@/components/Carousel/Carousel"; // gracias al alias @ en webpack

export default function Home() {
  const slides = [
    {
      image: "/images/demo1.jpg",
      caption: "Primer Slide"
    },
    {
      image: "/images/demo2.jpg",
      caption: "Segundo Slide"
    },
    {
      image: "/images/demo3.jpg",
      caption: "Tercer Slide"
    }
  ];

  return (
    <div>
      <h1>Bienvenido</h1>
      <CustomCarousel slides={slides} />
    </div>
  );
}