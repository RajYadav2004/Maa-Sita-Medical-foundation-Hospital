import { useState, useEffect } from "react";
// import { Layout } from "@/components/layout/Layout";

import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { Heart, Brain, Bone, Activity, Baby, Stethoscope, Eye, Pill, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type Service = Tables<'services'>;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Brain,
  Bone,
  Activity,
  Baby,
  Stethoscope,
  Eye,
  Pill,
};

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('title');

      if (!error && data) {
        setServices(data);
      }
      setLoading(false);
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <>
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </>

    );
  }

  return (
    <>

      {/* Hero */}
      <section className="gradient-primary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Medical Services
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Comprehensive healthcare solutions delivered by expert specialists
              using state-of-the-art technology and compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          {services?.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No services available at the moment.</p>
            </div>
          ) : (
            <div className="space-y-16">
              {services?.map((service: any, index: number) => {
                const isReversed = index % 2 === 1;

                return (
                  <div
                    key={service._id}
                    id={service.slug}
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? "lg:flex-row-reverse" : ""
                      }`}
                  >
                    <div className={isReversed ? "lg:order-2" : ""}>
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                        <img src={service.icon} alt={service.title} className="h-7 w-7" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 text-lg">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature: string) => (
                          <li key={feature} className="flex items-center gap-3">
                            <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild>
                        <Link to="/doctors">Find a Specialist</Link>
                      </Button>
                    </div>
                    <div className={isReversed ? "lg:order-1" : ""}>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          className="w-full h-full object-cover aspect-video"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us for personalized guidance on our services or to schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/doctors">Book Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+919082945603">Call Us</a>
            </Button>
          </div>
        </div>
      </section>
    </>

  );
};

export default Services;
