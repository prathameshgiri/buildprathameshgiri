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
  },

  {
  id: "4",
  title: "Shiv Bakery — Online Bakery Shop System",
  description: "A modern full-stack bakery eCommerce platform with customer storefront and real-time admin dashboard for managing orders, products, and users.",
  longScreenshot: "https://res.prathameshgiri.in/build/collegeprojects/bakery.png",
  technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js"],
  developerName: "Prathamesh Giri",
  customerName: "Bhumika Biradar",
  sourceCodeUrl: "https://github.com/prathameshgiri/bakery",

  fullDescription: "Shiv Bakery Management System is a premium full-stack bakery eCommerce platform developed as a college project. The system provides a complete online bakery storefront where customers can browse products, create accounts, and place orders. It also includes a powerful admin dashboard that allows administrators to manage bakery products, monitor orders, and control customer accounts. The project is built using Node.js and Express with a responsive modern interface.",

  features: [
    "Customer Bakery Storefront",
    "Admin Dashboard for Product Management",
    "User Login & Registration System",
    "Order Placement and Tracking",
    "Real-Time Order Management",
    "Responsive UI Design",
    "Product Catalog with Images",
    "Customer Account Management",
    "Secure Authentication System",
    "Mobile Friendly Layout"
  ],
  },

{
  id: "5",
  title: "MedCare HMS — Hospital Management System",
  description: "A complete hospital management platform with patient portal, doctor management, appointment booking, and real-time admin dashboard.",
  longScreenshot: "https://res.prathameshgiri.in/build/collegeprojects/hospitalMS.png",
  technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js"],
  developerName: "Prathamesh Giri",
  customerName: "Heena Bagwan",
  sourceCodeUrl: "https://github.com/prathameshgiri/medcare-hms",

  fullDescription: "MedCare HMS is a full-featured hospital management system designed to simplify healthcare operations. The platform includes a patient portal for booking appointments, managing profiles, and viewing prescriptions. It also features a professional admin dashboard where hospital administrators can manage doctors, approve appointments, monitor patient records, and respond to patient messages. The system uses a shared JSON database for real-time synchronization between patient and admin portals.",

  features: [
    "Patient Portal with Appointment Booking",
    "Doctor Search by Specialization",
    "Prescription Management System",
    "Real-Time Appointment Approval",
    "Admin Dashboard with Analytics",
    "Doctor Management System",
    "Patient Records Management",
    "Hospital Messaging System",
    "Live Data Synchronization",
    "Responsive Medical Interface"
  ],
  },

{
  id: "6",
  title: "LuxeStay — Hotel Management System",
  description: "An enterprise-level hotel management system with guest booking portal, room inventory management, and advanced admin dashboard.",
  longScreenshot: "https://res.prathameshgiri.in/build/collegeprojects/hotelMS.png",
  technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "JWT"],
  developerName: "Prathamesh Giri",
  customerName: "Poonam Ganachari",
  sourceCodeUrl: "https://github.com/prathameshgiri/Luxestay-hms",

  fullDescription: "LuxeStay is a production-ready hotel management platform designed to handle hotel operations efficiently. The system provides a modern guest portal where users can browse rooms, make bookings, manage reservations, and contact the hotel. It also includes a centralized admin dashboard that allows hotel administrators to manage room inventory, approve bookings, monitor guest statistics, and respond to customer messages in real-time.",

  features: [
    "Hotel Room Booking System",
    "Guest Dashboard with Booking Tracking",
    "Admin Panel for Booking Management",
    "Room Inventory Management",
    "JWT-Based Authentication",
    "Real-Time Booking Updates",
    "Guest Database Management",
    "Contact Messaging System",
    "Luxury UI with Animations",
    "Mobile Responsive Design"
  ],
  },

{
  id: "7",
  title: "School Management System",
  description: "A modern full-stack school management platform for students, parents, and administrators with dashboards, attendance tracking, and academic management.",
  longScreenshot: "https://res.prathameshgiri.in/build/collegeprojects/schoolMS.png",
  technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js"],
  developerName: "Prathamesh Giri",
  customerName: "Sandhya Kamble",
  sourceCodeUrl: "https://github.com/prathameshgiri/schoolmanagementsystem",

  fullDescription: "The School Management System is a complete academic management platform developed as a college project. The application includes a dedicated student and parent portal where users can check attendance, results, fee records, and school announcements. It also provides a powerful admin panel where administrators can manage students, attendance, fees, academic results, events, and school news. The system supports real-time updates and responsive design for seamless access across devices.",

  features: [
    "Student & Parent Dashboard",
    "Admin Panel with School Analytics",
    "Attendance Management System",
    "Fee Tracking and Payment Records",
    "Student Result Management",
    "School Events & News Updates",
    "Messaging and Notification System",
    "Role-Based Authentication (Admin / Student / Parent)",
    "Real-Time Updates with SSE",
    "Responsive Modern UI"
  ],
  },

{
  id: "8",
  title: "Job Portal Website",
  description: "A modern full-stack job portal platform where companies can post jobs and users can search, apply, and manage job applications.",
  longScreenshot: "https://res.prathameshgiri.in/build/collegeprojects/jobportal.png",
  technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js"],
  developerName: "Prathamesh Giri",
  customerName: "Ankita Biradar",
  sourceCodeUrl: "https://github.com/prathameshgiri/jobportal",

  fullDescription: "The Job Portal Website is a full-stack web application developed as a college project that connects job seekers with employers. The platform allows users to browse job listings, apply for jobs, and manage their applications through a user dashboard. Administrators have access to a dedicated admin panel where they can add new job listings, remove outdated jobs, manage user accounts, and monitor applications.",

  features: [
    "Job Listing and Search System",
    "User Registration and Login",
    "Apply for Jobs Online",
    "User Dashboard for Applications",
    "Admin Panel for Job Management",
    "Add and Remove Job Listings",
    "Manage Users and Applications",
    "Responsive Job Portal Interface",
    "Secure Authentication System",
    "Full Stack Web Architecture"
  ],
}

  



];
