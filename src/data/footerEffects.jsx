import React from 'react';

const footerEffects = [
    {
        title: 'Multi-Column Footer',
        description: 'Four-column footer with links and social icons.',
        multiColor: false,
        cssTemplate: (c) => `.multi-footer{width:100%;background:#0a0a0c;padding:48px 24px;border-top:1px solid rgba(255,255,255,0.08);display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:32px;color:#fff}.multi-footer .footer-col h4{font-size:14px;font-weight:600;margin-bottom:12px;color:${c.primary}}.multi-footer .footer-col ul{list-style:none;padding:0;margin:0}.multi-footer .footer-col li{margin-bottom:8px;font-size:13px;color:rgba(255,255,255,0.6)}.multi-footer .footer-col a{color:inherit;text-decoration:none;transition:color .2s}.multi-footer .footer-col a:hover{color:${c.primary}}.multi-footer .social{display:flex;gap:12px;margin-top:16px}.multi-footer .social a{color:#fff;transition:color .2s}.multi-footer .social a:hover{color:${c.primary}}`,
        renderPreview: (c) => (
            <div className="multi-footer">
                <div className="footer-col">
                    <h4>Product</h4>
                    <ul>
                        <li><a href="#!" onClick={(e) => e.preventDefault()}>Features</a></li>
                        <li><a href="#!" onClick={(e) => e.preventDefault()}>Pricing</a></li>
                        <li><a href="#!" onClick={(e) => e.preventDefault()}>Releases</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#!" onClick={(e) => e.preventDefault()}>About</a></li>
                        <li><a href="#!" onClick={(e) => e.preventDefault()}>Careers</a></li>
                        <li><a href="#!" onClick={(e) => e.preventDefault()}>Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#!" onClick={(e) => e.preventDefault()}>Docs</a></li>
                        <li><a href="#!" onClick={(e) => e.preventDefault()}>Blog</a></li>
                        <li><a href="#!" onClick={(e) => e.preventDefault()}>Help Center</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#!" onClick={(e) => e.preventDefault()}>Privacy</a></li>
                        <li><a href="#!" onClick={(e) => e.preventDefault()}>Terms</a></li>
                    </ul>
                    <div className="social">
 <a href="#!" onClick={(e) => e.preventDefault()}></a>
 <a href="#!" onClick={(e) => e.preventDefault()}></a>
 <a href="#!" onClick={(e) => e.preventDefault()}></a>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Minimal CTA Footer',
        description: 'Centered call‑to‑action with email capture and subtle background glow.',
        multiColor: false,
        cssTemplate: (c) => `.minimal-footer{width:100%;padding:64px 24px;text-align:center;background:#0a0a0c;border-top:1px solid rgba(255,255,255,0.08)}.minimal-footer .cta-title{font-size:28px;font-weight:800;color:#fff;margin-bottom:12px}.minimal-footer .cta-title span{color:${c.primary}}.minimal-footer .cta-sub{font-size:15px;color:rgba(255,255,255,0.5);margin-bottom:24px}.minimal-footer .cta-input-group{display:inline-flex;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:10px;overflow:hidden}.minimal-footer .cta-input{padding:12px 20px;background:transparent;border:none;color:#fff;font-size:14px;outline:none;width:260px}.minimal-footer .cta-input::placeholder{color:rgba(255,255,255,0.3)}.minimal-footer .cta-submit{padding:12px 24px;background:${c.primary};color:#fff;border:none;font-weight:600;font-size:14px;cursor:pointer;transition:filter .2s}.minimal-footer .cta-submit:hover{filter:brightness(1.15)}`,
        renderPreview: (c) => (
            <div className="minimal-footer">
                <h2 className="cta-title">Join the <span>Community</span></h2>
                <p className="cta-sub">Stay updated with the latest UI trends and releases.</p>
                <div className="cta-input-group">
                    <input className="cta-input" placeholder="Your email" readOnly />
                    <button className="cta-submit">Subscribe</button>
                </div>
            </div>
        ),
    },
];

export default footerEffects;
