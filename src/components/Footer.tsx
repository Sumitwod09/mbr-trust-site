import { Link } from "react-router-dom";
import { Building2, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Building2 className="w-7 h-7 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">MBR Vastukalp</h3>
                <p className="text-sm text-primary-foreground/80">Since 1999</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Over 25 years of excellence in construction, renovation, and maintenance. Building trust, one project at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Founders", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-").replace("-us", "")}`}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {["Civil Structure", "Electrical", "Plumbing", "Painting", "HVAC"].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary mt-0.5" />
                <div>
                  <p className="text-primary-foreground/80">+91 982128 2719</p>
                  <p className="text-primary-foreground/80">+91 86198 63180</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary mt-0.5" />
                <p className="text-primary-foreground/80">mbrvastukalp@gmail.com</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                <p className="text-primary-foreground/80">Mumbai, Maharashtra, India</p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary mt-0.5" />
                <p className="text-primary-foreground/80">Mon - Sat: 9AM - 7PM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © {new Date().getFullYear()} MBR Vastukalp. All rights reserved.
            </p>
            <p className="text-primary-foreground/80 text-sm">
              25+ Years of Excellence in Construction
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
