import axios from 'axios'

// Base URL should point to the API root, not a specific endpoint
let http = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-type': 'application/json'
  },
  // Add timeout to prevent long hanging requests
  timeout: 10000
})

// Add response interceptor for more robust error handling
http.interceptors.response.use(
  response => response,
  error => {
    console.error('API request error:', error);
    return Promise.reject(error);
  }
)

export default http