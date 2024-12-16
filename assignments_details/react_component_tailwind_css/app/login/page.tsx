import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function login() {
  return (
    <>
      <section className="max-width-full container  max-h-auto  flex justify-between items-center lg:flex-row flex-col-reverse mt-[60px] ">
        
        <div className=" bg-[#cbe4e8] flex justify-start relative  ">
            <Image src="/dl.beatsnoop 1.png" alt="login-image" width={800} height={700} className="z-10"/>
            <span className="bg-[#cae3e8] w-[50%] h-full absolute left-[-180] z-0"></span>
        </div>
        <div className="flex flex-col gap-5 mb-[60px] basis-[40%] lg:p-0 p-2">
            <h1 className="text-[36px] font-normal tracking-widest">Login to Exclusive</h1>
            <p className="tracking-wide text-[16px] font-normal">Enter your detail below</p>
            <div className="border-b-2 border-black/50 text-black/50 text-[16px] ">
                <Input type="text" placeholder="Email or Phone Number" className="border-none "/>
            </div>
            <div className="border-b-2 border-black/50 text-black/50 text-[16px] ">
                <Input type="password" placeholder="Password" className="border-none"/>
            </div>
            
            
            <div className="flex justify-between items-center">
                <button className="bg-[#DB4444] text-white px-8 py-3 rounded text-[16px] font-medium hover:bg-[#bb3a3a]">Login</button>
                <Link href='/' className="text-[16px] font-medium text-[#DB4444] hover:text-[#bb3a3a]">Forget Password</Link>
            </div>
        </div>

        
      </section>
    </>
  );
}
