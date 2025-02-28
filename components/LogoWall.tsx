import React, { useState, FC } from "react";
import Image from "next/image";

interface LogoItem {
  imgUrl: string;
  altText: string;
  heading?: string;
  description?: string;
}

interface LogoWallProps {
  items?: LogoItem[];
  direction?: "horizontal" | "vertical";
  pauseOnHover?: boolean;
  size?: string;
  duration?: string;
  textColor?: string;
  bgColor?: string;
  bgAccentColor?: string;
  reverse?: boolean;
}

const LogoWall: FC<LogoWallProps> = ({
  items = [],
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(6rem, 1rem + 12vmin, 20rem)",
  duration = "30s",
  textColor = "#000000",
  bgColor = "#f1f1f1",
  bgAccentColor = "#f1f1f1",
  reverse = false,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const wrapperClass = [
    "flex",
    "mx-auto",
    "max-w-full",
    "h-full",
    direction === "vertical" && "flex-row justify-center",
  ]
    .filter(Boolean)
    .join(" ");

  const marqueeClass = [
    "relative",
    "flex",
    "overflow-hidden",
    "select-none",
    "gap-20",
    "justify-start",
    "w-full",
    "h-full",
    direction === "vertical" && "flex-col",
    isPaused && "paused",
  ]
    .filter(Boolean)
    .join(" ");

  const imageContainerClass = [
    "relative",
    "overflow-hidden",
    "transition-opacity",
    "duration-300",
    direction === "vertical" ? "w-28 h-28" : "w-40 h-24",
  ]
    .filter(Boolean)
    .join(" ");

  const trackClass = [
    "flex-shrink-0",
    "flex",
    "items-center",
    "gap-20",
    "min-w-full",
    reverse ? "animate-scrollXReverse" : "animate-scrollX",
    direction === "vertical" && "flex-col min-h-full",
  ]
    .filter(Boolean)
    .join(" ");

  const LogoImage = ({
    item,
    keyPrefix,
  }: {
    item: LogoItem & { heading?: string; description?: string };
    keyPrefix: string;
  }) => (
    <div className="flex flex-col items-center py-16 bg-[#f1f1f1]">
      <div className={imageContainerClass}>
        <div className="relative w-full h-full p-2">
          <Image
            key={keyPrefix}
            src={item.imgUrl}
            alt={item.altText}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain opacity-100 transition-opacity"
            priority={false}
          />
        </div>
      </div>
      {/* Box for Heading and Description */}
      <div className="bg-[#f1f1f1] p-4 text-center w-60 font-NeueMontreal">
        <h3 className="text-black font-bold text-lg whitespace-nowrap overflow-hidden font-NeueMontreal line-clamp-1">{item.heading}</h3>
        <p className="text-black font-normal mt-5 text-base font-NeueMontreal leading-none mb-5 line-clamp-2">{item.description}</p>
      </div>
    </div>
  );

  return (
    <article
      className={wrapperClass}
      style={{
        ["--duration" as any]: duration,
        ["--color-text" as any]: textColor,
        ["--color-bg" as any]: bgColor,
        ["--color-bg-accent" as any]: bgAccentColor,
        color: "var(--color-text)",
        backgroundColor: "var(--color-bg)",
      }}
    >
      <div
        className={marqueeClass}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className={trackClass}>
          {items.map((item, idx) => (
            <LogoImage key={idx} item={item} keyPrefix={`${idx}`} />
          ))}
        </div>
        <div aria-hidden="true" className={trackClass}>
          {items.map((item, idx) => (
            <LogoImage
              key={`dup1-${idx}`}
              item={item}
              keyPrefix={`dup1-${idx}`}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default LogoWall;