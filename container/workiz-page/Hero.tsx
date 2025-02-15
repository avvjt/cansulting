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
										Marketing Connsulting
									</h1>
								</div>
							</h1>
						</div>
					</div>

					<div className="w-full border-t border-[#21212155]">
						<p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry pt-16 pb-14">
						Your audience is out there, but are they really listening?&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
							
							</span>
							
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
							
							</span>
							
						</p>

						<p className="w-[80%] sm:w-full xm:w-full text-4xl font-normal padding-x  font-NeueMontreal text-secondry pb-14">
						In a market full of distractions, we help businesses craft messages that matter and deliver them with precision. Marketing isn’t about shouting louder, it’s about understanding what your customers need and speaking directly to it. Whether you’re building a brand, launching a campaign, or looking to boost your results, we provide strategies that aren’t just &nbsp;&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
						
							</span>
					
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
							
							</span>
							
						</p>

					</div>

					
				</div>
			</div>
			
		</section>
	);
}
