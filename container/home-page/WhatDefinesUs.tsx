"use client";

import React from "react";
import { motion } from "framer-motion";

const WhatDefinesUs: React.FC = () => {
  return (
    <div className="relative bg-[#71edbc] py-16 px-8 md:px-16 lg:px-32">
      {/* Background pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <motion.div
          className="grid grid-cols-6 gap-4 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="w-full h-full border border-gray-300 rounded-full"
            />
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-black mb-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What defines us
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          We’re brand builders at heart, creators by design, tech enthusiasts in
          practice, and integrated at our core. We’re on a mission to take the
          very best of Indian creative talent to the world.
        </motion.p>

        <motion.button
          className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Dive Into Our Culture →
        </motion.button>
        
      </div>
    </div>
  );
};

export default WhatDefinesUs;
