import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

interface DoctorFormProps {
    initialData?: any;
    onSubmit: (data: any) => void;
    isLoading: boolean;
    onCancel: () => void;
}

const DoctorForm = ({ initialData, onSubmit, isLoading, onCancel }: DoctorFormProps) => {
    const [formData, setFormData] = useState({
        name: "",
        specialty: "",
        department: "",
        image: "",
        experience: "",
        qualification: "",
        languages: "",
        about: "",
        expertise: "",
        availability: "",
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || "",
                specialty: initialData.specialty || "",
                department: initialData.department || "",
                image: initialData.image || "",
                experience: initialData.experience || "",
                qualification: initialData.qualification || "",
                languages: initialData.languages?.join(", ") || "",
                about: initialData.about || "",
                expertise: initialData.expertise?.join(", ") || "",
                availability: initialData.availability || "",
            });
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formattedData = {
            ...formData,
            languages: formData.languages.split(",").map((s) => s.trim()).filter(Boolean),
            expertise: formData.expertise.split(",").map((s) => s.trim()).filter(Boolean),
        };
        onSubmit(formattedData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="specialty">Specialty *</Label>
                    <Input id="specialty" value={formData.specialty} onChange={handleChange} required />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="department">Department *</Label>
                    <Input id="department" value={formData.department} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
                    <Input id="availability" value={formData.availability} onChange={handleChange} />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input id="image" value={formData.image} onChange={handleChange} placeholder="https://..." />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="experience">Experience</Label>
                    <Input id="experience" value={formData.experience} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="qualification">Qualification</Label>
                    <Input id="qualification" value={formData.qualification} onChange={handleChange} />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="languages">Languages (comma separated)</Label>
                <Input id="languages" value={formData.languages} onChange={handleChange} placeholder="English, Spanish" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="expertise">Expertise (comma separated)</Label>
                <Input id="expertise" value={formData.expertise} onChange={handleChange} placeholder="Surgery, Pediatrics" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="about">About</Label>
                <Textarea id="about" value={formData.about} onChange={handleChange} />
            </div>

            <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={onCancel}>
                    Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {initialData ? "Update" : "Create"}
                </Button>
            </div>
        </form>
    );
};

export default DoctorForm;
