import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { patientStories } from "@/data/patientStories";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % patientStories.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + patientStories.length) % patientStories.length);
  };

  const story = patientStories[currentIndex];

  return (
    <section className="py-20 gradient-primary">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary-foreground/80 font-medium mb-2 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            Stories of Hope & Healing
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl relative">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/10" />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-primary/20">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
                  "{story.story.slice(0, 250)}..."
                </p>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">{story.name}</h4>
                  <p className="text-primary text-sm">{story.treatment}</p>
                  <p className="text-muted-foreground text-sm">Treated by {story.doctor}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-2">
                {patientStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
