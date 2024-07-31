import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchEmployees = async () => {
  const response = await axios.get(`${API_URL}/employees`);
  return response.data;
};
