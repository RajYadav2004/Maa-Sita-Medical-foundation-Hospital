export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  department: string;
  image: string;
  experience: string;
  qualification: string;
  languages: string[];
  about: string;
  expertise: string[];
  availability: string;
}

export const doctors: Doctor[] = [
  {
    id: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    department: "Cardiac Sciences",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    experience: "18+ Years",
    qualification: "MD, DM (Cardiology), FACC",
    languages: ["English", "Hindi", "Spanish"],
    about: "Dr. Sarah Johnson is a renowned cardiologist with extensive experience in interventional cardiology and heart failure management. She has performed over 5,000 cardiac procedures and is known for her patient-centric approach.",
    expertise: ["Coronary Angioplasty", "Heart Failure Management", "Preventive Cardiology", "Echocardiography"],
    availability: "Mon, Wed, Fri: 9AM - 5PM"
  },
  {
    id: "dr-michael-chen",
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    department: "Neurosciences",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    experience: "22+ Years",
    qualification: "MD, DM (Neurology), PhD",
    languages: ["English", "Mandarin", "Hindi"],
    about: "Dr. Michael Chen is a leading neurologist specializing in stroke management and neurodegenerative disorders. His research has been published in numerous international journals.",
    expertise: ["Stroke Management", "Epilepsy Treatment", "Parkinson's Disease", "Headache Disorders"],
    availability: "Tue, Thu, Sat: 10AM - 6PM"
  },
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    specialty: "Orthopedics",
    department: "Bone & Joint",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    experience: "15+ Years",
    qualification: "MS (Ortho), Fellowship in Joint Replacement",
    languages: ["English", "Hindi", "Punjabi"],
    about: "Dr. Priya Sharma is an expert orthopedic surgeon specializing in joint replacement and sports medicine. She has successfully performed over 3,000 joint replacement surgeries.",
    expertise: ["Hip Replacement", "Knee Replacement", "Sports Injuries", "Arthroscopy"],
    availability: "Mon - Fri: 11AM - 4PM"
  },
  {
    id: "dr-james-wilson",
    name: "Dr. James Wilson",
    specialty: "Oncology",
    department: "Cancer Care",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
    experience: "20+ Years",
    qualification: "MD, DM (Medical Oncology)",
    languages: ["English", "French"],
    about: "Dr. James Wilson is a compassionate oncologist dedicated to providing comprehensive cancer care. He specializes in targeted therapy and immunotherapy treatments.",
    expertise: ["Chemotherapy", "Immunotherapy", "Targeted Therapy", "Palliative Care"],
    availability: "Mon, Wed, Thu: 9AM - 3PM"
  },
  {
    id: "dr-aisha-patel",
    name: "Dr. Aisha Patel",
    specialty: "Pediatrics",
    department: "Child Health",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop",
    experience: "12+ Years",
    qualification: "MD (Pediatrics), Fellowship in Neonatology",
    languages: ["English", "Hindi", "Gujarati"],
    about: "Dr. Aisha Patel is a caring pediatrician with special expertise in neonatal care and childhood development disorders. She is beloved by her young patients and their families.",
    expertise: ["Neonatal Care", "Vaccination", "Growth Disorders", "Childhood Infections"],
    availability: "Mon - Sat: 10AM - 2PM"
  },
  {
    id: "dr-robert-anderson",
    name: "Dr. Robert Anderson",
    specialty: "Gastroenterology",
    department: "Digestive Health",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
    experience: "16+ Years",
    qualification: "MD, DM (Gastroenterology)",
    languages: ["English", "German"],
    about: "Dr. Robert Anderson is a skilled gastroenterologist specializing in advanced endoscopic procedures and liver diseases. He has pioneered several minimally invasive techniques.",
    expertise: ["Endoscopy", "Colonoscopy", "Liver Disease", "IBD Management"],
    availability: "Tue, Thu, Fri: 9AM - 5PM"
  }
];

export const departments = [
  "Cardiac Sciences",
  "Neurosciences",
  "Bone & Joint",
  "Cancer Care",
  "Child Health",
  "Digestive Health",
  "Women's Health",
  "Emergency Medicine"
];
