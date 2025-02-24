"use client";
import Link from "next/link";
import { useRef } from "react";
import { TextMask } from "@/animation";
import { ArrowUpRight } from "lucide-react";
import { Eyes, RoundButton, Rounded } from "@/components";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Ready() {
	const container = useRef(null);
	const phrase = ["Ready", "to start?"];

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const mq = useTransform(scrollYProgress, [0, 1], [0, -700]);

	return (
		<section
			className="w-full relative z-30 min-h-screen sm:h-screen xm:h-screen bg-about padding-y rounded-t-[20px]"
			ref={container}>
			<div className="w-full h-full flex justify-center gap-[50px] items-center flex-col">
				<div className="flex flex-col gap-[10px]">
					<h1 className="text-[290px] leading-[230px] lg:text-[220px] lg:leading-[170px] md:text-[180px] md:leading-[140px] sm:text-[120px] sm:leading-[90px] xm:text-[80px] xm:leading-[60px] tracking-[-2.5px] text-center font-bold font-FoundersGrotesk text-secondry uppercase pointer-events-none">
						<TextMask>{phrase}</TextMask>
					</h1>
				</div>
				<div className="flex flex-col  items-center gap-[10px]">
					<div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
						<RoundButton
							href="/contact"
							title="get started"
							className="bg-white text-black"
							bgcolor="#000"
							style={{ color: "#fff" }}
						/>
					</div>
					
				</div>
			</div>
			<motion.div
				className="w-full absolute top-[50%] transform translate-y-[-50%] gap-[30px] flex items-center justify-center"
				style={{ y: mq }}>
				{/* <Eyes className="w-[200px] h-[200px] md:w-[170px] md:h-[170px] sm:w-[150px] sm:h-[150px] xm:w-[150px] xm:h-[150px] sm:flex-col xm:flex-col" /> */}
			</motion.div>
		</section>
	);
}
