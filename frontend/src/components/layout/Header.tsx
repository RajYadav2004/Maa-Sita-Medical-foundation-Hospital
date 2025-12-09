import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Calendar, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Doctors", href: "/doctors" },
  { name: "Our Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Mission & Vision", href: "/mission-vision" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200",
        isScrolled ? "shadow-md" : ""
      )}
    >
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden sm:block">
        <div className="container flex items-center justify-between text-xs md:text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919082945603" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="h-3.5 w-3.5" />
              <span>+91 90829 45603</span>
            </a>
            <span className="hidden md:inline text-primary-foreground/80">24/7 Emergency Services</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="#appointment" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Calendar className="h-3.5 w-3.5" />
              <span>Book Appointment</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mr-6">
          <img src="/logo.jpg" alt="Maa Sita Medical Foundation" className="h-10 w-auto object-contain" />
          <span className="font-bold text-lg hidden lg:inline-block">Maa Sita Medical Foundation</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                location.pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons & Mobile Menu */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/auth">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Link>
            </Button>
          </div>

          {/* Mobile Menu (Sheet) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="xl:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left flex items-center gap-2">
                  <img src="/logo.jpg" alt="Logo" className="h-8 w-auto" />
                  <span className="text-sm font-bold">Maa Sita Medical Foundation</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 py-6">
                <div className="flex flex-col gap-1">
                  {navigation.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        to={item.href}
                        className={cn(
                          "px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-muted",
                          location.pathname === item.href
                            ? "bg-primary/10 text-primary"
                            : "text-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                <div className="border-t pt-4 flex flex-col gap-2">
                  <SheetClose asChild>
                    <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                      <Link to="/auth">
                        <LogIn className="h-4 w-4 mr-2" />
                        Login
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}


