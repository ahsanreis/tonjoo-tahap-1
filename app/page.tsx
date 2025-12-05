"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/UI/Card";
import ProductCard from "@/components/UI/ProductCard";

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
  const heroImages = ["/assets/img/background/hero1.jpg", "/assets/img/background/hero1.jpg", "/assets/img/background/hero1.jpg"];
  // icons: shoes, gift, package, customer service
  const cardData = [
    {
      Icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
          />
        </svg>
      ),
      title: "Kualitas Terpercaya",
      subtitle: "Produk kami di buat dari bahan berkualitas. Kami bekerjasama dengan mereka yang paling berpengalaman dalam industri.",
    },
    {
      Icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      ),
      title: "Kirim sebagai Hadiah",
      subtitle: "Ingin memberi bingkisan pada orang tersayang dengan kemasan serta pesan khusus? Sampaikan saja, kami yang siapkan.",
    },
    {
      Icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
          />
        </svg>
      ),
      title: "Pengembalian Mudah",
      subtitle: "Tidak puas dengan pembelian Anda (kualitas buruk atau salah ukuran)? Kami siap untuk melakukan retur barang kapanpun.",
    },
    {
      Icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
      title: "Layanan Pelanggan",
      subtitle: "Untuk semua informasi, kami selalu siap untuk melayani kebutuhan dan pertanyaan Anda.",
    },
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
        <div className="relative w-full md:h-full" style={{ height: "calc(100vh - 110px)" }}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            className="w-full h-full"
          >
            {heroImages.map((image) => (
              <SwiperSlide key={image} className="w-full h-full">
                <Image src={image} alt="Hero Image" layout="fill" objectFit="cover" className="w-full h-full" />
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
        {/* card here */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <Card key={index} Icon={card.Icon} title={card.title} subtitle={card.subtitle} />
          ))}
        </div>
        {/* swiper of products */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Produk Pilihan</h2>
            <p className="text-lg text-gray-600">Temukan koleksi terbaik kami dengan harga spesial</p>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".products-button-next",
              prevEl: ".products-button-prev",
            }}
            pagination={{ clickable: true, el: ".products-pagination" }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="relative"
          >
            <SwiperSlide>
              <ProductCard image="/assets/img/background/hero1.jpg" tags="PREMIUM, TERBARU" title="Koleksi Premium Edisi Terbatas Eksklusif" rating={4.8} price={899000} discount={25} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard image="/assets/img/background/hero1.jpg" tags="BESTSELLER, POPULER" title="Produk Favorit Pilihan Pelanggan Setia" rating={4.6} price={650000} discount={15} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard image="/assets/img/background/hero1.jpg" tags="SPESIAL, DISKON" title="Penawaran Khusus Dengan Harga Istimewa" rating={4.5} price={1200000} discount={30} />
            </SwiperSlide>

            {/* Navigation Buttons */}
            <button
              className="products-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 bg-theme-primary hover:bg-theme-primary-500 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-lg"
              aria-label="Previous product"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              className="products-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 bg-theme-primary hover:bg-theme-primary-500 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-lg"
              aria-label="Next product"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
              </svg>
            </button>
          </Swiper>
          <div className="products-pagination flex justify-center gap-2 mt-8" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
