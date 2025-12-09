import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { doctors } from "@/data/doctors";

export function DoctorsPreview() {
  const featuredDoctors = doctors.slice(0, 4);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-primary font-medium mb-2 block">Our Specialists</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Meet Our Expert Doctors
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Our team of highly qualified specialists brings decades of experience 
              and commitment to exceptional patient care.
            </p>
          </div>
          <Button variant="outline" asChild className="mt-4 md:mt-0">
            <Link to="/doctors">
              View All Doctors
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDoctors.map((doctor) => (
            <Link
              key={doctor.id}
              to={`/doctors/${doctor.id}`}
              className="group bg-card rounded-2xl overflow-hidden card-elevated border border-border hover:border-primary/30 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-amber-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-sm text-primary mb-1">{doctor.specialty}</p>
                <p className="text-xs text-muted-foreground">{doctor.experience} Experience</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
