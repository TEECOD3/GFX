import { ChevronDown } from "lucide-react";
import { House } from "./House";
import { Button } from "./ui/button";
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
import image14 from "@/public/house6.jpg";
import image15 from "@/public/house9.jpg";
import image16 from "@/public/house93003.jpg";
import image17 from "@/public/housemma.jpg";
import image18 from "@/public/housenskddd.jpg";

type Props = {};

const Housedets = [
  {
    id: 1,
    image: [image1, image2, image3],
    location: "estate in maitama",
    price: "N134,000",
    details: "two bed room apartment with pool",
  },
  {
    id: 2,
    image: [image4, image5, image6],
    location: "estate in Garki",
    price: "N190,000",
    details: "three bed room apartment with pool",
  },
  {
    id: 1,
    image: [image7, image8, image9],
    location: "Federal Housing Lugbe",
    price: "N182,000",
    details: "four bed room apartment with pool",
  },
  {
    id: 1,
    image: [image11, image12, image13],
    location: "kubwa housing estate",
    price: "N200,000",
    details: "one bedroom room apartment with pool",
  },
  {
    id: 1,
    image: [image13, image14, image15],
    location: "estate in maitama",
    price: "N134,000",
    details: "two bed room apartment with pool",
  },
  {
    id: 1,
    image: [image16, image4, image8],
    location: "mararaba aso estate",
    price: "N184,000",
    details: "two bed room apartment with pool",
  },
  {
    id: 1,
    image: [image17, image18, image4],
    location: "jikoyi estate",
    price: "N194,000",
    details: "two bed room apartment with pool",
  },
  {
    id: 1,
    image: [image10, image9, image6, image12],
    location: "estate in nayanya",
    price: "N132,000",
    details: "two bed room apartment with pool",
  },
];

const Houselist = (props: Props) => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        {Housedets.map((house, i) => (
          <House key={i} houseDets={house} />
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
