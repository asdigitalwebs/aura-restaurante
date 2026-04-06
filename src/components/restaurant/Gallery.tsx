import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { AnimatedSection, AnimatedText, GoldDivider } from "./AnimatedSection";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import dish5 from "@/assets/dish-5.jpg";
import dish6 from "@/assets/dish-6.jpg";
import chefPlating from "@/assets/chef-plating.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const images = [
  { src: dish1, alt: "Tartar de Wagyu", span: "col-span-1 row-span-1" },
  { src: restaurantInterior, alt: "Interior", span: "col-span-2 row-span-1" },
  { src: dish3, alt: "Tagliatelle al Tartufo", span: "col-span-1 row-span-1" },
  { src: chefPlating, alt: "Chef emplatando", span: "col-span-1 row-span-1" },
  { src: dish5, alt: "Chuletón", span: "col-span-1 row-span-1" },
  { src: dish2, alt: "Sushi Omakase", span: "col-span-1 row-span-1" },
  { src: dish4, alt: "Coulant", span: "col-span-1 row-span-1" },
  { src: dish6, alt: "Old Fashioned", span: "col-span-1 row-span-1" },
];

export const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 md:py-36 section-padding">
      <AnimatedText className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Visual</p>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-foreground tracking-wide">
          Galería
        </h2>
        <GoldDivider className="mt-6" />
      </AnimatedText>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
        {images.map((img, i) => (
          <AnimatedSection key={i} delay={i * 0.06} className={img.span}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer overflow-hidden aspect-square"
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-all duration-500 flex items-end p-4">
                <span className="font-body text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wider uppercase">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors">
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
