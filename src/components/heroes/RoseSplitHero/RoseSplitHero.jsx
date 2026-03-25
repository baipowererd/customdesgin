import React from 'react';
import './RoseSplitHero.css';

const RoseSplitHero = () => (
  <div className="hero-split-rose">
    <div className="hero-left">
      <span className="hero-label">New Release</span>
      <h1 className="hero-h1">Design System 2.0</h1>
      <p className="hero-p">Everything you need to build modern, responsive interfaces at scale.</p>
      <div className="hero-actions">
        <button className="btn-primary">Launch App</button>
        <button className="btn-ghost">Learn More</button>
      </div>
    </div>
 <div className="hero-right"></div>
  </div>
);

export const code = `
.hero-split-rose {
  width: 100%;
  min-height: 300px;
  display: flex;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
}
.hero-split-rose .hero-left {
  flex: 1;
  padding: 48px 40px;
  display: flex; flex-direction: column; justify-content: center;
  background: #0d0d10;
}
.hero-split-rose .hero-right {
  flex: 1;
  background: linear-gradient(135deg, #9f1239, #f43f5e);
  display: flex; align-items: center; justify-content: center;
  font-size: 80px;
  min-width: 200px;
}
.hero-split-rose .hero-label {
  display: inline-block;
  background: #f43f5e22;
  color: #f43f5e;
  font-size: 12px; font-weight: 600;
  padding: 4px 12px;
  border-radius: 6px;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.hero-split-rose .hero-h1 {
  font-size: 32px; font-weight: 800; color: #fff;
  line-height: 1.2; margin-bottom: 12px;
}
.hero-split-rose .hero-p {
  font-size: 15px; color: rgba(255,255,255,0.5);
  margin-bottom: 24px; line-height: 1.6;
}
.hero-split-rose .hero-actions { display: flex; gap: 12px; }
.hero-split-rose .btn-primary {
  padding: 12px 24px;
  background: #f43f5e; color: #fff;
  border: none; border-radius: 8px;
  font-weight: 600; cursor: pointer;
  transition: filter 0.2s;
}
.hero-split-rose .btn-primary:hover { filter: brightness(1.15); }
.hero-split-rose .btn-ghost {
  padding: 12px 24px;
  background: transparent;
  color: rgba(255,255,255,0.7);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  font-weight: 600; cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.hero-split-rose .btn-ghost:hover {
  border-color: #f43f5e;
  color: #f43f5e;
}
`;
export default RoseSplitHero;
