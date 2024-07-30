// src/routes/employeeRoutes.js
const express = require('express');
const router = express.Router();
const Employee = require('../models/employeeModel');
const Audit = require('../models/auditModel'); // Import the Audit model
const auditMiddleware = require('../src/middleware/auditMiddleware');


// Apply the audit middleware
router.use(auditMiddleware);

// Create a new employee
router.post('/employees', async (req, res) => {
  try {
    const { employeeName, address, age, department, employeeStatus, lat, lng } = req.body;

    const newEmployee = new Employee({
      employeeName,
      address,
      age,
      department,
      employeeStatus,
      location: {
        type: 'Point',
        coordinates: [lng, lat] // Ensure order is [lng, lat]
      },
      history: [] // Initialize history
    });

    // Save the employee to the database
    await newEmployee.save();

    // Log creation using Audit model
    await new Audit({
      employeeId: newEmployee._id,
      changes: {
        new: JSON.stringify(newEmployee.toObject()) // Serialize object
      },
      action: 'CREATE'
    }).save();

    res.status(201).json(newEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get all employees
router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get employee by ID
router.get('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Update an employee by ID
router.put('/employees/:id', async (req, res) => {
  try {
    const { employeeName, address, age, department, employeeStatus, lat, lng } = req.body;

    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    const oldEmployee = JSON.stringify(employee.toObject()); // Capture old data

    // Update employee fields
    employee.employeeName = employeeName || employee.employeeName;
    employee.address = address || employee.address;
    employee.age = age || employee.age;
    employee.department = department || employee.department;
    employee.employeeStatus = employeeStatus || employee.employeeStatus;
    if (lat !== undefined && lng !== undefined) {
      employee.location = {
        type: 'Point',
        coordinates: [lng, lat] // Ensure order is [lng, lat]
      };
    }

    // Save the updated employee record
    await employee.save();

    // Log update using Audit model
    await new Audit({
      employeeId: employee._id,
      changes: {
        old: oldEmployee,
        new: JSON.stringify(employee.toObject()) // Serialize object
      },
      action: 'UPDATE'
    }).save();

    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete an employee by ID
router.delete('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    // Log deletion using Audit model
    await new Audit({
      employeeId: employee._id,
      changes: {
        old: JSON.stringify(employee.toObject()) // Serialize object
      },
      action: 'DELETE'
    }).save();

    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete all employees
router.delete('/employees', async (req, res) => {
  try {
    const result = await Employee.deleteMany({});
    res.status(200).json({ message: 'All employees have been deleted', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get audit trail for an employee by ID
router.get('/employees/:id/audit', async (req, res) => {
  try {
    const audits = await Audit.find({ employeeId: req.params.id });
    if (!audits || audits.length === 0) {
      return res.status(404).json({ message: 'No audit trail found for this employee' });
    }
    res.status(200).json(audits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get employee distribution by department
router.get('/employees/stats/department', async (req, res) => {
  try {
    const data = await Employee.aggregate([
      { $group: { _id: '$department', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
