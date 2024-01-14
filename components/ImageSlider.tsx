"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import sliderimage from "@/public/Heroimage.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import type SwiperType from "swiper";
import { Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  image?: StaticImageData[];
};

const ARR = [1, 2, 3, 4, 5, 6, 7];

export const ImageSlider = (props: Props) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeindex, setActiveIndex] = useState(0);
  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: activeindex === (ARR.length ?? 0) - 1,
  });

  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (ARR.length ?? 0) - 1,
      });
    });
  }, [swiper]);

  const activeStyles =
    "active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full bg-white border-2  border-zinc-300";
  const inactiveStyles = "hidden text-gray-400 ";

  return (
    <div className="relative bg-zinc-100 group aspect-square overflow-hidden h-[400px] w-full">
      <div className="absolute top-5 left-5 flex gap-x-4 z-[200]">
        <Button className="bg-[#E2D9FA]  text-primary font-semibold text-xs px-4 py-0 hover:text-white">
          Rent
        </Button>
        <Button
          size={"sm"}
          className="bg-[#E2D9FA]  text-primary font-semibold text-xs px-4 py-0 hover:text-white"
        >
          Sale
        </Button>
      </div>
      <div className="absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition">
        <button
          onClick={(e) => {
            e.preventDefault;
            swiper?.slideNext();
          }}
          className={cn(activeStyles, "right-3 transition ", {
            [inactiveStyles]: slideConfig.isEnd,
            "hover:bg-primary-300 text-primary opacity-100": !slideConfig.isEnd,
          })}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault;
            swiper?.slidePrev();
          }}
          className={cn(activeStyles, "left-3 transition ", {
            [inactiveStyles]: slideConfig.isBeginning,
            "hover:bg-primary-300 text-primary opacity-100":
              !slideConfig.isBeginning,
          })}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>

      <Swiper
        className="h-full w-full "
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{
          renderBullet: (_, className) => {
            return `<span class="rounded-full transition ${className}" ></span>`;
          },
        }}
      >
        {ARR.map((image, i) => (
          <SwiperSlide key={i}>
            <Image
              fill
              loading={"eager"}
              className="-z-10 h-full w-full object-cover object-center brightness-75"
              src={sliderimage}
              alt="sliderimage"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
