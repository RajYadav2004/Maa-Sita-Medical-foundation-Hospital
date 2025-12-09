import { useState } from "react";
// import { Layout } from "@/components/layout/Layout";

import { faqs, faqCategories } from "@/data/faqs";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Search, Phone, Mail, MessageCircle } from "lucide-react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>

      {/* Hero */}
      <section className="gradient-primary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Find answers to common questions about our services, facilities, and policies.
            </p>

            {/* Search */}
            <div className="bg-card/95 backdrop-blur-sm rounded-xl p-2 shadow-xl max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for answers..."
                  className="w-full h-12 pl-12 pr-4 rounded-lg bg-muted/50 border-0 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {faqCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="bg-card rounded-xl border border-border px-6 card-elevated"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <div className="flex items-start gap-3">
                        <span className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium mt-0.5">
                          {faq.category}
                        </span>
                        <span className="font-semibold text-foreground">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-muted-foreground pl-[72px]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No FAQs found matching your search.</p>
                <Button className="mt-4" onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our team is here to help. Reach out to us through any of these channels.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="tel:+919082945603"
                className="bg-card rounded-xl p-6 card-elevated border border-border hover:border-primary/30 transition-all text-center"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                <p className="text-sm text-muted-foreground">+91 90829 45603</p>
              </a>
              <a
                href="mailto:Maasitamedicalfoundation@msmfh.org"
                className="bg-card rounded-xl p-6 card-elevated border border-border hover:border-primary/30 transition-all text-center"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                <p className="text-sm text-muted-foreground">Maasitamedicalfoundation@msmfh.org</p>
              </a>
              <button
                onClick={() => window.open("https://wa.me/919082945603", "_blank")}
                className="bg-card rounded-xl p-6 card-elevated border border-border hover:border-primary/30 transition-all text-center"
              >
                <div className="h-12 w-12 rounded-xl bg-whatsapp/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-whatsapp" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Chat with us</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default FAQ;
