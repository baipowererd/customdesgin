import React from 'react';
import './VioletMultiFooter.css';

const VioletMultiFooter = () => (
  <div className="footer-multi-violet">
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
.footer-multi-violet {
  width: 100%;
  background: #08080a;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  padding: 48px 40px 24px;
}
.footer-multi-violet .footer-top {
  display: flex; flex-wrap: wrap; gap: 40px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.footer-multi-violet .footer-brand { flex: 1.5; min-width: 200px; }
.footer-multi-violet .brand-name {
  font-size: 22px; font-weight: 800; color: #fff;
  margin-bottom: 10px;
}
.footer-multi-violet .brand-name span { color: #8b5cf6; }
.footer-multi-violet .brand-desc {
  font-size: 13px; color: rgba(255,255,255,0.4);
  line-height: 1.6; max-width: 280px;
}
.footer-multi-violet .footer-col { flex: 1; min-width: 120px; }
.footer-multi-violet .col-title {
  font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.7);
  text-transform: uppercase; letter-spacing: 1.5px;
  margin-bottom: 16px;
}
.footer-multi-violet .col-links { list-style: none; padding: 0; margin: 0; }
.footer-multi-violet .col-links li {
  margin-bottom: 10px;
}
.footer-multi-violet .col-links a {
  font-size: 14px; color: rgba(255,255,255,0.4);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-multi-violet .col-links a:hover { color: #8b5cf6; }
.footer-multi-violet .footer-bottom {
  padding-top: 20px;
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 12px;
}
.footer-multi-violet .copyright { font-size: 12px; color: rgba(255,255,255,0.3); }
.footer-multi-violet .socials { display: flex; gap: 12px; }
.footer-multi-violet .social-icon {
  width: 32px; height: 32px;
  border-radius: 8px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}
.footer-multi-violet .social-icon:hover {
  background: #8b5cf622;
  border-color: #8b5cf6;
}
`;
export default VioletMultiFooter;
