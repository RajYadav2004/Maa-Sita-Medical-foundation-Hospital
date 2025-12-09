import { Heart, Brain, Bone, Activity, Baby, Stethoscope, Eye, Pill } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: "cardiology",
    title: "Cardiology",
    description: "Comprehensive heart care including diagnosis, treatment, and prevention of cardiovascular diseases with state-of-the-art facilities.",
    icon: "Heart",
    features: ["24/7 Cardiac Emergency", "Angioplasty & Bypass Surgery", "Heart Failure Clinic", "Cardiac Rehabilitation"],
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=400&fit=crop"
  },
  {
    id: "neurology",
    title: "Neurology",
    description: "Expert care for brain, spine, and nervous system conditions with advanced diagnostic and treatment options.",
    icon: "Brain",
    features: ["Stroke Unit", "Epilepsy Management", "Movement Disorders", "Neurophysiology Lab"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop"
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    description: "Complete bone, joint, and muscle care from sports injuries to complex joint replacements.",
    icon: "Bone",
    features: ["Joint Replacement", "Sports Medicine", "Spine Surgery", "Trauma Care"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop"
  },
  {
    id: "oncology",
    title: "Oncology",
    description: "Compassionate cancer care with personalized treatment plans and cutting-edge therapies.",
    icon: "Activity",
    features: ["Chemotherapy", "Radiation Therapy", "Surgical Oncology", "Cancer Screening"],
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop"
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    description: "Specialized healthcare for children from newborns to adolescents in a child-friendly environment.",
    icon: "Baby",
    features: ["Neonatal ICU", "Vaccination Programs", "Growth Monitoring", "Pediatric Surgery"],
    image: "https://images.unsplash.com/photo-1631815589654-fda8c5a86ad6?w=600&h=400&fit=crop"
  },
  {
    id: "general-medicine",
    title: "General Medicine",
    description: "Primary healthcare services for overall wellness and management of common medical conditions.",
    icon: "Stethoscope",
    features: ["Health Checkups", "Diabetes Management", "Hypertension Care", "Infectious Diseases"],
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=400&fit=crop"
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology",
    description: "Advanced eye care services including laser treatments and cataract surgeries.",
    icon: "Eye",
    features: ["Cataract Surgery", "LASIK", "Glaucoma Treatment", "Retina Services"],
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop"
  },
  {
    id: "pharmacy",
    title: "24/7 Pharmacy",
    description: "Round-the-clock pharmacy services with genuine medicines and expert pharmaceutical guidance.",
    icon: "Pill",
    features: ["24/7 Availability", "Home Delivery", "Generic Medicines", "Insurance Support"],
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop"
  }
];

export const serviceIcons = {
  Heart,
  Brain,
  Bone,
  Activity,
  Baby,
  Stethoscope,
  Eye,
  Pill
};
