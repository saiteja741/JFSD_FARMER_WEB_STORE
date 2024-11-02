import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';
import '../styles/FarmerDashboard.css';

function FarmerDashboard() {
  const { addProduct } = useProductContext();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name: productName,
      price: parseFloat(productPrice),
      quantity: parseInt(productQuantity),
      description: productDescription,
      image: productImage
    };
    addProduct(newProduct);
    setProductName('');
    setProductPrice('');
    setProductQuantity('');
    setProductDescription('');
    setProductImage('');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductImage(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  return (
    <div className="farmer-dashboard">
      <h2>Farmer Dashboard</h2>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
          required
        />
        
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          placeholder="Product Price"
          required
        />
        
        <input
          type="number"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
          placeholder="Product Quantity"
          required
        />


        <textarea
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          placeholder="Product Description"
          required
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default FarmerDashboard;
