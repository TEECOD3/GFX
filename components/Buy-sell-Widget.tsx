import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

type Props = {};

const BuySellWidget = (props: Props) => {
  return (
    <div className="w-full py-10 flex gap-y-6 flex-col ">
      <div className="px-5 w-[70%] lg:w-[50%] mx-auto flex h-10  lg:h-16">
        <div className="h-full w-1/2 bg-primary flex items-center justify-center">
          <p>Rent</p>
        </div>
        <div className="h-full w-1/2 bg-white/20 flex items-center justify-center">
          <p>Buy</p>
        </div>
      </div>

      <div className="w-[95%] bg-white py-3 lg:py-5 px-2 lg:px-6 flex  lg:w-[70%] text-black mx-auto">
        <div className="flex-1 flex justify-between divide-x divide-gray-400 ">
          <div className="flex flex-col text-left capitalize justify-center">
            <p className="font-semibold">location</p>
            <p className=" text-xs lg:text-sm text-foreground">
              search for location
            </p>
          </div>
          <div className="flex flex-col capitalize px-3 lg:px-8 text-left">
            <p className="font-semibold ">All Rooms</p>
            <p className="text-xs lg:text-sm  text-foreground">
              select no of rooms
            </p>
          </div>
          <div className="flex flex-col text-left capitalize px-3 lg:px-8 ">
            <p className="font-semibold ">Price</p>
            <p className="text-xs lg:text-sm  text-foreground">
              select price Range
            </p>
          </div>
        </div>

        <div className="lg:w-[13%] flex items-center justify-center">
          <Button size={"icon"} className="rounded-full">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuySellWidget;
