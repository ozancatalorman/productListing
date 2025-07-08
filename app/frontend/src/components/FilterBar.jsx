import { useState } from 'react';
import './FilterBar.css';

export default function FilterBar({ onFilterChange }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minScore, setMinScore] = useState('');

  const handleFilter = () => {
    onFilterChange({
      minPrice: minPrice !== '' ? parseFloat(minPrice) : null,
      maxPrice: maxPrice !== '' ? parseFloat(maxPrice) : null,
      minScore: minScore !== '' ? parseFloat(minScore) : null,
    });
  };

  return (
    <div className="filter-bar">
      <input type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      <input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      <input type="number" placeholder="Min Score" value={minScore} onChange={(e) => setMinScore(e.target.value)} />
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
}