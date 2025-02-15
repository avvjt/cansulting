"use client";
import { useRef } from "react";
import { ProjectCard, Tags } from "@/components";
import { presentationProjectItem } from "@/constants";

import { LinkHover } from "@/animation";
import dynamic from "next/dynamic";

const footerItems = [
  {
    id: 1,
    title: "Linkedin",
    href: "https://www.linkedin.com/company/influidity-solution/",
  },
  {
    id: 2,
    title: "Instagram",
    href: "https://www.instagram.com/influidity_solution/",
  },
  {
    id: 3,
    title: "Facebook",
    href: "https://www.facebook.com/influiditysolution/",
  },
  {
    id: 4,
    title: "X",
    href: "https://x.com/Influidity",
  },
];

function Projects() {
  const container = useRef(null);
  return (
    <div className="w-full" ref={container}>
      <div className="w-full flex flex-col items-center justify-center bg-about">
        <div
          data-scroll
          data-scroll-speed="-.2"
          className="bg-[#BFDA62] w-[75%] py-[20px] rounded-t-[10px]	"
        />
        <div
          className="bg-[#B8D25E] relative z-20 w-[90%] py-[20px] rounded-t-[10px]"
          data-scroll
          data-scroll-speed="-.1"
        />
      </div>
      <section className="w-full relative z-30 padding-y rounded-t-[20px] bg-background">
        <div>
          <h1 className=" text-2xl font-normal padding-x font-NeueMontreal text-secondry">
            Running a business today is not easy. Markets change fast, customers
            expect more,
            <br className="sm:hidden xm:hidden" />
            and managing people, finances, and growth can be overwhelming.
            That’s where consulting comes in.
          </h1>
        </div>

        <div className="w-full border-y border-[#21212155] my-[50px] py-[20px]">
          <div className="padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">
            <div className="w-[50%] sm:w-full xm:w-full">
              <h3 className="sub-paragraph font-medium text-secondry font-NeueMontreal">
                <div>
                  <span className="sub-paragraph font-medium font-NeueMontreal text-secondry pt-[4vh] tracking-wide link-flash cursor-pointer">
                    Why Your Business Needs Consulting?
                  </span>

                  <div className="mt-8">
                    <p>Because guessing isn't a strategy.​</p>
                    <p>Because problems don't fix themselves.​</p>
                    <p>Because every step without clarity is a step wasted.​</p>
                    <p>Because growth needs a plan, not a prayer.</p>
                  </div>

                </div>
              </h3>
            </div>
            <div className="w-[50%] sm:w-full xm:w-full">
              <div className="w-full flex gap-[30px] h-full items-end sm:items-start sm:flex-col xm:items-start xm:flex-col">
                <div className="w-[75%] sm:w-[60%] xm:w-[60%]">
                  <p className="sub-paragraph font-medium font-NeueMontreal text-secondry tracking-wide">
                    We help businesses discover what is wrong, where opportunities lie, and turn those into real, lasting results. Consulting is bringing clarity to complexity, solving problems that slow you down, and helping you build a stronger, more successful future. It's about making your business work better so you can focus on what truly matters: achieving your goals.
                  </p>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between gap-y-[50px] padding-x padding-y flex-wrap">
          {presentationProjectItem.map((item) => (
            <div className="w-[49%] sm:w-full xm:w-full" key={item.id}>
              <div className="flex gap-x-[10px] items-center pb-[10px]">
                <span className="w-[10px] h-[10px] rounded-full bg-secondry" />
                <h1 className="small-text uppercase font-medium font-NeueMontreal text-secondry">
                  {item.title}
                </h1>
              </div>
              <ProjectCard item={item} key={item.id} />
              <div className="flex flex-wrap items-center gap-[10px] mt-[20px]">
                {item.links.map((link) => (
                  <Tags
                    bgcolor="#212121"
                    item={link}
                    key={link.id}
                    className="hover:text-white"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


export default dynamic (() => Promise.resolve(Projects), {ssr: false})
