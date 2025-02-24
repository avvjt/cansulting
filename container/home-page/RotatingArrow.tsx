import React, { useState, useEffect } from "react";

const RotatingArrow: React.FC = () => {
  const [rotation, setRotation] = useState<number>(0);

  const handleMouseMove = (event: MouseEvent): void => {
    // Get the center of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calculate the angle between the mouse position and the center
    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const degrees = (angle * 180) / Math.PI;

    setRotation(degrees);
  };

  useEffect(() => {
    // Add mousemove listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.1s ease",
      }} className="mt-16 ml-4"
    >
      {/* Arrow SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100">
  <path 
    d="M3.41 2H16V0H1a1 1 0 0 0-1 1v16h2V3.41l28.29 28.3 1.41-1.41z" 
    fill="black" 
    stroke="black" 
    stroke-width="2" />
</svg>

    </div>
  );
};

export default RotatingArrow;
