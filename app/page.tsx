import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import contentData from "@/data/scrollData";
import Hero from "@/components/ui/hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start">
      <Hero />
      <div className="w-[70vw] h-[100vh]">
        <StickyScroll content={contentData} />
      </div>
    </main>
  );
}
