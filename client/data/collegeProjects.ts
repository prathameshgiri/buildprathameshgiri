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
  title: "Cookie Chocolate Store – Full Stack eCommerce System",
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
  title: "LuxeWood – Premium Online Furniture Shop",
  description: "A modern full-stack eCommerce platform for premium handcrafted furniture with advanced product catalog, shopping cart, and admin management system.",
  longScreenshot: "https://res.prathameshgiri.in/build/collegeprojects/furnitoreshop.png",
  technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "JWT"],
  developerName: "Prathamesh Giri",
  customerName: "Alfiya Ekambe",
  sourceCodeUrl: "https://github.com/prathameshgiri/Furnitureshop",

  fullDescription: "LuxeWood is a modern full-stack furniture eCommerce platform developed for showcasing premium handcrafted furniture products. The system includes a beautiful storefront for browsing and purchasing furniture along with a powerful admin panel for managing products, orders, users, and customer messages. It features role-based authentication, product reviews, order tracking, and a responsive luxury UI with smooth animations and glassmorphism design.",

  features: [
    "Advanced Product Catalog with Filters",
    "Shopping Cart with Quantity Controls",
    "User Authentication with JWT",
    "Order Placement and Tracking",
    "User Dashboard with Order History",
    "Admin Panel with Analytics",
    "Orders, Users & Messages Management",
    "Product Reviews with Ratings",
    "Luxury Glassmorphism UI Design",
    "Fully Responsive Mobile-First Layout"
  ],
  },

  {
  id: "3",
  title: "Spice Garden — Restaurant Booking & Ordering System",
  description: "A full-stack restaurant website with menu browsing, table reservations, online ordering, and a powerful admin management dashboard.",
  longScreenshot: "https://res.prathameshgiri.in/build/collegeprojects/resturantbooking.png",
  technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js"],
  developerName: "Prathamesh Giri",
  customerName: "Aditi Suryawanshi",
  sourceCodeUrl: "https://github.com/prathameshgiri/restaurant",

  fullDescription: "Spice Garden is a modern full-stack restaurant management and ordering platform developed as a college project. The system provides a beautiful and responsive customer interface for browsing menus, placing orders, submitting reviews, and making table reservations. It also includes a powerful admin dashboard where administrators can manage menu items, reservations, orders, and customer messages. Built using Node.js and Express with a lightweight JSON-based data structure, the application delivers a fast and seamless restaurant management experience.",

  features: [
    "Beautiful Responsive Restaurant UI",
    "User & Admin Role-Based Authentication",
    "Online Food Ordering System",
    "Table Reservation & Booking System",
    "Shopping Cart & Checkout Flow",
    "User Order Tracking Dashboard",
    "Admin Panel for Menu & Order Management",
    "Customer Reviews & Contact Messages",
    "Dynamic Data Storage with JSON Database",
    "Mobile-First Responsive Design"
  ],
  }

  



];
