import React from 'react';
import { useProductContext } from '../context/ProductContext';
import '../styles/AdminDashboard.css';

function AdminDashboard() {
  const { products, approveProduct, rejectProduct } = useProductContext();

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="product-approval-list">
        {products.filter(product => !product.isApproved).map(product => (
          <div key={product.id} className="product-approval-item">
            {product.image && (
              <img src={product.image} alt={product.name} className="product-image" />
            )}
            <span className="product-name">
              {product.name} - ${product.price.toFixed(2)}
            </span>
            <p className="product-description">{product.description}</p>
            <p className="product-quantity">Quantity: {product.quantity}</p>
            <button className="approve-button" onClick={() => approveProduct(product.id)}>
              Approve
            </button>
            <button className="reject-button" onClick={() => rejectProduct(product.id)}>
              Reject
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;