import Image from "next/image";
import { principles1, principles2 } from "@/public";

export default function Principles() {
	return (
		<section className="w-full padding-y rounded-t-[20px] bg-background">
			<div>
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry mb-[50px]">
					Discover Influidity story from the horses mouth
					<br className="sm:hidden xm:hidden" />
				</h1>
			</div>
			<div className="w-full border-t border-[#21212155]">
				<div className="w-full padding-x mt-[50px] flex justify-between gap-[30px] items-center sm:flex-col xm:flex-col">
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles1}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col items-center justify-center gap-[20px]">
							<div className="flex items-center justify-center">

								<p className="sub-paragraph] font-medium font-NeueMontreal text-secondry pt-[30px] tracking-wide link-flash w-[9vw] cursor-pointer">
									BABA MITRA, FOUNDER
								</p>
							</div>
							<p className="paragraph font-NeueMontreal text-secondry">
								Influidity is quiet a tongue twister name but it not simply a name, it’s a combination of two words infinity and fluidity.
								Hence Infinite Solutions and Fluid Operations. Nevertheless, Influidity is formed with only one purpose that is to deliver
								growth and revenue to its clients through its multifaceted services. Influidity believes that growth should be the only constant in business.
								In the last financial year, Influidity has grown 350% even in the time of pandemic.
								Our commitment of excellence to our clients is Influidity’s biggest virtue.

							</p>
						</div>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles2}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col items-center justify-center gap-[20px]">
							<div className="flex items-center justify-center">

								<p className="sub-paragraph] font-medium font-NeueMontreal text-secondry pt-[30px] tracking-wide link-flash w-[9vw] cursor-pointer">
									PRIYANKA PADHI, FOUNDER
								</p>
							</div>
							<p className="paragraph font-NeueMontreal text-secondry">
								Influidity was built with the vision and passion to resolve pain point of entrepreneurs and provide quality service that can make a difference and help achieve business objectives.
								What sets us apart from others in the market is the ability of the team to understand the problem along with its constraints and create strategies to achieve the milestones of the business.
								There is no aspiration of our partners that we deem unrealistic. Influidity believes in creating a timeline in which we can achieve those milestones for their business.
								Ethics and good consciousness are Influidity’s strongest suite. We take huge pride and satisfaction for job well done for our partners.

							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}