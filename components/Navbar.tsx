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

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeItem, setActiveItem] = useState<number | null>(null);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (previous && latest > previous) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const shouldShowHoverCard = (title: string): boolean => {
        return ["Influidity", "GrowthStory", "Consulting"].includes(title);
    };

    return (
        <div className={`mx-auto ${isScrolled ? 'rounded-full overflow-hidden' : ''}`}>
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
                    ${
                        isScrolled
                            ? "flex justify-center items-center px-4 py-2 w-[50%] left-1/4 right-1/4 rounded-full"
                            : "flex items-center justify-between w-full top-0"
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
                            <div
                                key={item.id}
                                className={`${item.id === 5 && !isScrolled ? "ml-auto" : ""} relative`}
                                onMouseEnter={() => shouldShowHoverCard(item.title) ? setActiveItem(item.id) : null}
                                onMouseLeave={() => shouldShowHoverCard(item.title) ? setActiveItem(null) : null}
                            >
                                <Link
                                    className={`
                                        w-fit paragraph font-medium font-NeueMontreal 
                                        text-secondry capitalize hover:underline
                                        transition-all duration-300
                                        ${!isScrolled && item.id === 5 ? 'ml-auto' : ''}
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
                </div>
            </motion.span>
            <MobileNav />
        </div>
    );
}