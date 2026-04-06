import { Navbar } from "@/components/restaurant/Navbar";
import { Hero } from "@/components/restaurant/Hero";
import { Experience } from "@/components/restaurant/Experience";
import { FeaturedDishes } from "@/components/restaurant/FeaturedDishes";
import { Gallery } from "@/components/restaurant/Gallery";
import { Reservations } from "@/components/restaurant/Reservations";
import { Footer } from "@/components/restaurant/Footer";

const Index = () => (
  <main className="bg-background min-h-screen">
    <Navbar />
    <Hero />
    <Experience />
    <FeaturedDishes />
    <Gallery />
    <Reservations />
    <Footer />
  </main>
);

export default Index;
