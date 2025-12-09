import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Calendar, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@/assets/hero-new-1.jpg";
import heroImage2 from "@/assets/hero-exterior-2.jpg";
import heroImage3 from "@/assets/hero-hospital-3.png";

const slides = [
  {
    id: 1,
    image: heroImage1,
    badge: "Compassionate Care for Everyone",
    title: "Healthcare for Good",
    subtitle: "Today. Tomorrow. Always",
    description: "Experience world-class medical care at Maa Sita Medical Foundation. Our dedicated team is committed to providing accessible, affordable, and exceptional healthcare services.",
  },
  {
    id: 2,
    image: heroImage2,
    badge: "Advanced Technology",
    title: "State-of-the-Art",
    subtitle: "Medical Facilities",
    description: "Equipped with the latest medical technology to ensure precise diagnosis and effective treatment for all our patients.",
  },
  {
    id: 3,
    image: heroImage3,
    badge: "Patient-Centered Approach",
    title: "Healing with",
    subtitle: "Compassion & Care",
    description: "We believe in treating not just the illness, but the person. Your health and well-being are our top priorities.",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden group">
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover transition-transform duration-[10000ms] ease-linear transform scale-105 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
      ))}

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 absolute top-0 left-0 w-full ${index === currentSlide
                ? "opacity-100 translate-y-0 relative"
                : "opacity-0 translate-y-8 absolute pointer-events-none"
                }`}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 border border-primary/30 animate-fade-in">
                {slide.badge}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
                {slide.title}
                <span className="block text-primary">{slide.subtitle}</span>
              </h1>
              <p className="text-lg text-background/80 mb-8 max-w-xl">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="xl" variant="hero" asChild>
                  <Link to="/doctors">
                    <Calendar className="h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button size="xl" variant="outline" className="border-background/30 text-background hover:bg-background/10 hover:text-background" asChild>
                  <a href="tel:+919082945603">
                    <Phone className="h-5 w-5" />
                    Call: +91 90829 45603
                  </a>
                </Button>
              </div>

              {/* Search Bar */}
              <div className="bg-card/95 backdrop-blur-sm rounded-xl p-2 shadow-xl max-w-xl">
                <div className="flex items-center gap-2">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search for doctors, specialties, or services..."
                      className="w-full h-12 pl-10 pr-4 rounded-lg bg-muted/50 border-0 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <Button size="lg">Search</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 text-background hover:bg-background/40 transition-colors z-20 hidden md:block"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 text-background hover:bg-background/40 transition-colors z-20 hidden md:block"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-primary w-8" : "bg-background/50 hover:bg-background/80"
              }`}
          />
        ))}
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-20">
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "25+", label: "Years of Service" },
              { value: "150+", label: "Expert Doctors" },
              { value: "50K+", label: "Patients Served" },
              { value: "98%", label: "Patient Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
