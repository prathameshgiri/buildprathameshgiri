export interface Project {
  id: number;
  name: string;
  category: "Websites" | "Web Apps" | "Admin Panels";
  description: string;
  fullDescription: string;
  tech: string[];
  image: string;
  liveLink: string;
  githubLink: string;
  features: string[];
  challenge: string;
  solution: string;
  results: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "E-Commerce Dashboard",
    category: "Web Apps",
    description: "Modern e-commerce admin dashboard for business analytics and management",
    fullDescription:
      "A clean and responsive e-commerce admin dashboard designed to monitor and manage online store performance efficiently. The dashboard provides real-time insights into new orders, daily income, total revenue, and user growth. It features interactive charts for yearly statistics and sales revenue analysis, helping administrators track trends and make data-driven decisions. With an intuitive sidebar navigation, search functionality, notifications, and user profile management, the dashboard ensures smooth and organized store operations from a single control panel.",
    tech: ["React", "Node.js", "MongoDB"],    
    image:
      "https://pro.prathameshgiri.in/res/projects/dashboard.png",
    liveLink: "https://pro.prathameshgiri.in/Dashboard/",
    githubLink: "https://github.com/example",
    features: [
      "Real-time order tracking and management",
      "Daily, monthly, and yearly revenue insights",
      "User growth and customer analytics",
      "Interactive charts for sales and performance trends",
      "Product and inventory overview dashboard",
      "Admin notifications and activity alerts",
      "Responsive sidebar navigation with search",
      "Role-based admin profile management"
    ],

    challenge:
      "Designing a high-performance admin dashboard capable of handling large volumes of orders, users, and analytics data while maintaining a smooth and responsive user experience.",

    solution:
      "Built a modular and optimized dashboard using React for dynamic UI updates and MongoDB for scalable data handling. Implemented efficient API structures, optimized database queries, and chart-based visualizations to ensure fast data rendering and real-time insights.",

    results:
      "Improved operational efficiency by 40%, enabled faster decision-making through real-time analytics, and delivered a stable, user-friendly admin experience with consistent performance under heavy data load."
  },
  {
    id: 2,
    name: "Corporate Website",
    category: "Websites",
    description: "Modern, responsive corporate website with CMS",
    fullDescription:
      "A sleek and professional corporate website built with modern technologies, featuring a headless CMS for easy content management and SEO optimization.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    image:
      "https://images.unsplash.com/photo-1507238691619-20f6629c3368?w=500&h=300&fit=crop",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
    features: [
      "Headless CMS integration",
      "SEO-optimized pages",
      "Mobile-first responsive design",
      "Fast loading performance",
      "Contact form with email notifications",
      "Blog management system",
    ],
    challenge:
      "Creating a website that maintains brand consistency while allowing content editors to manage pages without technical knowledge.",
    solution:
      "Integrated Sanity CMS with Next.js for dynamic content rendering and built a reusable component library.",
    results:
      "Improved page load speed by 60% and reduced content management overhead by 80%.",
  },
  {
    id: 3,
    name: "Admin Dashboard",
    category: "Admin Panels",
    description: "Real-time analytics and user management dashboard",
    fullDescription:
      "A comprehensive admin dashboard providing real-time analytics, user management, and detailed reporting capabilities for enterprise applications.",
    tech: ["React", "Firebase", "Chart.js", "Redux"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
    features: [
      "Real-time analytics with charts and graphs",
      "User role management",
      "Data export functionality",
      "Custom report generation",
      "Activity logging and audit trails",
      "User behavior analytics",
    ],
    challenge:
      "Displaying large amounts of data in real-time while maintaining smooth performance and providing intuitive navigation.",
    solution:
      "Implemented data virtualization, optimized Redux selectors, and used Chart.js for efficient rendering.",
    results:
      "Reduced data loading time by 70% and improved user productivity by 50%.",
  },
  {
    id: 4,
    name: "SaaS Platform",
    category: "Web Apps",
    description: "Subscription-based SaaS application with user management",
    fullDescription:
      "A full-featured SaaS platform with subscription management, team collaboration features, and comprehensive API documentation.",
    tech: ["Next.js", "Supabase", "Stripe", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
    features: [
      "Stripe subscription management",
      "Team collaboration workspace",
      "API access for integrations",
      "Usage analytics dashboard",
      "Invoice and billing history",
      "SSO authentication",
    ],
    challenge:
      "Building a secure multi-tenant platform that scales automatically and handles complex billing scenarios.",
    solution:
      "Used Supabase for secure data isolation, implemented row-level security, and automated billing workflows.",
    results:
      "Onboarded 500+ customers in the first year with 95% customer retention rate.",
  },
  {
    id: 5,
    name: "Portfolio Website",
    category: "Websites",
    description: "Creative portfolio with smooth animations and interactions",
    fullDescription:
      "An interactive portfolio website showcasing creative work with smooth animations, engaging interactions, and optimal performance.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1563062407-98eeb66db05f?w=500&h=300&fit=crop",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
    features: [
      "Smooth page transitions",
      "Interactive animations",
      "Project showcase gallery",
      "Contact form",
      "Dark mode support",
      "Case study pages",
    ],
    challenge:
      "Creating impressive animations without sacrificing performance or accessibility.",
    solution:
      "Used Framer Motion for GPU-accelerated animations and optimized components with React.memo.",
    results:
      "Increased portfolio inquiries by 200% and improved average session duration to 5+ minutes.",
  },
  {
    id: 6,
    name: "Mobile App Interface",
    category: "Admin Panels",
    description: "Mobile-first responsive application interface",
    fullDescription:
      "A mobile-first admin interface optimized for on-the-go management with touch-friendly controls and intuitive navigation.",
    tech: ["React Native", "Firebase", "Redux"],
    image:
      "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=500&h=300&fit=crop",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
    features: [
      "Touch-optimized interface",
      "Offline-first functionality",
      "Real-time notifications",
      "Biometric authentication",
      "Cross-platform compatibility",
      "Background sync",
    ],
    challenge:
      "Providing a desktop-quality experience on mobile devices with limited screen space and connectivity.",
    solution:
      "Designed with mobile-first approach, implemented offline capabilities, and optimized for low bandwidth.",
    results:
      "Reduced time-to-action by 60% and achieved 4.8-star rating on app stores.",
  },
];
