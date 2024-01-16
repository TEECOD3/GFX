"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperButton from "../ui/SwiperButton";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import image14 from "@/public/house6.jpg";
import image15 from "@/public/house9.jpg";
import image16 from "@/public/house93003.jpg";
import image17 from "@/public/housemma.jpg";
import image18 from "@/public/housenskddd.jpg";
import image1 from "@/public/Heroimage.jpg";
import image2 from "@/public/hose44.jpg";
import image3 from "@/public/hosuesksd.jpg";
import image4 from "@/public/hosuesnns.jpg";
import image5 from "@/public/house000.jpg";
import image6 from "@/public/house00404.jpg";
import image7 from "@/public/house1.jpg";
import image8 from "@/public/house2.jpg";
import image9 from "@/public/house3.jpg";
import image10 from "@/public/house3883.jpg";
import image11 from "@/public/house4.jpg";
import image12 from "@/public/house400.jpg";
import image13 from "@/public/house55.jpg";

import Image from "next/image";
import { cn } from "@/lib/utils";

import { motion } from "framer-motion";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image14,
  image15,
  image16,
  image17,
  image18,
];
function OtherProperties() {
  const breakpoints = {
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };

  return (
    <section className="relative w-full my-16 lg:my-20">
      <div className="my-20 w-full ">
        <div className="max-w-max mx-auto text-center">
          <p className="text-2xl lg:text-3xl text-primary  font-semibold capitalize">
            other properties
          </p>
          <p className="text-foreground">
            other properties by us in different locations
          </p>
        </div>
      </div>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        speed={1000}
        autoplay={{
          delay: 3000,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        navigation={false}
        centeredSlides={true}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        breakpoints={breakpoints}
        className="!mx-0 !px-0 h-[500px] lg:h-[600px] w-full flex items-center justify-center"
      >
        {images.map((image, idx) => (
          <SwiperSlide
            className={cn(`rounded-lg flex items-center justify-center   `)}
            key={idx}
          >
            <motion.div className="relative">
              <Image
                src={image}
                alt="sliderimage"
                loading="lazy"
                placeholder="blur"
                className={cn(
                  `h-[400px] lg:h-[500px] w-full object-cover rounded-sm `
                )}
              />
              <div className="absolute top-0 left-0 h-full w-full bg-black/40 z-[10] text-white">
                <div className=" absolute bottom-10 left-8 lg:w-[80%]">
                  <p className=" text-base lg:text-xl font-semibold text-white capitalize ">
                    Terrace
                  </p>

                  <p className="capitalize text-white font-medium">abuja</p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
        {/* <div className="absolute bottom-10 z-[4000]  w-full flex items-center">
          <SwiperButton className="w-full flex items-center justify-center" />
        </div> */}
      </Swiper>
    </section>
  );
}

export default OtherProperties;
