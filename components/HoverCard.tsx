import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { CircleArrowOutUpRight } from "lucide-react";

interface NavItem {
  id: number;
  title: string;
  href: string;
  description?: string; // Make optional with ?
  features?: string[];
  hoverItem: Array<{
    short: string;
    full: string;
    [key: string]: any;
  }>;
  [key: string]: any;
}


interface HoverCardProps {
  isVisible: boolean;
  item: NavItem;
  onClose: () => void;
}

export const HoverCard = ({ isVisible, item, onClose }: HoverCardProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-40"
            style={{
              marginTop: "8vh",
              pointerEvents: "auto",
            }}
            onClick={onClose}
          />

          <motion.div
            key="card"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.2,
            }}
            className="absolute top-full -left-[15rem] mt-2 bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 z-50 w-fit"
          >
            <div className="flex flex-row gap-12 w-100">
              <div className="flex flex-col gap-0">
                {item.hoverItem.map((ele, index) => (
                  <div
                    key={index}
                    className="flex flex-col relative w-80 rounded-2xl p-4 font-medium hover:bg-gray-100 transition-colors duration-200"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <p className="font-bold text-lg font-NeueMontreal">{ele.short}</p>
                    <p className="text-gray-700 font-NeueMontreal">{ele.full}</p>
                    {hoveredIndex === index && (
                      <CircleArrowOutUpRight className="absolute top-4 right-4 h-4 w-4" />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 bg-gray-100 w-60 rounded-lg p-4 font-medium h-auto">
                <p className="font-NeueMontreal-bold">Explore our expertise</p>
                <p className="font-NeueMontreal">
                  We don’t stop there, check out all the services we offer here at Shape
                </p>
                <img
                  src="https://images.jdmagicbox.com/comp/bhubaneshwar/w7/0674px674.x674.180316085509.t8w7/catalogue/influidity-solution-pvt-ltd-bhubaneswar-bhubaneshwar-business-continuity-management-consultants-2myqmywf56.jpg"
                  alt=""
                  className="mt-2 rounded-lg self-center"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
