// src/pages/Inventory.jsx
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../services/api';

const Inventory = () => {
  const { register, handleSubmit, reset } = useForm();
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');

  // Fetch product list on mount (assuming endpoint returns products with _id, name, articleNo)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/inventory');
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const onSubmit = async (data) => {
    try {
      // For creating a new inventory entry, assuming endpoint is /api/inventory-entry
      const res = await axios.post('/api/inventory-entry', data);
      setMessage('Inventory entry created successfully!');
      reset();
    } catch (error) {
      console.error('Error creating inventory entry:', error);
      setMessage('Error creating inventory entry.');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Inventory Management</h1>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2">Select Product</label>
          <select
            {...register('productId', { required: true })}
            className="w-full p-2 border rounded"
          >
            <option value="">-- Select Product --</option>
            {products.map((prod) => (
              <option key={prod._id} value={prod._id}>
                {prod.name} - {prod.articleNo}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Rate</label>
          <input
            type="number"
            step="0.01"
            {...register('rate', { required: true })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Dozen</label>
          <input
            type="number"
            {...register('dozen', { required: true })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Pieces</label>
          <input
            type="number"
            {...register('pieces', { required: true })}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Inventory;
