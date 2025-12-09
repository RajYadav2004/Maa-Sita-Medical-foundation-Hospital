import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast({
            title: "Message Sent",
            description: "Thank you for contacting us. We will get back to you soon.",
        });

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-primary/5 py-16 md:py-24">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We are here to help. Reach out to us for appointments, inquiries, or emergency services.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                                <p className="text-muted-foreground mb-8">
                                    Have questions about our services or need to schedule an appointment?
                                    Our team is ready to assist you.
                                </p>
                            </div>

                            <div className="grid gap-6">
                                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border shadow-sm">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Phone</h3>
                                        <p className="text-sm text-muted-foreground mb-2">24/7 Emergency & Appointments</p>
                                        <a href="tel:+919082945603" className="text-lg font-medium hover:text-primary transition-colors">
                                            +91 90829 45603
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border shadow-sm">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Email</h3>
                                        <p className="text-sm text-muted-foreground mb-2">For general inquiries</p>
                                        <a href="mailto:Maasitamedicalfoundation@msmfh.org" className="text-lg font-medium hover:text-primary transition-colors break-all">
                                            Maasitamedicalfoundation@msmfh.org
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border shadow-sm">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Location</h3>
                                        <p className="text-sm text-muted-foreground mb-2">Visit our hospital</p>
                                        <p className="text-lg font-medium">Madhubani, Bihar</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border shadow-sm">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Hours</h3>
                                        <p className="text-sm text-muted-foreground mb-2">Always open for you</p>
                                        <p className="font-medium">Emergency: 24/7</p>
                                        <p className="font-medium">OPD: 8:00 AM - 8:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-card border rounded-xl shadow-sm p-6 md:p-8">
                            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="Your phone number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Your email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        placeholder="How can we help?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us more about your inquiry..."
                                        className="min-h-[150px]"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-muted/30">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4">Find Us on Map</h2>
                        <p className="text-muted-foreground">Easily locate our hospital in Madhubani</p>
                    </div>
                    <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border bg-card">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925916665!2d86.0443419!3d26.3507229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee4e6c7030588d%3A0x6641885656512140!2sMadhubani%2C%20Bihar!5e0!3m2!1sen!2sin!4v1717654321098!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
