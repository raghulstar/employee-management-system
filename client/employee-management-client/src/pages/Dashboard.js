// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [departmentStats, setDepartmentStats] = useState([]);

  useEffect(() => {
    const fetchDepartmentStats = async () => {
      try {
        const response = await axios.get('/api/employees/stats/department');
        setDepartmentStats(response.data);
      } catch (error) {
        console.error('Error fetching department stats:', error);
      }
    };

    fetchDepartmentStats();
  }, []);

  // Prepare data for the Bar chart
  const data = {
    labels: departmentStats.map(stat => stat._id),
    datasets: [
      {
        label: 'Number of Employees',
        data: departmentStats.map(stat => stat.count),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <Bar data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
