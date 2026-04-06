import { AnimatedSection, AnimatedText, GoldDivider } from "./AnimatedSection";
import chefPlating from "@/assets/chef-plating.jpg";
import kitchen from "@/assets/kitchen.jpg";
import restaurantPrivate from "@/assets/restaurant-private.jpg";

const values = [
  { number: "01", title: "Producto", desc: "Ingredientes de proximidad y temporada seleccionados a diario" },
  { number: "02", title: "Técnica", desc: "Fusión de tradición culinaria y vanguardia contemporánea" },
  { number: "03", title: "Experiencia", desc: "Cada detalle pensado para crear momentos únicos e irrepetibles" },
];

export const Experience = () => (
  <section id="experiencia" className="py-24 md:py-36 section-padding">
    <AnimatedText className="text-center mb-16 md:mb-24">
      <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Nuestra esencia</p>
      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-foreground tracking-wide">
        La Experiencia
      </h2>
      <GoldDivider className="mt-6" />
    </AnimatedText>

    {/* Two-column editorial layout */}
    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-32">
      <AnimatedSection>
        <div className="relative overflow-hidden">
          <img
            src={chefPlating}
            alt="Chef emplatando"
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">Filosofía</p>
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-6 leading-snug">
          Cocina que emociona, platos que inspiran
        </h3>
        <p className="font-body text-muted-foreground leading-relaxed mb-8">
          En ÀURA creemos que la gastronomía es arte. Cada plato nace de la pasión por el producto excepcional, 
          la técnica depurada y la búsqueda constante de emociones a través del sabor. Nuestro chef fusiona 
          la esencia mediterránea con influencias asiáticas y nórdicas, creando una cocina personal y vibrante.
        </p>
        <div className="gold-line w-full mb-8" />
        <p className="font-body text-sm text-muted-foreground italic">
          "Cocinar es transformar lo extraordinario en sublime"
        </p>
      </AnimatedSection>
    </div>

    {/* Values */}
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
      {values.map((v, i) => (
        <AnimatedSection key={v.number} delay={i * 0.15}>
          <div className="border-t border-border/30 pt-6">
            <span className="font-body text-xs text-primary tracking-widest">{v.number}</span>
            <h4 className="font-display text-xl md:text-2xl text-foreground mt-3 mb-3">{v.title}</h4>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>

    {/* Kitchen & Private dining images */}
    <div className="grid md:grid-cols-2 gap-4 mt-20 md:mt-32">
      <AnimatedSection>
        <div className="relative overflow-hidden">
          <img src={kitchen} alt="Nuestra cocina" loading="lazy" className="w-full aspect-[16/10] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="font-display text-xl md:text-2xl text-foreground">La Cocina</p>
            <p className="font-body text-xs text-muted-foreground mt-1">Donde nace la magia</p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.15}>
        <div className="relative overflow-hidden">
          <img src={restaurantPrivate} alt="Salón privado" loading="lazy" className="w-full aspect-[16/10] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="font-display text-xl md:text-2xl text-foreground">Salón Privado</p>
            <p className="font-body text-xs text-muted-foreground mt-1">Eventos exclusivos</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);
