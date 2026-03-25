import React from 'react';
import './AmberMinimalHero.css';

const AmberMinimalHero = () => (
  <div className="hero-minimal-amber">
    <div className="glow-line"></div>
    <h1 className="min-title">Start <span>Building</span> Today</h1>
    <p className="min-sub">Join thousands of developers using premium UI components to ship faster.</p>
    <div className="min-input-group">
      <input className="min-input" placeholder="Enter your email" readOnly />
      <button className="min-submit">Subscribe</button>
    </div>
  </div>
);

export const code = `
.hero-minimal-amber {
  width: 100%;
  min-height: 280px;
  border-radius: 16px;
  padding: 56px 24px;
  text-align: center;
  background: #0a0a0c;
  border: 1px solid rgba(255,255,255,0.06);
  position: relative;
}
.hero-minimal-amber .glow-line {
  width: 80px; height: 3px;
  background: #f59e0b;
  margin: 0 auto 24px;
  border-radius: 99px;
  box-shadow: 0 0 20px #f59e0b;
}
.hero-minimal-amber .min-title {
  font-size: 36px; font-weight: 800; color: #fff;
  margin-bottom: 12px;
}
.hero-minimal-amber .min-title span { color: #f59e0b; }
.hero-minimal-amber .min-sub {
  font-size: 16px; color: rgba(255,255,255,0.45);
  max-width: 460px; margin: 0 auto 28px; line-height: 1.6;
}
.hero-minimal-amber .min-input-group {
  display: inline-flex;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  overflow: hidden;
}
.hero-minimal-amber .min-input {
  padding: 12px 20px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 14px;
  outline: none;
  width: 260px;
}
.hero-minimal-amber .min-input::placeholder { color: rgba(255,255,255,0.3); }
.hero-minimal-amber .min-submit {
  padding: 12px 24px;
  background: #f59e0b;
  color: #fff;
  border: none;
  font-weight: 600; font-size: 14px;
  cursor: pointer;
  transition: filter 0.2s;
}
.hero-minimal-amber .min-submit:hover { filter: brightness(1.15); }
`;
export default AmberMinimalHero;
