import { ShieldAlert, MapPin, Phone, Mail, Award, CheckSquare, HeartHandshake } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onRequestQuote: () => void;
}

export default function Footer({ onNavigate, onRequestQuote }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark border-t border-text-main/10 pt-20 pb-12 relative overflow-hidden text-left">
      {/* Visual wireframes */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-text-main/10">
          {/* Column 1: Brand details */}
          <div className="space-y-6">
            <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('hero')}>
              <BrandLogo className="h-14 w-auto transform group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />
            </div>
            <p className="text-xs text-text-main/55 leading-relaxed font-light">
              Redefining commercial on-demand flight. Proudly operating secure private operations, bespoke aircraft management systems, and brokerage options out of Pittsburgh, PA.
            </p>
            <div className="flex items-center space-x-3 text-[10px] text-luxury-gold font-mono font-medium">
              <Award className="w-4 h-4" />
              <span>FAA Part 135 Certificate #9MGA423L</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.2em] font-mono text-luxury-gold mb-6 font-semibold">Navigator</h5>
            <ul className="space-y-3 text-xs">
              <li>
                <button onClick={() => onNavigate('hero')} className="text-text-main/60 hover:text-luxury-gold transition-colors font-light cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-text-main/60 hover:text-luxury-gold transition-colors font-light cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="text-text-main/60 hover:text-luxury-gold transition-colors font-light cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('fleet')} className="text-text-main/60 hover:text-luxury-gold transition-colors font-light cursor-pointer">
                  Fleet
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations')} className="text-text-main/60 hover:text-luxury-gold transition-colors font-light cursor-pointer">
                  Destinations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('emptylegs')} className="text-text-main/60 hover:text-luxury-gold transition-colors font-light cursor-pointer">
                  Empty Legs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('careers')} className="text-text-main/60 hover:text-luxury-gold transition-colors font-light cursor-pointer">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="text-text-main/60 hover:text-luxury-gold transition-colors font-light cursor-pointer">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-text-main/60 hover:text-luxury-gold transition-colors font-light cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Regional Base */}
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.2em] font-mono text-luxury-gold mb-6 font-semibold">HQ Coordination</h5>
            <ul className="space-y-4 text-xs font-light text-text-main/70">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Pittsburgh International Airport (PIT)<br />
                  300 Horizon Drive<br />
                  Moon Township, PA 15108
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-luxury-gold shrink-0" />
                <a href="tel:+18884498491" className="hover:text-luxury-gold transition-colors font-mono font-medium">
                  1 (888) 449-8491
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-luxury-gold shrink-0" />
                <a href="mailto:charter@aircraftmgt.com" className="hover:text-luxury-gold transition-colors font-mono">
                  charter@aircraftmgt.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Regulatory Standard Representation */}
          <div className="space-y-6">
            <h5 className="text-[10px] uppercase tracking-[0.2em] font-mono text-luxury-gold mb-6 font-semibold">Integrity Metrics</h5>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-navy-slate/40 p-3 rounded-lg border border-text-main/10 text-center flex flex-col justify-center items-center">
                <span className="text-luxury-gold font-mono text-lg font-bold">WYVERN</span>
                <span className="text-[8px] text-text-main/40 uppercase tracking-widest font-mono">Registered</span>
              </div>
              <div className="bg-navy-slate/40 p-3 rounded-lg border border-text-main/10 text-center flex flex-col justify-center items-center">
                <span className="text-luxury-gold font-mono text-lg font-bold">ARGUS</span>
                <span className="text-[8px] text-text-main/40 uppercase tracking-widest font-mono">Rated Ops</span>
              </div>
            </div>
            <p className="text-[10px] text-text-main/40 leading-relaxed font-light">
              AMG operations undergo comprehensive audits matching multi-million hour airline safety compliance standards.
            </p>
          </div>
        </div>

        {/* Bottom standard parameters */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-left">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-[10px] text-text-main/40 font-light leading-relaxed max-w-2xl">
              © {year} Aircraft Management Group, Inc. All rights reserved. AMG is an FAA certified Part 135 air carrier. Flights are operated by Aircraft Management Group, Inc. or by other FAA-certified select partner air carriers matching Argus and Wyvern safety definitions.
            </p>
          </div>
          <div className="flex space-x-6 text-[10px] font-mono text-text-main/40 mt-4 md:mt-0 font-light">
            <a href="#about" className="hover:text-luxury-gold transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#about" className="hover:text-luxury-gold transition-colors">Charter Terms</a>
            <span>•</span>
            <a href="#about" className="hover:text-luxury-gold transition-colors">FBO Rules</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
