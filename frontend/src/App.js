import React, { useState, useEffect } from 'react';
import CompanySelect from './CompanySelect';
import ProductCategoryInput from './ProductCategoryInput';
import ProductList from './ProductList';

const App = () => {
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!company || !category) {
      setError('Please select a company and enter a category');
      return;
    }

    try {
      const response = await fetch(`/categories/${category}/products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', // Might be required by your backend
          'X-Company-Name': company, // Sending company name in header
        },
      });

      const data = await response.json();

      setProducts(data.products);
      setError(null);
    } catch (error) {
      console.error(error);
      setError('Error fetching products');
    }
  };

  useEffect(() => {
    fetchData();
  }, [company, category]);

  return (
    <div>
      <h1>Product Listing</h1>
      <CompanySelect onSelect={(company) => setCompany(company)} />
      <ProductCategoryInput onCategoryChange={(newCategory) => setCategory(newCategory)} />
      <button onClick={fetchData}>Fetch Products</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ProductList products={products} />
    </div>
  );
};

export default App;
