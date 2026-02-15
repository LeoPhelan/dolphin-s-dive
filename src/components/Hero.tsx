import { useState, useRef } from "react";
import heroDolphin from "@/assets/hero-dolphin.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverX, setHoverX] = useState(0.5);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    setHoverX(x);
  };

  const pinkOpacity = isHovering ? Math.max(0, 1 - hoverX * 1.5) * 0.6 : 0;
  const navyOpacity = isHovering ? Math.max(0, (hoverX - 0.3) * 1.5) * 0.6 : 0;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[50vh] min-h-[400px] overflow-hidden cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        src={heroDolphin}
        alt="Dolphin hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Pink overlay */}
      <div
        className="absolute inset-0 bg-pink pointer-events-none transition-opacity duration-300"
        style={{ opacity: pinkOpacity }}
      />
      {/* Navy overlay */}
      <div
        className="absolute inset-0 bg-navy-deep pointer-events-none transition-opacity duration-300"
        style={{ opacity: navyOpacity }}
      />
    </div>
  );
};

export default Hero;
