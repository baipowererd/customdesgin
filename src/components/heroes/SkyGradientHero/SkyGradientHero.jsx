import React from 'react';
import './SkyGradientHero.css';

const SkyGradientHero = () => (
  <div className="hero-gradient-sky">
    <div className="hero-tagline">Welcome to the future</div>
    <h1 className="hero-title">Build Beautiful Interfaces</h1>
    <p className="hero-subtitle">Create stunning, modern web experiences with our premium design components.</p>
    <button className="hero-cta">Get Started Free</button>
  </div>
);

export const code = `
.hero-gradient-sky {
  width: 100%;
  min-height: 320px;
  background: linear-gradient(135deg, #0a0a0c 0%, #075985 50%, #0a0a0c 100%);
  border-radius: 16px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center;
  padding: 48px 24px;
  position: relative;
  overflow: hidden;
}
.hero-gradient-sky::before {
  content: '';
  position: absolute;
  width: 300px; height: 300px;
  background: #0ea5e9;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.3;
  top: -80px; right: -60px;
}
.hero-gradient-sky .hero-tagline {
  font-size: 12px; text-transform: uppercase; letter-spacing: 3px;
  color: #7dd3fc; font-weight: 600; margin-bottom: 16px;
  position: relative; z-index: 1;
}
.hero-gradient-sky .hero-title {
  font-size: 40px; font-weight: 800; color: #fff;
  line-height: 1.2; max-width: 500px; margin-bottom: 16px;
  position: relative; z-index: 1;
}
.hero-gradient-sky .hero-subtitle {
  font-size: 16px; color: rgba(255,255,255,0.5);
  max-width: 420px; margin-bottom: 32px;
  position: relative; z-index: 1;
}
.hero-gradient-sky .hero-cta {
  padding: 14px 32px;
  background: #0ea5e9;
  color: #fff;
  border: none; border-radius: 10px;
  font-size: 15px; font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative; z-index: 1;
}
.hero-gradient-sky .hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px #075985;
}
`;
export default SkyGradientHero;
