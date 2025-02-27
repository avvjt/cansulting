"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { text, curve, translate } from "@/motion";

const routes = {
  "/": "<span style='font-size: 35px; font-weight: bold;'>Great things aren’t rushed, and neither are we.</span><span style='font-size: 25px; line-height: 1.2; display: block;'>While we put the finishing touches on what’s coming your way, take a second to breathe. Sometimes, the wait is part of the process.</span>",
  "/GrowthStory": "Growth Story",
  "/consulting": "Consulting",
  "/influidity": "Influidity",
  "/career": "Career",
  "/contact": "Contact Us",
  "/case": "Workiz Easy",
  "/marketingconsulting": "Marketing Consulting",
  "/businessconsulting": "Business Consulting",
  "/virtualcfo": "Virtual CFO",
  "/hrconsulting": "HR Consulting",
  "/consulting": "Consulting",
};

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({ children, backgroundColor }) {
  const router = useRouter();
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div style={{ backgroundColor }}>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="fixed h w-full pointer-events-none left-0 top-0 z-50 bg-black"
      />
      <motion.p
        className={`absolute left-1/2 ${
          router.route === "/" ? "top-[10%]" : "top-[40%]"
        } text-white text-[50px] z-[60] -translate-x-1/2 text-center`}
        {...anim(text)}
        dangerouslySetInnerHTML={{ __html: routes[router.route] }}
      />

      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg
      className="fixed h w-full pointer-events-none left-0 top-0 z-50"
      {...anim(translate)}
    >
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};