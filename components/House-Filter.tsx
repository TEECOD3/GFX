import React from "react";
import { Button } from "./ui/button";
import { SlidersHorizontal } from "lucide-react";

type Props = {};

const ButtonList = [
  { label: "all", id: 1 },
  { label: "Residential", id: 2 },
  { label: "Commercial", id: 3 },
  { label: "New Projects", id: 4 },
];

export const HouseFilter = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row  gap-y-4 justify-between w-full ">
      <div className="flex w-full lg:w-[40%] lg:justify-between flex-wrap gap-y-4 max-lg:gap-x-3">
        {ButtonList.map((button) => (
          <Button
            variant={"outline"}
            key={button.id}
            className="border-gray-400 focus:border-orange"
          >
            {button.label}
          </Button>
        ))}
      </div>

      <div className="">
        <Button className="textwhite space-x-4 px-8 capitalize font-semibold">
          <span>filter</span>
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
