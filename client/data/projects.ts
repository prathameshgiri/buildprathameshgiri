export interface Project {
  id: number;
  name: string;
  category: "Websites" | "Web Apps" | "Admin Panels" | "Premium";
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
    id: 7,
    name: "E-Commerce Admin Dashboard",
    category: "Premium",
    description:
      "Responsive e-commerce admin dashboard built using pure HTML, CSS, and JavaScript for business analytics.",
    fullDescription:
      "A modern and lightweight e-commerce admin dashboard developed using vanilla HTML, CSS, and JavaScript. The dashboard provides a clear overview of key business metrics such as new orders, daily income, total revenue, and user growth. Interactive charts, statistic cards, and a clean admin interface make monitoring performance efficient without relying on heavy frameworks.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript (Vanilla)",
      "Chart.js"
    ],
    image:
      "https://res.prathameshgiri.in/projects/dashboard.png",
    liveLink: "x.prathameshgiri.in/Dashboard/",
    githubLink: "",
    features: [
      "E-commerce performance overview",
      "New orders & user statistics",
      "Daily and total income tracking",
      "Yearly sales and revenue charts",
      "Interactive statistic cards",
      "Fully responsive admin layout",
      "Sidebar navigation menu",
      "Admin profile & notification UI"
    ],
    challenge:
      "Building a scalable and interactive dashboard using only vanilla technologies without frameworks.",
    solution:
      "Implemented modular JavaScript logic, optimized DOM updates, and used Chart.js for smooth and responsive data visualization.",
    results:
      "Delivered a fast-loading, responsive admin dashboard with clean UI and smooth analytics interactions."
  },



  
  {
    id: 8,
    name: "Feastly – Food Ordering Platform",
    category: "Premium",
    description:
      "Modern food ordering web application with a clean UI, fast navigation, and seamless ordering experience.",
    fullDescription:
      "Feastly is a modern, responsive food ordering web platform designed to deliver a smooth and delightful user experience. Built with a mobile-first approach, the application allows users to browse curated dishes, manage orders, view profiles, and access admin features. The interface focuses on speed, accessibility, and visual appeal, making food discovery and checkout effortless.",
    tech: [
      "React.js",
      "TypeScript",
      "CSS3",
      "Responsive Design"
    ],
    image:
      "https://res.prathameshgiri.in/projects/feastly.png",
    liveLink: "https://feastly-gps.netlify.app/",
    githubLink: "#",
    features: [
      "Attractive hero section with CTA",
      "Browse menu & featured dishes",
      "Category tags (Popular, Vegetarian)",
      "Real-time cart UI",
      "User profile & order management",
      "Admin panel navigation",
      "Responsive & mobile-first layout",
      "Clean and accessible UI design"
    ],
    challenge:
      "Designing a visually rich food ordering interface while maintaining performance and responsiveness across devices.",
    solution:
      "Used React with TypeScript for scalable UI components, optimized layouts, and reusable components to ensure consistency and speed.",
    results:
      "Delivered a premium food ordering UI with smooth navigation, improved user engagement, and fast load performance."
  },

  {
    id: 9,
    name: "Shiv Bakery – Real-Time Ordering & Admin Panel",
    category: "Premium",
    description:
      "A real-time bakery ordering system with an admin dashboard to manage orders, users, and messages efficiently.",
    fullDescription:
      "Shiv Bakery is a full-stack web application designed for managing bakery orders in real time. Built with a clean and responsive UI, the platform allows users to place orders online while the admin panel provides live updates of incoming orders, customer messages, and user activity. Using Socket.IO, the system ensures instant order notifications and seamless communication between users and the admin without page refreshes.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript (Vanilla)",
      "Node.js",
      "Express.js",
      "Socket.IO"
    ],
    image:
      "https://res.prathameshgiri.in/projects/sbakery.png",
    liveLink: "https://bakery-dm80.onrender.com/",
    githubLink: "",
    features: [
      "Real-time order placement and updates",
      "Live admin dashboard with Socket.IO",
      "User order history tracking",
      "Admin view for all orders and messages",
      "Instant order notifications",
      "Responsive UI for users and admin",
      "User-friendly bakery menu interface",
      "Secure admin panel layout"
    ],
    challenge:
      "Implementing real-time communication for orders and messages while maintaining performance and simplicity.",
    solution:
      "Integrated Socket.IO with Node.js and Express.js to handle real-time events, optimized backend routes, and ensured smooth frontend updates using vanilla JavaScript.",
    results:
      "Successfully delivered a fast, real-time bakery ordering system with a functional admin panel, improving order management efficiency and user experience."
  },

  {
    id: 10,
    name: "LUXE – Fashion E-Commerce Platform",
    category: "Premium",
    description:
      "A modern fashion e-commerce website for dresses, jewellery, bags, and shoes with a premium shopping experience.",
    fullDescription:
      "LUXE is a stylish and responsive fashion e-commerce web application designed to showcase and sell dresses, jewellery, bags, and shoes. The platform focuses on elegant UI/UX, smooth animations, and a clean product browsing experience. With well-structured product sections and responsive layouts, LUXE delivers a premium brand feel suitable for modern fashion businesses.",
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "HTML5",
      "CSS3"
    ],
    image:
      "https://res.prathameshgiri.in/projects/luxe.png",
    liveLink: "https://luxe-prathameshgiri.netlify.app/",
    githubLink: "",
    features: [
      "Multi-category fashion products (Dresses, Jewellery, Bags, Shoes)",
      "Modern and premium UI design",
      "Reusable React components",
      "Type-safe codebase with TypeScript",
      "Responsive layout for all devices",
      "Smooth animations and transitions",
      "Optimized image loading",
      "User-friendly navigation"
    ],
    challenge:
      "Building a scalable and premium fashion UI while maintaining type safety and performance.",
    solution:
      "Used React’s component-driven approach with TypeScript for better structure and reliability, combined with optimized styling and responsive design techniques.",
    results:
      "Delivered a scalable, maintainable, and visually premium fashion e-commerce platform with smooth performance and a strong brand presence."
  },










  {
    id: 1,
    name: "E-Commerce Dashboard",
    category: "Web Apps",
    description:
      "Modern e-commerce admin dashboard for business analytics and management",
    fullDescription:
      "A clean and responsive e-commerce admin dashboard designed to monitor and manage online store performance efficiently. The dashboard provides real-time insights into new orders, daily income, total revenue, and user growth. It features interactive charts for yearly statistics and sales revenue analysis, helping administrators track trends and make data-driven decisions. With an intuitive sidebar navigation, search functionality, notifications, and user profile management, the dashboard ensures smooth and organized store operations from a single control panel.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://pro.prathameshgiri.in/res/projects/dashboard.png",
    liveLink: "https://pro.prathameshgiri.in/Dashboard/",
    githubLink: "https://github.com/prathameshgiri/Dashboard",
    features: [
      "Real-time order tracking and management",
      "Daily, monthly, and yearly revenue insights",
      "User growth and customer analytics",
      "Interactive charts for sales and performance trends",
      "Product and inventory overview dashboard",
      "Admin notifications and activity alerts",
      "Responsive sidebar navigation with search",
      "Role-based admin profile management",
    ],

    challenge:
      "Designing a high-performance admin dashboard capable of handling large volumes of orders, users, and analytics data while maintaining a smooth and responsive user experience.",

    solution:
      "Built a modular and optimized dashboard using React for dynamic UI updates and MongoDB for scalable data handling. Implemented efficient API structures, optimized database queries, and chart-based visualizations to ensure fast data rendering and real-time insights.",

    results:
      "Improved operational efficiency by 40%, enabled faster decision-making through real-time analytics, and delivered a stable, user-friendly admin experience with consistent performance under heavy data load.",
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
    liveLink: "prathameshgiri.github.io/HealthMate/",
    githubLink: "https://github.com/prathameshgiri/HealthMate",
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
