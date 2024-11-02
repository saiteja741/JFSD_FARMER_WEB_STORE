// src/components/BuyerDashboard.js
import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';
import '../styles/BuyerDashboard.css';

function BuyerDashboard() {
  const { products } = useProductContext();
  const [cart, setCart] = useState([]);
  const [feedback, setFeedback] = useState('');

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleFeedbackSubmit = () => {
    alert(`Thank you for your feedback: ${feedback}`);
    setFeedback('');
  };

  return (
    <div className="buyer-dashboard">
      <h2>Available Products</h2>
      <div className="product-gallery">
        {products.filter(product => product.isApproved).map(product => (
          <div
            key={product.id}
            className="product-card"
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>${product.price.toFixed(2)}</span>
            <button onClick={() => addToCart(product)} className="add-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Feedback Section */}
      <div className="feedback-section">
        <h3>Feedback</h3>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback here..."
        />
        <button onClick={handleFeedbackSubmit}>Submit Feedback</button>
      </div>
    </div>
  );
}

export default BuyerDashboard;
