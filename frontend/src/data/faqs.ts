export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What are the hospital visiting hours?",
    answer: "General visiting hours are from 10:00 AM to 12:00 PM and 5:00 PM to 7:00 PM daily. ICU visiting hours are limited to 11:00 AM - 12:00 PM and 6:00 PM - 7:00 PM. Special arrangements can be made for critical cases.",
    category: "General"
  },
  {
    id: "2",
    question: "How do I book an appointment with a specialist?",
    answer: "You can book an appointment through our website, by calling our helpline at +91 90829 45603, or by visiting our reception desk. Online booking is available 24/7, and our staff will confirm your appointment within 24 hours.",
    category: "Appointments"
  },
  {
    id: "3",
    question: "What insurance plans do you accept?",
    answer: "We accept most major insurance providers including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, United Healthcare, and many others. Please contact our billing department for specific coverage details.",
    category: "Billing"
  },
  {
    id: "4",
    question: "Is there parking available at the hospital?",
    answer: "Yes, we have a multi-level parking facility with over 500 spaces. Parking is free for the first 2 hours, and discounted rates are available for patients and visitors. Valet parking is also available at the main entrance.",
    category: "Facilities"
  },
  {
    id: "5",
    question: "Do you have emergency services available 24/7?",
    answer: "Yes, our Emergency Department operates 24 hours a day, 7 days a week, 365 days a year. We have a dedicated trauma team and are equipped to handle all medical emergencies.",
    category: "Emergency"
  },
  {
    id: "6",
    question: "How can I access my medical records?",
    answer: "Medical records can be accessed through our patient portal online. You can also request physical copies by visiting our Medical Records department or by submitting a written request. Processing typically takes 3-5 business days.",
    category: "General"
  },
  {
    id: "7",
    question: "What should I bring for a hospital admission?",
    answer: "Please bring a valid ID, insurance card, list of current medications, any relevant medical reports, comfortable clothing, and personal toiletries. Leave valuables at home. We provide meals, linens, and basic amenities.",
    category: "Admissions"
  },
  {
    id: "8",
    question: "Do you offer payment plans for medical bills?",
    answer: "Yes, we understand that healthcare costs can be challenging. Our financial counselors can help set up interest-free payment plans. We also have a charity care program for eligible patients who need financial assistance.",
    category: "Billing"
  },
  {
    id: "9",
    question: "Can I get a second opinion on my diagnosis?",
    answer: "Absolutely. We encourage patients to seek second opinions for peace of mind. Our specialists are happy to provide consultations, and we can also help facilitate reviews of your case by other experts if requested.",
    category: "Medical"
  },
  {
    id: "10",
    question: "What COVID-19 safety measures are in place?",
    answer: "We maintain strict safety protocols including mandatory masking in clinical areas, regular sanitization, screening at entry points, and isolation facilities for suspected cases. Vaccination is available at our wellness center.",
    category: "Safety"
  }
];

export const faqCategories = ["All", "General", "Appointments", "Billing", "Facilities", "Emergency", "Admissions", "Medical", "Safety"];
