import { Link } from "react-router-dom";
import { ArrowRight, Heart, Brain, Bone, Activity, Baby, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description: "Comprehensive heart care with state-of-the-art cardiac facilities",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Expert care for brain, spine, and nervous system conditions",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Advanced bone, joint, and muscle treatment solutions",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Activity,
    title: "Oncology",
    description: "Compassionate cancer care with personalized treatment",
    color: "text-teal-500",
    bg: "bg-teal-50",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Specialized healthcare for children in a friendly environment",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Primary healthcare for overall wellness and prevention",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-primary font-medium mb-2 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Comprehensive Healthcare
            </h2>
            <p className="text-muted-foreground max-w-xl">
              From preventive care to complex surgeries, our expert teams deliver 
              exceptional medical services across all specialties.
            </p>
          </div>
          <Button variant="outline" asChild className="mt-4 md:mt-0">
            <Link to="/services">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              to={`/services#${service.title.toLowerCase()}`}
              className="group bg-card rounded-2xl p-6 card-elevated border border-border hover:border-primary/30 transition-all"
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${service.bg} ${service.color} mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
