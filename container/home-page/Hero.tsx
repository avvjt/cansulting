"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";



// Shooting stars configuration
const stars = [
  { top: 0, right: 0, delay: 0, duration: 8 },
  { top: 0, right: 80, delay: 0.2, duration: 6 },
  { top: 80, right: 0, delay: 0.4, duration: 4 },
//   { top: 0, right: 180, delay: 0.6, duration: 1.5 },
//   { top: 0, right: 400, delay: 0.8, duration: 2.5 },
//   { top: 0, right: 600, delay: 1, duration: 3 },
//   { top: 300, right: 0, delay: 1, duration: 1.75 },
//   { top: 0, right: 700, delay: 1.4, duration: 1.25 },
//   { top: 0, right: 1000, delay: 0.75, duration: 2.25 },
//   { top: 0, right: 1000, delay: 2.75, duration: 2.25 },
];

export default function Hero() {
  return (
    <section
      className="w-full h-screen sm:mb-[-10px] xm:mb-[-10px] relative overflow-hidden"
      data-scroll
      data-scroll-speed="-.3"
    >
      {/* Shooting Stars */}
      {stars.map((star, index) => (
        <span
          key={index}
          className="shooting-star"
          style={{
            top: `${star.top}px`,
            right: `${star.right}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* Existing Hero Content */}
	  <div className="w-full h-full flex flex-col justify-between">
				<div />
				<div className="w-full flex flex-col justify-between h-[75vh] sm:h-[85vh] xm:h-[85vh]">
					<div className="w-full flex justify-between gap-[20px] pl-[50px] md:pl-[30px] sm:pl-[20px] xm:pl-[20px]">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								 <br />
								<div className="flex items-center gap-[5px]">
									<motion.span
										initial={{ width: 0 }}
										animate={{ width: "auto" }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 1,
											delay: 1.5,
										}}
										className="leading-[130px]">
										{/* <Image
											width={120}
											height={50}
											src="/influidity.png"
											alt="img"
											className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]"
										/> */}
									</motion.span>
									<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
									we solve problems
									</h1>
								</div>
								— you scale faster
							</h1>
						</div>
						<div>
							{/* <Image
								src={awwwards}
								alt="awwwards"
								width={60}
								height={60}
								className="xm:hidden sm:hidden"
							/> */}
						</div>
					</div>
					<div className="w-full flex flex-col h-[22vh] border-t border-[#21212155] py-[20px] sm:mb-[80px] xm:mb-[80px] gap-[30px]">
						<div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
							<div className="w-[50%] xm:w-full sm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry">
									For public and private companies
								</p>
							</div>
							<div className="w-[50%] xm:w-full sm:w-full flex justify-between xm:flex-col xm:items-start sm:flex-col sm:items-start gap-[20px]">
								<div>
									<p className="paragraph font-NeueMontreal text-secondry">
										From the first picth to IPO
									</p>
								</div>
								<div className="flex items-center gap-[5px] group">
									<div className="rounded-[50px] border border-[#21212199] group-hover:bg-secondry  py-[3px] px-[12px] cursor-pointer">
										<Link
											className="paragraph font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all  transform duration-[0.3s] ease-[.215,.61,.355,1]"
											href="/contact">
											Book a consultaton
										</Link>
									</div>
									<div className="w-[33px] flex items-center justify-center h-[33px] border border-[#21212199] rounded-full p-[1px] sm:p-[30px] xm:pb-[30px]  group-hover:bg-secondry transition-all transform duration-[0.3s] ease-[.215,.61,.355,1] cursor-pointer xm:hidden sm:hidden">
										<p className="font-normal text-secondry group-hover:text-background">
											<ArrowUpRight
												size={24}
												strokeWidth={1.25}
											/>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full flex items-center overflow-hidden justify-center xm:hidden sm:hidden">
							<motion.p
								initial={{ y: "-100%", opacity: 0 }}
								animate={{ y: "100%", opacity: 0.5 }}
								transition={{
									duration: 1.8,
									repeat: Infinity,
									ease: [0.3, 0.86, 0.36, 0.95],
								}}
								className="paragraph opacity-50 font-NeueMontreal text-secondry">
								scroll down
							</motion.p>
						</div>
					</div>
				</div>
			</div>

      <style jsx global>{`
        @keyframes animate {
          0% {
            transform: rotate(315deg) translateX(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(315deg) translateX(-1500px);
            opacity: 0;
          }
        }

        .shooting-star {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #000;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1),
            0 0 0 8px rgba(0, 0, 0, 0.1),
            0 0 20px rgba(0, 0, 0, 1);
          animation: animate 3s linear infinite;
          z-index: 0;
        }

        .shooting-star::before {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 300px;
          height: 1px;
          background: linear-gradient(90deg, #000, transparent);
        }
      `}</style>
    </section>
  );
}
