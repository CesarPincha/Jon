import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import contentData from "@/data/scrollData";
import Contact from "@/components/contact/page";
import Hero from "@/components/hero/page";
import About from "@/components/about/page";
import Navbar from "@/components/navbar/page";
import { ParallaxScrollDemo } from "@/components/carousel/page";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-start">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <ParallaxScrollDemo />
        <Contact />
        {/* <div className="w-[70vw] h-[100vh]">
          <StickyScroll content={contentData} />
        </div> */}
      </main>
    </div>
  );
}
