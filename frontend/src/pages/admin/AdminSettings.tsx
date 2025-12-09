import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import axios from "axios";
import { Loader2, Save } from "lucide-react";

const AdminSettings = () => {
    const queryClient = useQueryClient();
    const [formData, setFormData] = useState({
        hospitalName: "",
        email: "",
        phone: "",
        address: "",
        facebookUrl: "",
        twitterUrl: "",
        instagramUrl: "",
        linkedinUrl: "",
    });

    const { data: settings, isLoading } = useQuery({
        queryKey: ["settings"],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/settings`);
            return response.data;
        },
    });

    useEffect(() => {
        if (settings) {
            setFormData({
                hospitalName: settings.hospitalName || "",
                email: settings.email || "",
                phone: settings.phone || "",
                address: settings.address || "",
                facebookUrl: settings.facebookUrl || "",
                twitterUrl: settings.twitterUrl || "",
                instagramUrl: settings.instagramUrl || "",
                linkedinUrl: settings.linkedinUrl || "",
            });
        }
    }, [settings]);

    const mutation = useMutation({
        mutationFn: async (data: typeof formData) => {
            const token = localStorage.getItem("token");
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/settings`, data, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["settings"] });
            toast.success("Settings updated successfully");
        },
        onError: () => {
            toast.error("Failed to update settings");
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate(formData);
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-96">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">System Settings</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>General Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="hospitalName">Hospital Name</Label>
                                <Input
                                    id="hospitalName"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Contact Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Contact Phone</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="address">Address</Label>
                                <Input
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Social Media Links</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="facebookUrl">Facebook URL</Label>
                                <Input
                                    id="facebookUrl"
                                    name="facebookUrl"
                                    value={formData.facebookUrl}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="twitterUrl">Twitter URL</Label>
                                <Input
                                    id="twitterUrl"
                                    name="twitterUrl"
                                    value={formData.twitterUrl}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="instagramUrl">Instagram URL</Label>
                                <Input
                                    id="instagramUrl"
                                    name="instagramUrl"
                                    value={formData.instagramUrl}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
                                <Input
                                    id="linkedinUrl"
                                    name="linkedinUrl"
                                    value={formData.linkedinUrl}
                                    onChange={handleChange}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex justify-end">
                        <Button type="submit" disabled={mutation.isPending}>
                            {mutation.isPending ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <Save className="mr-2 h-4 w-4" />
                                    Save Settings
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AdminSettings;
