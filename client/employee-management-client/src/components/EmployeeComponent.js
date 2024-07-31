// src/components/EmployeeComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../actions/employeeActions';

const EmployeeComponent = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.employees);

  const handleAddEmployee = () => {
    const newEmployee = { /* employee details */ };
    dispatch(addEmployee(newEmployee));
  };

  return (
    <div>
      <button onClick={handleAddEmployee}>Add Employee</button>
      {/* Render employee list */}
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeComponent;
