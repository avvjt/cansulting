"use client";

import { motion } from "framer-motion";
import React from "react";

const Statistics: React.FC = () => {
  const stats = [
    {
      title: "Ideas Delivered",
      value: "500+",
      description: "Innovative solutions crafted to drive success.",
    },
    {
      title: "Campaigns Launched",
      value: "1000+",
      description: "High-impact campaigns executed with precision.",
    },
    {
      title: "Engagement Hours",
      value: "20k+",
      description: "Meaningful interactions fostering strong connections.",
    },
    {
      title: "Client Satisfaction",
      value: "98%",
      description: "Trusted by clients with an exceptional approval rate.",
    },
  ];
  

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-4 gap-20 text-black">
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
