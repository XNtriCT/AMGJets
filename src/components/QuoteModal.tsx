import { motion } from 'motion/react';
import { X, ShieldCheck, HelpCircle } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-dark/90 backdrop-blur-md">
      {/* Animated modal container */}
      <motion.div
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden border border-luxury-gold/30 shadow-2xl flex flex-col justify-between relative"
      >
        {/* Header bar */}
        <div className="bg-navy-slate/80 border-b border-text-main/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-left">
            <span className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse" />
            <div>
              <h3 className="font-serif text-lg text-text-main font-semibold leading-none">
                Request a Jet Charter Quote
              </h3>
              <span className="text-[9px] uppercase tracking-widest text-luxury-gold block mt-1 font-mono">
                SECURE JETINSIGHT LINK • AIRCRAFT MANAGEMENT GROUP
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/5 text-text-muted/65 hover:text-luxury-gold border border-text-main/10 hover:border-luxury-gold/30 transition-all cursor-pointer"
            aria-label="Close quote form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Iframe content */}
        <div className="flex-1 bg-white relative">
          {/* Subtle custom loading spinner */}
          <div className="absolute inset-0 flex items-center justify-center bg-navy-dark z-0 pointer-events-none">
            <div className="text-center space-y-3">
              <div className="w-8 h-8 border-2 border-luxury-gold border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-xs text-text-main/30 font-mono uppercase tracking-wider">Securing Terminal Connection...</p>
            </div>
          </div>

          <iframe
            src="https://client.jetinsight.com/embed/amg-jets/Web-Request"
            title="JetInsight Quote Request"
            className="w-full h-full border-none relative z-10 bg-white"
            allow="geolocation"
          />
        </div>

        {/* Footer trust badge */}
        <div className="bg-navy-dark/95 border-t border-text-main/10 px-6 py-3 flex flex-col sm:flex-row items-center justify-between text-xs text-text-main/55 text-left space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2 font-mono text-[10px]">
            <ShieldCheck className="w-4 h-4 text-luxury-gold" />
            <span>256-bit Encrypted Private Charter Flight Plan Transmission</span>
          </div>
          <div className="flex items-center space-x-3 font-mono text-[10px]">
            <span className="flex items-center space-x-1">
              <HelpCircle className="w-3.5 h-3.5 text-luxury-gold" />
              <span>Need Help? Call 1 (888) 449-8491</span>
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
