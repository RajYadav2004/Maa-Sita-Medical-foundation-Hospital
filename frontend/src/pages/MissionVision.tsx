// import { Layout } from "@/components/layout/Layout";

import { Target, Eye, Heart, Users, Shield, Award, Lightbulb } from "lucide-react";

const MissionVision = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="bg-primary/5 py-16 md:py-24">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Mission & Vision
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Guiding principles that drive Maa Sita Medical Foundation to provide exceptional healthcare and community service.
                    </p>
                </div>
            </div>

            <div className="container py-16 md:py-24 space-y-24">
                {/* Mission Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 space-y-6">
                        <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl text-blue-600">
                            <Target className="h-8 w-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            At Maa Sita Medical Foundation, our mission is to revolutionize healthcare delivery by making world-class medical services accessible and affordable to every individual, regardless of their socio-economic background. We are steadfast in our commitment to bridging the gap between quality healthcare and the underserved communities.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We believe that healthcare is a fundamental human right. Our dedicated team of professionals works tirelessly to provide holistic care that addresses not just the physical ailments but also the emotional and psychological well-being of our patients. Through continuous community outreach programs, free health camps, and educational initiatives, we aim to empower individuals to take charge of their health.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-start gap-3">
                                <Heart className="h-6 w-6 text-red-500 shrink-0 mt-1" />
                                <span className="text-muted-foreground"><strong>Compassionate Care:</strong> Treating every patient with the utmost dignity, empathy, and kindness.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Users className="h-6 w-6 text-blue-500 shrink-0 mt-1" />
                                <span className="text-muted-foreground"><strong>Community Empowerment:</strong> Uplifting society through health literacy and preventive care initiatives.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Shield className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                                <span className="text-muted-foreground"><strong>Ethical Practice:</strong> Upholding the highest standards of integrity and transparency in all our medical practices.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-2 bg-muted rounded-2xl h-[500px] flex items-center justify-center overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-500" />
                        <Target className="h-32 w-32 text-primary/20" />
                    </div>
                </div>

                {/* Vision Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-muted rounded-2xl h-[500px] flex items-center justify-center overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 group-hover:scale-105 transition-transform duration-500" />
                        <Eye className="h-32 w-32 text-primary/20" />
                    </div>
                    <div className="space-y-6">
                        <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-xl text-green-600">
                            <Eye className="h-8 w-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our vision is to become a global leader in compassionate healthcare, setting a benchmark for excellence and innovation. We aspire to create a society where no individual is denied medical treatment due to financial constraints. We envision a future where advanced medical technologies and traditional healing practices converge to offer the best possible outcomes for our patients.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We strive to build a network of healthcare facilities that serve as beacons of hope, fostering a culture of wellness and preventive living. By investing in cutting-edge research, continuous medical education, and state-of-the-art infrastructure, we aim to stay at the forefront of medical advancements.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Ultimately, we see a world where health is not a privilege but a shared reality, and Maa Sita Medical Foundation stands as a pillar of support, healing, and humanity for generations to come.
                        </p>
                    </div>
                </div>

                {/* Core Values Section */}
                <div className="py-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
                        <p className="text-lg text-muted-foreground">
                            These values form the foundation of our organization and guide every interaction we have with our patients, community, and each other.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all text-center group">
                            <div className="h-14 w-14 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Heart className="h-7 w-7 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Compassion</h3>
                            <p className="text-muted-foreground">
                                We serve with a caring heart, understanding the pain and needs of our patients.
                            </p>
                        </div>
                        <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all text-center group">
                            <div className="h-14 w-14 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Shield className="h-7 w-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Integrity</h3>
                            <p className="text-muted-foreground">
                                We adhere to the highest ethical standards, ensuring trust and transparency.
                            </p>
                        </div>
                        <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all text-center group">
                            <div className="h-14 w-14 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Award className="h-7 w-7 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3>
                            <p className="text-muted-foreground">
                                We strive for perfection in medical care, constantly improving our services.
                            </p>
                        </div>
                        <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all text-center group">
                            <div className="h-14 w-14 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Lightbulb className="h-7 w-7 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
                            <p className="text-muted-foreground">
                                We embrace new technologies and methods to provide better healthcare solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default MissionVision;
