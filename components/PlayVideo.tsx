"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function PlayVideo({ videosrc }: { videosrc: string }) {
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
    setIsHovered(true);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full relative overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleMute} // Added click handler here
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

      {isHovered && (
        <motion.div
          className="absolute bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium pointer-events-none"
          style={{
            left: mousePos.x + 20,
            top: mousePos.y + 20,
            transform: "translate(0, -50%)"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {isMuted ? "Unmute" : "Mute"}
        </motion.div>
      )}
    </div>
  );
}
