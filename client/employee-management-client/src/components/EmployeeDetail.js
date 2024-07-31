// src/components/EmployeeDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../styles/EmployeeDetail.css';

const containerStyle = {
  width: '100%',
  height: '400px',
};

function EmployeeDetail() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('details');
  const [auditTrail, setAuditTrail] = useState([]);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/employees/${id}`);
        setEmployee(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching employee data.');
        setLoading(false);
      }
    };

    const fetchAuditTrail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/employees/${id}/audit`);
        setAuditTrail(response.data);
      } catch (err) {
        console.error('Error fetching audit trail:', err);
      }
    };

    fetchEmployee();
    fetchAuditTrail();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const defaultCenter = { lat: 0, lng: 0 };
  const center = employee?.location?.coordinates
    ? { lat: employee.location.coordinates[1], lng: employee.location.coordinates[0] }
    : defaultCenter;

  return (
    <div className="employee-detail">
      <h1>Employee Details</h1>
      {employee ? (
        <div>
          <div className="tabs">
            <button onClick={() => setActiveTab('details')} className={activeTab === 'details' ? 'active' : ''}>
              Employee Details
            </button>
            <button onClick={() => setActiveTab('map')} className={activeTab === 'map' ? 'active' : ''}>
              Location Map
            </button>
            <button onClick={() => setActiveTab('audit')} className={activeTab === 'audit' ? 'active' : ''}>
              Audit Trail
            </button>
          </div>

          {activeTab === 'details' && (
            <div className="details-tab active">
              <p><strong>Name:</strong> {employee.employeeName}</p>
              <p><strong>Address:</strong> {employee.address}</p>
              <p><strong>Age:</strong> {employee.age}</p>
              <p><strong>Department:</strong> {employee.department}</p>
              <p><strong>Status:</strong> {employee.employeeStatus}</p>
            </div>
          )}

          {activeTab === 'map' && (
            <div className="map-tab active">
              <div className="map-container">
                <LoadScript googleMapsApiKey="AIzaSyB7SgAwcu4IuVX7t9B6zrAfzmibfxkTgxI">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={13}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          )}

          {activeTab === 'audit' && (
            <div className="audit-tab active">
              <h2>Audit Trail</h2>
              {auditTrail.length === 0 ? (
                <p>No audit trail available.</p>
              ) : (
                <ul>
                  {auditTrail.map((audit) => (
                    <li key={audit._id}>
                      <p><strong>Timestamp:</strong> {new Date(audit.timestamp).toLocaleString()}</p>
                      <p><strong>Action:</strong> {audit.action}</p>
                      <p><strong>Changes:</strong></p>
                      <pre>{JSON.stringify(audit.changes, null, 2)}</pre>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ) : (
        <p>No employee details available.</p>
      )}
    </div>
  );
}

export default EmployeeDetail;
