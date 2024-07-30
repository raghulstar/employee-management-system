const Employee = require('../models/employeeModel');

// Controller to handle creating a new employee
const createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const result = await newEmployee.save();
    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating employee:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller to handle getting all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller to handle getting an employee by ID
const getEmployeeById = async (req, res) => {
  try {
    const employeeId = req.params.id.trim(); // Trim any extraneous whitespace
    const employee = await Employee.findById(employeeId);
    
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    
    res.status(200).json(employee);
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller to handle updating an employee by ID
const updateEmployeeById = async (req, res) => {
  try {
    const employeeId = req.params.id.trim(); // Trim any extraneous whitespace
    const updatedEmployee = await Employee.findByIdAndUpdate(employeeId, req.body, { new: true });
    
    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    
    res.status(200).json(updatedEmployee);
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller to handle deleting an employee by ID
const deleteEmployeeById = async (req, res) => {
  try {
    const employeeId = req.params.id.trim(); // Trim any extraneous whitespace
    const result = await Employee.findByIdAndDelete(employeeId);
    
    if (!result) {
      return res.status(404).json({ message: "Employee not found" });
    }
    
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
};
