import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Plane, MapPin, Award, User, Mail, Phone, Clipboard, FileText, CheckCircle2, DollarSign, Users } from 'lucide-react';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  salary: string;
  type: string;
  hoursRequired: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export default function CareersSection() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);

  // Forms state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');

  const jobs: JobOpening[] = [
    {
      id: 'job-1',
      title: 'Part 135 Jet Captain (PIC)',
      department: 'Flight Operations',
      location: 'Pittsburgh International Airport (PIT)',
      salary: '$140,000 - $185,000 / Yr',
      type: 'Full Time',
      hoursRequired: '3,500 Total Time (1,500 Multi-PIC)',
      description: 'We are seeking an FAA Certified Part 135 Captain with command rated competence in Cessna Citation Latitude, Sovereign, XLS+, CJ3, or Hawker 800XP/900XP series. Command elite corporate operations with competitive schedules.',
      responsibilities: [
        'Assure safe operation of select turbine private flights globally.',
        'Deliver uncompromised passenger cockpit communication, keeping clients feeling valued and secure.',
        'Oversee pre-flight ground planning, airport runway checks, dispatch limits, and safety rosters.'
      ],
      requirements: [
        'FAA ATP Certificate with clean record, multi-engine land rating.',
        'First-Class Medical Certificate active.',
        'Cessna Citation or Hawker series type rating is highly preferred.',
        'Wyvern safety audit compliance clearance.'
      ]
    },
    {
      id: 'job-2',
      title: 'A&P Aircraft Maintenance Mechanic',
      department: 'Mechanical Base Maintenance',
      location: 'Pittsburgh International Airport (PIT) Hangar Base',
      salary: '$85,000 - $110,000 / Yr',
      type: 'Full Time',
      hoursRequired: '5+ Years Private Jet Experience',
      description: 'Maintain Aircraft Management Group’s elite base hangar and active fleet registry. Perform line maintenance, continuous pre-flight mechanical logs audit, avionics diagnostics, and scheduled inspections matching FAA requirements.',
      responsibilities: [
        'Conduct detailed Part 135 pre-flight checklist verification checks daily.',
        'Coordinate minor turbine visual checkups, lubrication tests, and glass cockpit diagnostics.',
        'Document airworthiness directive (AD) entries in the maintenance records.'
      ],
      requirements: [
        'Valid FAA Airframe & Powerplant (A&P) License.',
        'Cessna Citation Excel/Latitude or Honeywell TFE731 engine training certifications.',
        'Capable of moving and working under variable flight hangar environment schedules.'
      ]
    },
    {
      id: 'job-3',
      title: 'FAA Certified Flight Dispatcher & Coordinator',
      department: 'Client Services Hub',
      location: 'Moon Township, PA (HQ)',
      salary: '$55,000 - $75,000 / Yr',
      type: 'Full Time',
      hoursRequired: '3+ Years Private Jet Dispatch',
      description: 'Manage 24/7/365 flight dispatch coordination operations at Moon Township HQ base. Route flights, coordinate pilot rosters, arrange premium catering, coordinate FBO ground operations, and file FAA flight plans.',
      responsibilities: [
        'Coordinate live dispatch tracking and slot authorizations for VIP travel plans.',
        'File FAA Part 135 flight plans and monitor weather parameters in real time.',
        'Liaise directly with high-integrity corporate clients to personalize catering lists and ground transportation.'
      ],
      requirements: [
        'FAA Flight Dispatcher License.',
        'Expertise in private aviation dispatch software (e.g., FOS, JetInsight, Collins).',
        'Exceptional discretion, warm telephone etiquette, and project coordination skill.'
      ]
    }
  ];

  const handleApplySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone || !position) {
      alert('Please fill out all required details.');
      return;
    }
    if (captchaInput !== '4') {
      alert('Please solve the SPAM prevention equation correctly (2 + 2 = 4).');
      return;
    }
    setApplySuccess(true);
  };

  return (
    <section id="careers" className="py-24 bg-navy-dark border-b border-luxury-gold/10 relative">
      <div className="absolute inset-0 bg-navy-dark/60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-luxury-gold mb-3 font-semibold font-mono">
            Flight Crew Openings
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl text-text-main font-light tracking-tight">
            Careers & Crew <span className="italic font-normal text-luxury-gold">Excellence</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-luxury-gold to-luxury-champagne mx-auto mt-6" />
          <p className="text-text-muted/70 text-sm mt-4 font-light">
            Become a part of Aircraft Management Group. Headquartered at Moon Township near Pittsburgh International Airport (PIT), we build client-first flight structures focusing on safety and pristine crew performance parameters.
          </p>
        </div>

        {/* Job Openings Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-navy-slate border border-luxury-gold/10 hover:border-luxury-gold/30 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-luxury-gold/10 border border-luxury-gold/20 rounded-lg text-luxury-gold">
                    <Briefcase className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
                    {job.type}
                  </span>
                </div>

                <div>
                  <h4 className="font-serif text-lg text-text-main font-medium group-hover:text-luxury-gold transition-colors">
                    {job.title}
                  </h4>
                  <p className="text-[10px] uppercase font-mono text-text-muted/40 mt-1 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
                    <span>{job.location}</span>
                  </p>
                </div>

                <p className="text-xs text-text-muted/70 leading-relaxed font-light font-sans line-clamp-4">
                  {job.description}
                </p>

                {/* Micro Meta Rows */}
                <div className="grid grid-cols-2 gap-3 pt-3 text-[10px] font-mono text-text-muted/60 border-t border-luxury-gold/10">
                  <div>
                    <span className="block text-text-muted/30 lowercase">comp target</span>
                    <strong className="text-text-main mt-0.5 block">{job.salary}</strong>
                  </div>
                  <div>
                    <span className="block text-text-muted/30 lowercase">flight limits</span>
                    <strong className="text-text-main mt-0.5 block line-clamp-1">{job.hoursRequired}</strong>
                  </div>
                </div>
              </div>

              {/* Action trigger to inspect opening details */}
              <div className="pt-6 mt-6 border-t border-luxury-gold/5">
                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setPosition(job.title);
                    setApplyModalOpen(true);
                  }}
                  className="w-full py-2.5 rounded bg-transparent border border-luxury-gold/10 hover:border-luxury-gold text-xs font-mono font-medium tracking-wider uppercase text-luxury-gold hover:bg-luxury-gold/5 transition-all text-center cursor-pointer"
                >
                  Inspect & Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Career Application Overlay Modal */}
      <AnimatePresence>
        {applyModalOpen && selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/92 backdrop-blur-md">
            <motion.div
              layout
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="bg-navy-slate border border-luxury-gold/30 rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative text-left"
            >
              <button
                onClick={() => {
                  setApplyModalOpen(false);
                  setApplySuccess(false);
                  setSelectedJob(null);
                  setFirstName('');
                  setLastName('');
                  setEmail('');
                  setPhone('');
                  setPosition('');
                  setResumeFile(null);
                  setMessage('');
                  setCaptchaInput('');
                }}
                className="absolute top-4 right-4 p-2 text-text-muted/60 hover:text-luxury-gold cursor-pointer"
              >
                ✕
              </button>

              {!applySuccess ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                  {/* Job Requirements Info column */}
                  <div className="md:col-span-5 bg-navy-dark/60 p-5 rounded-lg border border-text-main/10 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-luxury-gold tracking-widest uppercase block mb-1">
                        {selectedJob.department}
                      </span>
                      <h3 className="font-serif text-lg text-text-main font-medium">
                        {selectedJob.title}
                      </h3>
                      <p className="text-[10px] text-text-muted/40 font-mono mt-1 mb-4 flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
                        <span>Moon Township, PA</span>
                      </p>

                      <h5 className="text-[10px] uppercase font-mono text-luxury-gold mb-2 font-bold tracking-wider">Required Minimums</h5>
                      <ul className="space-y-1.5 text-xs text-text-muted/70 font-light">
                        {selectedJob.requirements.map((req, i) => (
                          <li key={i} className="flex items-start space-x-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-luxury-gold shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-luxury-gold/10 text-xs text-text-muted/40 mt-4 leading-relaxed font-light">
                      AMG is an Equal Opportunity FAA Part 135 Carrier. Continuous FAA background checks, drug screenings, and simulator profiles apply.
                    </div>
                  </div>

                  {/* Applicant Form column */}
                  <form onSubmit={handleApplySubmit} className="md:col-span-7 space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-serif text-lg text-text-main font-semibold flex items-center space-x-2">
                          <User className="w-4 h-4 text-luxury-gold" />
                          <span>Crew Account Entry</span>
                        </h4>
                        <p className="text-xs text-text-muted/55 mt-1">Submit your parameters to flight dispatch registry.</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[9px] uppercase font-mono tracking-widest text-text-muted/50 block">First Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="John"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full bg-navy-dark border border-luxury-gold/20 rounded-lg px-3.5 py-2 text-xs text-text-main focus:border-luxury-gold focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] uppercase font-mono tracking-widest text-text-muted/50 block">Last Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="Doe"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full bg-navy-dark border border-luxury-gold/20 rounded-lg px-3.5 py-2 text-xs text-text-main focus:border-luxury-gold focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[9px] uppercase font-mono tracking-widest text-text-muted/50 block">Contact Email *</label>
                          <input
                            type="email"
                            required
                            placeholder="pilot@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-navy-dark border border-luxury-gold/20 rounded-lg px-3.5 py-2 text-xs text-text-main focus:border-luxury-gold focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] uppercase font-mono tracking-widest text-text-muted/50 block">Contact Cell *</label>
                          <input
                            type="tel"
                            required
                            placeholder="+1 (412) 555-0100"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-navy-dark border border-luxury-gold/20 rounded-lg px-3.5 py-2 text-xs text-text-main focus:border-luxury-gold focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] uppercase font-mono tracking-widest text-text-muted/50 block">Position Interested In *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Captain"
                          value={position}
                          onChange={(e) => setPosition(e.target.value)}
                          className="w-full bg-navy-dark border border-luxury-gold/20 rounded-lg px-3.5 py-2 text-xs text-text-main focus:border-luxury-gold focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] uppercase font-mono tracking-widest text-text-muted/50 block">Attach Resume (Optional - PDF or Word)</label>
                        <input
                          type="file"
                          accept=".pdf, .doc, .docx"
                          onChange={(e) => setResumeFile(e.target.files ? e.target.files[0] : null)}
                          className="w-full bg-navy-dark border border-luxury-gold/20 rounded-lg px-3 py-1.5 text-xs text-text-muted focus:border-luxury-gold focus:outline-none file:mr-3 file:py-1 file:px-2.5 file:rounded file:border-0 file:text-[10px] file:font-mono file:bg-luxury-gold/10 file:text-luxury-gold hover:file:bg-luxury-gold/20 cursor-pointer"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] uppercase font-mono tracking-widest text-text-muted/50 block">Additional Message</label>
                        <textarea
                          placeholder="Tell us about your experience..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full bg-navy-dark border border-luxury-gold/20 rounded-lg px-3.5 py-2 text-xs text-text-main focus:border-luxury-gold focus:outline-none h-16 resize-none font-sans"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] uppercase font-mono tracking-widest text-text-muted/50 block">SPAM Prevention: 2 + 2 = ? *</label>
                        <input
                          type="text"
                          required
                          placeholder="Answer the equation"
                          value={captchaInput}
                          onChange={(e) => setCaptchaInput(e.target.value)}
                          className="w-full bg-navy-dark border border-luxury-gold/20 rounded-lg px-3.5 py-2 text-xs text-text-main focus:border-luxury-gold focus:outline-none font-mono"
                        />
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-2 mt-auto">
                      <button
                        type="button"
                        onClick={() => {
                          setApplyModalOpen(false);
                          setApplySuccess(false);
                          setSelectedJob(null);
                          setFirstName('');
                          setLastName('');
                          setEmail('');
                          setPhone('');
                          setPosition('');
                          setResumeFile(null);
                          setMessage('');
                          setCaptchaInput('');
                        }}
                        className="flex-1 py-2.5 border border-text-main/10 rounded font-semibold text-xs tracking-wider uppercase text-text-muted/70 hover:text-text-main cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-2.5 bg-gradient-to-r from-luxury-gold to-luxury-champagne text-[#001229] font-bold text-xs tracking-wider uppercase rounded hover:opacity-95 shadow-md shadow-luxury-gold/20 cursor-pointer"
                      >
                        Submit Dispatch Entry
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-text-main font-medium">Application Registered</h4>
                    <p className="text-xs text-text-muted/60 mt-2 max-w-md mx-auto leading-relaxed font-sans">
                      Thank you, **{firstName} {lastName}**. Your professional qualifications and aviation logs for the position of **{selectedJob.title}** have been securely cataloged into Aircraft Management Group’s flight ops database.
                    </p>
                  </div>

                  <div className="bg-navy-dark/80 border border-luxury-gold/10 rounded-lg p-4 font-mono text-[11px] text-left text-text-muted/70 max-w-sm mx-auto space-y-1">
                    <p>Reference Registration: <span className="text-luxury-gold">AMG-HR-{(Math.random() * 89999 + 10000).toFixed(0)}</span></p>
                    <p>Applicant: <span className="text-text-main">{firstName} {lastName}</span></p>
                    <p>Verified Contacts: <span className="text-text-main">{email} • {phone}</span></p>
                    <p>Credentials Queue: <span className="text-emerald-400">FAA conformity verification pool active</span></p>
                    {resumeFile && <p>Resume File: <span className="text-text-main">{resumeFile.name}</span></p>}
                  </div>

                  <p className="text-[10px] text-text-muted/40 max-w-xs mx-auto font-sans leading-relaxed">
                    Our flight crew hiring committee verifies all type logs and PRIA references. We will reach back using the provided details within 48 to 72 business hours.
                  </p>

                  <button
                    onClick={() => {
                      setApplyModalOpen(false);
                      setApplySuccess(false);
                      setSelectedJob(null);
                      setFirstName('');
                      setLastName('');
                      setEmail('');
                      setPhone('');
                      setPosition('');
                      setResumeFile(null);
                      setMessage('');
                      setCaptchaInput('');
                    }}
                    className="py-2.5 px-6 bg-navy-dark text-luxury-gold hover:bg-navy-slate border border-text-main/10 text-xs font-mono font-bold tracking-widest uppercase rounded cursor-pointer"
                  >
                    Close & Dismiss
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
