import Image from "next/image";
import React from "react";
import image from "@/public/Heroimage.jpg";
import { Button } from "./ui/button";

type Props = {};

const Aboutus = (props: Props) => {
  return (
    <section className="w-full relative  h-[120vh] lg:h-screen ">
      <Image
        src={image}
        alt="About us image"
        fill
        loading="eager"
        className="object-cover object-center brightness-50"
      />

      <div className="absolute top-0 inset-0 z-[10] flex items-center justify-center">
        <div className="max-w-7xl w-[80%] mx-auto  lg:h-[80%] flex flex-col gap-y-20 lg:flex-row lg:gap-x-10">
          <div className="w-full lg:w-[65%] h-full  justify-center flex flex-col gap-y-10 max-lg:items-center max-lg:text-center ">
            <h1 className="text-primary font-bold text-2xl lg:text-4xl capitalize">
              about us
            </h1>
            <p className="text-white lg:w-9/12">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus optio corporis vel error obcaecati vitae dolore magnam
              minima inventore harum facilis, non, earum est? Minima facere
              rerum fugiat nam delectus!
            </p>
            <div className="">
              <Button>Read more</Button>
            </div>
          </div>

          {/* second div */}
          <div className="flex-col gap-y-10 flex flex-1 h-full items-center justify-center">
            <div className="flex-col gap-y-2">
              <div className="mb-3 text-center text-white">
                <h1 className="text-primary font-bold text-2xl lg:text-4xl">
                  500+
                </h1>
                <span className="text-xs lg:text-sm">properties sold</span>
              </div>
              <p className="w-full text-center text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ipsum sequi deserunt iure,
              </p>
            </div>
            <div className="flex-col gap-y-2">
              <div className="mb-3 text-center text-white">
                <h1 className="text-primary font-bold text-2xl lg:text-4xl">
                  40+
                </h1>
                <span className="text-xs lg:text-sm">locations</span>
              </div>
              <p className="w-full text-center text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ipsum sequi deserunt iure,
              </p>
            </div>
            <div className="flex-col gap-y-2">
              <div className="mb-3 text-center text-white">
                <h1 className="text-primary font-bold text-2xl lg:text-4xl">
                  24/7
                </h1>
                <span className="text-xs lg:text-sm">Help</span>
              </div>
              <p className="w-full text-center text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ipsum sequi deserunt iure,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
