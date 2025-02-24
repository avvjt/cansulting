import Image from "next/image";
import { principles1, principles2 } from "@/public";

export default function Principles() {
  return (
    <section className="w-full padding-y rounded-t-[20px] bg-background">
      <div>
        <h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry mb-[50px]">
          Discover Influidity story from the horse's mouth
          <br className="sm:hidden xm:hidden" />
        </h1>
      </div>
      <div className="w-full border-t border-[#21212155]">
        <div className="w-full padding-x mt-[50px] flex justify-between gap-[30px] items-stretch sm:flex-col xm:flex-col">
          <div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px] flex-1 self-stretch">
            <Image
              src={principles1}
              alt="img"
              className="w-full rounded-[15px]"
            />
            <div className="flex flex-col items-center justify-center gap-[20px] flex-1">
              <div className="flex items-center justify-center">
                <p className="text-2xl font-NeueMontreal text-secondry  tracking-wide link-flash  cursor-pointer font-semibold">
                  BABA MITRA, FOUNDER
                </p>
              </div>
              <p className="text-xl font-NeueMontreal text-secondry">
                Influidity is quite a tongue twister name, but it is not simply a name; it’s a combination of two words: infinity and fluidity.
                Hence, Infinite Solutions and Fluid Operations. Nevertheless, Influidity is formed with only one purpose: to deliver
                growth and revenue to its clients through its multifaceted services. Influidity believes that growth should be the only constant in business.
                In the last financial year, Influidity has grown 350% even in the time of pandemic.
                Our commitment to excellence for our clients is Influidity’s biggest virtue.
              </p>
            </div>
          </div>
          <div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px] flex-1 self-stretch">
            <Image
              src={principles2}
              alt="img"
              className="w-full rounded-[15px]"
            />
            <div className="flex flex-col items-center justify-center gap-[20px] flex-1">
              <div className="flex items-center justify-center">
                <p className="text-2xl font-semibold font-NeueMontreal text-secondry  tracking-wide link-flash  cursor-pointer">
                  PRIYANKA PADHI, FOUNDER
                </p>
              </div>
              <p className="text-xl font-NeueMontreal text-secondry">
                Influidity was built with the vision and passion to resolve the pain points of entrepreneurs and provide quality services that make a difference and help achieve business objectives.
                What sets us apart from others in the market is our ability to understand problems along with their constraints and create strategies to achieve business milestones.
                Influidity believes in creating a timeline in which we can achieve those milestones for their business.
                Ethics and good consciousness are Influidity’s strongest suit. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
