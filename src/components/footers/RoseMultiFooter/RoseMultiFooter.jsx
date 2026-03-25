import React from 'react';
import './RoseMultiFooter.css';

const RoseMultiFooter = () => (
  <div className="footer-multi-rose">
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
.footer-multi-rose {
  width: 100%;
  background: #08080a;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  padding: 48px 40px 24px;
}
.footer-multi-rose .footer-top {
  display: flex; flex-wrap: wrap; gap: 40px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.footer-multi-rose .footer-brand { flex: 1.5; min-width: 200px; }
.footer-multi-rose .brand-name {
  font-size: 22px; font-weight: 800; color: #fff;
  margin-bottom: 10px;
}
.footer-multi-rose .brand-name span { color: #f43f5e; }
.footer-multi-rose .brand-desc {
  font-size: 13px; color: rgba(255,255,255,0.4);
  line-height: 1.6; max-width: 280px;
}
.footer-multi-rose .footer-col { flex: 1; min-width: 120px; }
.footer-multi-rose .col-title {
  font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.7);
  text-transform: uppercase; letter-spacing: 1.5px;
  margin-bottom: 16px;
}
.footer-multi-rose .col-links { list-style: none; padding: 0; margin: 0; }
.footer-multi-rose .col-links li {
  margin-bottom: 10px;
}
.footer-multi-rose .col-links a {
  font-size: 14px; color: rgba(255,255,255,0.4);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-multi-rose .col-links a:hover { color: #f43f5e; }
.footer-multi-rose .footer-bottom {
  padding-top: 20px;
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 12px;
}
.footer-multi-rose .copyright { font-size: 12px; color: rgba(255,255,255,0.3); }
.footer-multi-rose .socials { display: flex; gap: 12px; }
.footer-multi-rose .social-icon {
  width: 32px; height: 32px;
  border-radius: 8px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}
.footer-multi-rose .social-icon:hover {
  background: #f43f5e22;
  border-color: #f43f5e;
}
`;
export default RoseMultiFooter;
