import React from "react";
import { House } from "./House";
import { Button } from "./ui/button";
import { ChevronDown, ChevronDownCircle } from "lucide-react";

type Props = {};

const Houselist = (props: Props) => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        {[1, 2, 3, 4, 56, 23].map((house, i) => (
          <House key={i} />
        ))}
      </div>

      <div className="w-full flex items-center justify-center mt-4">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <Button size={"icon"} className="rounded-full ">
            <ChevronDown className="h-4 w-4  " />
          </Button>

          <p className="font-semibold text-xs">view more</p>
        </div>
      </div>
    </>
  );
};

export default Houselist;
