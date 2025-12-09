export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "heart-health-tips",
    title: "10 Essential Tips for Maintaining Heart Health",
    excerpt: "Discover proven strategies to keep your heart healthy and reduce the risk of cardiovascular diseases.",
    content: "Heart disease remains one of the leading causes of death worldwide. However, many risk factors are within our control. Regular exercise, a balanced diet rich in fruits and vegetables, maintaining a healthy weight, and avoiding smoking are fundamental steps. Additionally, managing stress and getting adequate sleep play crucial roles in cardiovascular health.",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    category: "Cardiology",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=500&fit=crop",
    readTime: "5 min read"
  },
  {
    id: "childhood-vaccination",
    title: "The Importance of Childhood Vaccination",
    excerpt: "Learn why timely vaccination is crucial for protecting your child's health and preventing serious diseases.",
    content: "Vaccines are one of the most effective ways to protect children from serious and potentially life-threatening diseases. Following the recommended vaccination schedule ensures optimal protection. Modern vaccines are extensively tested for safety and efficacy, and the benefits far outweigh the minimal risks.",
    author: "Dr. Aisha Patel",
    date: "2024-01-10",
    category: "Pediatrics",
    image: "https://images.unsplash.com/photo-1632053002928-1919605ee6e8?w=800&h=500&fit=crop",
    readTime: "4 min read"
  },
  {
    id: "managing-diabetes",
    title: "Living Well with Diabetes: A Comprehensive Guide",
    excerpt: "Practical advice for managing diabetes effectively and maintaining a high quality of life.",
    content: "Diabetes management involves a combination of medication, diet, exercise, and regular monitoring. Understanding your condition and working closely with your healthcare team can help you live a full, active life. Regular blood sugar monitoring, foot care, and eye examinations are essential components of diabetes care.",
    author: "Dr. Robert Anderson",
    date: "2024-01-05",
    category: "General Medicine",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop",
    readTime: "6 min read"
  },
  {
    id: "stroke-awareness",
    title: "Recognizing Stroke Signs: Every Second Counts",
    excerpt: "Learn the FAST method to identify stroke symptoms and take immediate action.",
    content: "Stroke is a medical emergency where every second counts. Remember FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency. Quick recognition and treatment can significantly reduce brain damage and improve outcomes. Know the signs and act immediately.",
    author: "Dr. Michael Chen",
    date: "2023-12-28",
    category: "Neurology",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop",
    readTime: "4 min read"
  },
  {
    id: "joint-pain-relief",
    title: "Natural Ways to Manage Joint Pain",
    excerpt: "Explore non-surgical approaches to relieve joint pain and improve mobility.",
    content: "Joint pain can significantly impact quality of life, but many non-surgical options exist. Physical therapy, weight management, anti-inflammatory foods, and low-impact exercises like swimming can provide relief. Hot and cold therapy, along with proper rest, also play important roles in managing joint discomfort.",
    author: "Dr. Priya Sharma",
    date: "2023-12-20",
    category: "Orthopedics",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
    readTime: "5 min read"
  },
  {
    id: "cancer-prevention",
    title: "Cancer Prevention: Steps You Can Take Today",
    excerpt: "Evidence-based strategies to reduce your cancer risk through lifestyle modifications.",
    content: "While not all cancers are preventable, research shows that lifestyle factors play a significant role. Avoiding tobacco, maintaining a healthy weight, protecting yourself from the sun, eating a nutritious diet, and getting regular screenings are powerful prevention tools. Early detection through regular check-ups can save lives.",
    author: "Dr. James Wilson",
    date: "2023-12-15",
    category: "Oncology",
    image: "https://images.unsplash.com/photo-1631815589654-fda8c5a86ad6?w=800&h=500&fit=crop",
    readTime: "7 min read"
  }
];
