
import ProductSection from "@/components/Product-Section";
import HeroSection from "@/components/HeroSection";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import Categories from "@/components/Categories";
import Banner from "@/components/HomepageBanner";
import HomeBottom from "@/components/homeBottom";



export default async function Home() {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    
    if(!data){
      return <div>Loading...</div>
    }
  return (
    <>
      <HeroSection/>

      {/* Today */}
      <div className="sm:m-0 m-2">
          <ProductSection
          Heading="Flash Sales"
          Subheading="Today"
          action = {
            <div className="sm:space-x-5 space-x-0">
              <Button className="bg-[#f5f5f5] h-11 w-11 rounded-full  hover:bg-brandPrimary hover:text-white">
                <MdOutlineArrowBack />
              </Button>
              <Button className="bg-[#f5f5f5] h-11 w-11 rounded-full hover:bg-brandPrimary hover:text-white">
                <MdOutlineArrowForward/>
              </Button>
            </div>
            }
          showTimer = {true}
          products={data}
          isCarousel={true}/>

          <div className="my-[60px] flex justify-center items-center">
            <Button className="px-12 py-6 bg-[#DB4444] text-white rounded hover:bg-[#bb3a3a]">View all Products</Button>
          </div>
          
      </div>
      
      {/* Categories */}
      <div className="py-[80px] flex justify-between items-center">
        <SectionHeader
        heading="Browse By Category"
        subHeading="Categories"/>
        <div className="sm:space-x-5 space-x-0">
              <Button className="bg-[#f5f5f5] h-11 w-11 rounded-full  hover:bg-brandPrimary hover:text-white">
                <MdOutlineArrowBack />
              </Button>
              <Button className="bg-[#f5f5f5] h-11 w-11 rounded-full hover:bg-brandPrimary hover:text-white">
                <MdOutlineArrowForward/>
              </Button>
        </div>
      </div>
      <div className="mt-0 mb-40">
        <Categories/>
      </div>
      
      
      {/* This Month */}
      <div>
      <ProductSection
          Heading="Best Selling Products"
          Subheading="This Month"
          action = {
            <div className="my-[60px] flex justify-center items-center">
            <Button className="md:px-12 md:py-6 px-4 py-2 bg-[#DB4444] text-white rounded hover:bg-[#bb3a3a]">View all</Button>
            </div>
            }
          showTimer = {false}
          products={data}
          isCarousel={true}/>
      </div>

      {/* Homepage Banner */}
      <Banner/>

      {/* Our Products */}
      <div className="mt-40 mb-20">
      <ProductSection
          Heading="Explore Our Product"
          Subheading="Our Products"
          action = {
            <div className="sm:space-x-5 space-x-0">
              <Button className="bg-[#f5f5f5] h-11 w-11 rounded-full  hover:bg-brandPrimary hover:text-white">
                <MdOutlineArrowBack />
              </Button>
              <Button className="bg-[#f5f5f5] h-11 w-11 rounded-full hover:bg-brandPrimary hover:text-white">
                <MdOutlineArrowForward/>
              </Button>
            </div>
            }
          showTimer = {false}
          products={data}
          isCarousel={false}/>
      </div>
      <div className="mb-20 flex justify-center items-center">
            <Button className="px-12 py-6 bg-[#DB4444] text-white rounded hover:bg-[#bb3a3a]">View all Products</Button>
      </div>
            
      <div>
        <HomeBottom/>
      </div>
    
    </>
  );
}
