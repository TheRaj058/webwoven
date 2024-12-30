import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import NewsletterSignup from "@/components/home/NewsletterSignup";

const Footer = () => {
  return (
    <footer className="bg-footer text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Web Woven</h3>
            <p className="text-muted">
              Weaving your digital presence with innovative web solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="text-muted mt-1" size={18} />
                <span className="text-muted">
                  3 Ward Street, Wolverhampton, WV13LT
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="text-muted" size={18} />
                <a
                  href="mailto:hello@webwoven.co.uk"
                  className="text-muted hover:text-primary transition-colors"
                >
                  hello@webwoven.co.uk
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="text-muted" size={18} />
                <a
                  href="tel:07570732244"
                  className="text-muted hover:text-primary transition-colors"
                >
                  07570732244
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted mb-4">
              Subscribe to our newsletter for updates and insights
            </p>
            <NewsletterSignup />
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Connect With Us</h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-muted hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-muted hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sharadraj-aryal-91531b167/"
                  className="text-muted hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted/20 text-center text-muted">
          <p>&copy; 2024 Web Woven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;