// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data...');
      try {
        const response = await axios.get('http://localhost:5000/api/employees/stats/department');
        console.log('Data fetched:', response.data); // Debug log for fetched data
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    console.log('Loading data...'); // Debug log for loading state
    return <p>Loading...</p>;
  }

  console.log('Data ready:', data); // Debug log for data state

  // Prepare chart data
  const chartData = {
    labels: data.map(item => item._id),
    datasets: [
      {
        label: 'Number of Employees',
        data: data.map(item => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Bar data={chartData} options={{
        plugins: {
          title: {
            display: true,
            text: 'Employee Distribution by Department'
          },
          legend: {
            display: true,
            position: 'top'
          }
        },
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }} />
    </div>
  );
}

export default Dashboard;
