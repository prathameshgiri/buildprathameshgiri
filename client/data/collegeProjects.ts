export interface CollegeProject {
  id: string;
  title: string;
  description: string;
  longScreenshot: string;
  technologies: string[];
  developerName: string;
  customerName: string;
  sourceCodeUrl: string;
  fullDescription?: string;
  features?: string[];
}

export const collegeProjects: CollegeProject[] = [
  {
  id: "1",
  title: "Good Cookie Chocolate Store – Full Stack eCommerce System",
  description: "A modern full-stack eCommerce web application for handcrafted chocolates and cookies with user dashboard, admin panel, and complete order management system.",
  longScreenshot: "https://res.prathameshgiri.in/build/collegeprojects/cookiesshop.png",
  technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js"],
  developerName: "Prathamesh Giri",
  customerName: "Arpita Survase",
  sourceCodeUrl: "https://github.com/prathameshgiri/cookiesshop",

  fullDescription: "Good Cookie Chocolate Store is a modern full-stack eCommerce platform developed as a college project. The system includes a premium UI design with a dark chocolate theme, a complete shopping cart system, role-based authentication for users and admins, and an advanced admin dashboard for managing products, orders, and customer messages. It provides a real-world online store experience with responsive design, smooth animations, and secure order handling.",

  features: [
    "Premium Glassmorphism UI Design",
    "Role-Based Authentication (User & Admin)",
    "Full Shopping Cart System",
    "Product Catalog with Categories",
    "User Dashboard with Order History",
    "Admin Panel with Analytics",
    "Order Management System",
    "Contact Message Management",
    "Responsive Mobile-First Design",
    "Toast Notifications & Scroll Animations"
  ],
},
  {
    id: "2",
    title: "Hospital Management System",
    description: "Digital solution for hospitals to manage patient records, appointments, and billing.",
    longScreenshot: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
    technologies: ["React", "Express", "MongoDB", "Redux"],
    developerName: "Prathamesh Giri",
    customerName: "Computer Engineering Student",
    sourceCodeUrl: "https://github.com/prathameshgiri",
    fullDescription: "A comprehensive hospital management solution designed to streamline healthcare operations. It manages patient registrations, doctor schedules, appointment bookings, and detailed billing systems efficiently.",
    features: ["Patient Management", "Doctor Scheduling", "Appointment Booking", "Billing System", "Medical Records", "User Role Permissions"],
  }
];
