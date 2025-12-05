'use client'
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Custom Swiper styles for round navigation buttons
const swiperStyles = `
  .swiper-button-next, .swiper-button-prev {
    width: 48px;
    height: 48px;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex !important;
    align-items: center;
    justify-content: center;
    color: #1f2937;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    padding: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
  }

  .swiper-button-prev {
    left: 24px;
  }

  .swiper-button-next {
    right: 24px;
  }

  .swiper-button-next:hover, .swiper-button-prev:hover {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }

  .swiper-button-next::after, .swiper-button-prev::after {
    content: none !important;
  }

  .swiper-button-next svg, .swiper-button-prev svg {
    width: 24px;
    height: 24px;
  }

  .swiper-pagination-bullet {
    background-color: rgba(255, 255, 255, 0.6);
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet-active {
    background-color: rgba(255, 255, 255, 1);
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .swiper-button-next, .swiper-button-prev {
      width: 40px;
      height: 40px;
    }

    .swiper-button-prev {
      left: 12px;
    }

    .swiper-button-next {
      right: 12px;
    }

    .swiper-button-next svg, .swiper-button-prev svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export default function Home() {

  const heroImages = [
    '/assets/img/background/hero1.jpg',
    '/assets/img/background/hero1.jpg',
    '/assets/img/background/hero1.jpg',
  ];

  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = swiperStyles;
    document.head.appendChild(styleSheet);
    return () => styleSheet.remove();
  }, []);
  return (
    <div className="min-h-screen bg-primary font-sans text-zinc-900 dark:bg-primary dark:text-zinc-100">
      {/* navigation bar */}
      <Header />
      {/* main content */}
      <main className="w-full">
        {/* hero banner - responsive height */}
        <div className="relative w-full md:h-full" style={{ height: 'calc(100vh - 110px)' }}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            className="w-full h-full"
          >
            {heroImages.map((image) => (
              <SwiperSlide key={image} className="w-full h-full">
                <Image
                  src={image}
                  alt="Hero Image"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </SwiperSlide>
            ))}

            {/* Navigation Buttons */}
            <button className="swiper-button-prev" aria-label="Previous slide">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="swiper-button-next" aria-label="Next slide">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
              </svg>
            </button>
          </Swiper>
        </div>
      </main>
      <Footer />
    </div>
  );
}
