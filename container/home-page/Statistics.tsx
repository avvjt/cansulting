"use client";

import { motion } from "framer-motion";
import React from "react";

const Statistics: React.FC = () => {
  const stats = [
    {
      title: "Clients",
      value: "250+",
      description:
        "With over a decade of experience, Shape is an energetic, fresh and vibrant team offering creative talent and industry knowledge.",
    },
    {
      title: "Referrals",
      value: "55%",
      description:
        "Over 55% of our projects are referrals from clients already with us. Our clients love to spread the love far and wide.",
    },
    {
      title: "Male:Female ratio",
      value: "56:44",
      description:
        "In a male-dominated industry, we are proud to say we’re striving for equal gender roles at Shape.",
    },
  ];

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-12 text-black">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl mb-5 font-medium text-start">{stat.title}</h3>
            <hr />
            <p className="text-8xl my-3 font-semibold ml-2 mt-3 text-start mb-4">{stat.value}</p>

            <p className="text-gray-600 text-lg tracking-tight text-start">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
