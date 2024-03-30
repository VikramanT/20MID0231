import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Products:</h2>
      {products.length > 0 ? (
        products.map((product) => (
          <p key={product.id}>
            Name: {product.name} (ID: {product.id})
          </p>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
