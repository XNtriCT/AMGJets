import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Building, Clock, HelpCircle, Trophy, Plane, MessageSquare, ClipboardCheck, ArrowRight, UserCheck } from 'lucide-react';

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<'general' | 'pilot'>('general');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    aircraftOwnership: 'none',
    message: '',
    pilotLicenses: '',
    pilotHours: '',
    captcha: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert("Please populate all required details.");
      return;
    }
    if (formData.captcha !== '4') {
      alert("Please solve the SPAM prevention equation correctly (2 + 2 = 4).");
      return;
    }
    setIsSent(true);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      aircraftOwnership: 'none',
      message: '',
      pilotLicenses: '',
      pilotHours: '',
      captcha: ''
    });
    setIsSent(false);
  };

  return (
    <section id="contact" className="py-24 bg-navy-dark relative overflow-hidden text-left">
      <div className="absolute top-1/2 -left-64 w-96 h-96 rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-luxury-gold mb-3 font-semibold font-mono">
            Ground Support & Inquiries
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl text-text-main font-light tracking-tight">
            Connect With <span className="italic font-normal text-gold-gradient">Command Center</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-luxury-bronze to-luxury-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-start">
          {/* Company address and locations cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-xl border border-text-main/10 p-6 md:p-8 space-y-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-luxury-gold pb-2 border-b border-text-main/10 font-mono">
                AMG Headquarters
              </h4>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-luxury-gold/10 rounded border border-luxury-gold/20 text-luxury-gold mt-1">
                    <MapPin className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest font-mono text-text-main/40">Operations Base</h5>
                    <p className="text-text-main/80 text-sm font-semibold mt-1 leading-relaxed">
                      Pittsburgh International Airport (PIT)<br />
                      300 Horizon Drive<br />
                      Moon Township, PA 15108
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-luxury-gold/10 rounded border border-luxury-gold/20 text-luxury-gold mt-1">
                    <Phone className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest font-mono text-text-main/40">Direct Dispatch</h5>
                    <a href="tel:+18884498491" className="text-text-main text-sm font-semibold block mt-1 hover:text-luxury-gold transition-colors font-mono hover:underline">
                      1 (888) 449-8491
                    </a>
                    <span className="text-[10px] text-text-main/30 block font-mono">Toll-Free Support Line</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-luxury-gold/10 rounded border border-luxury-gold/20 text-luxury-gold mt-1">
                    <Mail className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest font-mono text-text-main/40">Secure Email Lines</h5>
                    <p className="mt-1 space-y-1">
                      <a href="mailto:charter@aircraftmgt.com" className="text-text-main font-semibold hover:text-luxury-gold text-sm block font-mono hover:underline">
                        charter@aircraftmgt.com
                      </a>
                      <a href="mailto:management@aircraftmgt.com" className="text-text-main font-semibold hover:text-luxury-gold text-sm block font-mono hover:underline">
                        management@aircraftmgt.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FBO details and operation hours */}
            <div className="p-6 border border-text-main/10 bg-navy-slate/20 rounded-xl space-y-3">
              <div className="flex items-center space-x-2 text-luxury-gold">
                <Clock className="w-4 h-4 text-luxury-gold" />
                <span className="text-[10px] uppercase tracking-widest font-mono font-semibold">Always Connected</span>
              </div>
              <p className="text-xs text-text-main/55 leading-relaxed">
                Flight coordinators, dispatch managers, and safety captains stand ready 24 hours a day, 365 days a year. Aircraft handling requests outside PIT hangar parameters welcome.
              </p>
            </div>
          </div>

          {/* Interactive forms (General Inquiry or Careers/Airport recruiting) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-xl border border-text-main/10 p-6 md:p-8">
              {/* Form type toggles */}
              <div className="flex space-x-4 mb-8 pb-4 border-b border-text-main/10">
                <button
                  type="button"
                  onClick={() => { setActiveTab('general'); resetForm(); }}
                  className={`text-xs uppercase tracking-widest font-semibold pb-2 border-b-2 cursor-pointer transition-all ${
                    activeTab === 'general'
                      ? 'border-luxury-gold text-luxury-gold'
                      : 'border-transparent text-text-main/50 hover:text-text-main'
                  }`}
                >
                  General Inquiries
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveTab('pilot'); resetForm(); }}
                  className={`text-xs uppercase tracking-widest font-semibold pb-2 border-b-2 cursor-pointer transition-all ${
                    activeTab === 'pilot'
                      ? 'border-luxury-gold text-luxury-gold'
                      : 'border-transparent text-text-main/50 hover:text-text-main'
                  }`}
                >
                  Pilot & Crew Careers
                </button>
              </div>

              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                    id={`form-${activeTab}`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-mono text-text-main/50">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          placeholder="Elizabeth"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          id="contact-first-name"
                          className="w-full bg-navy-slate/60 border border-text-main/15 rounded-lg px-4 py-3 text-sm text-text-main focus:border-luxury-gold focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-mono text-text-main/50">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          placeholder="Vanderbilt"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          id="contact-last-name"
                          className="w-full bg-navy-slate/60 border border-text-main/15 rounded-lg px-4 py-3 text-sm text-text-main focus:border-luxury-gold focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-mono text-text-main/50">Cell Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+1 (412) 555-0100"
                          value={formData.phone}
                          onChange={handleInputChange}
                          id="contact-phone"
                          className="w-full bg-navy-slate/60 border border-text-main/15 rounded-lg px-4 py-3 text-sm text-text-main focus:border-luxury-gold focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-mono text-text-main/50">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="elizabeth@vanderbiltcorp.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          id="contact-email"
                          className="w-full bg-navy-slate/60 border border-text-main/15 rounded-lg px-4 py-3 text-sm text-text-main focus:border-luxury-gold focus:outline-none"
                        />
                      </div>
                    </div>

                    {activeTab === 'general' ? (
                      <>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest font-mono text-text-main/50">Do you currently own an aircraft?</label>
                          <select
                            name="aircraftOwnership"
                            value={formData.aircraftOwnership}
                            onChange={handleInputChange}
                            id="contact-ownership"
                            className="w-full bg-navy-slate/60 border border-text-main/15 rounded-lg px-4 py-3 text-sm text-text-main focus:border-luxury-gold focus:outline-none"
                          >
                            <option value="none">I do not own an aircraft</option>
                            <option value="light">Yes: Light Jet or Turboprop</option>
                            <option value="mid-heavy">Yes: Midsize or Heavy Jet</option>
                            <option value="fractional">I currently hold fractional jet cards</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest font-mono text-text-main/50">Describe your inquiry lines *</label>
                          <textarea
                            name="message"
                            required
                            placeholder="Connect us regarding management details, customized charter arrangements, or Part 135 logistics operations..."
                            value={formData.message}
                            onChange={handleInputChange}
                            id="contact-message"
                            className="w-full bg-navy-slate/60 border border-text-main/15 rounded-lg px-4 py-3 text-sm text-text-main focus:border-luxury-gold focus:outline-none h-32 resize-none"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-mono text-text-main/50">Licenses held (ATP / Commercial / FAA A&P) *</label>
                            <input
                              type="text"
                              name="pilotLicenses"
                              required
                              placeholder="ATP, Multi-Engine Land"
                              value={formData.pilotLicenses}
                              onChange={handleInputChange}
                              id="contact-licenses"
                              className="w-full bg-navy-slate/60 border border-text-main/15 rounded-lg px-4 py-3 text-sm text-text-main focus:border-luxury-gold focus:outline-none"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-mono text-text-main/50">Total Logged Flight Hours *</label>
                            <input
                              type="number"
                              name="pilotHours"
                              required
                              placeholder="3800"
                              value={formData.pilotHours}
                              onChange={handleInputChange}
                              id="contact-hours"
                              className="w-full bg-navy-slate/60 border border-text-main/15 rounded-lg px-4 py-3 text-sm text-text-main focus:border-luxury-gold focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest font-mono text-text-main/50">Prior Type Ratings or structural background</label>
                          <textarea
                            name="message"
                            placeholder="Specify Cessna Citation, Hawker 800XP, or Challenger type ratings. Emphasize any previous Part 135 flight operations..."
                            value={formData.message}
                            onChange={handleInputChange}
                            id="contact-credentials"
                            className="w-full bg-navy-slate/60 border border-text-main/15 rounded-lg px-4 py-3 text-sm text-text-main focus:border-luxury-gold focus:outline-none h-28 resize-none"
                          />
                        </div>
                      </>
                    )}

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-mono text-text-main/50">SPAM Prevention: 2 + 2 = ? *</label>
                      <input
                        type="text"
                        name="captcha"
                        required
                        placeholder="Answer the equation"
                        value={formData.captcha}
                        onChange={handleInputChange}
                        id="contact-captcha"
                        className="w-full bg-navy-slate/60 border border-text-main/15 rounded-lg px-4 py-3 text-sm text-text-main focus:border-luxury-gold focus:outline-none font-mono"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded text-center text-xs tracking-widest uppercase font-bold text-navy-dark bg-gradient-to-r from-luxury-gold via-luxury-champagne to-luxury-gold hover:opacity-95 shadow-md transition-transform duration-300 active:scale-95 cursor-pointer"
                    >
                      {activeTab === 'general' ? 'Send Corporate Inquiry' : 'Apply to Aircrew pool'}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    id="contact-success"
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold mx-auto border border-luxury-gold/30 animate-bounce">
                      <UserCheck className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl text-luxury-gold tracking-wide font-medium">Inquiry Dispatched</h3>
                      <p className="text-text-main/60 text-sm mt-3 max-w-sm mx-auto leading-relaxed">
                        Thank you, **{formData.firstName} {formData.lastName}**. Your {activeTab === 'general' ? 'corporate message' : 'crew profile'} has been encrypted and logged directly in our Moon Township headquarters database.
                      </p>
                    </div>

                    <div className="bg-navy-slate/40 border border-text-main/10 rounded-lg p-5 text-left max-w-xs mx-auto font-mono text-[10px] text-text-main/70 space-y-2">
                      <div className="flex justify-between">
                        <span>Transmission ID:</span>
                        <span className="text-luxury-gold">AMG-{(Math.random() * 89999 + 10000).toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Classification:</span>
                        <span className="text-text-main uppercase">{activeTab}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email address:</span>
                        <span className="text-text-main">{formData.email}</span>
                      </div>
                    </div>

                    <p className="text-xs text-text-main/40 max-w-sm mx-auto">
                      An AMG Executive Officer or Recruiting Flight Chief will directly contact you within 1 business day.
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={resetForm}
                        className="px-6 py-2.5 rounded border border-text-main/10 hover:border-luxury-gold text-xs font-semibold tracking-wider uppercase text-text-main/80 hover:text-luxury-gold hover:bg-luxury-gold/5 transition-all duration-300 cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Real Live Map Embed */}
        <div className="mt-16 rounded-xl overflow-hidden border border-text-main/10 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.553956108119!2d-80.2223849!3d40.4850787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88345fa40bbdbb97%3A0xe104cf5e2270928!2s300%20Horizon%20Dr%2C%20Moon%20Twp%2C%20PA%2015108!5e0!3m2!1sen!2sus!4v1718000000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AMG Headquarters Map Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
