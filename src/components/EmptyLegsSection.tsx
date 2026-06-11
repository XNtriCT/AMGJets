import { Info } from 'lucide-react';
import { AircraftCategory } from '../types';

export default function EmptyLegsSection() {
  return (
    <section id="emptylegs" className="py-24 bg-gradient-to-b from-navy-dark via-[#1A1F3C] to-navy-dark border-y border-luxury-gold/10 relative text-left">
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-luxury-gold)_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-luxury-gold/10 border border-luxury-gold/20 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-luxury-gold mb-3 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Live JetInsight Connection active</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl text-text-main font-light tracking-tight leading-tight">
            Exclusive <span className="italic font-normal text-luxury-gold">Empty Leg</span> Destinations
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-luxury-gold via-luxury-champagne to-luxury-gold mx-auto mt-6 mb-4" />
          <p className="text-text-muted/70 text-sm font-light text-center">
            Empty legs occur when aircraft ferry between base hangars to pick up private owners. Access premier point-to-point private travel at up to 75% savings off standard on-demand charter rates.
          </p>
        </div>

        {/* JetInsight Iframe Container */}
        <div className="bg-navy-slate/50 border border-luxury-gold/20 rounded-xl p-2 md:p-4 mb-10 overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 flex items-center justify-center bg-navy-dark z-0 pointer-events-none rounded-xl">
            <div className="text-center space-y-3">
              <div className="w-8 h-8 border-2 border-luxury-gold border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-xs text-text-main/30 font-mono uppercase tracking-wider">Loading Live Empty Leg Board...</p>
            </div>
          </div>
          <iframe
            src="https://client.jetinsight.com/embed/da7e1f3b-7919-4f28-bb95-39e29d9cad35/empty"
            title="Live Empty Leg Board"
            className="w-full h-[600px] border-none rounded-lg relative z-10 bg-white"
            allow="geolocation"
          />
        </div>

        {/* Dynamic Warning Alert */}
        <div className="p-4 bg-luxury-gold/5 border border-luxury-gold/15 rounded-xl flex items-start space-x-3">
          <Info className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
          <p className="text-xs text-text-muted/70 leading-relaxed font-light">
            <strong>Part 135 Advisory Notice:</strong> Empty legs are subject to final flight route adjustments or schedule cancellations by the primary owner chartering the craft. In the event of secondary operator cancellations, AMG flight coordinators guarantee full fee refunds or re-allocation offsets to alternate Citation class flights.
          </p>
        </div>
      </div>
    </section>
  );
}
