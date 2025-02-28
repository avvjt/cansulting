"use client";
import Image from "next/image";
import { useState } from "react";
import { aboutImg } from "@/public";
import { LinkHover } from "@/animation";
import { footerItems } from "@/constants";
import { Heading, RoundButton } from "@/components";
import RotatingArrow from "./RotatingArrow";

export default function About() {
	const [hovered, setHovered] = useState(false);

	return (
		<section className="w-full bg-about padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<h2 className="sub-heading font-medium font-NeueMontreal text-secondry">
					Business challenges demand real solutions, not fluff.
					<br className="half-line-space" /> {/* Reduced space line break */}
					<br className="sm:hidden xm:hidden" /> We are the partner&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer"> who rolls up </span>
					&nbsp;their sleeves with you, <br className="sm:hidden xm:hidden" />
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						not the one who hands over
					</span>
					&nbsp;and&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						a deck and leaves.
					</span>
				</h2>
			</div>
			<div className="w-full border-y border-[#21212155] my-[50px] py-[50px]">
				<div className="padding-x pb-[20px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">
					<div className="w-[40%] sm:w-full xm:w-full flex flex-col">
						<div className=" font-medium text-secondry font-NeueMontreal">

							<Heading title="Why it matters?" />
						</div>
						<div className="items-center justify-center">
							<RotatingArrow />
						</div>
					</div>
					<div className="w-[58%] sm:w-full xm:w-full">
						<div className="w-full flex gap-[30px] h-full items-start sm:items-start sm:flex-col xm:items-start xm:flex-col">
							<div className="w-[100%] sm:w-[60%] xm:w-[60%]">
								<p className="font-semibold text-2xl font-NeueMontreal text-secondry tracking-wide">
									We simplify business challenges and convert them into opportunities. Whether building a strategy that works, fixing what's broken, or unlocking the next growth chapter, we have your back.

								</p>
								<p className="sub-paragraph font-medium font-NeueMontreal text-secondry pt-[30px] tracking-wide">
									In today's world, speed and clarity win. We focus on actionable solutions that drive results—no jargon, no overcomplications
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
				<div className="flex flex-col gap-[30px]">
					<Heading title="Why you choose us?" />
					<p className="sub-paragraph font-medium font-NeueMontreal text-secondry pt-[30px] tracking-wide">
						Because we care about what works for you. Our approach is:</p>

					<p className="sub-paragraph font-medium font-NeueMontreal text-secondry pt-[30px] tracking-wide">
						<span className="sub-paragraph font-medium font-NeueMontreal text-secondry pt-[30px] tracking-wide link-flash cursor-pointer">
							Straightforward:
						</span> No fluff, no unnecessary layers.
						<br className="sm:hidden xm:hidden" />
						<span className="sub-paragraph font-medium font-NeueMontreal text-secondry pt-[30px] tracking-wide link-flash cursor-pointer">
							Practical:
						</span> You get solutions you can implement today.

						<br className="sm:hidden xm:hidden" />
						<span className="sub-paragraph font-medium font-NeueMontreal text-secondry pt-[30px] tracking-wide link-flash cursor-pointer">
							Result-Oriented:
						</span> Your wins are how we measure our success.


					</p>
					<div
						className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<RoundButton
							href="/influidity"
							title="read more"
							bgcolor="#000"
							className="bg-white text-black"
							style={{ color: "#fff" }}
						/>
					</div>
				</div>
				<div
					className={`w-[50%] sm:w-full xm:w-full transition transform duration-[1.5s] ease-[.215,.61,.355,1] rounded-[15px] overflow-hidden ${hovered && "scale-[0.96]"
						}`}>
					<Image
						src={aboutImg}
						alt="about-img"
						className={`w-full h-full transition transform duration-[2s] ease-[.215,.61,.355,1] ${hovered && "scale-[1.09]"
							}`}
					/>
				</div>
			</div>
		</section>
	);
}
