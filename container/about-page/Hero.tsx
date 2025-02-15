"use client";
import Link from "next/link";
import Image from "next/image";
import { ochiside } from "@/public";
import { Eyes } from "@/components";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full min-h-screen">
      <div className="w-full flex flex-col justify-between">
        <div className="w-full flex flex-col">
          <div className="w-full margin padding-x">
            <div>
              <h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
                WE ARE <br />
                <div className="flex items-center gap-[5px]">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{
                      ease: [0.86, 0, 0.07, 0.995],
                      duration: 1,
                      delay: 1.5,
                    }}
                  >
                    {/* <Image
											width={120}
											height={50}
											src={ochiside}
											alt="img"
											className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]"
										/> */}
                  </motion.span>
                  <h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
                    InfluidityDESIGN
                  </h1>
                </div>
              </h1>
            </div>
          </div>
          <div className="w-full border-t border-[#21212155] pt-[20px]">
            <div className="w-full flex flex-col justify-between  padding-x sm:flex-col xm:flex-col gap-[20px]">
              <div className="w-full sm:w-full xm:w-full mt-4">
                <h3 className="font-semibold text-secondry 	text-5xl font-NeueMontreal">
                  About us:
                </h3>
              </div>
              <div className="w-full flex mt-2 justify-between sm:w-full xm:w-full sm:flex-col xm:flex-col gap-[20px]">
                <div className="w-[70%] flex flex-col gap-y-[40px] sm:w-full xm:w-full">
                  <div className="flex flex-col gap-y-[20px]">
                    <p className="paragraph font-NeueMontreal text-secondry">
                      Business is not checking boxes or templates. It is solving real problems,
                      responding to change, and building something that lasts.
                      That is what Influidity Solution is all about. Founded in 2017,
                      we built our name on two ideas: Infinity for endless possibilities,
                      and Fluidity for adaptability. What does that mean for you?
                      It means strategies that grow as you grow, ideas that solve problems before they arise,
                      and a partner that sticks with you for the long haul. We're here to help you launch your new start-up,
                      scale your small or medium enterprise, or redefine your corporate legacy.
                      We cut through the noise to deliver what works.
                    </p>
                  </div>

                  <div className="flex flex-col gap-y-[20px]">
                    <p className="paragraph font-NeueMontreal text-secondry">
                      No fluff. No jargon. Just solutions designed to make your business move smarter,
                      adapt faster, and grow stronger. We are not in the business of selling services.
                      We are in the business of getting you where you need to be-through strategies
                      that do not just work on paper but thrive in the real world. At Influidity,
                      we believe that growth should feel as natural, seamless, and inevitable as possible.
                      For when you get it right, success doesn't have to be forced. It just flows.
                    </p>
                  </div>

                  <div className="flex flex-col gap-y-[20px]">
                    <p className="paragraph font-NeueMontreal text-secondry">
                      The rules of business have changed. In a world where speed and precision are everything,
                      there’s no room for half-measures. Influidity Solution understands this.
                      We don't just advise; we build solutions that work in the real world, where challenges are constant,
                      and outcomes are what count. We have, since 2017, assumed that every organization is unique with its needs being different.
                      To this end, our strategies are well designed to take into account a business, specific goals, or challenges.
                    </p>
                  </div>

                  <div className="flex flex-col gap-y-[20px]">
                    <p className="paragraph font-NeueMontreal text-secondry">
                      Never shortcuts and absolutely no "one-size-fits-all. "Our approach is based on the concept of "Perfection along Constraints.
                      " Whether it's identifying inefficiencies, improving customer experiences, or reducing costs that don't add value,
                      we focus on what moves the needle for you. We help organizations do more than adapt to change — we help them thrive in it.
                      We are not just service providers at BPI. We are a partner that cares for the success as much as you do.
                      We go further because your success is our success.
                    </p>
                  </div>


                </div>
                <div className="flex w-fit h-fit gap-[5px] group">
                  <div className="rounded-[50px] border border-[#21212199] group-hover:bg-secondry  py-[3px] px-[12px] cursor-pointer">
                    <Link
                      href="/consulting"
                      className="paragraph font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-200 ease-in"
                    >
                      Our Work
                    </Link>
                  </div>
                  <div className="w-[35px] flex items-center justify-center h-[35px] border border-[#21212199] rounded-[50px] p-[12px]  group-hover:bg-secondry transition-all duration-200 ease-in cursor-pointer sm:hidden xm:hidden">
                    <p className="paragraph font-normal text-secondry group-hover:text-background">
                      <ArrowUpRight strokeWidth={1.25} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="padding-y" data-scroll data-scroll-speed="-.1">
        <Eyes className="w-[300px] h-[300px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[150px] xm:h-[150px] sm:flex-col xm:flex-col" />
      </div> */}

    </section>
  );
}
