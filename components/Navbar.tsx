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

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    // const [isScrolled, setIsScrolled] = useState(false);
    const [activeItem, setActiveItem] = useState<number | null>(null);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (previous && latest > previous) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const shouldShowHoverCard = (title: string): boolean => {
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
                        <div className="flex items-center gap-x-1">
                            <p className={`font-bold text-2xl `}>Influidity</p>
                            <WordRotate
                                words={["Creative", "Innovative", "Passionate"]}
                                duration={1000}
                                fontSize="1rem"
                                className={`translate-y-8 font-bold`}
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
                    <Link rel="stylesheet" href="/contact" className="absolute flex flex-row gap-3 bg-black py-2 px-4 top-2 right-4 text-white font-bold rounded-xl">Contact US <ArrowRight /></Link>
                </div>
            </motion.span>
            <MobileNav />
        </div>
    );
}