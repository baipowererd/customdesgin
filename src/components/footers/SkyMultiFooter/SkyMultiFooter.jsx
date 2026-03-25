import React from 'react';
import './SkyMultiFooter.css';

const SkyMultiFooter = () => (
  <div className="footer-multi-sky">
    <div className="footer-top">
      <div className="footer-brand">
        <div className="brand-name">UI<span>Kit</span></div>
        <div className="brand-desc">Premium design components for modern web applications. Ship faster, design better.</div>
      </div>
      <div className="footer-col">
        <div className="col-title">Product</div>
        <ul className="col-links">
          <li><a href="#">Components</a></li>
          <li><a href="#">Templates</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Changelog</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <div className="col-title">Company</div>
        <ul className="col-links">
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <div className="col-title">Legal</div>
        <ul className="col-links">
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">License</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="copyright">&copy; 2026 UIKit. All rights reserved.</div>
      <div className="socials">
        <div className="social-icon">𝕏</div>
        <div className="social-icon">in</div>
 <div className="social-icon"></div>
      </div>
    </div>
  </div>
);

export const code = `
.footer-multi-sky {
  width: 100%;
  background: #08080a;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  padding: 48px 40px 24px;
}
.footer-multi-sky .footer-top {
  display: flex; flex-wrap: wrap; gap: 40px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.footer-multi-sky .footer-brand { flex: 1.5; min-width: 200px; }
.footer-multi-sky .brand-name {
  font-size: 22px; font-weight: 800; color: #fff;
  margin-bottom: 10px;
}
.footer-multi-sky .brand-name span { color: #0ea5e9; }
.footer-multi-sky .brand-desc {
  font-size: 13px; color: rgba(255,255,255,0.4);
  line-height: 1.6; max-width: 280px;
}
.footer-multi-sky .footer-col { flex: 1; min-width: 120px; }
.footer-multi-sky .col-title {
  font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.7);
  text-transform: uppercase; letter-spacing: 1.5px;
  margin-bottom: 16px;
}
.footer-multi-sky .col-links { list-style: none; padding: 0; margin: 0; }
.footer-multi-sky .col-links li {
  margin-bottom: 10px;
}
.footer-multi-sky .col-links a {
  font-size: 14px; color: rgba(255,255,255,0.4);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-multi-sky .col-links a:hover { color: #0ea5e9; }
.footer-multi-sky .footer-bottom {
  padding-top: 20px;
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 12px;
}
.footer-multi-sky .copyright { font-size: 12px; color: rgba(255,255,255,0.3); }
.footer-multi-sky .socials { display: flex; gap: 12px; }
.footer-multi-sky .social-icon {
  width: 32px; height: 32px;
  border-radius: 8px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}
.footer-multi-sky .social-icon:hover {
  background: #0ea5e922;
  border-color: #0ea5e9;
}
`;
export default SkyMultiFooter;
