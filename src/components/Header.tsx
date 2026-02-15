import { Fish } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* Main Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-background border-b border-border">
        <div className="flex items-center gap-3">
          <Fish className="h-7 w-7 text-secondary" />
          <span className="text-xl font-bold tracking-tight text-foreground">DEVTIR</span>
        </div>
        <button className="px-6 py-2 text-sm font-semibold bg-secondary text-secondary-foreground rounded hover:opacity-90 transition-opacity">
          Book Consultation
        </button>
      </header>

      {/* Sub Header */}
      <div className="flex items-center justify-between px-8 py-2 bg-navy-deep text-primary-foreground text-xs font-medium tracking-widest uppercase">
        <span>Team</span>
        <span>Thesis</span>
      </div>
    </>
  );
};

export default Header;
