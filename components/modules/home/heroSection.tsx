"use client"
import React, { FC, useEffect, useState } from "react";
import CategoryPage from "./category";

const HeroSection: FC = () => {
  const images = [
    "/assets/slidebanner.png",
    "/assets/slidebanner.png",
    "/assets/slidebanner.png",

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="relative w-full bg-[#ffff]" data-carousel="slide">

        <div className="relative overflow-hidden rounded-lg md:h-96">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === index ? "opacity-100" : "opacity-0"
                }`}
              data-carousel-item
            >
              <img
                src={src}
                className="block w-full h-[391px] object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"
                }`}
              aria-current={currentIndex === index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="mt-[-384px] container mx-auto max-w-[1350px] bg-[#ffff]">
        <CategoryPage />
      </div>
    </div>

  );
};

export default HeroSection;
