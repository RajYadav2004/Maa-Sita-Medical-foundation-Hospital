import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Cardiology", href: "/services#cardiology" },
    { name: "Neurology", href: "/services#neurology" },
    { name: "Orthopedics", href: "/services#orthopedics" },
    { name: "Oncology", href: "/services#oncology" },
    { name: "Pediatrics", href: "/services#pediatrics" },
  ],
  quickLinks: [
    { name: "Find a Doctor", href: "/doctors" },
    { name: "Book Appointment", href: "/doctors" },
    { name: "Patient Stories", href: "/patient-corner" },
    { name: "Health Blog", href: "/blog" },
    { name: "FAQs", href: "/faq" },
  ],
  patientCare: [
    { name: "Admission Process", href: "/patient-corner" },
    { name: "Visitor Guidelines", href: "/patient-corner" },
    { name: "Insurance Info", href: "/faq" },
    { name: "Medical Records", href: "/patient-corner" },
    { name: "Patient Rights", href: "/patient-corner" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* About */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.jpg" alt="Maa Sita Medical Foundation" className="h-12 w-auto object-contain bg-white rounded-lg p-1" />
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              Providing compassionate healthcare for over 25 years. Our mission is to deliver
              quality medical care accessible to all, regardless of financial circumstances.
            </p>
            <div className="space-y-3">
              <a href="tel:+919082945603" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 90829 45603</span>
              </a>
              <a href="mailto:Maasitamedicalfoundation@msmfh.org" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>Maasitamedicalfoundation@msmfh.org</span>
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Madhubani, Bihar</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Clock className="h-4 w-4" />
                <span>Emergency: 24/7 | OPD: 8AM - 8PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Care */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Patient Care</h3>
            <ul className="space-y-2">
              {footerLinks.patientCare.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Maa Sita Medical Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
