import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Upload, Link as LinkIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TeamMemberFormProps {
    initialData?: any;
    onSubmit: (data: any) => void;
    isLoading: boolean;
    onCancel: () => void;
}

const TeamMemberForm = ({ initialData, onSubmit, isLoading, onCancel }: TeamMemberFormProps) => {
    const { register, handleSubmit, reset, setValue, watch } = useForm({
        defaultValues: {
            name: "",
            role: "",
            bio: "",
            linkedin: "",
            twitter: "",
            facebook: "",
            order: 0,
            imageType: "file",
            imageUrl: "",
        },
    });

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const imageType = watch("imageType");

    useEffect(() => {
        if (initialData) {
            reset({
                name: initialData.name,
                role: initialData.role,
                bio: initialData.bio,
                linkedin: initialData.socialLinks?.linkedin || "",
                twitter: initialData.socialLinks?.twitter || "",
                facebook: initialData.socialLinks?.facebook || "",
                order: initialData.order || 0,
                imageType: initialData.image?.startsWith("http") ? "url" : "file",
                imageUrl: initialData.image?.startsWith("http") ? initialData.image : "",
            });
            if (initialData.image && !initialData.image.startsWith("http")) {
                setPreviewUrl(`${process.env.VITE_BACKEND_URL}${initialData.image}`);
            } else if (initialData.image) {
                setPreviewUrl(initialData.image);
            }
        }
    }, [initialData, reset]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const onFormSubmit = (data: any) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("role", data.role);
        formData.append("bio", data.bio);
        formData.append("linkedin", data.linkedin);
        formData.append("twitter", data.twitter);
        formData.append("facebook", data.facebook);
        formData.append("order", data.order.toString());

        if (data.imageType === "file" && imageFile) {
            formData.append("image", imageFile);
        } else if (data.imageType === "url" && data.imageUrl) {
            formData.append("image", data.imageUrl);
        }

        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" {...register("name", { required: true })} placeholder="Dr. John Doe" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" {...register("role", { required: true })} placeholder="Chief Surgeon" />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" {...register("bio")} placeholder="Short biography..." />
            </div>

            <div className="space-y-2">
                <Label>Profile Image</Label>
                <Tabs defaultValue={initialData?.image?.startsWith("http") ? "url" : "file"} onValueChange={(val) => setValue("imageType", val)}>
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="file">Upload File</TabsTrigger>
                        <TabsTrigger value="url">Image URL</TabsTrigger>
                    </TabsList>
                    <TabsContent value="file" className="space-y-2">
                        <div className="flex items-center gap-4">
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="cursor-pointer"
                            />
                            {previewUrl && (
                                <img src={previewUrl} alt="Preview" className="h-16 w-16 object-cover rounded-full border" />
                            )}
                        </div>
                    </TabsContent>
                    <TabsContent value="url" className="space-y-2">
                        <div className="flex gap-2">
                            <Input
                                {...register("imageUrl")}
                                placeholder="https://example.com/image.jpg"
                                onChange={(e) => setPreviewUrl(e.target.value)}
                            />
                        </div>
                        {previewUrl && (
                            <div className="mt-2">
                                <img src={previewUrl} alt="Preview" className="h-16 w-16 object-cover rounded-full border" />
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn URL</Label>
                    <Input id="linkedin" {...register("linkedin")} placeholder="https://linkedin.com/in/..." />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter URL</Label>
                    <Input id="twitter" {...register("twitter")} placeholder="https://twitter.com/..." />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook URL</Label>
                    <Input id="facebook" {...register("facebook")} placeholder="https://facebook.com/..." />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="order">Display Order</Label>
                <Input type="number" id="order" {...register("order")} placeholder="0" />
            </div>

            <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={onCancel}>
                    Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {initialData ? "Update Member" : "Add Member"}
                </Button>
            </div>
        </form>
    );
};

export default TeamMemberForm;
