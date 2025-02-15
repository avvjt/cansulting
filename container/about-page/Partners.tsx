import Image from "next/image";
import { Ratings } from "@/components";

import {  nestle, officevibe, planetly } from "@/public";

const aboutPartberItems1 = [
	{
	   id: 1,
	   src: planetly,
	   title: "Integrity First",
	   para: "We always focus on ethics and doing the right business. It's not just getting things done, but getting things done with intent, trust, and excellence."
	},
	{
	   id: 2,
	   src: officevibe,
	   title: "Diversity Broadens Perspectives",
	   para: "We bring in diverse ideas to create solutions that work for everybody by embracing all different perspectives of life."
	},
	{
	   id: 3,
	   src: nestle,
	   title: "Transparency Drives Communication",
	   para: "Communicating clearly, honestly, builds strong relationships both with our teams, clients, and partners."
	},
	
 ];

 const aboutPartberItems2 = [
	{
	   id: 1,
	   src: planetly,
	   title: "Accountability Matters",
	   para: "We own our clients' business objectives as if they were our own, ensuring alignment and measurable outcomes."
	},
	{
	   id: 2,
	   src: officevibe,
	   title: "Strategy Meets Logic",
	   para: "We believe that fear of failure is conquered by sound logic and strategy, paving the way for innovation and growth."
	},
	{
	   id: 3,
	   src: nestle,
	   title: "Quality Without Compromise",
	   para: "Cost optimization is important, but never at the expense of delivering excellence."
	},
	
 ];

export default function Principles() {
	return (
		<section className="w-full bg-background">
			<div>
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry">
					At Influidity, we believe that how we achieve success is as important as achieving it. As an expanding organization, we are committed to holding a strong ethical compass. Our core values aren't just words; they're the principles that guide every decision, every interaction, and every result.
					<br className="sm:hidden xm:hidden" /> 
					<br className="sm:hidden xm:hidden" />
	
				</h1>
			</div>
			<div className="w-[80%] p-3 border-t border-[#21212155] mt-[50px]">
				<div className="flex justify-between gap-[20px] sm:flex-col xm:flex-col pt-[50px]">
					{aboutPartberItems1.map((item) => (
						<div
							className="w-[40%] sm:w-[380px] xm:w-[350px]  padding-x py-[30px] shrink-0"
							key={item.id}>
							<div className="w-full h-full flex flex-col gap-[50px]">
								<div>
									<Image
										src={item.src}
										alt="img"
										width={80}
										height={80}
										className="w-[80px] h-[80px]"
									/>
								</div>
								<div className="flex flex-col gap-[20px]">
									<p className="paragraph text-secondry font-NeueMontreal font-normal underline">
										{item.title}
									</p>
									<p className="paragraph text-secondry font-NeueMontreal font-normal">
										{item.para}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="flex justify-between gap-[20px] sm:flex-col xm:flex-col pt-[50px]">
					{aboutPartberItems2.map((item) => (
						<div
							className="w-[40%] sm:w-[380px] xm:w-[350px]  padding-x py-[30px] shrink-0"
							key={item.id}>
							<div className="w-full h-full flex flex-col gap-[50px]">
								<div>
									<Image
										src={item.src}
										alt="img"
										width={80}
										height={80}
										className="w-[80px] h-[80px]"
									/>
								</div>
								<div className="flex flex-col gap-[20px]">
									<p className="paragraph text-secondry font-NeueMontreal font-normal underline">
										{item.title}
									</p>
									<p className="paragraph text-secondry font-NeueMontreal font-normal">
										{item.para}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="padding-x padding-y">
				{/* <Ratings /> */}
			</div>
		</section>
	);
}
