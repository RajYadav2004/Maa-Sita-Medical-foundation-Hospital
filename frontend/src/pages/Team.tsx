import { useQuery } from "@tanstack/react-query";
import api from "@/services/api";
import { Linkedin, Twitter, Facebook } from "lucide-react";

const Team = () => {
    const { data: team, isLoading } = useQuery({
        queryKey: ["public-team"],
        queryFn: async () => {
            const { data } = await api.get("/team");
            return data;
        },
    });

    if (isLoading) {
        return (
            <div className="container py-16 text-center">
                <div className="animate-pulse space-y-4">
                    <div className="h-8 bg-muted rounded w-1/3 mx-auto"></div>
                    <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-64 bg-muted rounded-xl"></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <div className="bg-primary/5 py-16 md:py-24">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Meet Our Team
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        The dedicated professionals behind Maa Sita Medical Foundation, working tirelessly to provide exceptional healthcare.
                    </p>
                </div>
            </div>

            {/* Team Grid */}
            <div className="container py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team?.map((member: any) => (
                        <div key={member._id} className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                            <div className="aspect-square overflow-hidden bg-muted">
                                {member.image ? (
                                    <img
                                        src={member.image.startsWith("http") ? member.image : `${process.env.VITE_BACKEND_URL}${member.image}`}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary text-4xl font-bold">
                                        {member.name.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                                    {member.bio}
                                </p>
                                <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {member.socialLinks?.linkedin && (
                                        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-600 transition-colors">
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                    )}
                                    {member.socialLinks?.twitter && (
                                        <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-400 transition-colors">
                                            <Twitter className="h-5 w-5" />
                                        </a>
                                    )}
                                    {member.socialLinks?.facebook && (
                                        <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-700 transition-colors">
                                            <Facebook className="h-5 w-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Team;
