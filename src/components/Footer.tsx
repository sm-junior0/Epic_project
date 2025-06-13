import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import EpicLogo from "@/assets/logos/EpicLogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#2E7D32] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={EpicLogo} 
                alt="EPIC Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/80 text-sm">
              Empowering students to make informed career decisions through data-driven insights and personalized guidance.
            </p>
            <div className="flex space-x-4">
              <a title="Instagram" href="https://www.instagram.com/epic.careers/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a title="linkedIn" href="https://linkedin.com/company/epicareersrwanda" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/80 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#trends" className="text-white/80 hover:text-white transition-colors">Career Trend Analysis</Link>
              </li>
              <li>
                <Link to="/services#analytics" className="text-white/80 hover:text-white transition-colors">Student Preference Analytics</Link>
              </li>
              <li>
                <Link to="/services#abroad" className="text-white/80 hover:text-white transition-colors">Study Abroad Programs</Link>
              </li>
              <li>
                <Link to="/services#tracking" className="text-white/80 hover:text-white transition-colors">Performance Tracking</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white/80 mt-0.5" />
                <span className="text-white/80">Kigali, Rwanda</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/80" />
                <a href="tel:+250780897289" className="text-white/80 hover:text-white transition-colors">+250 780 897 289</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/80" />
                <a href="tel:+250786083451" className="text-white/80 hover:text-white transition-colors">+250 786 083 451</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/80" />
                <a href="mailto:info@epiccareers.rw" className="text-white/80 hover:text-white transition-colors">info@epiccareers.rw</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} EPIC Careers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
