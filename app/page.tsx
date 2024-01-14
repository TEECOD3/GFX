import Aboutus from "@/components/Aboutus";
import Hero from "@/components/Hero";
import { Houses } from "@/components/HouseSection";

export default function Home() {
  return (
    <main className="py-20">
      <Hero />
      <Houses />
      <Aboutus />
    </main>
  );
}
