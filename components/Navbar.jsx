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
import { HoverCard } from "./HoverCard";
import { ArrowRight } from 'lucide-react';
import { RoundButton } from ".";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    // const [isScrolled, setIsScrolled] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (previous && latest > previous) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const shouldShowHoverCard = (title) => {
        return ["Influidity", "GrowthStory", "Consulting"].includes(title);
    };

    return (
        <div className={`mx-auto `}>
            {/* Background blur effect */}
            {activeItem !== null && (
                <motion.div
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 backdrop-blur-md transition-all duration-1000"
                    style={{ zIndex: 45 }}
                />
            )}

            <motion.span
                variants={navVariants}
                className={`
                    h-[8vh] padding-x fixed z-50 
                    backdrop-blur-[7px] sm:hidden xm:hidden md:hidden
                    transition-all duration-1000 ease-in-out mx-auto
                    flex items-center justify-between w-full top-0
                `}
                animate={hidden ? "hidden" : "visible"}
            >
                <div
                    className={`
                        flex items-center gap-x-8
                        transition-all duration-500 ease-in-out w-full justify-between
                    `}
                >
                    <Link href={"/"}>
                        <div className="flex items-center gap-x-1 group">
                            <p className="text-3xl sm:text-3xl font-semibold font-FoundersGrotesk tracking-normal 
        transition-all duration-500 group-hover:tracking-[0.05em] uppercase">
                                Influidity
                            </p>
                            <WordRotate
                                words={["Creative", "Innovative", "Passionate"]}
                                duration={1500}
                                fontSize="1.2rem"
                                className="translate-y-2 font-bold font-NeueMontreal"
                            />
                        </div>

                    </Link>


                    <div
                        className={`
                            flex items-center gap-x-[20px]
                            transition-all duration-500 ease-in-out w-[50%] font-bold
                        `}
                    >
                        {navbarItems.map((item) => (
                            <div
                                key={item.id}
                                className=" relative font-bold"
                                onMouseEnter={() => shouldShowHoverCard(item.title) ? setActiveItem(item.id) : null}
                                onMouseLeave={() => shouldShowHoverCard(item.title) ? setActiveItem(null) : null}
                            >
                                <Link
                                    className={`
                                        w-fit paragraph font-medium font-NeueMontreal text-secondry 
                                        capitalize hover:underline
                                        transition-all duration-300
                                    `}
                                    href={item.href}
                                >
                                    <TextHover
                                        titile1={item.title}
                                        titile2={item.title}
                                    />
                                </Link>

                                {shouldShowHoverCard(item.title) && (
                                    <HoverCard
                                        isVisible={activeItem === item.id}
                                        item={item}
                                        onClose={() => setActiveItem(null)}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col  items-center gap-[10px]">
                        <div className="flex items-center justify-between bg-secondry cursor-pointer mt-4 rounded-full group">
                            <RoundButton
                                href="/contact"
                                title="Contact us"
                                className="bg-white text-2xl py-2 text-black"
                                bgcolor="#000"
                                style={{ color: "#fff" }}
                            />
                        </div>

                    </div>
                </div>
            </motion.span>
            <MobileNav />
        </div>
    );
}