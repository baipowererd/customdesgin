import React from 'react';
import './EmeraldProductCard.css';

const EmeraldProductCard = () => (
  <div className="card-product-emerald">
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
.card-product-emerald {
  width: 280px;
  background: #111114;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.card-product-emerald:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.5);
}
.card-product-emerald .prod-img {
  height: 180px;
  background: linear-gradient(160deg, #0a1a15, #064e3b);
  display: flex; align-items: center; justify-content: center;
  font-size: 60px;
  position: relative;
}
.card-product-emerald .prod-badge {
  position: absolute; top: 12px; right: 12px;
  background: #10b981;
  color: #fff;
  font-size: 11px; font-weight: 700;
  padding: 4px 10px;
  border-radius: 6px;
}
.card-product-emerald .prod-body { padding: 20px; }
.card-product-emerald .prod-name {
  font-size: 16px; font-weight: 600; color: #fff; margin-bottom: 6px;
}
.card-product-emerald .prod-desc {
  font-size: 13px; color: rgba(255,255,255,0.5); margin-bottom: 16px;
}
.card-product-emerald .prod-footer {
  display: flex; justify-content: space-between; align-items: center;
}
.card-product-emerald .prod-price {
  font-size: 22px; font-weight: 800; color: #10b981;
}
.card-product-emerald .prod-buy {
  padding: 8px 18px;
  background: transparent;
  border: 1.5px solid #10b981;
  color: #10b981;
  border-radius: 8px;
  font-size: 13px; font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.card-product-emerald .prod-buy:hover {
  background: #10b981;
  color: #fff;
}
`;
export default EmeraldProductCard;
