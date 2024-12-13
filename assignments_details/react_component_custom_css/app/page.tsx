
import Features from "./features/page";
import Hero from "@/components/Hero/Hero";
import About from "./about/page";
import Packages from "./packages/page";
import Video from "@/components/Video/page";


export default function Home() {
  return (
   <>
    <Hero/>
    <Features/>
    <About/>
    <Packages/>
    <Video/>
   </>
  );
}
