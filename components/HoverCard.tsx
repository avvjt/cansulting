import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavItem {
  id: number;
  title: string;
  href: string;
  description: string;
  features?: string[];
}

interface HoverCardProps {
  isVisible: boolean;
  item: NavItem;
  onClose: () => void;
}

export const HoverCard = ({ isVisible, item, onClose }: HoverCardProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop with blur effect that excludes the navbar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-40"
            style={{ 
              marginTop: '8vh',
              pointerEvents: 'auto'
            }}
            onClick={onClose}
          />
          
          {/* Hover Card */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              duration: 0.2 
            }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 z-50 w-80"
          >
            <div className="space-y-4">
              {/* Card Header */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Features List */}
              {item.features && (
                <ul className="space-y-3 pt-3 border-t border-gray-100">
                  {item.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className="text-sm text-gray-600 flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Card Footer */}
              <div className="pt-4 border-t border-gray-100">
                <Link 
                  href={item.href}
                  className="group inline-flex items-center text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Learn more 
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};