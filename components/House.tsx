import React from "react";
import { ImageSlider } from "./ImageSlider";
import { Button } from "./ui/button";
import { Card, CardDescription, CardFooter } from "./ui/card";
import { BathIcon, CarFrontIcon } from "lucide-react";

type Props = {};

export const House = (props: Props) => {
  return (
    <Card className="w-full h-full shadow-xl">
      <ImageSlider />
      <div className="p-4 flex flex-col gap-y-4">
        <div className="flex justify-between items-center">
          <div className="">
            <p className="font-semibold text-gray-700 capitalize">
              Estate in maitama
            </p>
            <CardDescription>
              Lorem, ipsum dolor sit amet consectetur adip
            </CardDescription>
          </div>

          <Button>view Details</Button>
        </div>
        <div className="font-semibold">
          <p>N143,000</p>
        </div>

        <div className="w-full flex flex-wrap mt-4">
          <Button
            className="font-semibold text-xs space-x-2 flex-1 border-gray-400"
            variant={"outline"}
          >
            <CarFrontIcon className="h-4 w-4" />
            <span>1 Bedroom</span>
          </Button>
          <Button
            className="font-semibold text-xs space-x-2 flex-1 border-gray-400"
            variant={"outline"}
          >
            <BathIcon className="h-4 w-4" />
            <span>1 Bath</span>
          </Button>
          <Button
            className="font-semibold text-xs space-x-2 flex-1 border-gray-400"
            variant={"outline"}
          >
            <span>535 sq ft</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};
