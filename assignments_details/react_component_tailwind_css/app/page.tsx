import Hero from "@/Components/Hero";
import Features from "./features/page";
import About from "./about/page";
import Packages from "./packages/page";
import Video from "@/Components/Video";
import Testimonial from "@/Components/Testimonial";

export default function Home() {
  return (
    
    <>
      <Hero/>
      <Features/>
      <About/>
      <Packages/>
      <Video/>
      <Testimonial/>   
    </>
    
  );
}
