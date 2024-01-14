import Image from "next/image";
import React from "react";
import Gfxlogo from "@/public/svg/GFXLogo.svg";
import { Button } from "../ui/button";
import { ChevronDownCircle, CircleUserRound } from "lucide-react";

type Props = {};

const Linkdata = [
  { id: 1, linkname: "Residential", link: "/" },
  { id: 2, linkname: "Commercial", link: "/" },
  { id: 3, linkname: "New Projects", link: "/" },
  { id: 4, linkname: "Developers", link: "/" },
  { id: 5, linkname: "report ", link: "/" },
  { id: 6, linkname: "find", link: "/" },
];

const Header = (props: Props) => {
  return (
    <header className="w-full h-fit py-6 text-[15px] fixed z-[100] bg-white/70">
      <div className="flex justify-between max-w-7xl mx-auto max-lg:px-5 ">
        <div className="lg:w-[65%] flex gap-x-8">
          <Image
            src={Gfxlogo}
            alt="gfxLogo"
            className="h-10 w-20 lg:h-12 lg:w-24"
          />

          <ul className="lg:flex justify-between items-center w-full capitalize hidden ">
            {Linkdata.map((Link) => (
              <li className="" key={Link.id}>
                {Link.linkname}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <Button className="space-x-2 capitalize px-2 py-2`">
            <CircleUserRound className="h-4 w-4" />
            <p>users</p>
            <ChevronDownCircle className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
