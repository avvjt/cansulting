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
									Business Consulting
									</h1>
								</div>
							</h1>
						</div>
					</div>

					<div className="w-full border-t border-[#21212155]">
						<p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry pt-16 pb-14">
						Your business has potential, but is it reaching its peak?&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
							
							</span>
							and&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
							
							</span>
							
						</p>

						<p className="w-[80%] sm:w-full xm:w-full text-4xl font-normal padding-x  font-NeueMontreal text-secondry pb-14">
							
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								
							</span>
						
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
							
							</span>
							In a world of constant change, we help you find opportunities, overcome challenges,
							 and create strategies that deliver real outcomes. Business success is not about doing everything; it's about doing the right things.
							 We work with you to build a strong, efficient, 
						</p>

					</div>

					
				</div>
			</div>
			
		</section>
	);
}
