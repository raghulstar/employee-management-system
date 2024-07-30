Employee Management System
This project is an Employee Management System, built to manage employee data efficiently. It features CRUD operations, data visualization, audit trails, and integrates Google Maps for geolocation functionalities. The backend is built using Node.js, Express, and MongoDB, while the frontend uses ReactJS and Redux for state management.

Table of Contents
Features
Technologies Used
Project Structure
Setup and Installation
API Endpoints
Frontend Components
License
Features
Employee Management:

Create, Read, Update, and Delete (CRUD) operations for employee data.
Employee details include name, address, age, department, status, and location coordinates.
Data Visualization:
Dashboard for visualizing data using charts (e.g., bar and pie charts).
Audit Trails:
Tracks changes to employee data and displays historical information.
Geolocation:
Integration with Google Maps API to plot employee locations.
Technologies Used
Backend: Node.js, Express, MongoDB
Frontend: ReactJS, Redux
Styling: CSS
Other Libraries: Axios, Mongoose, body-parser, dotenv
Maps Integration: Google Maps API
Data Visualization: Chart.js
Project Structure
bash
employee-management-system/
│
├── client/                  # Frontend ReactJS code
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── styles/          # CSS files
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service files
│   │   ├── App.js           # Main app component
│   │   ├── index.js         # ReactDOM render
│   ├── package.json         # Frontend dependencies
│
├── server/                  # Backend Node.js code
│   ├── config/              # Database configuration
│   ├── controllers/         # Controllers for handling requests
│   ├── middleware/          # Middleware for authentication, etc.
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API routes
│   ├── utils/               # Utility functions
│   ├── server.js            # Main server file
│   ├── package.json         # Backend dependencies
│
├── .env                     # Environment variables
├── README.md                # Project documentation
Setup and Installation
Clone the repository:

bash
git clone https://github.com/raghulstar/employee-management-system.git
cd employee-management-system
Install Backend Dependencies:

bash
cd server
npm install
Install Frontend Dependencies:

bash
cd client
npm install

Start the Server:

bash
npm start
Start the Frontend:

In another terminal, navigate to the client directory and run:

bash
npm start
The frontend will be available at http://localhost:3000.

API Endpoints
Employees
GET /api/employees: Get all employees.
GET /api/employees/
: Get employee by ID.
POST /api/employees: Create a new employee.
PUT /api/employees/
: Update employee by ID.
DELETE /api/employees/
: Delete employee by ID.
Frontend Components
Pages
Dashboard: Overview of employee data with visualizations.
EmployeeList: List of all employees.
EmployeeDetail: Detailed view of an employee, including maps and audit trail.
Components
Header: Navigation and branding.
EmployeeForm: Form for adding/editing employees.
License
This project is licensed under the MIT License
