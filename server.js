const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const authorizationToken =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzExNzk1MjczLCJpYXQiOjE3MTE3OTQ5NzMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjczY2I1ZmNkLWM3NzEtNDhiOC1hNDlmLTdjOTlmYWM5MWEzZSIsInN1YiI6InZpa3JhbWFua3R2QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6InZpa3JhbSIsImNsaWVudElEIjoiNzNjYjVmY2QtYzc3MS00OGI4LWE0OWYtN2M5OWZhYzkxYTNlIiwiY2xpZW50U2VjcmV0IjoiaG5mSkFiaHNuT3NrUVV4YyIsIm93bmVyTmFtZSI6InZpa3JhbWFuIiwib3duZXJFbWFpbCI6InZpa3JhbWFua3R2QGdtYWlsLmNvbSIsInJvbGxObyI6IjIwbWlkMDIzMSJ9.POfWZLVQB9gFrP1HzsynXs59h013THDWmXhBYIKtMGs';


function isValidCompany(companyName) {
    const validCompanies = ["AMZ", "FLP", "SNP", "HYN", "AZO"];
    return validCompanies.includes(companyName);
  }
  

app.get('/categories/:categoryname/products', async (req, res) => {
  const { categoryname } = req.params;
  const { n = 10, page = 1, sort, order } = req.query;
  
  
  const companyName = req.headers['x-company-name'] || req.query.company; 
  
  if (!isValidCompany(companyName)) {
    return res.status(400).json({ message: 'Invalid company name' });
  }

  const skip = (page - 1) * n;
  const limit = Math.min(n, 10);

  let sortQuery = {};
  if (sort) sortQuery[sort] = order === 'asc' ? 1 : -1;

  try {
    const externalAPI = `http://20.244.56.144/test/companies/${companyName}/categories/${categoryname}/products`;
    const response = await axios.get(externalAPI, {
      params: { category: categoryname, },
      headers: { Authorization: `Bearer ${authorizationToken}` },
    });

    const products = response.data.slice(skip, skip + limit);
    products.forEach((product) => {
      product.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    });

    res.json({ products });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching products' });
  }
});



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
