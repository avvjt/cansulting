"use client";
import Image from "next/image";
import { eyes } from "@/public";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function PlayVideo({ videosrc }: { videosrc: string }) {
  const [rotate, setRotate] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    // Start playing the video when component mounts
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const mq = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <div className="w-full relative overflow-hidden" ref={container}>
      <div
        className="w-full h-full"
        data-scroll
        data-scroll-speed="-.8"
        data-scroll-section
      >
        <video
          className="w-full h-full"
          loop
          autoPlay
          playsInline
          ref={videoRef}
          src={videosrc}
          onEnded={handleVideoEnd}
        />
        <motion.div
          className="w-full absolute top-[50%] transform translate-y-[-50%] gap-[30px] flex items-center justify-center"
          style={{ y: mq }}
        >
          <div
            className="w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[100px] xm:h-[100px] bg-white rounded-full flex items-center justify-center cursor-pointer"
            onClick={toggleMute}
          >
            <div className="relative w-full h-full">
              <Image
                style={{
                  transform: `rotate(${rotate}deg)`,
                }}
                src={eyes}
                alt="img"
                className="w-full h-full object-cover"
              />
              <p className="absolute top-1/2 left-1/2 paragraph uppercase text-white font-NeueMontreal font-medium transform translate-x-[-50%] translate-y-[-50%]">
                {isMuted ? "Unmute" : "Mute"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
