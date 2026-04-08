import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedText, GoldDivider } from "./AnimatedSection";
import { CalendarDays, Clock, Users, Send } from "lucide-react";

export const Reservations = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", date: "", time: "", guests: "2", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    "w-full bg-secondary/50 border border-border/30 px-4 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors";

  return (
    <section id="reservar" className="py-24 md:py-36 section-padding">
      <AnimatedText className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Tu mesa te espera</p>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-foreground tracking-wide">
          Reservar
        </h2>
        <GoldDivider className="mt-6" />
      </AnimatedText>

      <AnimatedSection className="max-w-2xl mx-auto">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-6">
              <Send size={24} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-3">Reserva Recibida</h3>
            <p className="font-body text-sm text-muted-foreground">Te confirmaremos por teléfono en breve. ¡Gracias!</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre completo"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              <input
                type="tel"
                placeholder="Teléfono"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
            </div>
            <input
              type="email"
              placeholder="Email (opcional)"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative">
                <CalendarDays size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className={`${inputClass} pl-11`}
                />
              </div>
              <div className="relative">
                <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="time"
                  required
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className={`${inputClass} pl-11`}
                />
              </div>
              <div className="relative">
                <Users size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className={`${inputClass} pl-11 appearance-none`}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "persona" : "personas"}</option>
                  ))}
                </select>
              </div>
            </div>
            <textarea
              placeholder="Notas especiales, alergias, celebraciones..."
              rows={3}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className={`${inputClass} resize-none`}
            />
            <button type="submit" className="btn-primary-restaurant w-full">
              Confirmar Reserva
            </button>
          </form>
        )}
      </AnimatedSection>
    </section>
  );
};
