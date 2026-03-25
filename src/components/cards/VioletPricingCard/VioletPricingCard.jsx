import React from 'react';
import './VioletPricingCard.css';

const VioletPricingCard = () => (
  <div className="card-pricing-violet">
    <div className="badge">Pro Plan</div>
    <div className="price">$29<span>/mo</span></div>
    <div className="period">Billed annually</div>
    <ul className="features">
      <li>Unlimited projects</li>
      <li>Priority support</li>
      <li>Advanced analytics</li>
      <li>Custom integrations</li>
    </ul>
    <button className="cta-btn">Get Started</button>
  </div>
);

export const code = `
.card-pricing-violet {
  width: 300px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 32px 28px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.card-pricing-violet:hover {
  border-color: #8b5cf6;
  box-shadow: 0 0 30px #4c1d95;
}
.card-pricing-violet .badge {
  display: inline-block;
  background: linear-gradient(135deg, #8b5cf6, #4c1d95);
  color: #fff;
  font-size: 11px; font-weight: 700;
  padding: 4px 14px;
  border-radius: 99px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
}
.card-pricing-violet .price {
  font-size: 48px; font-weight: 800; color: #fff;
}
.card-pricing-violet .price span { font-size: 16px; color: rgba(255,255,255,0.5); font-weight: 400; }
.card-pricing-violet .period { font-size: 14px; color: rgba(255,255,255,0.4); margin-bottom: 24px; }
.card-pricing-violet .features {
  list-style: none; padding: 0; margin: 0 0 28px;
  text-align: left;
}
.card-pricing-violet .features li {
  padding: 8px 0;
  color: rgba(255,255,255,0.7);
  font-size: 14px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.card-pricing-violet .features li::before {
  content: '✓ ';
  color: #8b5cf6;
  font-weight: 700;
}
.card-pricing-violet .cta-btn {
  width: 100%;
  padding: 12px;
  background: #8b5cf6;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px; font-weight: 600;
  cursor: pointer;
  transition: filter 0.2s, transform 0.2s;
}
.card-pricing-violet .cta-btn:hover {
  filter: brightness(1.15);
  transform: scale(1.03);
}
`;
export default VioletPricingCard;
