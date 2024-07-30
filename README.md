# Employee Management System

Welcome to the Employee Management System project! This system is designed to efficiently manage employee data with powerful features including CRUD operations, data visualization, audit trails, and geolocation functionalities using Google Maps. The backend is developed with Node.js, Express, and MongoDB, while the frontend leverages ReactJS and Redux for robust state management.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Setup and Installation](#setup-and-installation)
5. [API Endpoints](#api-endpoints)
6. [Frontend Components](#frontend-components)
7. [License](#license)

## Features

### Employee Management
- **CRUD Operations:** Create, Read, Update, and Delete employee data.
- **Employee Details:** Includes name, address, age, department, status, and location coordinates.

### Data Visualization
- **Dashboard:** Visualize data with charts (e.g., bar and pie charts).

### Audit Trails
- **Tracking Changes:** Monitor changes to employee data and view historical information.

### Geolocation
- **Google Maps Integration:** Plot employee locations on Google Maps.

## Technologies Used
- **Backend:** Node.js, Express, MongoDB
- **Frontend:** ReactJS, Redux
- **Styling:** CSS
- **Other Libraries:** Axios, Mongoose, body-parser, dotenv
- **Maps Integration:** Google Maps API
- **Data Visualization:** Chart.js

## Project Structure

```plaintext
employee-management-system/
├── client/                  # Frontend ReactJS code
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── styles/          # CSS files
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service files
│   │   ├── App.js           # Main app component
│   │   ├── index.js         # ReactDOM render
│   ├── package.json         # Frontend dependencies
├── server/                  # Backend Node.js code
│   ├── config/              # Database configuration
│   ├── controllers/         # Controllers for handling requests
│   ├── middleware/          # Middleware for AuditTrail, etc.
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API routes
│   ├── utils/               # Utility functions
│   ├── server.js            # Main server file
│   ├── package.json         # Backend dependencies
├── .env                     # Environment variables
├── README.md                # Project documentation

## Setup and Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/raghulstar/employee-management-system.git
    cd employee-management-system
    ```

2. **Install Backend Dependencies:**

    ```bash
    cd server
    npm install
    ```

3. **Install Frontend Dependencies:**

    ```bash
    cd client
    npm install
    ```

4. **Start the Server:**

    ```bash
    npm start
    ```

5. **Start the Frontend:**

    In another terminal, navigate to the `client` directory and run:

    ```bash
    npm start
    ```

    The frontend will be available at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Employees
- **GET /api/employees:** Get all employees.
- **GET /api/employees/:id:** Get employee by ID.
- **POST /api/employees:** Create a new employee.
- **PUT /api/employees/:id:** Update employee by ID.
- **DELETE /api/employees/:id:** Delete employee by ID.

## Frontend Components

### Pages
- **Dashboard:** Overview of employee data with visualizations.
- **EmployeeList:** List of all employees.
- **EmployeeDetail:** Detailed view of an employee, including maps and audit trail.

### Components
- **Header:** Navigation and branding.
- **EmployeeForm:** Form for adding/editing employees.

## License

This project is licensed under the MIT License.

---

By making use of this comprehensive system, you can efficiently manage and visualize your employee data, ensuring smooth operations and insightful data analysis. Enjoy managing your team with ease!

