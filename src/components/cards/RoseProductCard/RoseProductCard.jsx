import React from 'react';
import './RoseProductCard.css';

const RoseProductCard = () => (
  <div className="card-product-rose">
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
.card-product-rose {
  width: 280px;
  background: #111114;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.card-product-rose:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.5);
}
.card-product-rose .prod-img {
  height: 180px;
  background: linear-gradient(160deg, #1a1015, #9f1239);
  display: flex; align-items: center; justify-content: center;
  font-size: 60px;
  position: relative;
}
.card-product-rose .prod-badge {
  position: absolute; top: 12px; right: 12px;
  background: #f43f5e;
  color: #fff;
  font-size: 11px; font-weight: 700;
  padding: 4px 10px;
  border-radius: 6px;
}
.card-product-rose .prod-body { padding: 20px; }
.card-product-rose .prod-name {
  font-size: 16px; font-weight: 600; color: #fff; margin-bottom: 6px;
}
.card-product-rose .prod-desc {
  font-size: 13px; color: rgba(255,255,255,0.5); margin-bottom: 16px;
}
.card-product-rose .prod-footer {
  display: flex; justify-content: space-between; align-items: center;
}
.card-product-rose .prod-price {
  font-size: 22px; font-weight: 800; color: #f43f5e;
}
.card-product-rose .prod-buy {
  padding: 8px 18px;
  background: transparent;
  border: 1.5px solid #f43f5e;
  color: #f43f5e;
  border-radius: 8px;
  font-size: 13px; font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.card-product-rose .prod-buy:hover {
  background: #f43f5e;
  color: #fff;
}
`;
export default RoseProductCard;
