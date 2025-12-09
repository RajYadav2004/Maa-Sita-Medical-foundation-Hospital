export interface PatientStory {
  id: string;
  name: string;
  title: string;
  story: string;
  treatment: string;
  doctor: string;
  image: string;
  videoUrl?: string;
}

export interface Podcast {
  id: string;
  title: string;
  description: string;
  duration: string;
  date: string;
  host: string;
  guest: string;
  thumbnail: string;
  audioUrl: string;
}

export const patientStories: PatientStory[] = [
  {
    id: "story-1",
    name: "Maria Rodriguez",
    title: "A Second Chance at Life",
    story: "After being diagnosed with a complex heart condition, I was scared and uncertain about my future. The cardiology team at Charity Hospital not only saved my life but gave me hope. Dr. Sarah Johnson and her team performed a successful bypass surgery, and today I'm back to hiking and spending time with my grandchildren. The compassionate care I received here was extraordinary.",
    treatment: "Coronary Bypass Surgery",
    doctor: "Dr. Sarah Johnson",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    id: "story-2",
    name: "David Thompson",
    title: "Walking Again After Accident",
    story: "A motorcycle accident left me with multiple fractures and doctors said I might never walk properly again. Dr. Priya Sharma and the orthopedics team refused to give up on me. After two surgeries and months of rehabilitation, I'm not just walking – I'm running! The dedication and expertise at this hospital are truly remarkable.",
    treatment: "Joint Reconstruction Surgery",
    doctor: "Dr. Priya Sharma",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    id: "story-3",
    name: "Emma Williams",
    title: "My Cancer Journey",
    story: "Being diagnosed with breast cancer at 35 was devastating. But the oncology team wrapped me in care and support from day one. Dr. James Wilson explained every step of my treatment, and the nursing staff became like family. Two years later, I'm cancer-free and helping other women through their journeys.",
    treatment: "Chemotherapy & Surgery",
    doctor: "Dr. James Wilson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    id: "story-4",
    name: "Raj Patel",
    title: "Stroke Recovery Success",
    story: "When I had a stroke, my family thought they'd lost me. Thanks to the quick response of the neurology team and Dr. Michael Chen's expertise, I made a remarkable recovery. The stroke unit's 24/7 monitoring and the rehabilitation program helped me regain my speech and mobility. I'm eternally grateful.",
    treatment: "Stroke Management & Rehabilitation",
    doctor: "Dr. Michael Chen",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
  }
];

export const podcasts: Podcast[] = [
  {
    id: "podcast-1",
    title: "Understanding Heart Health",
    description: "Dr. Sarah Johnson discusses the latest advances in cardiology and simple steps everyone can take to protect their heart.",
    duration: "32:15",
    date: "2024-01-10",
    host: "Health Matters",
    guest: "Dr. Sarah Johnson",
    thumbnail: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop",
    audioUrl: "#"
  },
  {
    id: "podcast-2",
    title: "Childhood Nutrition & Development",
    description: "A comprehensive guide to ensuring your child gets the nutrition they need for healthy growth and development.",
    duration: "28:45",
    date: "2024-01-05",
    host: "Health Matters",
    guest: "Dr. Aisha Patel",
    thumbnail: "https://images.unsplash.com/photo-1631815589654-fda8c5a86ad6?w=400&h=300&fit=crop",
    audioUrl: "#"
  },
  {
    id: "podcast-3",
    title: "Managing Chronic Pain",
    description: "Expert advice on dealing with chronic pain conditions and improving quality of life through various treatment approaches.",
    duration: "35:20",
    date: "2023-12-28",
    host: "Health Matters",
    guest: "Dr. Priya Sharma",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    audioUrl: "#"
  },
  {
    id: "podcast-4",
    title: "Mental Health Awareness",
    description: "Breaking the stigma around mental health and discussing available resources and treatments for common conditions.",
    duration: "40:00",
    date: "2023-12-20",
    host: "Health Matters",
    guest: "Dr. Michael Chen",
    thumbnail: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop",
    audioUrl: "#"
  }
];

export const patientInfo = {
  admissionProcess: [
    "Visit the Admissions counter with your doctor's referral",
    "Complete registration and consent forms",
    "Provide insurance information and ID proof",
    "Pre-admission assessment by nursing staff",
    "Room allocation and orientation"
  ],
  dischargeProcess: [
    "Consultant approves discharge",
    "Final medical assessment",
    "Discharge summary preparation",
    "Bill settlement at accounts",
    "Collect medications and follow-up instructions"
  ],
  visitorGuidelines: [
    "Maximum 2 visitors per patient at a time",
    "Children under 12 not allowed in ICU/critical areas",
    "Maintain silence in patient areas",
    "Sanitize hands before entering rooms",
    "Follow visiting hours strictly"
  ],
  patientRights: [
    "Right to quality care without discrimination",
    "Right to privacy and confidentiality",
    "Right to informed consent before procedures",
    "Right to access medical records",
    "Right to voice complaints and concerns"
  ]
};
