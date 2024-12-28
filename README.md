# Garage-Management-System

Garage-Management-System is a comprehensive solution for managing the operations of Garage-Management-System It simplifies customer interactions, appointment scheduling, and task management to enhance efficiency and customer satisfaction.

## Table of Contents
- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Installation](#installation)


## Project Overview
Garage-Management-System is designed to streamline the day-to-day operations of  Garage, providing tools to manage customer interactions, appointments, and task tracking. The application aims to improve operational efficiency and enhance customer service.

## Technology Stack
The project is built using the following technologies:

### Node.js
- **Why Use:** Provides a scalable, event-driven architecture suitable for handling high loads and numerous concurrent connections.
- **Benefits:** Offers non-blocking I/O, supports JavaScript on both frontend and backend, and has a rich ecosystem of libraries and tools.

### NestJS
- **Why Use:** A progressive Node.js framework that supports modular architecture and integrates seamlessly with TypeScript.
- **Benefits:** Promotes a modular structure, enhances development with TypeScript, and provides features like dependency injection and validation.

### MySQL
- **Why Use:** A reliable relational database management system ideal for handling structured data and complex queries.
- **Benefits:** Ensures data integrity with ACID compliance, provides efficient performance with indexing, and has extensive community support.

### Prisma
- **Why Use:** An ORM tool that simplifies database interactions with a type-safe API and integrates well with Node.js and TypeScript.
- **Benefits:** Offers type safety, simplifies database operations, and includes tools for managing schema migrations.

### Next.js
- **Why Use:** A React framework that enables server-side rendering (SSR) and static site generation (SSG) for improved performance and SEO.
- **Benefits:** Enhances performance with SSR and SSG, improves SEO, and allows API routes within the same project.

### Bootstrap
- **Why Use:** Provides pre-designed UI components and a responsive grid system for rapid development of stylish, mobile-friendly interfaces.
- **Benefits:** Speeds up development with reusable components, ensures responsive design, and allows customization of themes.

### AWS (Amazon Web Services)
- **Why Use:** Offers a comprehensive suite of cloud services for scalable computing, storage, and deployment.
- **Benefits:** Provides scalability, high availability, and managed services, reducing operational overhead and ensuring reliable application hosting.

### Git
- **Why Use:** A distributed version control system for managing changes, collaboration, and project history.
- **Benefits:** Tracks version history, supports branching and merging, and facilitates team collaboration.

### React Hook Form
- **Why Use:** A library for managing form state and validation in React applications with minimal re-renders and better performance.
- **Benefits:** Simplifies form handling and validation, reduces boilerplate code, and improves performance by minimizing unnecessary re-renders.

### Zod
- **Why Use:** A TypeScript-first schema validation library that provides a simple and expressive way to validate data structures.
- **Benefits:** Ensures data integrity with type-safe validation, integrates seamlessly with TypeScript, and provides clear error messages.

### JWT (JSON Web Tokens)
- **Why Use:** A compact, URL-safe token format for securely transmitting information between parties as a JSON object.
- **Benefits:** Provides a stateless authentication mechanism, enhances security with digital signatures, and supports scalable, token-based authentication.

### bcrypt
- **Why Use:** A library for hashing passwords to securely store user credentials and prevent unauthorized access.
- **Benefits:** Offers strong password hashing with adaptive hashing and salt to protect against brute-force attacks.

## Features
### Public-Facing Pages
- **Home Page (/):** Overview of the garage, navigation, and admin login.
- **About Us Page (/about):** Company history and mission.
- **Services Page (/services):** List of services offered.
- **Contact Us Page (/contact):** Contact information and location details.
-  **Login Page (/login):** Public login page for employees to access their accounts securely.

### Employee Management
- **Registration:** Manage employee accounts.
- **Role-Based Access Control:** Secure login and permissions for Admins, Managers, and Technicians.

### Customer Management
- **CRUD Operations:** Add, edit, and delete customer profiles.
- **Search and Filter:** Find customers by name, email, or phone number.

### Order Management
- **Features:**
Order Tracking:
- **Create Orders:** Admins and managers can easily create new orders, capturing essential details such as customer information, services requested, and deadlines.
- **Assign Orders:** Orders can be efficiently assigned to specific technicians, ensuring the right tasks are directed to the right team members.
- **Track Progress:** The system allows for real-time tracking of each order, with status updates like pending, in-progress, and completed, ensuring all stakeholders are informed of the order's current state.
Customer Access:

- **Order Status Check**: Customers can check the status of their orders without the need to log in. By simply entering their unique order number on a dedicated webpage, they gain access to real-time updates on the progress of their service.
- **Automated Email Notifications:** Upon the creation of an order, the system automatically sends an email to the customer. This email includes:
The unique order number.
A direct link to the webpage where they can track their order status.
- **Search and Filter:** Find order by id,customer, status, or vehicle.

## Installation
To set up the project locally:

1. **Clone the Repository:**
   
bash
   git clone https://github.com/Esrael27/Garage-Management-System.git
  


