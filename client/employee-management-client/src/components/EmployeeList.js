import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Ensure Link is imported
import '../styles/EmployeeList.css';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        console.log('Fetching employees...');
        const response = await axios.get('http://localhost:5000/api/employees');
        console.log('Employees fetched:', response.data);
        setEmployees(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching employee data:', err);
        setError('Error fetching employee data.');
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="employee-list-container">
      <div className="employee-grid">
        {employees.length === 0 ? (
          <p>No employees found.</p>
        ) : (
          employees.map((employee) => (
            <div className="employee-card" key={employee._id}>
              <h2>{employee.employeeName}</h2>
              <Link to={`/employees/${employee._id}`}>View Details</Link>
            </div>
          ))
        )}
      </div>
      {/* Button to navigate to the Dashboard */}
      <div className="dashboard-button-container">
        <Link to="/dashboard">
          <button className="dashboard-button">Go to Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default EmployeeList;
