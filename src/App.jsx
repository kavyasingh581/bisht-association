import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Gavel, 
  Briefcase, 
  Shield, 
  BookOpen, 
  ChevronRight, 
  Landmark,
  Users,
  Target,
  Award,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link for direct booking via email
    const subject = encodeURIComponent(`New Consultation Request: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Requested Service: ${formData.service}

Message:
${formData.message}
    `);
    
    // In a real app with a backend, we'd use fetch/axios here.
    // For this requirement, we trigger the user's email client directly.
    window.location.href = `mailto:bookings@bishtassociates.com?subject=${subject}&body=${body}`;
    
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 5000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  // ============================================================
  // EDIT YOUR PRACTICE AREAS BELOW - Change title and desc fields
  // ============================================================
  const services = [
    // Box 1 - EDIT TITLE AND DESCRIPTION HERE
    { icon: <Building2 className="w-8 h-8" />, title: "Civil Litigation", desc: "Handling civil suits, injunction matters, recovery suits, and contractual disputes before courts." },
    
    // Box 2 - EDIT TITLE AND DESCRIPTION HERE
    { icon: <Shield className="w-8 h-8" />, title: "Criminal Law", desc: "Representation in criminal trials, bail applications, anticipatory bail matters, and criminal defence." },
    
    // Box 3 - EDIT TITLE AND DESCRIPTION HERE
    { icon: <Scale className="w-8 h-8" />, title: "Matrimonial & Family Law", desc: "Divorce petitions, maintenance proceedings, domestic violence cases, and child custody matters." },
    
    // Box 4 - EDIT TITLE AND DESCRIPTION HERE
    { icon: <Landmark className="w-8 h-8" />, title: "CAT (Central Administrative Tribunal) Matters", desc: "Representation of government employees in service matters including service disputes, promotions, transfers, disciplinary proceedings, and pension-related issues before the Central Administrative Tribunal (CAT)." },
    
    // Box 5 - EDIT TITLE AND DESCRIPTION HERE
    { icon: <Briefcase className="w-8 h-8" />, title: "Environmental & NGT Matters", desc: "Representation before the National Green Tribunal (NGT) in environmental and regulatory disputes." },
    
    // Box 6 - EDIT TITLE AND DESCRIPTION HERE
    { icon: <BookOpen className="w-8 h-8" />, title: "Cheque Bounce (NI Act) Cases", desc: "Handling matters relating to dishonour of cheques under Section 138 of the Negotiable Instruments Act." },
    
    // Box 7 - EDIT TITLE AND DESCRIPTION HERE (Hidden until Load More is clicked)
    { icon: <Gavel className="w-8 h-8" />, title: "Consumer Protection Cases", desc: "Handling consumer disputes before District, State, and National Consumer Commissions." },
    
    // Box 8 - EDIT TITLE AND DESCRIPTION HERE (Hidden until Load More is clicked)
    { icon: <Building2 className="w-8 h-8" />, title: "Property & Real Estate Disputes", desc: "Legal assistance in property disputes, title verification, possession matters, and real estate litigation.  " },
    
    // Box 9 - EDIT TITLE AND DESCRIPTION HERE (Hidden until Load More is clicked)
    { icon: <Shield className="w-8 h-8" />, title: "Corporate & Commercial", desc: "Expert guidance in corporate governance, mergers, acquisitions, and commercial contract disputes." },
    
    // Box 10 - EDIT TITLE AND DESCRIPTION HERE (Hidden until Load More is clickedExpert guidance in corporate governance, mergers, acquisitions, and commercial contract disputes.)
    { icon: <BookOpen className="w-8 h-8" />, title: "Writ Petitions", desc: "Legal representation in writ petitions before the Supreme Court & High Courts for protection and enforcement of constitutional and legal rights." },
  ];
  // ============================================================

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen selection:bg-slate-900 selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
              <div className="bg-gradient-to-br from-slate-900 to-slate-700 p-2.5 rounded-xl mr-3 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-slate-900 leading-none">
                  BISHT
                </span>
                <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase mt-0.5">
                  Associates
                </span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center text-slate-600">
              <button onClick={() => scrollToSection('about')} className="hover:text-slate-900 transition-colors font-medium">About Firm</button>
              <button onClick={() => scrollToSection('courts')} className="hover:text-slate-900 transition-colors font-medium">Courts</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-slate-900 transition-colors font-medium">Practice Areas</button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                Request Service
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-900 hover:bg-slate-100 p-2 rounded-lg transition-colors">
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 flex flex-col items-center space-y-4 border-t border-slate-100">
            <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-slate-900 font-medium w-full py-2 hover:bg-slate-50">About Firm</button>
            <button onClick={() => scrollToSection('courts')} className="text-slate-600 hover:text-slate-900 font-medium w-full py-2 hover:bg-slate-50">Courts</button>
            <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-slate-900 font-medium w-full py-2 hover:bg-slate-50">Practice Areas</button>
            <button onClick={() => scrollToSection('contact')} className="text-white bg-slate-900 font-medium w-[90%] mx-auto py-3 rounded-lg shadow-md mt-2">Request Service</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F8FAFC]">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-slate-200/50 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-slate-300/30 blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Text Content */}
            <div className="text-center lg:text-left mb-16 lg:mb-0 mt-8 lg:mt-0">
              <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-slate-800 animate-pulse"></div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wider">High Court & Supreme Court</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Modern strategy. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-800">Decisive action.</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Bisht Associates provides premier legal advocacy at India's highest judicial forums, blending traditional legal excellence with modern litigation strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>Book a Consultation</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center shadow-sm hover:shadow-md"
                >
                  Explore Services
                </button>
              </div>
            </div>

            {/* Image/Visual Content */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100/50">
                <img 
                  src="/public/holi design.jpeg" 
                  alt="Modern Legal Office" 
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 bg-white p-5 lg:p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:flex items-center space-x-5">
                <div className="bg-slate-900 p-3 lg:p-4 rounded-xl shadow-inner">
                  <Scale className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div>
                  <p className="text-xs lg:text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">Established</p>
                  <p className="text-xl lg:text-2xl font-bold text-slate-900">Excellence</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-slate-500 font-semibold tracking-wider uppercase text-sm mb-2">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Bisht Associates</h3>
            <div className="w-24 h-1 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                <strong className="text-slate-900">Bisht &  Associates</strong> is a dedicated law firm providing professional legal services across a wide range of practice areas including Civil Litigation, Criminal Law, Matrimonial Disputes, Property Matters, NGT Matters, and Legal advisory services.

              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                With a commitment to integrity, professionalism, and client-focused solutions, the firm strives to deliver effective legal representation and strategic counsel to individuals and businesses. Our team combines experience, legal expertise, and practical understanding of court procedures to ensure the best possible outcomes for our clients.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Operating from Delhi, Bisht & Associates represents clients before Supreme Court, High Courts, District Courts, Tribunals, and other Judicial Forums, providing reliable legal support at every stage of litigation.

At Bisht & Associates, we believe in delivering transparent, ethical, and result-oriented legal services, ensuring that every client receives personalized attention and strong legal representation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div 
                onClick={() => scrollToSection('team')}
                className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center hover:shadow-lg transition-all cursor-pointer hover:scale-105 group"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Expert Team</h4>
                <p className="text-slate-600 text-sm">Seasoned advocates with decades of combined experience</p>
                <p className="text-xs text-slate-500 mt-2 font-medium">Click to meet our team →</p>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Client-Focused</h4>
                <p className="text-slate-600 text-sm">Tailored strategies for your unique legal challenges</p>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Track Record</h4>
                <p className="text-slate-600 text-sm">Proven success in landmark judgments</p>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Integrity</h4>
                <p className="text-slate-600 text-sm">Unwavering commitment to ethical practice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courts Section */}
      <section id="courts" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-slate-500 font-semibold tracking-wider uppercase text-sm mb-2">Our Jurisdiction</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Chambers & Practice Forums</h3>
            <div className="w-24 h-1 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-100 p-10 rounded-2xl hover:shadow-xl transition-shadow flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                <Landmark className="w-10 h-10 text-slate-800" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Supreme Court of India</h4>
              <p className="text-slate-600 leading-relaxed">
                Handling Special Leave Petitions (SLPs), Writ Petitions, and complex constitutional appellate matters before the Apex Court with a proven track record of landmark judgments.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-10 rounded-2xl hover:shadow-xl transition-shadow flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                <Gavel className="w-10 h-10 text-slate-800" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">High Courts</h4>
              <p className="text-slate-600 leading-relaxed">
                Extensive practice across various High Courts in India, specializing in original and appellate jurisdiction, company appeals, quashing petitions, and bail matters.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-10 rounded-2xl hover:shadow-xl transition-shadow flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-10 h-10 text-slate-800" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">District Courts</h4>
              <p className="text-slate-600 leading-relaxed">
                Comprehensive representation in civil and criminal matters at district level, including trial proceedings, execution matters, and family court disputes.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-10 rounded-2xl hover:shadow-xl transition-shadow flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                <Scale className="w-10 h-10 text-slate-800" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Tribunals & Forums</h4>
              <p className="text-slate-600 leading-relaxed">
                Expert representation before specialized tribunals including NCLT, NCLAT, CAT, NGT, Consumer Forums, and various administrative tribunals across multiple jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas / Services */}
      <section id="services" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2">Legal Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Practice Areas</h3>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-lg">
              We offer comprehensive legal services tailored to protect your interests, ensuring robust representation across diverse legal spectrums.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, showAllServices ? 10 : 6).map((service, index) => (
              <div key={index} className="bg-slate-800 border border-slate-700 p-8 rounded-2xl hover:border-blue-500 hover:bg-slate-800/80 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-blue-500/20">
                <div className="text-blue-400 mb-6 bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-lg">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex items-center text-sm font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                  Request Service <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {!showAllServices && (
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => setShowAllServices(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-slate-500 font-semibold tracking-wider uppercase text-sm mb-2">Our Legal Experts</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h3>
            <div className="w-24 h-1 bg-slate-900 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
              Our distinguished team of advocates brings decades of combined experience in handling complex legal matters at the highest judicial forums.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all group border border-slate-100 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/public/Team_mem2.jpeg" 
                  alt="Adv. Shankar Datt Gahtori" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-1">Adv. Shankar Datt Gahtori</h4>
                <p className="text-sm text-slate-500 mb-3 font-medium">Senior Legal Advisor at Bisht & Associates</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  With 45+ years of experience in the legal profession, his wisdom, courtroom expertise, and guidance strengthen our commitment to delivering effective legal solutions
                </p>
                <div className="flex gap-2 flex-wrap">
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all group border border-slate-100 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/public/Team_mem1.jpeg" 
                  alt="Adv. Tara Singh Bisht" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-1">Adv. Tara Singh Bisht</h4>
                <p className="text-sm text-slate-500 mb-3 font-medium">Legal Advisor at Bisht & Associates</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  With 11+ years of legal experience, he brings strong litigation expertise in civil, criminal, property, and matrimonial matters.

Dedicated to delivering professional and result-oriented legal services.
                </p>
                <div className="flex gap-2 flex-wrap">
                </div>
              </div>
            </div>
          </div>
           
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Join Our Legacy of Excellence</h4>
              <p className="text-slate-600 mb-6">
                We are always looking for talented advocates and legal professionals who share our commitment to excellence and client service.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-xl inline-flex items-center space-x-2"
              >
                <span>Get in Touch</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Service Request Booking */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
            
            {/* Contact Info Side */}
            <div className="lg:w-2/5 bg-slate-900 text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 opacity-5">
                <Scale className="w-64 h-64" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2">Get in Touch</h3>
                <p className="text-slate-400 mb-10">Request a service directly through our portal. Our team will contact you promptly to confirm your consultation.</p>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-xl text-white mt-1">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Chambers</h4>
                      <p className="text-slate-300">Supreme Court of India,<br/>Tilak Marg, New Delhi, 110001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-xl text-white mt-1">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Phone</h4>
                      <p className="text-slate-300">+91 98XXX XXXXX<br/>+91 11 23XX XXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-xl text-white mt-1">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Email</h4>
                      <p className="text-slate-300">bookings@bishtassociates.com<br/>legal@bishtassociates.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form Side */}
            <div className="lg:w-3/5 p-10 md:p-14">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Request Legal Service</h3>
              
              {formStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6 flex items-center">
                  <span className="font-medium">Request drafted successfully! Please check your email client to send the message.</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-colors bg-slate-50 focus:bg-white outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-colors bg-slate-50 focus:bg-white outline-none"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-colors bg-slate-50 focus:bg-white outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Required Service *</label>
                    <select 
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-colors bg-slate-50 focus:bg-white outline-none appearance-none"
                    >
                      <option value="" disabled>Select a service...</option>
                      <option value="Corporate & Commercial">Corporate & Commercial</option>
                      <option value="Criminal Defense">Criminal Defense</option>
                      <option value="Civil Litigation">Civil Litigation</option>
                      <option value="Constitutional Law">Constitutional Law (Writ Petitions)</option>
                      <option value="Arbitration">Arbitration</option>
                      <option value="Family Law">Family & Matrimonial</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Case Details / Message</label>
                  <textarea 
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-colors bg-slate-50 focus:bg-white outline-none resize-none"
                    placeholder="Please provide a brief overview of your legal requirement..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl transition-all shadow-md hover:shadow-xl flex justify-center items-center space-x-2 hover:-translate-y-0.5"
                >
                  <span>Request Booking</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-center text-slate-500 mt-4">
                  Submitting this form does not create an attorney-client relationship. Your information will be kept strictly confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
            
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Scale className="w-8 h-8 text-white mr-2" />
                <span className="text-2xl font-bold tracking-tight text-white">
                  BISHT <span className="font-light">ASSOCIATES</span>
                </span>
              </div>
              <p className="max-w-xs text-sm">
                Advocates & Legal Consultants practicing at the Supreme Court of India and High Courts.
              </p>
            </div>

            <div className="flex space-x-8 text-sm">
              <a href="#about" className="hover:text-white transition-colors">About Us</a>
              <a href="#services" className="hover:text-white transition-colors">Practice Areas</a>
              <a href="#courts" className="hover:text-white transition-colors">Courts</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} Bisht Associates. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Social Media Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/people/Bisht-Associates/61586617063864"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3.5 rounded-full shadow-xl hover:shadow-blue-600/50 transition-all hover:scale-110 flex items-center justify-center group"
          title="Follow on Facebook"
        >
          <Facebook className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/bisht-associates-09aa773b5"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-800 text-white p-3.5 rounded-full shadow-xl hover:shadow-blue-700/50 transition-all hover:scale-110 flex items-center justify-center group"
          title="Connect on LinkedIn"
        >
          <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/bishtassociates1/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white p-3.5 rounded-full shadow-xl hover:shadow-pink-500/50 transition-all hover:scale-110 flex items-center justify-center group"
          title="Follow on Instagram"
        >
          <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919XXXXXXXXX?text=Hello%20Bisht%20Associates%2C%20I%20would%20like%20to%20inquire%20about%20legal%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-110 flex items-center justify-center group relative"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        </a>
      </div>

    </div>
  );
};

export default App;
