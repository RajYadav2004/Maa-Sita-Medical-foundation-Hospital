import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Trash2, Image as ImageIcon, Video, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import axios from "axios";

const AdminGallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [uploading, setUploading] = useState(false);
    const queryClient = useQueryClient();

    // Form State
    const [title, setTitle] = useState("");
    const [type, setType] = useState<"image" | "video">("image");
    const [file, setFile] = useState<File | null>(null);
    const [inputType, setInputType] = useState<"file" | "url">("file");
    const [url, setUrl] = useState("");

    // Fetch Gallery Items
    const { data: items, isLoading } = useQuery({
        queryKey: ["gallery"],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/gallery`);
            return response.data;
        },
    });

    // Upload Mutation
    const uploadMutation = useMutation({
        mutationFn: async (formData: FormData) => {
            const token = localStorage.getItem("token");
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/gallery`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["gallery"] });
            toast.success("Item uploaded successfully");
            setIsOpen(false);
            resetForm();
        },
        onError: (error: any) => {
            toast.error(error.response?.data?.message || "Failed to upload item");
        },
        onSettled: () => {
            setUploading(false);
        },
    });

    // Delete Mutation
    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const token = localStorage.getItem("token");
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/gallery/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["gallery"] });
            toast.success("Item deleted successfully");
        },
        onError: (error: any) => {
            toast.error(error.response?.data?.message || "Failed to delete item");
        },
    });

    const resetForm = () => {
        setTitle("");
        setType("image");
        setFile(null);
        setUrl("");
        setInputType("file");
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitting form...');

        if (!title) {
            console.error('Validation error: Title is missing');
            toast.error("Please provide a title");
            return;
        }

        if (inputType === "file" && !file) {
            console.error('Validation error: File is missing');
            toast.error("Please select a file");
            return;
        }

        if (inputType === "url" && !url) {
            console.error('Validation error: URL is missing');
            toast.error("Please provide a URL");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("type", type);
        console.log('FormData: title =', title);
        console.log('FormData: type =', type);

        if (inputType === "file" && file) {
            formData.append("file", file);
            console.log('FormData: file =', file.name, file.size, file.type);
        } else if (inputType === "url" && url) {
            formData.append("url", url);
            console.log('FormData: url =', url);
        }

        setUploading(true);
        console.log('Triggering upload mutation...');
        uploadMutation.mutate(formData);
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
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Gallery Management</h1>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add New Item
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Upload Gallery Item</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter image/video title"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="type">Type</Label>
                                <Select value={type} onValueChange={(val: "image" | "video") => setType(val)}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="image">Image</SelectItem>
                                        <SelectItem value="video">Video</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>Source</Label>
                                <div className="flex gap-4">
                                    <Button
                                        type="button"
                                        variant={inputType === "file" ? "default" : "outline"}
                                        onClick={() => setInputType("file")}
                                        className="flex-1"
                                    >
                                        File Upload
                                    </Button>
                                    <Button
                                        type="button"
                                        variant={inputType === "url" ? "default" : "outline"}
                                        onClick={() => setInputType("url")}
                                        className="flex-1"
                                    >
                                        External URL
                                    </Button>
                                </div>
                            </div>

                            {inputType === "file" ? (
                                <div className="space-y-2">
                                    <Label htmlFor="file">File</Label>
                                    <Input
                                        id="file"
                                        type="file"
                                        accept={type === "image" ? "image/*" : "video/*"}
                                        onChange={handleFileChange}
                                    />
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    <Label htmlFor="url">URL</Label>
                                    <Input
                                        id="url"
                                        type="url"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </div>
                            )}

                            <Button type="submit" className="w-full" disabled={uploading}>
                                {uploading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        {inputType === "file" ? "Uploading..." : "Saving..."}
                                    </>
                                ) : (
                                    "Save Item"
                                )}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items?.map((item: any) => (
                    <div key={item._id} className="bg-card rounded-xl border border-border overflow-hidden group relative">
                        <div className="aspect-video relative bg-muted">
                            {item.type === "image" ? (
                                <img
                                    src={item.url.startsWith("http") ? item.url : `${import.meta.env.VITE_BACKEND_URL}${item.url}`}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <video
                                    src={item.url.startsWith("http") ? item.url : `${import.meta.env.VITE_BACKEND_URL}${item.url}`}
                                    className="w-full h-full object-cover"
                                    controls
                                />
                            )}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() => {
                                        if (confirm("Are you sure you want to delete this item?")) {
                                            deleteMutation.mutate(item._id);
                                        }
                                    }}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                                {item.type === "image" ? (
                                    <ImageIcon className="h-4 w-4 text-blue-500" />
                                ) : (
                                    <Video className="h-4 w-4 text-red-500" />
                                )}
                                <span className="text-xs text-muted-foreground capitalize">{item.type}</span>
                            </div>
                            <h3 className="font-semibold truncate">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminGallery;
