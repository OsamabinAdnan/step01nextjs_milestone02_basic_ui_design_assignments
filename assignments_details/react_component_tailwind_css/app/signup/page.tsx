import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

export default function signup() {
  return (
    <>
      <section className="max-width-full container  max-h-auto  flex justify-between items-center lg:flex-row flex-col-reverse mt-[60px] ">
        
        <div className=" bg-[#cbe4e8] flex justify-start relative  ">
            <Image src="/dl.beatsnoop 1.png" alt="login-image" width={800} height={700} className="z-10"/>
            <span className="bg-[#cae3e8] w-[50%] h-full absolute left-[-180] z-0"></span>
        </div>
        <div className="flex flex-col gap-5 mb-[60px] basis-[40%] lg:p-0 p-2 ">
            <h1 className="text-[36px] font-normal tracking-widest">Create an account</h1>
            <p className="tracking-wide text-[16px] font-normal">Enter your detail below</p>
            <div className="border-b-2 border-black/50 text-black/50 text-[18px] ">
                <Input type="text" placeholder="Name" className="border-none "/>
            </div>
            <div className="border-b-2 border-black/50 text-black/50 text-[16px] ">
                <Input type="email" placeholder="Email or Phone Number" className="border-none "/>
            </div>
            <div className="border-b-2 border-black/50 text-black/50 text-[16px] ">
                <Input type="password" placeholder="Password" className="border-none"/>
            </div>
            <Button className="bg-[#DB4444] text-white px-8 py-3 rounded text-[16px] font-medium hover:bg-[#bb3a3a]">Create Account</Button>
            
            <Button className="bg-white text-black px-8 py-3 rounded text-[16px] font-medium border-2 border-black/40 hover:bg-[#f4f4f4]"><FcGoogle size={24} className=""/> Sign up with Google</Button>
            

            <p className="text-center text-black/80">Already have account? <Link href={'/login'} className="cursor-pointer underline ml-[4px]">Log in</Link> </p>
            
        
        </div>

        
      </section>
    </>
  );
}
