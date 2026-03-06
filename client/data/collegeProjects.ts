export interface CollegeProject {
  id: string;
  title: string;
  description: string;
  longScreenshot: string;
  technologies: string[];
  developerName: string;
  customerName: string;
  sourceCodeUrl: string;
}

export const collegeProjects: CollegeProject[] = [
  {
    id: "1",
    title: "E-Commerce Management System",
    description: "A comprehensive e-commerce platform with admin dashboard, product management, and secure payment integration. This project features a responsive design and real-time inventory tracking.",
    longScreenshot: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000", // Placeholder for long screenshot
    technologies: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    developerName: "Prathamesh Giri",
    customerName: "Final Year Student",
    sourceCodeUrl: "https://github.com/prathameshgiri",
  },
  {
    id: "2",
    title: "Hospital Management System",
    description: "Digital solution for hospitals to manage patient records, appointments, and billing. Includes multi-user roles like Doctor, Patient, and Admin.",
    longScreenshot: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000", // Placeholder for long screenshot
    technologies: ["React", "Express", "MongoDB", "Redux"],
    developerName: "Prathamesh Giri",
    customerName: "Computer Engineering Student",
    sourceCodeUrl: "https://github.com/prathameshgiri",
  }
];
