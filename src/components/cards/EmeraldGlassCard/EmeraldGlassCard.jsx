import React from 'react';
import './EmeraldGlassCard.css';

const EmeraldGlassCard = () => (
  <div className="card-glass-emerald">
    <div className="glass-icon">✦</div>
    <div className="glass-title">Glass Panel</div>
    <div className="glass-desc">A beautiful frosted glass card with blurred background orbs and translucent overlay effects.</div>
  </div>
);

export const code = `
.card-glass-emerald {
  width: 320px;
  padding: 32px;
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
}
.card-glass-emerald:hover {
  transform: scale(1.03);
}
.card-glass-emerald::before {
  content: '';
  position: absolute;
  top: -50%; left: -50%;
  width: 120px; height: 120px;
  background: #10b981;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
}
.card-glass-emerald::after {
  content: '';
  position: absolute;
  bottom: -30%; right: -30%;
  width: 100px; height: 100px;
  background: #6ee7b7;
  border-radius: 50%;
  filter: blur(50px);
  opacity: 0.25;
}
.card-glass-emerald .glass-icon {
  width: 48px; height: 48px;
  background: linear-gradient(135deg, #10b981, #064e3b);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 22px;
  margin-bottom: 20px;
  position: relative; z-index: 1;
}
.card-glass-emerald .glass-title {
  font-size: 20px; font-weight: 600; color: #fff;
  margin-bottom: 8px;
  position: relative; z-index: 1;
}
.card-glass-emerald .glass-desc {
  font-size: 14px; color: rgba(255,255,255,0.6);
  line-height: 1.6;
  position: relative; z-index: 1;
}
`;
export default EmeraldGlassCard;
