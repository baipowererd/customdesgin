import React from 'react';
import './EmeraldMinimalHero.css';

const EmeraldMinimalHero = () => (
  <div className="hero-minimal-emerald">
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
.hero-minimal-emerald {
  width: 100%;
  min-height: 280px;
  border-radius: 16px;
  padding: 56px 24px;
  text-align: center;
  background: #0a0a0c;
  border: 1px solid rgba(255,255,255,0.06);
  position: relative;
}
.hero-minimal-emerald .glow-line {
  width: 80px; height: 3px;
  background: #10b981;
  margin: 0 auto 24px;
  border-radius: 99px;
  box-shadow: 0 0 20px #10b981;
}
.hero-minimal-emerald .min-title {
  font-size: 36px; font-weight: 800; color: #fff;
  margin-bottom: 12px;
}
.hero-minimal-emerald .min-title span { color: #10b981; }
.hero-minimal-emerald .min-sub {
  font-size: 16px; color: rgba(255,255,255,0.45);
  max-width: 460px; margin: 0 auto 28px; line-height: 1.6;
}
.hero-minimal-emerald .min-input-group {
  display: inline-flex;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  overflow: hidden;
}
.hero-minimal-emerald .min-input {
  padding: 12px 20px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 14px;
  outline: none;
  width: 260px;
}
.hero-minimal-emerald .min-input::placeholder { color: rgba(255,255,255,0.3); }
.hero-minimal-emerald .min-submit {
  padding: 12px 24px;
  background: #10b981;
  color: #fff;
  border: none;
  font-weight: 600; font-size: 14px;
  cursor: pointer;
  transition: filter 0.2s;
}
.hero-minimal-emerald .min-submit:hover { filter: brightness(1.15); }
`;
export default EmeraldMinimalHero;
