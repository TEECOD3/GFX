import Aboutus from "@/components/Aboutus";
import Hero from "@/components/Hero";
import { Houses } from "@/components/HouseSection";
import { NewsLetter } from "@/components/NewsLetter";
import OtherProperties from "@/components/OtherProperties";

export default function Home() {
  return (
    <main className="py-20">
      <Hero />
      <Houses />
      <Aboutus />
      <OtherProperties />
      <NewsLetter />
    </main>
  );
}
