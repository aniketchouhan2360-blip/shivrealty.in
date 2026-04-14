import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/shivrealtylogo-019d5281-c4c1-71f9-9178-b7147fb03913.png"
                alt="SHIV REALTY"
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">
                  SHIV REALTY
                </span>
                <span className="text-sm text-muted-foreground">
                  Since 2016
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted real estate channel partner in Ahmedabad, Gujarat.
              Professional, transparent, and result-oriented services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                data-ocid="footer.link"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                data-ocid="footer.link"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                data-ocid="footer.link"
              >
                Services
              </Link>
              <Link
                to="/projects"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                data-ocid="footer.link"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                data-ocid="footer.link"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact Us
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="tel:+916376898421"
                className="flex items-center space-x-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                <span>+91 63768 98421</span>
              </a>
              <a
                href="tel:+919723823740"
                className="flex items-center space-x-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                <span>+91 97238 23740</span>
              </a>
              <a
                href="mailto:shivrealty90@gmail.com"
                className="flex items-center space-x-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                <span>shivrealty90@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Ahmedabad, Gujarat</span>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect on WhatsApp
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://wa.me/916376898421"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <SiWhatsapp className="h-4 w-4" />
                <span>+91 63768 98421</span>
              </a>
              <a
                href="https://wa.me/919723823740"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <SiWhatsapp className="h-4 w-4" />
                <span>+91 97238 23740</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-center text-sm text-muted-foreground md:flex-row md:space-y-0">
            <p>© {currentYear} SHIV REALTY. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
