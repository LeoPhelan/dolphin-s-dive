import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TileGrid from "@/components/TileGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Hero />
      <TileGrid />
      <div className="flex-1" />
      <Footer />
    </div>
  );
};

export default Index;
