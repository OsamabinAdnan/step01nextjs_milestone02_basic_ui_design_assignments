'use client'
import React from "react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Heart, MenuIcon, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useRouter } from "next/navigation";



export default function Header() {
    const route = useRouter()

    const navigateTo = (path: string) => {
        route.push(path); // Programmatically navigate to the specified path
      };
    

  return (
    <nav className="w-full border-b-2 border-gray-300 p-4">
        {/* Sir add max-w-7xl in below div */}
        <div className="max-w-[1440px] mx-auto flex items-center justify-between"> 
            <h1 className="text-2xl font-bold hover:scale-110 duration-500 transition-all"><Link href={'/'}>Exclusive</Link></h1>
            <div className="lg:flex hidden gap-4 ">
                <Link href={'/'} className="text-sm font-normal hover:underline transition-all duration-500">Home</Link>
                <Link href={'/contact'} className="text-sm font-normal hover:underline transition-all duration-500">Contact</Link>
                <Link href={'/about'} className="text-sm font-normal hover:underline transition-all duration-500">About</Link>
                <Link href={'/signup'} className="text-sm font-normal hover:underline transition-all duration-500">Sign Up</Link>
            </div>
            <div className="lg:flex hidden gap-2">
                <div className="relative flex justify-center items-center">
                    <Input placeholder="What are you looking for?" className="bg-[#f5f5f5] text-[14px] rounded-[10px] border-none"/>
                    <Search className=" right-[3px] top-[12px] absolute" />
                </div>
                    <Button variant={"default"} size={"icon"} className="rounded-full shadow-none " onClick={() => navigateTo("/wishlist")}>
                        <Heart/>
                    </Button>

                    <Button variant={"default"} size={"icon"} className="rounded-full shadow-none" onClick={() => navigateTo("/cart")}>
                        <ShoppingCart/>
                    </Button>
                    <Button variant={"default"} size={"icon"} className="rounded-full shadow-none group" onClick={() => navigateTo("/myaccount")}>
                        <User/>
                    </Button>
                
            </div>
            <Sheet>
                <SheetTrigger className="lg:hidden flex  " asChild>
                    <Button variant={'default'} size={"icon"} className="rounded-full">
                        <MenuIcon/>
                    </Button>
                </SheetTrigger>
                <SheetContent className="bg-white p-4 ">
                    <SheetHeader>
                        <SheetTitle className="text-black">Exclusive</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col mt-6 gap-5 text-black">
                    <Link href={'/'} className="text-sm font-normal">Home</Link>
                    <Link href={'/contact'} className="text-sm font-normal">Contact</Link>
                    <Link href={'/about'} className="text-sm font-normal">About</Link>
                    <Link href={'/signup'} className="text-sm font-normal">Sign Up</Link>
                    </div>
                    <div className="mt-4">
                        <div className=" flex relative ">
                        <Input placeholder="What are you looking for?" className="bg-[#f5f5f5] text-[14px] rounded-[10px] border-none"/>
                        <Search className=" right-[3px] top-[12px] absolute"/>
                        </div>
                        <div className="mt-4 ">
                            <Button variant={"outline"} size={"icon"} className="rounded-full text-black bg-white mr-[5px] border-none shadow-md" onClick={() => navigateTo("/wishlist")}>
                                <Heart/>
                            </Button>
                            <Button variant={"outline"} size={"icon"} className="rounded-full text-black bg-white ml-[5px] border-none shadow-md" onClick={() => navigateTo("/cart")}>
                                <ShoppingCart/>
                            </Button>
                            <Button variant={"default"} size={"icon"} className="rounded-full text-black bg-white ml-[5px] border-none shadow-md" onClick={() => navigateTo("/myaccount")}>
                                <User/>
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>

    </nav>
  );
}


