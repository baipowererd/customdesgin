import React from 'react';
import './SkyMinimalFooter.css';

const SkyMinimalFooter = () => (
  <div className="footer-minimal-sky">
    <div className="footer-cta-section">
      <div className="cta-title">Ready to get started?</div>
      <div className="cta-sub">Join 10,000+ developers building with premium components.</div>
      <button className="cta-button">Start Free Trial</button>
    </div>
    <div className="footer-bar">
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Support</a>
        <a href="#">Status</a>
      </div>
      <div className="footer-copy">&copy; 2026 Company Inc.</div>
    </div>
  </div>
);

export const code = `
.footer-minimal-sky {
  width: 100%;
  background: #08080a;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  overflow: hidden;
}
.footer-minimal-sky .footer-cta-section {
  padding: 40px;
  text-align: center;
  background: linear-gradient(135deg, #07598544, transparent);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.footer-minimal-sky .cta-title {
  font-size: 24px; font-weight: 700; color: #fff;
  margin-bottom: 8px;
}
.footer-minimal-sky .cta-sub {
  font-size: 14px; color: rgba(255,255,255,0.45);
  margin-bottom: 20px;
}
.footer-minimal-sky .cta-button {
  padding: 12px 28px;
  background: #0ea5e9; color: #fff;
  border: none; border-radius: 8px;
  font-size: 14px; font-weight: 600;
  cursor: pointer;
  transition: filter 0.2s, transform 0.2s;
}
.footer-minimal-sky .cta-button:hover {
  filter: brightness(1.15);
  transform: translateY(-2px);
}
.footer-minimal-sky .footer-bar {
  padding: 20px 40px;
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 12px;
}
.footer-minimal-sky .footer-links {
  display: flex; gap: 24px;
}
.footer-minimal-sky .footer-links a {
  font-size: 13px; color: rgba(255,255,255,0.4);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-minimal-sky .footer-links a:hover { color: #0ea5e9; }
.footer-minimal-sky .footer-copy {
  font-size: 12px; color: rgba(255,255,255,0.25);
}
`;
export default SkyMinimalFooter;
