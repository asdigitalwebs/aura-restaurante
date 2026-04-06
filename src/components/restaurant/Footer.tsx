import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { GoldDivider } from "./AnimatedSection";

export const Footer = () => (
  <footer className="border-t border-border/20 pt-16 pb-8 section-padding">
    <div className="grid md:grid-cols-4 gap-10 mb-12">
      {/* Brand */}
      <div className="md:col-span-1">
        <h3 className="font-display text-2xl text-foreground tracking-wider mb-4">ÀURA</h3>
        <p className="font-body text-xs text-muted-foreground leading-relaxed">
          Gastronomía de autor en el corazón de la ciudad. Una experiencia que despierta todos los sentidos.
        </p>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-5">Contacto</h4>
        <div className="space-y-3 font-body text-sm text-muted-foreground">
          <div className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Calle Gran Vía 42, Madrid</div>
          <div className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +34 912 345 678</div>
          <div className="flex items-center gap-2"><Mail size={14} className="text-primary" /> reservas@aura.es</div>
        </div>
      </div>

      {/* Hours */}
      <div>
        <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-5">Horario</h4>
        <div className="space-y-2 font-body text-sm text-muted-foreground">
          <div className="flex items-start gap-2"><Clock size={14} className="text-primary mt-0.5" />
            <div>
              <p>Lun — Vie: 13:00 – 16:00 / 20:00 – 00:00</p>
              <p>Sáb — Dom: 13:00 – 01:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Links & Social */}
      <div>
        <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-5">Síguenos</h4>
        <div className="flex gap-3 mb-6">
          <a href="#" className="w-10 h-10 border border-border/30 flex items-center justify-center hover:border-primary hover:text-primary transition-all text-muted-foreground">
            <Instagram size={18} />
          </a>
          <a href="#" className="w-10 h-10 border border-border/30 flex items-center justify-center hover:border-primary hover:text-primary transition-all text-muted-foreground">
            <Facebook size={18} />
          </a>
        </div>
        <Link to="/carta" className="btn-outline-restaurant text-[10px] py-2 px-4">
          Abrir Carta QR
        </Link>
      </div>
    </div>

    <GoldDivider className="w-full mb-6" />
    <p className="font-body text-[11px] text-muted-foreground text-center tracking-wider">
      © 2026 ÀURA Restaurant. Todos los derechos reservados.
    </p>
  </footer>
);
