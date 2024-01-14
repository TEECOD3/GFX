import Image from "next/image";
import React from "react";
import Heroimage from "@/public/Heroimage.jpg";
import BuySellWidget from "./Buy-sell-Widget";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="relative h-screen [mask-image:linear-gradient(to_top,transparent,white_20%,white_90%,transparent)]">
      <Image
        src={Heroimage}
        alt="Heroimage"
        className="h-full w-full object-cover object-top brightness-50"
        priority
        fill
      />

      <div className="absolute h-full w-full z-[5] flex items-center text-white  justify-center text-center">
        <div className="max-lg:px-3 lg:w-[70%] h-[90%] mx-auto space-y-10 py-24">
          <p className="text-base font-medium">
            Thinking Property. Think Property
          </p>

          <h1 className="text-3xl lg:text-5xl font-bold">
            Thinking Property. Think Property
          </h1>

          <p className="text-base font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            cupiditate! Quod nesciunt neque error cum dolor harum explicabo ea
            necessitatibus suscipit, consequatur in sed optio fugiat repellat
            similique iure quae!
          </p>

          <BuySellWidget />
        </div>
      </div>
    </section>
  );
};

export default Hero;
