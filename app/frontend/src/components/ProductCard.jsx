import { useState } from 'react';
import './ProductCard.css';

function renderStars(score) {
    const stars = [];
    const fullStars = Math.floor(score); // Tam yıldız
    const hasHalfStar = score >= fullStars + 0.5; // Yalnızca 0.5 ve üstü için yarım yıldız
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star full">★</span>);
    }
  
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
  
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }
  
    return stars;
  }

export default function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const score5 = (product.popularityScore * 10 / 2).toFixed(1);

  const colors = ['#E6CA97', '#E1A4A9', '#D9D9D9'];
  const colorNames = ['Yellow Gold', 'Rose Gold', 'White Gold'];
  const imageUrls = Object.values(product.images);

  return (
    <div className="product-card">
      <img src={imageUrls[selectedColor]} alt={product.name} className="product-image" />
      <h2 className="product-title">{product.name}</h2>
      <p className="product-price">${product.priceUSD} USD</p>
      <div className="color-picker">
      {imageUrls.map((img, i) => (
          <span
            key={i}
            className={`color-dot ${selectedColor === i ? 'active' : ''}`}
            style={{ backgroundColor: colors[i] }}
            onClick={() => setSelectedColor(i)}
          />
        ))}
      </div>
      <p className="product-color-name">{colorNames[selectedColor]}</p> 
      
      <div className="product-rating">
        <div className="stars">{renderStars(score5)}</div>
        <span>{score5}/5</span>
      </div>
      
    </div>
  );
}