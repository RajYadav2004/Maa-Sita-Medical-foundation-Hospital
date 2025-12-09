import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Search, Star, Clock, Award, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import api from "@/services/api";

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const { data: doctors, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const { data } = await api.get("/doctors");
      return data;
    },
  });

  const departments = doctors ? ["All", ...new Set(doctors.map((d: any) => d.department))] : ["All"];

  const filteredDoctors = doctors?.filter((doctor: any) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === "All" || doctor.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Specialist Doctors
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find the right specialist for your health needs. Our doctors are here to provide
              you with the best possible care.
            </p>

            {/* Search */}
            <div className="bg-card/95 backdrop-blur-sm rounded-xl p-2 shadow-xl max-w-xl mx-auto border">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by doctor name or specialty..."
                  className="w-full h-12 pl-12 pr-4 rounded-lg bg-muted/50 border-0 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Doctors */}
      <section className="py-16">
        <div className="container">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <>
              {/* Department Filter */}
              <div className="mb-10 flex flex-wrap gap-2 justify-center">
                {departments.map((dept: any) => (
                  <Button
                    key={dept}
                    variant={selectedDepartment === dept ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDepartment(dept)}
                  >
                    {dept}
                  </Button>
                ))}
              </div>

              {/* Doctors Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors?.map((doctor: any) => (
                  <Link
                    key={doctor._id}
                    to={`/doctors/${doctor._id}`}
                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={doctor.image || "/placeholder.svg"}
                        alt={doctor.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-primary">
                        {doctor.department}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-1 text-amber-500 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-current" />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">(4.9)</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-primary font-medium mb-3">{doctor.specialty}</p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Award className="h-4 w-4" />
                          {doctor.experience || 'Experienced'}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          Available
                        </span>
                      </div>

                      <Button className="w-full" variant="outline">
                        View Profile & Book
                      </Button>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredDoctors?.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No doctors found matching your criteria.</p>
                  <Button className="mt-4" onClick={() => { setSearchQuery(""); setSelectedDepartment("All"); }}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Doctors;
