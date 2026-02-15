import { useState } from "react";
import { X } from "lucide-react";

interface TileData {
  title: string;
  subtitle: string;
  bg: string;
  content: string;
}

const tiles: TileData[] = [
  {
    title: "Enterprise",
    subtitle: "Enabling complete AI adoption.",
    bg: "bg-pink",
    content:
      "We partner with enterprise organizations to embed AI across every layer of their operations — from strategy to deployment. Our approach ensures AI adoption that drives measurable ROI, not just pilot projects.",
  },
  {
    title: "Small Businesses",
    subtitle: "Building complete software and IT infrastructure.",
    bg: "bg-navy",
    content:
      "Small businesses deserve enterprise-grade technology. We design and build complete software ecosystems — from cloud infrastructure to custom applications — tailored to your scale and budget.",
  },
  {
    title: "R&D",
    subtitle: "Access the moving top innovators.",
    bg: "bg-navy-deep",
    content:
      "Our R&D division connects you with cutting-edge research and the brightest minds in technology. We translate academic breakthroughs into practical business advantages.",
  },
  {
    title: "Team",
    subtitle: "Meet the people behind Devtir.",
    bg: "bg-navy",
    content:
      "Our team combines decades of experience in software engineering, AI research, and business consulting. Every member is selected for their ability to deliver transformative results.",
  },
  {
    title: "Why Inefficiency Exists",
    subtitle: "Understanding the root cause.",
    bg: "bg-gray-dark",
    content:
      "Inefficiency isn't a technology problem — it's a systems problem. Legacy processes, siloed teams, and misaligned incentives create friction that compounds over time. We diagnose and dismantle these barriers.",
  },
  {
    title: "What Is a Consultant?",
    subtitle: "Redefining the role.",
    bg: "bg-black-rich",
    content:
      "A consultant isn't someone who tells you what you already know. At Devtir, consulting means embedding with your team, understanding your challenges deeply, and building solutions that outlast our engagement.",
  },
];

const TileGrid = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="relative w-full">
      {/* Grid */}
      <div
        className={`grid grid-cols-3 grid-rows-2 transition-opacity duration-300 ${
          expanded !== null ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{ minHeight: "400px" }}
      >
        {tiles.map((tile, i) => (
          <button
            key={i}
            onClick={() => setExpanded(i)}
            className={`${tile.bg} text-primary-foreground p-8 flex flex-col justify-end text-left transition-all duration-300 hover:brightness-110 cursor-pointer min-h-[200px]`}
          >
            <h3 className="text-xl font-bold mb-1">{tile.title}</h3>
            <p className="text-sm opacity-80">{tile.subtitle}</p>
          </button>
        ))}
      </div>

      {/* Expanded tile */}
      {expanded !== null && (
        <div
          className={`absolute inset-0 ${tiles[expanded].bg} text-primary-foreground p-12 flex flex-col justify-center animate-fade-in`}
          style={{ minHeight: "400px" }}
        >
          <button
            onClick={() => setExpanded(null)}
            className="absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <h2 className="text-4xl font-bold mb-2">{tiles[expanded].title}</h2>
          <p className="text-lg opacity-70 mb-6">{tiles[expanded].subtitle}</p>
          <p className="text-base leading-relaxed max-w-2xl opacity-90">
            {tiles[expanded].content}
          </p>
        </div>
      )}
    </div>
  );
};

export default TileGrid;
