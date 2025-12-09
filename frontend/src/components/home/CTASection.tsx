import { Phone, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border">
          <div className="grid lg:grid-cols-2">
            {/* Left - Info */}
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Need Medical Assistance?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Our expert team is available 24/7 to help you with all your healthcare needs.
                Book an appointment or call us for emergency services.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">24/7 Emergency</p>
                    <p className="font-semibold text-foreground">+91 90829 45603</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">OPD Hours</p>
                    <p className="font-semibold text-foreground">8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/doctors">
                    <Calendar className="h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+919082945603">
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop"
                alt="Modern hospital reception"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card via-card/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
