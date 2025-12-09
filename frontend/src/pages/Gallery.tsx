import { useQuery } from "@tanstack/react-query";
// import { Layout } from "@/components/layout/Layout";

import { Loader2, Play } from "lucide-react";
import axios from "axios";

const Gallery = () => {
    const { data: galleryItems, isLoading } = useQuery({
        queryKey: ["gallery"],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/gallery`);
            return response.data;
        },
    });

    if (isLoading) {
        return (
            <>
                <div className="min-h-[60vh] flex items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
            </>

        );
    }

    return (
        <>

            <div className="container py-12">
                <h1 className="text-4xl font-bold text-center mb-4 text-primary">Our Gallery</h1>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Take a tour of Maa Sita Medical Foundation. We take pride in maintaining a clean,
                    modern, and comfortable environment for our patients and visitors.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems?.length === 0 ? (
                        <div className="col-span-full text-center py-12 text-muted-foreground">
                            No images or videos in the gallery yet.
                        </div>
                    ) : (
                        galleryItems?.map((item: any) => (
                            <div
                                key={item._id}
                                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 aspect-video bg-muted"
                            >
                                {item.type === "image" ? (
                                    <img
                                        src={item.url.startsWith("http") ? item.url : `${import.meta.env.VITE_BACKEND_URL}${item.url}`}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="relative w-full h-full">
                                        <video
                                            src={item.url.startsWith("http") ? item.url : `${import.meta.env.VITE_BACKEND_URL}${item.url}`}
                                            className="w-full h-full object-cover"
                                            controls
                                        />
                                    </div>
                                )}

                                {item.type === "image" && (
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                        <span className="text-white font-medium text-lg px-4 text-center">
                                            {item.title}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>

    );
};

export default Gallery;
