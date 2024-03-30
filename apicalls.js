// const axios = require('axios');

// // Ignoring self-signed certificate (NOT RECOMMENDED for production)
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; 

// const url = 'https://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000';

// axios.get(url)
//   .then(response => {
//     console.log('Status Code:', response.status);
//     console.log('Response Data:', response.data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// const axios = require('axios');

// // Replace with your actual data
// const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzExNzk1MjczLCJpYXQiOjE3MTE3OTQ5NzMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjczY2I1ZmNkLWM3NzEtNDhiOC1hNDlmLTdjOTlmYWM5MWEzZSIsInN1YiI6InZpa3JhbWFua3R2QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6InZpa3JhbSIsImNsaWVudElEIjoiNzNjYjVmY2QtYzc3MS00OGI4LWE0OWYtN2M5OWZhYzkxYTNlIiwiY2xpZW50U2VjcmV0IjoiaG5mSkFiaHNuT3NrUVV4YyIsIm93bmVyTmFtZSI6InZpa3JhbWFuIiwib3duZXJFbWFpbCI6InZpa3JhbWFua3R2QGdtYWlsLmNvbSIsInJvbGxObyI6IjIwbWlkMDIzMSJ9.POfWZLVQB9gFrP1HzsynXs59h013THDWmXhBYIKtMGs';
// const url = 'https://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000'; // Replace with your actual API endpoint

// const headers = {
//   'Authorization': `Bearer ${accessToken}`, // Include the access token in Authorization header
//   'Content-Type': 'application/json', // Optional, depending on API requirements
// };

// axios.get(url, { headers })
//   .then(response => {
//     console.log('GET request successful:', response.data);
//   })
//   .catch(error => {
//     console.error('Error in GET request:', error);
//   });

const axios = require('axios');
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzExNzk1MjczLCJpYXQiOjE3MTE3OTQ5NzMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjczY2I1ZmNkLWM3NzEtNDhiOC1hNDlmLTdjOTlmYWM5MWEzZSIsInN1YiI6InZpa3JhbWFua3R2QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6InZpa3JhbSIsImNsaWVudElEIjoiNzNjYjVmY2QtYzc3MS00OGI4LWE0OWYtN2M5OWZhYzkxYTNlIiwiY2xpZW50U2VjcmV0IjoiaG5mSkFiaHNuT3NrUVV4YyIsIm93bmVyTmFtZSI6InZpa3JhbWFuIiwib3duZXJFbWFpbCI6InZpa3JhbWFua3R2QGdtYWlsLmNvbSIsInJvbGxObyI6IjIwbWlkMDIzMSJ9.POfWZLVQB9gFrP1HzsynXs59h013THDWmXhBYIKtMGs';
const headers = {
    'Authorization': `Bearer ${accessToken}`, // Include the access token in Authorization header

  };
async function getTopProducts(company, category, top = 10, minPrice, maxPrice) {
  try {
    const url = `http://20.244.56.144/test/companies/${company}/categories/${category}/products`;
    const params = { top, minPrice, maxPrice };
    const response = await axios.get(url, { params, headers });

    
    if (response.status === 200) {
      console.log('Top products retrieved successfully:', response.data);
    } else {
      console.error('Error fetching top products:', response.statusText);
    }
  } catch (error) {
    console.error('Error during API request:', error);
  }
}

// Example usage
getTopProducts('AMZ', 'Laptop', 15, 2000, 5000);
