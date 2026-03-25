import React from 'react';
import './AmberSplitHero.css';

const AmberSplitHero = () => (
  <div className="hero-split-amber">
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
.hero-split-amber {
  width: 100%;
  min-height: 300px;
  display: flex;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
}
.hero-split-amber .hero-left {
  flex: 1;
  padding: 48px 40px;
  display: flex; flex-direction: column; justify-content: center;
  background: #0d0d10;
}
.hero-split-amber .hero-right {
  flex: 1;
  background: linear-gradient(135deg, #78350f, #f59e0b);
  display: flex; align-items: center; justify-content: center;
  font-size: 80px;
  min-width: 200px;
}
.hero-split-amber .hero-label {
  display: inline-block;
  background: #f59e0b22;
  color: #f59e0b;
  font-size: 12px; font-weight: 600;
  padding: 4px 12px;
  border-radius: 6px;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.hero-split-amber .hero-h1 {
  font-size: 32px; font-weight: 800; color: #fff;
  line-height: 1.2; margin-bottom: 12px;
}
.hero-split-amber .hero-p {
  font-size: 15px; color: rgba(255,255,255,0.5);
  margin-bottom: 24px; line-height: 1.6;
}
.hero-split-amber .hero-actions { display: flex; gap: 12px; }
.hero-split-amber .btn-primary {
  padding: 12px 24px;
  background: #f59e0b; color: #fff;
  border: none; border-radius: 8px;
  font-weight: 600; cursor: pointer;
  transition: filter 0.2s;
}
.hero-split-amber .btn-primary:hover { filter: brightness(1.15); }
.hero-split-amber .btn-ghost {
  padding: 12px 24px;
  background: transparent;
  color: rgba(255,255,255,0.7);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  font-weight: 600; cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.hero-split-amber .btn-ghost:hover {
  border-color: #f59e0b;
  color: #f59e0b;
}
`;
export default AmberSplitHero;
