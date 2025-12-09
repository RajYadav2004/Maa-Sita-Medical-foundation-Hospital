import { Link } from "react-router-dom";
import { CalendarCheck, Building2, Stethoscope, Users, Heart, FileText } from "lucide-react";

const actions = [
  {
    icon: CalendarCheck,
    title: "Book Appointment",
    description: "Schedule with our experts",
    href: "/doctors",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Building2,
    title: "Our Facilities",
    description: "World-class infrastructure",
    href: "/services",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Stethoscope,
    title: "Specialities",
    description: "Expert healthcare services",
    href: "/services",
    color: "bg-success/10 text-success",
  },
  {
    icon: Users,
    title: "Our Doctors",
    description: "Meet our specialists",
    href: "/doctors",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Health Checkups",
    description: "Comprehensive packages",
    href: "/services",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: FileText,
    title: "Patient Portal",
    description: "Access your records",
    href: "/patient-corner",
    color: "bg-success/10 text-success",
  },
];

export function QuickActions() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">How Can We Help You?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quick access to our most popular services and resources
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map((action) => (
            <Link
              key={action.title}
              to={action.href}
              className="group bg-card rounded-xl p-5 card-elevated text-center hover:border-primary/20 border border-transparent transition-all"
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${action.color} mb-4 group-hover:scale-110 transition-transform`}>
                <action.icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">{action.title}</h3>
              <p className="text-xs text-muted-foreground">{action.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
