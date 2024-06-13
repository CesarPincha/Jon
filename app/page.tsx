import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import contentData from "@/data/scrollData";
import Hero from "@/components/hero/page";
import About from "@/components/about/page";
import Navbar from "@/components/navbar/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start">
      <Navbar />
      <Hero />
      <About />
      {/* <div className="w-[70vw] h-[100vh]">
        <StickyScroll content={contentData} />
      </div> */}
    </main>
  );
}
