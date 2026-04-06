import { motion } from "framer-motion";
import { AnimatedSection, AnimatedText, GoldDivider } from "./AnimatedSection";
import { dishes } from "@/data/menuData";
import { Link } from "react-router-dom";

const tagColors: Record<string, string> = {
  "picante": "border-red-500/40 text-red-400 bg-red-500/5",
  "vegano": "border-green-500/40 text-green-400 bg-green-500/5",
  "sin gluten": "border-blue-400/40 text-blue-300 bg-blue-400/5",
  "top ventas": "border-primary/40 text-primary bg-primary/5",
  "nuevo": "border-amber-400/40 text-amber-300 bg-amber-400/5",
  "chef recomienda": "border-primary/40 text-primary bg-primary/5",
};

export const FeaturedDishes = () => {
  const featured = dishes.slice(0, 4);

  return (
    <section id="platos" className="py-24 md:py-36 section-padding">
      <AnimatedText className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Selección del chef</p>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-foreground tracking-wide">
          Platos Destacados
        </h2>
        <GoldDivider className="mt-6" />
      </AnimatedText>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {featured.map((dish, i) => (
          <AnimatedSection key={dish.id} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-card border border-border/30 overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                
                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {dish.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider border rounded-full ${tagColors[tag] || "border-primary/30 text-primary bg-primary/5"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg text-foreground mb-1.5">{dish.name}</h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg text-primary">{dish.price}€</span>
                  <span className="font-body text-[10px] tracking-widest uppercase text-muted-foreground group-hover:text-primary transition-colors">
                    Ver más →
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-12">
        <Link to="/carta" className="btn-primary-restaurant">
          Ver Carta Completa
        </Link>
      </AnimatedSection>
    </section>
  );
};
