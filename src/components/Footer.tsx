
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold">EPIC Careers</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Turning your interests and performance into a robust career action plan through 
              data-driven guidance and personalized support.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 Kigali, Rwanda</p>
              <p>📧 info@epiccareers.rw</p>
              <p>📱 +250 788 123 456</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/partners" className="text-gray-300 hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Career Trend Analysis</li>
              <li className="text-gray-300">Student Preference Analytics</li>
              <li className="text-gray-300">Study Abroad Programs</li>
              <li className="text-gray-300">Performance Tracking</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EPIC Careers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
