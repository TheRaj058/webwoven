import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Web Woven</h3>
            <p className="text-gray-300">
              Weaving your digital presence with innovative web solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="text-gray-300 mt-1" size={18} />
                <span className="text-gray-300">
                  3 Ward Street, Wolverhampton, WV13LT
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="text-gray-300" size={18} />
                <a
                  href="mailto:bableerajaryal2@gmail.com"
                  className="text-gray-300 hover:text-white"
                >
                  bableerajaryal2@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="text-gray-300" size={18} />
                <a
                  href="tel:07570732244"
                  className="text-gray-300 hover:text-white"
                >
                  07570732244
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sharadraj-aryal-91531b167/"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2024 Web Woven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;