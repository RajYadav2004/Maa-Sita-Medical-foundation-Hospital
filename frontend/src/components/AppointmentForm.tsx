import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import api from "@/services/api";

interface AppointmentFormProps {
    doctorId?: string;
    doctorName?: string;
}

const AppointmentForm = ({ doctorId, doctorName }: AppointmentFormProps) => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        patient_name: "",
        phone: "",
        email: "",
        preferred_date: "",
        preferred_time: "",
        message: "",
    });

    const mutation = useMutation({
        mutationFn: async (data: any) => {
            await api.post("/appointments", {
                ...data,
                doctor_id: doctorId,
                status: "pending",
            });
        },
        onSuccess: () => {
            toast({
                title: "Success",
                description: "Appointment request sent successfully!",
            });
            setFormData({
                patient_name: "",
                phone: "",
                email: "",
                preferred_date: "",
                preferred_time: "",
                message: "",
            });
        },
        onError: (error: any) => {
            toast({
                variant: "destructive",
                title: "Error",
                description: error.response?.data?.message || "Failed to book appointment",
            });
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <h2 className="text-lg font-semibold">Book Appointment</h2>
                {doctorName && <p className="text-sm text-muted-foreground">with {doctorName}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="patient_name">Name *</Label>
                    <Input
                        id="patient_name"
                        value={formData.patient_name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Phone Number"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="preferred_date">Preferred Date *</Label>
                    <Input
                        id="preferred_date"
                        type="date"
                        value={formData.preferred_date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="preferred_time">Preferred Time *</Label>
                    <Input
                        id="preferred_time"
                        type="time"
                        value={formData.preferred_time}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your problem..."
                />
            </div>

            <Button type="submit" className="w-full" disabled={mutation.isPending}>
                {mutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Confirm Booking
            </Button>
        </form>
    );
};

export default AppointmentForm;
