import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { CircleArrowOutUpRight } from "lucide-react";

interface NavItem {
    id: number;
    title: string;
    href: string;
    description: string;
    features?: string[];
}

interface HoverCardProps {
    isVisible: boolean;
    item: NavItem;
    onClose: () => void;
}

export const HoverCard = ({ isVisible, item, onClose }: HoverCardProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop with blur effect that excludes the navbar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-40"
                        style={{
                            marginTop: "8vh",
                            pointerEvents: "auto",
                        }}
                        onClick={onClose}
                    />

                    {/* Hover Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                            duration: 0.2,
                        }}
                        className="absolute top-full -left-[15rem] mt-2 bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 z-50 w-fit"
                    >
                        <div className="flex flex-row gap-12 w-100">
                            <div className="flex flex-col gap-2">
                                {[...Array(4)].map((_, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col relative w-80 rounded-3xl p-4 font-medium hover:bg-gray-200 transition-colors duration-200"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <p className="font-bold">{item.title}</p>
                                        <p>Accelerate your business</p>
                                        {hoveredIndex === index && (
                                            <CircleArrowOutUpRight className="absolute top-4 right-4 h-4 w-4" />
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col gap-4 bg-gray-200 w-60 rounded-lg p-4 font-medium h-auto">
                                <p className="font-bold">Watch our Showreel</p>
                                <p>
                                    Want a snippet of our work under a minute?
                                    We've got just the thing for ya...
                                </p>
                                <img
                                    src="https://plus.unsplash.com/premium_vector-1697729804286-7dd6c1a04597?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww"
                                    alt=""
                                    className="mt-2 rounded-lg self-center"
                                />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};