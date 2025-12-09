import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

interface ServiceFormProps {
    initialData?: any;
    onSubmit: (data: any) => void;
    isLoading: boolean;
    onCancel: () => void;
}

const ServiceForm = ({ initialData, onSubmit, isLoading, onCancel }: ServiceFormProps) => {
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        description: "",
        icon: "",
        image: "",
        features: "",
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                title: initialData.title || "",
                slug: initialData.slug || "",
                description: initialData.description || "",
                icon: initialData.icon || "",
                image: initialData.image || "",
                features: initialData.features?.join(", ") || "",
            });
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => {
            const newData = { ...prev, [id]: value };
            if (id === "title" && !initialData) {
                newData.slug = value.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
            }
            return newData;
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formattedData = {
            ...formData,
            features: formData.features.split(",").map((s) => s.trim()).filter(Boolean),
        };
        onSubmit(formattedData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input id="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="slug">Slug *</Label>
                    <Input id="slug" value={formData.slug} onChange={handleChange} required />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" value={formData.description} onChange={handleChange} />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="icon">Icon URL</Label>
                    <Input id="icon" value={formData.icon} onChange={handleChange} placeholder="/placeholder.svg" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="image">Image URL</Label>
                    <Input id="image" value={formData.image} onChange={handleChange} placeholder="https://..." />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="features">Features (comma separated)</Label>
                <Textarea id="features" value={formData.features} onChange={handleChange} placeholder="Feature 1, Feature 2" />
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

export default ServiceForm;
