import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Plane, Phone, HelpCircle, Shield, Briefcase } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onRequestQuote: () => void;
}

export default function Header({ activeSection, onNavigate, onRequestQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'fleet', label: 'Fleet' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'emptylegs', label: 'Empty Legs' },
    { id: 'careers', label: 'Careers' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-dark/80 backdrop-blur-md border-b border-text-main/10 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with clean crest */}
          <div 
            className={`flex items-center cursor-pointer group shrink-0 ${
              isScrolled ? 'text-text-main' : 'text-white'
            }`}
            onClick={() => handleItemClick('hero')}
          >
            <BrandLogo className="h-10 w-auto xl:h-12 transform group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 xl:space-x-1.5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`relative px-2 py-2 text-[11px] xl:text-xs xl:px-3 tracking-wider uppercase font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  activeSection === item.id 
                    ? 'text-luxury-gold font-semibold' 
                    : isScrolled
                      ? 'text-text-main/70 hover:text-luxury-gold/90'
                      : 'text-white/80 hover:text-luxury-gold'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-luxury-gold to-luxury-champagne"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden xl:flex items-center space-x-3 xl:space-x-4 shrink-0">
            <button
              onClick={() => document.documentElement.classList.toggle('dark')}
              className={`p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors ${
                isScrolled ? 'text-text-main' : 'text-white/80 hover:text-white'
              }`}
              aria-label="Toggle theme"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 dark:hidden">
                 <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden dark:block text-luxury-gold opacity-70 group-hover:opacity-100">
                <circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </button>
            <a 
              href="tel:+18884498491" 
              className={`flex items-center space-x-1.5 text-xs xl:text-sm transition-colors duration-200 mt-0.5 ${
                isScrolled ? 'text-text-main/80 hover:text-luxury-gold' : 'text-white/80 hover:text-luxury-gold'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-luxury-gold" />
              <span className="font-mono tracking-wider font-medium whitespace-nowrap">1 (888) 449-8491</span>
            </a>
            <button
              onClick={onRequestQuote}
              className="relative overflow-hidden px-3.5 py-2 xl:px-5 xl:py-2.5 rounded text-[10px] xl:text-xs tracking-widest uppercase font-semibold text-navy-dark bg-gradient-to-r from-luxury-gold via-luxury-champagne to-luxury-gold hover:opacity-95 shadow-md shadow-luxury-gold/10 transition-all duration-300 transform active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center space-x-2">
            <button
              onClick={() => document.documentElement.classList.toggle('dark')}
              className="p-2 text-text-main/80 hover:text-luxury-gold transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dark:hidden text-text-main">
                 <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden dark:block text-luxury-gold">
                <circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-text-main/80 hover:text-luxury-gold transition-colors duration-200 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sliding Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 xl:hidden bg-navy-dark/95 backdrop-blur-lg flex flex-col justify-center px-8"
          >
            <div className="absolute top-6 left-6 flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-luxury-gold to-luxury-bronze flex items-center justify-center text-navy-dark">
                <Plane className="w-4 h-4 -rotate-45 text-navy-dark" />
              </div>
              <div>
                <span className="font-serif text-base tracking-widest text-text-main font-semibold">AMG</span>
                <span className="text-[8px] uppercase tracking-wider text-luxury-gold block">Aircraft Management</span>
              </div>
            </div>

            <nav className="flex flex-col space-y-6 text-left my-auto">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-2xl font-serif tracking-widest text-left font-light ${
                    activeSection === item.id ? 'text-luxury-gold text-3xl font-medium' : 'text-text-main/60 hover:text-luxury-gold cursor-pointer transition-colors'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-auto mb-10 space-y-4 border-t border-text-main/10 pt-6"
            >
              <div className="flex items-center space-x-3 text-text-main/80 py-2">
                <Phone className="w-5 h-5 text-luxury-gold" />
                <a href="tel:+18884498491" className="font-mono text-lg font-medium tracking-wide">1 (888) 449-8491</a>
              </div>
              <p className="text-xs text-text-main/40 max-w-sm">
                300 Horizon Drive, Moon Township, PA 15108. On-demand global private charter & aircraft management operations.
              </p>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full py-4 rounded text-center text-xs tracking-widest uppercase font-semibold text-navy-dark bg-gradient-to-r from-luxury-gold via-luxury-champagne to-luxury-gold cursor-pointer"
              >
                Request Quote
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
