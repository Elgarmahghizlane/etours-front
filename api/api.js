// api/api.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://192.168.1.11:3000/api/'
});

// Add more API service functions as needed
