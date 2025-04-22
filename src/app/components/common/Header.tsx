"use client";
import React, { useEffect, useState } from "react";
import { HEADER_LIST } from "@/app/utils/helper";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

interface HeaderItem {
    title: string;
    link: string;
}

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <>
            <div className={`z-40 w-full shadow-lg transition-all duration-300 `}>
                <div className="px-4 max-w-[1438px] mx-auto pt-4">
                    <div className={` ${open ? "" : "backdrop-blur-lg"} max-xl:px-[16px] flex items-center justify-between md:py-[19.5px]`}>
                        <Link href="/">
                            <Image width={124} height={116} src="/assets/images/png/logo.png" alt="logo" className="md:max-w-[124px] max-w-[78px] pointer-events-none" />
                        </Link>
                        <ul className="flex items-center gap-6 max-lg:hidden">
                            {HEADER_LIST.map((item: HeaderItem, i: number) => (
                                <li key={i}>
                                    <Link href={item.title} className={`font-normal text-base hover:text-sky transition-all duration-300 `}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-6 max-lg:hidden">
                            <div className="flex gap-[10px] !py-[14px] !px-[22px] border border-black cursor-pointer hover:border-[#FF7F00] hover:bg-[#FF7F00] rounded-[10px]">
                                <CustomButton text="Login " myClass=" !border-none" />
                                <Image src="/assets/images/svg/login.svg" alt="login" width={19} height={19} />
                            </div>
                            <Image src="/assets/images/png/cart.png" alt="cart" width={66} height={66} />
                        </div>
                        <div className="lg:hidden z-50 cursor-pointer" onClick={() => setOpen(!open)}>
                            <button className="overflow-hidden relative z-50 lg:hidden size-[30px] h-5 flex flex-col justify-between items-center">
                                <span className={`bg-black rounded-full w-[39px] h-1 block transition-all duration-300 ${open ? "translate-x-10" : ""}`}></span>
                                <span
                                    className={`bg-black rounded-full after:rounded-lg w-[39px] h-1 block relative after:bg-transparent after:absolute after:top-0 after:left-0 after:w-full after:h-1 after:transition-all after:duration-300 transition-all duration-300 ${open ? "rotate-45 after:rotate-90 after:!bg-black" : ""
                                        }`}
                                ></span>
                                <span className={`bg-black rounded-full  w-[39px] h-1 block transition-all duration-300 ${open ? "-translate-x-10" : ""}`}></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`w-full h-full bg-white transition-all duration-500 left-0 lg:-top-full z-40 fixed flex gap-5 flex-col justify-center items-center ${open ? "top-0 left-0" : "-top-full"}`}>
                    {HEADER_LIST.map((item: HeaderItem, i: number) => (
                        <a key={i} onClick={() => setOpen(false)} href={item.link} className="font-bold text-base text-black">
                            {item.title}
                        </a>
                    ))}
                    <div className="flex gap-[10px] !py-[14px] !px-[22px] border border-black rounded-[10px]">
                        <CustomButton custonOnClick={()=>setOpen(false)} text="Login " myClass=" !border-none" />
                        <Image src="/assets/images/svg/login.svg" alt="login" width={19} height={19} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;