import React from "react";
import { HouseFilter } from "./House-Filter";
import Houselist from "./House-List";

type Props = {};

// onClick: () => console.log("Clicked button");

export const Houses = (props: Props) => {
  return (
    <section className="py-16 lg:py-24 max-w-7xl mx-auto max-lg:px-5 ">
      <HouseFilter />
      <section className="mt-10 lg:mt-16">
        <Houselist />
      </section>
    </section>
  );
};
