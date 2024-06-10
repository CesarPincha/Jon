import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import contentData from "@/data/scrollData";
import Hero from "@/components/ui/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />
      <StickyScroll content={contentData} />
    </main>
  );
}
