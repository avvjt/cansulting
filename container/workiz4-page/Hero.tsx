import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { workiz, workizhero } from "@/public";
import { BackgroundImg, Rounded } from "@/components";

export default function Hero() {
	return (
		<section className="w-full rounded-b-[20px]">
			<div className="w-full pb-[200px]">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								<div className="flex items-center gap-[5px]">
									
									<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
									Virtual CFO
									</h1>
								</div>
							</h1>
						</div>
					</div>

					<div className="w-full border-t border-[#21212155]">
						<p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry pt-16 pb-14">
						Your numbers tell a story—are you listening?&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
							
							</span>
					
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
						
							</span>
							
						</p>

						<p className="w-[80%] sm:w-full xm:w-full text-4xl font-normal padding-x  font-NeueMontreal text-secondry pb-14">
						
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
							
							</span>
					
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
							
							</span>
							Financial clarity is the backbone of growth, and we can provide expert guidance to make sure your business is making smarter decisions.
							 From managing cash flow to planning for the future, our Virtual CFO services give you the insights you need without the overhead of a full-time CFO.
							  It's about making your finances work for you, so you can focus on building your business.

						</p>

					</div>

					
				</div>
			</div>
			
		</section>
	);
}
