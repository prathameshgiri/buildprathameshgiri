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
    title: "E-Commerce Management System",
    description: "A comprehensive e-commerce platform with admin dashboard, product management, and secure payment integration.",
    longScreenshot: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    technologies: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    developerName: "Prathamesh Giri",
    customerName: "Final Year Student",
    sourceCodeUrl: "https://github.com/prathameshgiri",
    fullDescription: "This e-commerce system provides a robust solution for online retail. It includes a user-friendly frontend for customers and a powerful admin dashboard for inventory and order management. Built with modern technologies, it ensures high performance and security.",
    features: ["User Authentication", "Product Catalog", "Shopping Cart", "Order Management", "Admin Dashboard", "Payment Integration"],
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
