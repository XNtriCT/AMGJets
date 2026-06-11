import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, CircleDot, Database, Users, ChevronRight, LayoutDashboard, Wrench, FileClock, ClipboardList, Plane, CheckCircle2 } from 'lucide-react';
import { AircraftCategory } from '../types';

export default function ManagementSection() {
  const [selectedClass, setSelectedClass] = useState<AircraftCategory>('Midsize');
  const [ownHours, setOwnHours] = useState<number>(80);
  const [charterHours, setCharterHours] = useState<number>(150);
  const [showPortalDemo, setShowPortalDemo] = useState<boolean>(false);
  const [portalLogCount, setPortalLogCount] = useState<number>(3);

  // Constants mapping base costs
  const classCosts = useMemo(() => {
    switch (selectedClass) {
      case 'Heavy':
        return {
          fixed: 420000, // Pilot salaries, training, hangar, insurance
          hourlyDirect: 3800, // Fuel, engine cycles, landing costs
          charterRateOwnerShare: 4500, // Revenue back to owner per charter hour
        };
      case 'Midsize':
        return {
          fixed: 280000,
          hourlyDirect: 2600,
          charterRateOwnerShare: 3100,
        };
      case 'Light':
        return {
          fixed: 190000,
          hourlyDirect: 1900,
          charterRateOwnerShare: 2200,
        };
      case 'Turboprop':
        return {
          fixed: 120000,
          hourlyDirect: 1100,
          charterRateOwnerShare: 1400,
        };
    }
  }, [selectedClass]);

  const economicSummary = useMemo(() => {
    const ownCost = ownHours * classCosts.hourlyDirect;
    const grossExpenseBeforeCharter = classCosts.fixed + ownCost;
    const charterRevenue = charterHours * classCosts.charterRateOwnerShare;
    const netExpense = grossExpenseBeforeCharter - charterRevenue;

    return {
      grossExpense: grossExpenseBeforeCharter,
      revenueOffset: charterRevenue,
      netExpense: Math.max(0, netExpense),
      isProfitable: netExpense < 0,
      profitAmount: netExpense < 0 ? Math.abs(netExpense) : 0,
    };
  }, [ownHours, charterHours, classCosts]);

  return (
    <section id="management" className="py-24 bg-navy-slate/20 border-b border-text-main/10 relative">
      <div className="absolute top-1/4 -right-96 w-[500px] h-[500px] rounded-full bg-luxury-gold/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-luxury-gold mb-3 font-semibold font-mono">
            Owner Operations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl text-text-main font-light tracking-tight">
            Turnkey Management & <span className="italic font-normal text-gold-gradient">Portal</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-luxury-bronze to-luxury-gold mx-auto mt-6" />
        </div>

        {/* Navigation toggles for owner tools */}
        <div className="flex justify-center mb-12">
          <div className="bg-navy-dark/60 p-1 rounded-lg border border-text-main/10 flex space-x-1">
            <button
              onClick={() => setShowPortalDemo(false)}
              className={`px-6 py-2.5 rounded text-xs uppercase tracking-wider font-semibold cursor-pointer transition-all ${
                !showPortalDemo
                  ? 'bg-luxury-gold text-navy-dark'
                  : 'text-text-main/60 hover:text-text-main'
              }`}
            >
              Offset Modeler
            </button>
            <button
              onClick={() => setShowPortalDemo(true)}
              className={`px-6 py-2.5 rounded text-xs uppercase tracking-wider font-semibold cursor-pointer transition-all flex items-center space-x-2 ${
                showPortalDemo
                  ? 'bg-luxury-gold text-navy-dark'
                  : 'text-text-main/60 hover:text-text-main'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Owner Portal Demo</span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!showPortalDemo ? (
            <motion.div
              key="modeler"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left"
            >
              {/* Sliders Input side */}
              <div className="lg:col-span-7 glass-panel rounded-xl border border-text-main/10 p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-luxury-gold mb-1">Asset Operational Analysis</h4>
                  <p className="text-xs text-text-main/40 leading-relaxed font-light">
                    Adjust utilization profiles to models how our FAA Part 135 charter listing reduces annual aircraft ownership overhead.
                  </p>
                </div>

                {/* Jet class toggles */}
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-mono text-text-main/55">Select Aircraft Target Class</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {(['Turboprop', 'Light', 'Midsize', 'Heavy'] as AircraftCategory[]).map(cat => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedClass(cat)}
                        id={`btn-modeler-class-${cat}`}
                        className={`py-2 px-3 text-xs uppercase tracking-wider rounded border text-center transition-all cursor-pointer font-medium ${
                          selectedClass === cat
                            ? 'bg-luxury-gold/10 border-luxury-gold text-luxury-gold font-semibold'
                            : 'bg-navy-dark/40 border-text-main/10 text-text-main/60 hover:border-text-main/10'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Slider 1: Own Utilization */}
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-baseline">
                    <label className="text-[10px] uppercase tracking-widest font-mono text-text-main/55">Personal Utilization Hours</label>
                    <span className="font-mono text-xs text-luxury-gold font-bold">{ownHours} Hrs/Yr</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="220"
                    value={ownHours}
                    onChange={(e) => setOwnHours(Number(e.target.value))}
                    id="slider-own-hours"
                    className="w-full accent-luxury-gold cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-text-main/30">
                    <span>20 Hrs Minimum</span>
                    <span>220 Hrs Maximum</span>
                  </div>
                </div>

                {/* Slider 2: Charter pool */}
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-baseline">
                    <label className="text-[10px] uppercase tracking-widest font-mono text-text-main/55 font-semibold">Charter Availability pool</label>
                    <span className="font-mono text-xs text-luxury-green font-bold text-luxury-gold">{charterHours} Hrs/Yr</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="350"
                    value={charterHours}
                    onChange={(e) => setCharterHours(Number(e.target.value))}
                    id="slider-charter-hours"
                    className="w-full accent-luxury-gold cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-text-main/30">
                    <span>Wholly Private (0 hrs)</span>
                    <span>350 Hrs Max Charter</span>
                  </div>
                </div>

                <div className="bg-navy-dark/40 rounded p-4 border border-text-main/10 text-xs text-text-main/50 leading-relaxed font-light">
                  <span className="text-text-main font-semibold block mb-1">AMG Management Advantage</span>
                  Our maintenance operations base at Allegheny County Airport (AGC) handles scheduled inspections, aircrew rosters and training, hull insurance packages, and line handling with direct savings passed back to you.
                </div>
              </div>

              {/* Economic Summary block */}
              <div className="lg:col-span-5 space-y-6">
                <div className="glass-panel rounded-xl border border-text-main/10 p-6 md:p-8">
                  <h4 className="text-xs uppercase tracking-widest font-mono text-luxury-gold mb-6 pb-2 border-b border-text-main/10">
                    Strategic Cost Offsets
                  </h4>

                  <div className="space-y-4">
                    <div className="flex justify-between text-xs py-1">
                      <span className="text-text-main/50">Fixed Fleet Cost</span>
                      <span className="font-mono text-text-main">${classCosts.fixed.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs py-1">
                      <span className="text-text-main/50 flex items-center space-x-1.5">
                        <span>Direct Flight Cost</span>
                      </span>
                      <span className="font-mono text-text-main">${(ownHours * classCosts.hourlyDirect).toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between text-xs py-2 border-y border-text-main/10 my-2">
                      <span className="text-text-main/70 font-medium">Estimated Gross Expense</span>
                      <span className="font-mono text-text-main font-semibold">${economicSummary.grossExpense.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between text-xs py-1 text-emerald-400">
                      <span className="text-emerald-400/80 font-medium font-mono">CHARTER REVENUE OFFSET</span>
                      <span className="font-mono font-semibold">+${economicSummary.revenueOffset.toLocaleString()}</span>
                    </div>

                    {/* Net Total block */}
                    <div className="pt-6 border-t border-text-main/10">
                      <p className="text-[10px] text-text-main/40 font-mono uppercase text-right">Net Annual Operating Overhead</p>
                      <div className="flex justify-between items-baseline mt-1.5">
                        <span className="text-xs text-text-main/40">Estimated savings</span>
                        <span className="font-serif text-3xl font-bold font-mono text-luxury-gold">
                          ${economicSummary.netExpense.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Progress bars representations */}
                    <div className="pt-4 space-y-2">
                      <div className="h-1.5 bg-navy-dark rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-red-500 to-luxury-gold transition-all duration-300"
                          style={{ width: `${Math.min(100, (economicSummary.netExpense / economicSummary.grossExpense) * 100)}%` }}
                        />
                      </div>
                      <p className="text-[9px] font-mono text-text-main/30">
                        Offset ratio: {((economicSummary.revenueOffset / economicSummary.grossExpense) * 100).toFixed(0)}% of ownership fixed overhead covered by our active pool charter bookings.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Custom CTA to Management Specialist */}
                <div className="p-5 border border-text-main/10 bg-navy-slate/30 rounded-xl text-left flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-luxury-gold block font-semibold">Connect with Operations</span>
                    <span className="text-xs text-text-main/50 leading-none">Draft a detailed operating analysis.</span>
                  </div>
                  <button
                    onClick={() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-2 bg-luxury-gold hover:opacity-95 text-navy-dark rounded transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5 text-navy-dark" />
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="portal"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              id="owner-portal-demo"
              className="glass-panel rounded-xl border border-luxury-gold/20 p-6 md:p-8 max-w-5xl mx-auto text-left relative overflow-hidden"
            >
              {/* Fake status bar styling top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-luxury-gold via-luxury-champagne to-luxury-gold" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-text-main/10 mb-6">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-widest text-text-main/50">Active Safe Connection</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-text-main mt-1 tracking-wide font-medium">Owner Terminal Demo • <span className="italic font-normal text-luxury-gold">N604AM</span></h3>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-2">
                  <span className="px-3 py-1 bg-text-main/5 border border-text-main/10 rounded text-xs font-mono text-text-main/60 mt-0.5">
                    Craft: Challenger 604
                  </span>
                  <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded text-xs font-mono leading-relaxed">
                    Status: Airworthy (AGC)
                  </span>
                </div>
              </div>

              {/* Grid content inside demo */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Visual statistics */}
                <div className="lg:col-span-1 p-5 rounded-lg border border-text-main/10 bg-navy-dark/40 space-y-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-text-main/40 block border-b border-text-main/10 pb-2">Operational Hours</span>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] text-text-main/40 uppercase block">Total Airframe</span>
                      <strong className="font-mono text-xl text-text-main">4,920.5 hrs</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-text-main/40 uppercase block flex items-center space-x-1">
                        <span>L/R Turbine</span>
                      </span>
                      <strong className="font-mono text-xl text-text-main">285.4 hrs</strong>
                      <span className="text-[8px] text-text-main/30 block font-mono">Until hot check</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-[10px] text-text-main/40 uppercase block mb-1">Active Crew Assignments</span>
                    <div className="flex items-center space-x-3 bg-navy-slate/40 p-2.5 rounded border border-text-main/10">
                      <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center font-bold text-xs text-luxury-gold font-mono uppercase">
                        CP
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-text-main font-semibold">Capt. Robert Miller</p>
                        <p className="text-[10px] text-text-main/40 font-mono">ATP #15822 AGC Base</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dispatch logs */}
                <div className="lg:col-span-1 p-5 rounded-lg border border-text-main/10 bg-navy-dark/40">
                  <div className="flex justify-between items-center mb-4 pb-2 border-b border-text-main/10">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-text-main/40">Active flight Dispatch</span>
                    <button
                      onClick={() => setPortalLogCount(p => (p === 3 ? 5 : 3))}
                      className="text-[10px] text-luxury-gold hover:underline cursor-pointer font-mono"
                    >
                      {portalLogCount === 3 ? 'Show More' : 'Collapse'}
                    </button>
                  </div>

                  <div className="space-y-3">
                    {[
                      { route: 'KAGC → KOPF', date: 'Jul 10, 2026', type: 'Charter', revenue: '$18,400', stat: 'Completed' },
                      { route: 'KAGC → KTEB', date: 'Jun 28, 2026', type: 'Own Flight', revenue: '$0 (Direct)', stat: 'Completed' },
                      { route: 'KBOS → KAGC', date: 'Jun 15, 2026', type: 'Charter', revenue: '$14,200', stat: 'Completed' },
                      { route: 'KAGC → KMDW', date: 'May 30, 2026', type: 'Charter', revenue: '$9,800', stat: 'Completed' },
                      { route: 'KAGC → KVNY', date: 'May 12, 2026', type: 'Own Flight', revenue: '$0 (Direct)', stat: 'Completed' },
                    ].slice(0, portalLogCount).map((log, index) => (
                      <div key={index} className="flex justify-between items-center text-xs p-2.5 rounded bg-navy-slate/20 border border-text-main/10">
                        <div className="text-left">
                          <p className="font-semibold text-text-main font-mono">{log.route}</p>
                          <span className="text-[10px] text-text-main/40 font-mono">{log.date} • {log.type}</span>
                        </div>
                        <div className="text-right">
                          <p className="font-mono text-luxury-gold font-bold">{log.revenue}</p>
                          <span className="text-[8px] text-emerald-400 flex items-center space-x-1 justify-end font-mono">
                            <span className="w-1 h-1 rounded-full bg-emerald-400" />
                            <span>Logged</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Maintenance checks inside owner Portal */}
                <div className="lg:col-span-1 p-5 rounded-lg border border-text-main/10 bg-navy-dark/40 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-text-main/40 block border-b border-text-main/10 pb-2 mb-4">Inspection schedules</span>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-xs text-left">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div>
                          <p className="font-semibold text-text-main/80">FAA Part 135 continuous conformity audit</p>
                          <p className="text-[10px] text-text-main/40 font-mono">Approved: June 2026</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-left">
                        <Wrench className="w-4 h-4 text-luxury-gold shrink-0" />
                        <div>
                          <p className="font-semibold text-text-main/80">Turbine lubrication check</p>
                          <p className="text-[10px] text-luxury-gold font-mono">Due in 15.2 Airframe Hrs</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-left">
                        <FileClock className="w-4 h-4 text-text-main/30 shrink-0" />
                        <div>
                          <p className="font-semibold text-text-main/55">Altimeter transponder cert upgrade</p>
                          <p className="text-[10px] text-text-main/40 font-mono">Due on Oct 30, 2026</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[9px] text-text-main/30 leading-relaxed font-light mt-4 pt-4 border-t border-text-main/10 text-left">
                    Warning: Simulated environment demo. Active AMG clients log in via encrypted custom apps. Real-time updates utilize live transponder telemetry.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
