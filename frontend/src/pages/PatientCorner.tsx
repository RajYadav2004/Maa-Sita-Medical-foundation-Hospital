import { useState } from "react";
import { Link } from "react-router-dom";
// import { Layout } from "@/components/layout/Layout";

import { patientStories, podcasts, patientInfo } from "@/data/patientStories";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Play, Headphones, Clock, Quote, CheckCircle2,
  FileText, Users, Heart, Shield
} from "lucide-react";

const PatientCorner = () => {
  return (
    <>

      {/* Hero */}
      <section className="gradient-primary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Patient Corner
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Resources, stories, and information to support you through your healthcare journey.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="stories" className="space-y-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 h-auto p-1">
              <TabsTrigger value="stories" className="py-3">
                <Heart className="h-4 w-4 mr-2" />
                Patient Stories
              </TabsTrigger>
              <TabsTrigger value="podcasts" className="py-3">
                <Headphones className="h-4 w-4 mr-2" />
                Health Podcasts
              </TabsTrigger>
              <TabsTrigger value="info" className="py-3">
                <FileText className="h-4 w-4 mr-2" />
                Patient Info
              </TabsTrigger>
            </TabsList>

            {/* Patient Stories */}
            <TabsContent value="stories" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Inspiring Recovery Stories</h2>
                <p className="text-muted-foreground">Real experiences from our patients who found hope and healing.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {patientStories.map((story) => (
                  <div
                    key={story.id}
                    className="bg-card rounded-2xl p-6 md:p-8 card-elevated border border-border"
                  >
                    <Quote className="h-10 w-10 text-primary/20 mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">{story.title}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-4">{story.story}</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-foreground">{story.name}</p>
                        <p className="text-sm text-primary">{story.treatment}</p>
                        <p className="text-xs text-muted-foreground">Treated by {story.doctor}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Podcasts */}
            <TabsContent value="podcasts" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Health Matters Podcast</h2>
                <p className="text-muted-foreground">Expert discussions on health topics that matter to you.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {podcasts.map((podcast) => (
                  <div
                    key={podcast.id}
                    className="bg-card rounded-2xl overflow-hidden card-elevated border border-border group"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={podcast.thumbnail}
                        alt={podcast.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                        <button className="h-16 w-16 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg">
                          <Play className="h-7 w-7 text-primary-foreground ml-1" fill="currentColor" />
                        </button>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-foreground/80 text-background text-xs font-medium px-2 py-1 rounded">
                        {podcast.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {podcast.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{podcast.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Headphones className="h-3.5 w-3.5" />
                          {podcast.guest}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {new Date(podcast.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Patient Information */}
            <TabsContent value="info" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Important Information</h2>
                <p className="text-muted-foreground">Everything you need to know for a smooth hospital experience.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Admission Process */}
                <div className="bg-card rounded-2xl p-6 md:p-8 card-elevated border border-border">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Admission Process</h3>
                  <ul className="space-y-3">
                    {patientInfo.admissionProcess.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Discharge Process */}
                <div className="bg-card rounded-2xl p-6 md:p-8 card-elevated border border-border">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Discharge Process</h3>
                  <ul className="space-y-3">
                    {patientInfo.dischargeProcess.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-accent/10 text-accent text-sm font-medium flex items-center justify-center flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visitor Guidelines */}
                <div className="bg-card rounded-2xl p-6 md:p-8 card-elevated border border-border">
                  <div className="h-12 w-12 rounded-xl bg-success/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Visitor Guidelines</h3>
                  <ul className="space-y-3">
                    {patientInfo.visitorGuidelines.map((guideline, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Patient Rights */}
                <div className="bg-card rounded-2xl p-6 md:p-8 card-elevated border border-border">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Your Rights</h3>
                  <ul className="space-y-3">
                    {patientInfo.patientRights.map((right, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{right}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Need More Help?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our patient care team is available to assist you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:+919082945603">Contact Patient Care</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/faq">View FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
    </>

  );
};

export default PatientCorner;
