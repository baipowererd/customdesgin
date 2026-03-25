import React from 'react';
import './VioletProductCard.css';

const VioletProductCard = () => (
  <div className="card-product-violet">
    <div className="prod-img">
 
      <div className="prod-badge">NEW</div>
    </div>
    <div className="prod-body">
      <div className="prod-name">Premium Headphones</div>
      <div className="prod-desc">Wireless noise-cancelling audio</div>
      <div className="prod-footer">
        <div className="prod-price">$199</div>
        <button className="prod-buy">Add to Cart</button>
      </div>
    </div>
  </div>
);

export const code = `
.card-product-violet {
  width: 280px;
  background: #111114;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.card-product-violet:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.5);
}
.card-product-violet .prod-img {
  height: 180px;
  background: linear-gradient(160deg, #1a1025, #4c1d95);
  display: flex; align-items: center; justify-content: center;
  font-size: 60px;
  position: relative;
}
.card-product-violet .prod-badge {
  position: absolute; top: 12px; right: 12px;
  background: #8b5cf6;
  color: #fff;
  font-size: 11px; font-weight: 700;
  padding: 4px 10px;
  border-radius: 6px;
}
.card-product-violet .prod-body { padding: 20px; }
.card-product-violet .prod-name {
  font-size: 16px; font-weight: 600; color: #fff; margin-bottom: 6px;
}
.card-product-violet .prod-desc {
  font-size: 13px; color: rgba(255,255,255,0.5); margin-bottom: 16px;
}
.card-product-violet .prod-footer {
  display: flex; justify-content: space-between; align-items: center;
}
.card-product-violet .prod-price {
  font-size: 22px; font-weight: 800; color: #8b5cf6;
}
.card-product-violet .prod-buy {
  padding: 8px 18px;
  background: transparent;
  border: 1.5px solid #8b5cf6;
  color: #8b5cf6;
  border-radius: 8px;
  font-size: 13px; font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.card-product-violet .prod-buy:hover {
  background: #8b5cf6;
  color: #fff;
}
`;
export default VioletProductCard;
