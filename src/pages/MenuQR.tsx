import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ArrowLeft, Flame, Leaf, Wheat, Star, Sparkles, ChefHat, X } from "lucide-react";
import { Link } from "react-router-dom";
import { dishes, categories, type Dish, type DishTag } from "@/data/menuData";

const tagIcons: Record<DishTag, React.ReactNode> = {
  "picante": <Flame size={10} />,
  "vegano": <Leaf size={10} />,
  "sin gluten": <Wheat size={10} />,
  "top ventas": <Star size={10} />,
  "nuevo": <Sparkles size={10} />,
  "chef recomienda": <ChefHat size={10} />,
};

const tagStyles: Record<string, string> = {
  "picante": "border-red-500/50 text-red-400 bg-red-500/10",
  "vegano": "border-green-500/50 text-green-400 bg-green-500/10",
  "sin gluten": "border-blue-400/50 text-blue-300 bg-blue-400/10",
  "top ventas": "border-primary/50 text-primary bg-primary/10",
  "nuevo": "border-amber-400/50 text-amber-300 bg-amber-400/10",
  "chef recomienda": "border-primary/50 text-primary bg-primary/10",
};

const DishCard = ({ dish, isActive }: { dish: Dish; isActive: boolean }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="snap-item relative flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full p-5 pb-8 space-y-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {dish.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider border rounded-full ${tagStyles[tag]}`}
            >
              {tagIcons[tag]} {tag}
            </span>
          ))}
        </div>

        {/* Name & Price */}
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-display text-3xl sm:text-4xl text-foreground leading-tight">{dish.name}</h2>
              <p className="font-display text-2xl text-primary mt-1">{dish.price}€</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Description */}
        <p className="font-body text-sm text-foreground/80 leading-relaxed max-w-sm">{dish.description}</p>

        {/* Expand Details */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-2 font-body text-[10px] tracking-[0.2em] uppercase text-primary"
        >
          {showDetails ? "Ocultar" : "Ingredientes & Alérgenos"}
          {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="glass-card p-4 space-y-3 mt-1">
                <div>
                  <p className="font-body text-[10px] tracking-widest uppercase text-primary mb-1.5">Ingredientes</p>
                  <p className="font-body text-xs text-foreground/70">{dish.ingredients.join(" · ")}</p>
                </div>
                {dish.allergens.length > 0 && (
                  <div>
                    <p className="font-body text-[10px] tracking-widest uppercase text-red-400 mb-1.5">Alérgenos</p>
                    <p className="font-body text-xs text-foreground/70">{dish.allergens.join(" · ")}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category pill */}
        <div className="pt-2">
          <span className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">
            {categories.find((c) => c.id === dish.category)?.icon}{" "}
            {categories.find((c) => c.id === dish.category)?.name}
          </span>
        </div>
      </div>
    </div>
  );
};

const MenuQR = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredDishes = activeCategory
    ? dishes.filter((d) => d.category === activeCategory)
    : dishes;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const idx = Math.round(container.scrollTop / window.innerHeight);
      setActiveIndex(idx);
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [filteredDishes]);

  return (
    <div className="fixed inset-0 bg-background">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-gradient-to-b from-background via-background/80 to-transparent pb-4 pt-3 px-4">
        <div className="flex items-center justify-between mb-3">
          <Link to="/" className="flex items-center gap-2 text-foreground">
            <ArrowLeft size={18} />
            <span className="font-display text-lg tracking-wider">ÀURA</span>
          </Link>
          <span className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">
            {activeIndex + 1} / {filteredDishes.length}
          </span>
        </div>

        {/* Category filters */}
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
          <button
            onClick={() => { setActiveCategory(null); setActiveIndex(0); containerRef.current?.scrollTo({ top: 0 }); }}
            className={`flex-shrink-0 px-3 py-1.5 text-[10px] font-body font-medium tracking-wider uppercase rounded-full border transition-all ${
              !activeCategory ? "border-primary bg-primary/10 text-primary" : "border-border/30 text-muted-foreground"
            }`}
          >
            Todo
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setActiveIndex(0); containerRef.current?.scrollTo({ top: 0 }); }}
              className={`flex-shrink-0 px-3 py-1.5 text-[10px] font-body font-medium tracking-wider uppercase rounded-full border transition-all ${
                activeCategory === cat.id ? "border-primary bg-primary/10 text-primary" : "border-border/30 text-muted-foreground"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Dish cards - vertical snap scroll */}
      <div ref={containerRef} className="snap-container">
        {filteredDishes.map((dish, i) => (
          <DishCard key={dish.id} dish={dish} isActive={i === activeIndex} />
        ))}
      </div>

      {/* Scroll hint */}
      {activeIndex === 0 && filteredDishes.length > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={20} className="text-primary" />
          </motion.div>
          <span className="font-body text-[9px] tracking-widest uppercase text-muted-foreground">Desliza</span>
        </motion.div>
      )}
    </div>
  );
};

export default MenuQR;
