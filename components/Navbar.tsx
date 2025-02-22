"use client";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { useState, useEffect } from "react";
import { navVariants } from "@/motion";
import { TextHover } from "@/animation";
import { navbarItems } from "@/constants";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";
import WordRotate from "@/components/WordRotate";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (previous && latest > previous) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        // Add scroll state
        if (latest > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <div className={`mx-auto ${isScrolled ? 'rounded-full overflow-hidden' : ''}`}>
            <motion.span
                variants={navVariants}
                className={`
					h-[8vh] padding-x fixed top-0 z-50 
					backdrop-blur-[7px] sm:hidden xm:hidden md:hidden
					transition-all duration-1000 ease-in-out mx-auto
					${
						isScrolled
							? "flex justify-center items-center px-4 py-2 w-[50%] left-1/4 right-1/4 rounded-full"
							: "flex items-center justify-between w-full "
					}
				`}
                animate={hidden ? "hidden" : "visible"}
            >
                <div
                    className={`
						flex items-center gap-x-8
						transition-all duration-500 ease-in-out
						${isScrolled ? "w-[95%] justify-center" : "w-full justify-between"}
					`}
                >
                    <Link href={"/"}>
                        <div className="flex items-center gap-x-1">
                            <p className="font-semibold text-2xl">Home</p>
                            <WordRotate
                                words={["Creative", "Innovative", "Passionate"]}
                                duration={1000}
                                fontSize="1rem"
                                className={`translate-y-8 ${
                                    isScrolled ? "hidden" : "visible"
                                } `}
                            />
                        </div>
                    </Link>

                    <div
                        className={`
							flex items-center gap-x-[20px]
							transition-all duration-500 ease-in-out
							${isScrolled ? "w-fit" : "w-[50%]"}
						`}
                    >
                        {navbarItems.map((item) => (
                            <Link
                                key={item.id}
                                className={`
									w-fit paragraph font-medium font-NeueMontreal 
									text-secondry capitalize hover
									transition-all duration-300
									${isScrolled ? `visible` : `${item.id === 5 && "ml-auto"}`}
									
								`}
                                href={item.href}
                            >
                                <TextHover
                                    titile1={item.title}
                                    titile2={item.title}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.span>
            <MobileNav />
        </div>
    );
}
