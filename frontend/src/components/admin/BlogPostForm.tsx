import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

interface BlogPostFormProps {
    initialData?: any;
    onSubmit: (data: any) => void;
    isLoading: boolean;
    onCancel: () => void;
}

const BlogPostForm = ({ initialData, onSubmit, isLoading, onCancel }: BlogPostFormProps) => {
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        author: "",
        category: "",
        image: "",
        read_time: "",
        published_at: "",
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                title: initialData.title || "",
                slug: initialData.slug || "",
                excerpt: initialData.excerpt || "",
                content: initialData.content || "",
                author: initialData.author || "",
                category: initialData.category || "",
                image: initialData.image || "",
                read_time: initialData.read_time || "",
                published_at: initialData.published_at ? new Date(initialData.published_at).toISOString().split('T')[0] : "",
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
        onSubmit(formData);
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

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="author">Author</Label>
                    <Input id="author" value={formData.author} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" value={formData.category} onChange={handleChange} />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea id="excerpt" value={formData.excerpt} onChange={handleChange} />
            </div>

            <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" value={formData.content} onChange={handleChange} className="min-h-[200px]" />
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="image">Image URL</Label>
                    <Input id="image" value={formData.image} onChange={handleChange} placeholder="https://..." />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="read_time">Read Time</Label>
                    <Input id="read_time" value={formData.read_time} onChange={handleChange} placeholder="5 min read" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="published_at">Published Date</Label>
                    <Input id="published_at" type="date" value={formData.published_at} onChange={handleChange} />
                </div>
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

export default BlogPostForm;
