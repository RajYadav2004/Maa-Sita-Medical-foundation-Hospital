import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Award, GraduationCap, Languages, Clock, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AppointmentForm from "@/components/AppointmentForm";
import api from "@/services/api";

const DoctorProfile = () => {
  const { id } = useParams();

  const { data: doctor, isLoading } = useQuery({
    queryKey: ["doctor", id],
    queryFn: async () => {
      const { data } = await api.get(`/doctors/${id}`);
      return data;
    },
  });

  if (isLoading) {
    return <div className="container py-12">Loading...</div>;
  }

  if (!doctor) {
    return <div className="container py-12">Doctor not found</div>;
  }

  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column - Image & Actions */}
        <div className="md:col-span-1 space-y-6">
          <img
            src={doctor.image || "/placeholder.svg"}
            alt={doctor.name}
            className="w-full rounded-lg shadow-lg object-cover aspect-[3/4]"
          />

          <div className="space-y-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Appointment
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <AppointmentForm doctorId={doctor._id} doctorName={doctor.name} />
              </DialogContent>
            </Dialog>

            <Button className="w-full" size="lg" variant="outline" asChild>
              <a href="tel:+1234567890">
                <Phone className="mr-2 h-5 w-5" />
                Book via Call
              </a>
            </Button>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {doctor.department}
            </span>
            <h1 className="text-4xl font-bold text-foreground mb-2">{doctor.name}</h1>
            <p className="text-xl text-muted-foreground">{doctor.specialty}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-card rounded-xl border">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="font-semibold text-foreground">{doctor.experience || 'Experienced'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-xl border">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Qualification</p>
                <p className="font-semibold text-foreground">{doctor.qualification || 'Qualified'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-xl border">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Languages className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Languages</p>
                <p className="font-semibold text-foreground">{doctor.languages?.join(", ") || 'English'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-xl border">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Availability</p>
                <p className="font-semibold text-foreground">{doctor.availability || 'Available'}</p>
              </div>
            </div>
          </div>

          {doctor.about && (
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-2">About</h3>
              <p className="text-muted-foreground leading-relaxed">{doctor.about}</p>
            </div>
          )}

          {doctor.expertise && doctor.expertise.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Areas of Expertise</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {doctor.expertise.map((item: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
