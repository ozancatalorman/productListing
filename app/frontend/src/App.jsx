import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios.get(`${baseUrl}/api/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.error('API Error:', err));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Product List</h1>
      <div className="carousel">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;