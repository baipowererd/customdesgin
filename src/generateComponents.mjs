import fs from 'fs';
import path from 'path';

// ─── HELPERS ───
function esc(str) {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function writeComponent(category, name, jsx, css, desc) {
  const dir = path.resolve('./src/components/' + category + '/' + name);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, name + '.jsx'), jsx);
  fs.writeFileSync(path.join(dir, name + '.css'), css);
  return { name, category, desc, importPath: './components/' + category + '/' + name + '/' + name };
}

const all = [];

// ═══════════════════════════════════════
//  CARDS (25 = 5 styles × 5 colors)
// ═══════════════════════════════════════
const cardColors = [
  { n: 'Violet',  hex: '#8b5cf6', dark: '#4c1d95', light: '#c4b5fd', bg: '#1a1025' },
  { n: 'Rose',    hex: '#f43f5e', dark: '#9f1239', light: '#fda4af', bg: '#1a1015' },
  { n: 'Sky',     hex: '#0ea5e9', dark: '#075985', light: '#7dd3fc', bg: '#0a1520' },
  { n: 'Emerald', hex: '#10b981', dark: '#064e3b', light: '#6ee7b7', bg: '#0a1a15' },
  { n: 'Amber',   hex: '#f59e0b', dark: '#78350f', light: '#fcd34d', bg: '#1a1508' },
];

// Style 1: Profile Card
cardColors.forEach(c => {
  const cn = c.n + 'ProfileCard';
  const cls = 'card-profile-' + c.n.toLowerCase();
  const css = `
.${cls} {
  width: 320px;
  background: ${c.bg};
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.${cls}:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}
.${cls} .card-banner {
  height: 100px;
  background: linear-gradient(135deg, ${c.dark}, ${c.hex});
}
.${cls} .card-avatar {
  width: 72px; height: 72px;
  border-radius: 50%;
  background: ${c.hex};
  border: 4px solid ${c.bg};
  margin: -36px auto 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 28px; font-weight: 700; color: #fff;
}
.${cls} .card-body {
  padding: 16px 24px 24px;
  text-align: center;
}
.${cls} .card-name {
  font-size: 18px; font-weight: 600; color: #fff; margin-bottom: 4px;
}
.${cls} .card-role {
  font-size: 13px; color: ${c.light}; margin-bottom: 16px;
}
.${cls} .card-stats {
  display: flex; justify-content: space-around;
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 16px;
}
.${cls} .stat { text-align: center; }
.${cls} .stat-val { font-size: 18px; font-weight: 700; color: ${c.hex}; }
.${cls} .stat-lbl { font-size: 11px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 1px; }
`;
  const jsxCode = `import React from 'react';
import './${cn}.css';

const ${cn} = () => (
  <div className="${cls}">
    <div className="card-banner"></div>
    <div className="card-avatar">J</div>
    <div className="card-body">
      <div className="card-name">Jane Doe</div>
      <div className="card-role">Senior Designer</div>
      <div className="card-stats">
        <div className="stat"><div className="stat-val">142</div><div className="stat-lbl">Posts</div></div>
        <div className="stat"><div className="stat-val">8.2k</div><div className="stat-lbl">Followers</div></div>
        <div className="stat"><div className="stat-val">312</div><div className="stat-lbl">Following</div></div>
      </div>
    </div>
  </div>
);

export const code = \`${esc(css)}\`;
export default ${cn};
`;
  all.push(writeComponent('cards', cn, jsxCode, css, c.n + ': Profile card with avatar, stats & gradient banner'));
});

// Style 2: Pricing Card
cardColors.forEach(c => {
  const cn = c.n + 'PricingCard';
  const cls = 'card-pricing-' + c.n.toLowerCase();
  const css = `
.${cls} {
  width: 300px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 32px 28px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.${cls}:hover {
  border-color: ${c.hex};
  box-shadow: 0 0 30px ${c.dark};
}
.${cls} .badge {
  display: inline-block;
  background: linear-gradient(135deg, ${c.hex}, ${c.dark});
  color: #fff;
  font-size: 11px; font-weight: 700;
  padding: 4px 14px;
  border-radius: 99px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
}
.${cls} .price {
  font-size: 48px; font-weight: 800; color: #fff;
}
.${cls} .price span { font-size: 16px; color: rgba(255,255,255,0.5); font-weight: 400; }
.${cls} .period { font-size: 14px; color: rgba(255,255,255,0.4); margin-bottom: 24px; }
.${cls} .features {
  list-style: none; padding: 0; margin: 0 0 28px;
  text-align: left;
}
.${cls} .features li {
  padding: 8px 0;
  color: rgba(255,255,255,0.7);
  font-size: 14px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.${cls} .features li::before {
  content: '✓ ';
  color: ${c.hex};
  font-weight: 700;
}
.${cls} .cta-btn {
  width: 100%;
  padding: 12px;
  background: ${c.hex};
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px; font-weight: 600;
  cursor: pointer;
  transition: filter 0.2s, transform 0.2s;
}
.${cls} .cta-btn:hover {
  filter: brightness(1.15);
  transform: scale(1.03);
}
`;
  const jsxCode = `import React from 'react';
import './${cn}.css';

const ${cn} = () => (
  <div className="${cls}">
    <div className="badge">Pro Plan</div>
    <div className="price">$29<span>/mo</span></div>
    <div className="period">Billed annually</div>
    <ul className="features">
      <li>Unlimited projects</li>
      <li>Priority support</li>
      <li>Advanced analytics</li>
      <li>Custom integrations</li>
    </ul>
    <button className="cta-btn">Get Started</button>
  </div>
);

export const code = \`${esc(css)}\`;
export default ${cn};
`;
  all.push(writeComponent('cards', cn, jsxCode, css, c.n + ': Pricing card with features list & CTA'));
});

// Style 3: Glassmorphic Card
cardColors.forEach(c => {
  const cn = c.n + 'GlassCard';
  const cls = 'card-glass-' + c.n.toLowerCase();
  const css = `
.${cls} {
  width: 320px;
  padding: 32px;
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
}
.${cls}:hover {
  transform: scale(1.03);
}
.${cls}::before {
  content: '';
  position: absolute;
  top: -50%; left: -50%;
  width: 120px; height: 120px;
  background: ${c.hex};
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
}
.${cls}::after {
  content: '';
  position: absolute;
  bottom: -30%; right: -30%;
  width: 100px; height: 100px;
  background: ${c.light};
  border-radius: 50%;
  filter: blur(50px);
  opacity: 0.25;
}
.${cls} .glass-icon {
  width: 48px; height: 48px;
  background: linear-gradient(135deg, ${c.hex}, ${c.dark});
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 22px;
  margin-bottom: 20px;
  position: relative; z-index: 1;
}
.${cls} .glass-title {
  font-size: 20px; font-weight: 600; color: #fff;
  margin-bottom: 8px;
  position: relative; z-index: 1;
}
.${cls} .glass-desc {
  font-size: 14px; color: rgba(255,255,255,0.6);
  line-height: 1.6;
  position: relative; z-index: 1;
}
`;
  const jsxCode = `import React from 'react';
import './${cn}.css';

const ${cn} = () => (
  <div className="${cls}">
    <div className="glass-icon">✦</div>
    <div className="glass-title">Glass Panel</div>
    <div className="glass-desc">A beautiful frosted glass card with blurred background orbs and translucent overlay effects.</div>
  </div>
);

export const code = \`${esc(css)}\`;
export default ${cn};
`;
  all.push(writeComponent('cards', cn, jsxCode, css, c.n + ': Glassmorphic card with frosted blur & glow orbs'));
});

// Style 4: Hover-Reveal Card
cardColors.forEach(c => {
  const cn = c.n + 'HoverCard';
  const cls = 'card-hover-' + c.n.toLowerCase();
  const css = `
.${cls} {
  width: 320px; height: 200px;
  background: linear-gradient(135deg, ${c.dark}, #111);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex; align-items: flex-end;
}
.${cls} .overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%);
  transition: background 0.4s;
}
.${cls}:hover .overlay {
  background: linear-gradient(to top, ${c.dark}ee 0%, ${c.dark}88 100%);
}
.${cls} .hover-content {
  position: relative; z-index: 2;
  padding: 20px 24px;
  transform: translateY(20px);
  transition: transform 0.4s;
}
.${cls}:hover .hover-content {
  transform: translateY(0);
}
.${cls} .hover-tag {
  font-size: 11px; text-transform: uppercase; letter-spacing: 2px;
  color: ${c.light}; margin-bottom: 6px; font-weight: 600;
}
.${cls} .hover-title {
  font-size: 20px; font-weight: 700; color: #fff; margin-bottom: 8px;
}
.${cls} .hover-desc {
  font-size: 13px; color: rgba(255,255,255,0.6);
  opacity: 0; transform: translateY(10px);
  transition: opacity 0.4s 0.1s, transform 0.4s 0.1s;
}
.${cls}:hover .hover-desc {
  opacity: 1; transform: translateY(0);
}
`;
  const jsxCode = `import React from 'react';
import './${cn}.css';

const ${cn} = () => (
  <div className="${cls}">
    <div className="overlay"></div>
    <div className="hover-content">
      <div className="hover-tag">Featured</div>
      <div className="hover-title">Hover to Reveal</div>
      <div className="hover-desc">Additional details slide into view with a smooth transition on hover.</div>
    </div>
  </div>
);

export const code = \`${esc(css)}\`;
export default ${cn};
`;
  all.push(writeComponent('cards', cn, jsxCode, css, c.n + ': Hover-reveal card with sliding content'));
});

// Style 5: Product Card
cardColors.forEach(c => {
  const cn = c.n + 'ProductCard';
  const cls = 'card-product-' + c.n.toLowerCase();
  const css = `
.${cls} {
  width: 280px;
  background: #111114;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.${cls}:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.5);
}
.${cls} .prod-img {
  height: 180px;
  background: linear-gradient(160deg, ${c.bg}, ${c.dark});
  display: flex; align-items: center; justify-content: center;
  font-size: 60px;
  position: relative;
}
.${cls} .prod-badge {
  position: absolute; top: 12px; right: 12px;
  background: ${c.hex};
  color: #fff;
  font-size: 11px; font-weight: 700;
  padding: 4px 10px;
  border-radius: 6px;
}
.${cls} .prod-body { padding: 20px; }
.${cls} .prod-name {
  font-size: 16px; font-weight: 600; color: #fff; margin-bottom: 6px;
}
.${cls} .prod-desc {
  font-size: 13px; color: rgba(255,255,255,0.5); margin-bottom: 16px;
}
.${cls} .prod-footer {
  display: flex; justify-content: space-between; align-items: center;
}
.${cls} .prod-price {
  font-size: 22px; font-weight: 800; color: ${c.hex};
}
.${cls} .prod-buy {
  padding: 8px 18px;
  background: transparent;
  border: 1.5px solid ${c.hex};
  color: ${c.hex};
  border-radius: 8px;
  font-size: 13px; font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.${cls} .prod-buy:hover {
  background: ${c.hex};
  color: #fff;
}
`;
  const jsxCode = `import React from 'react';
import './${cn}.css';

const ${cn} = () => (
  <div className="${cls}">
    <div className="prod-img">
      🎧
      <div className="prod-badge">NEW</div>
    </div>
    <div className="prod-body">
      <div className="prod-name">Premium Headphones</div>
      <div className="prod-desc">Wireless noise-cancelling audio</div>
      <div className="prod-footer">
        <div className="prod-price">$199</div>
        <button className="prod-buy">Add to Cart</button>
      </div>
    </div>
  </div>
);

export const code = \`${esc(css)}\`;
export default ${cn};
`;
  all.push(writeComponent('cards', cn, jsxCode, css, c.n + ': Product card with image, badge & Add to Cart'));
});


// ═══════════════════════════════════════
//  HERO SECTIONS (15 = 3 styles × 5 colors)
// ═══════════════════════════════════════

// Style 1: Gradient Mesh Hero
cardColors.forEach(c => {
  const cn = c.n + 'GradientHero';
  const cls = 'hero-gradient-' + c.n.toLowerCase();
  const css = `
.${cls} {
  width: 100%;
  min-height: 320px;
  background: linear-gradient(135deg, #0a0a0c 0%, ${c.dark} 50%, #0a0a0c 100%);
  border-radius: 16px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center;
  padding: 48px 24px;
  position: relative;
  overflow: hidden;
}
.${cls}::before {
  content: '';
  position: absolute;
  width: 300px; height: 300px;
  background: ${c.hex};
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.3;
  top: -80px; right: -60px;
}
.${cls} .hero-tagline {
  font-size: 12px; text-transform: uppercase; letter-spacing: 3px;
  color: ${c.light}; font-weight: 600; margin-bottom: 16px;
  position: relative; z-index: 1;
}
.${cls} .hero-title {
  font-size: 40px; font-weight: 800; color: #fff;
  line-height: 1.2; max-width: 500px; margin-bottom: 16px;
  position: relative; z-index: 1;
}
.${cls} .hero-subtitle {
  font-size: 16px; color: rgba(255,255,255,0.5);
  max-width: 420px; margin-bottom: 32px;
  position: relative; z-index: 1;
}
.${cls} .hero-cta {
  padding: 14px 32px;
  background: ${c.hex};
  color: #fff;
  border: none; border-radius: 10px;
  font-size: 15px; font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative; z-index: 1;
}
.${cls} .hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px ${c.dark};
}
`;
  const jsxCode = `import React from 'react';
import './${cn}.css';

const ${cn} = () => (
  <div className="${cls}">
    <div className="hero-tagline">Welcome to the future</div>
    <h1 className="hero-title">Build Beautiful Interfaces</h1>
    <p className="hero-subtitle">Create stunning, modern web experiences with our premium design components.</p>
    <button className="hero-cta">Get Started Free</button>
  </div>
);

export const code = \`${esc(css)}\`;
export default ${cn};
`;
  all.push(writeComponent('heroes', cn, jsxCode, css, c.n + ': Gradient mesh hero with CTA'));
});

// Style 2: Split Hero
cardColors.forEach(c => {
  const cn = c.n + 'SplitHero';
  const cls = 'hero-split-' + c.n.toLowerCase();
  const css = `
.${cls} {
  width: 100%;
  min-height: 300px;
  display: flex;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
}
.${cls} .hero-left {
  flex: 1;
  padding: 48px 40px;
  display: flex; flex-direction: column; justify-content: center;
  background: #0d0d10;
}
.${cls} .hero-right {
  flex: 1;
  background: linear-gradient(135deg, ${c.dark}, ${c.hex});
  display: flex; align-items: center; justify-content: center;
  font-size: 80px;
  min-width: 200px;
}
.${cls} .hero-label {
  display: inline-block;
  background: ${c.hex}22;
  color: ${c.hex};
  font-size: 12px; font-weight: 600;
  padding: 4px 12px;
  border-radius: 6px;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.${cls} .hero-h1 {
  font-size: 32px; font-weight: 800; color: #fff;
  line-height: 1.2; margin-bottom: 12px;
}
.${cls} .hero-p {
  font-size: 15px; color: rgba(255,255,255,0.5);
  margin-bottom: 24px; line-height: 1.6;
}
.${cls} .hero-actions { display: flex; gap: 12px; }
.${cls} .btn-primary {
  padding: 12px 24px;
  background: ${c.hex}; color: #fff;
  border: none; border-radius: 8px;
  font-weight: 600; cursor: pointer;
  transition: filter 0.2s;
}
.${cls} .btn-primary:hover { filter: brightness(1.15); }
.${cls} .btn-ghost {
  padding: 12px 24px;
  background: transparent;
  color: rgba(255,255,255,0.7);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  font-weight: 600; cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.${cls} .btn-ghost:hover {
  border-color: ${c.hex};
  color: ${c.hex};
}
`;
  const jsxCode = `import React from 'react';
import './${cn}.css';

const ${cn} = () => (
  <div className="${cls}">
    <div className="hero-left">
      <span className="hero-label">New Release</span>
      <h1 className="hero-h1">Design System 2.0</h1>
      <p className="hero-p">Everything you need to build modern, responsive interfaces at scale.</p>
      <div className="hero-actions">
        <button className="btn-primary">Launch App</button>
        <button className="btn-ghost">Learn More</button>
      </div>
    </div>
    <div className="hero-right">🚀</div>
  </div>
);

export const code = \`${esc(css)}\`;
export default ${cn};
`;
  all.push(writeComponent('heroes', cn, jsxCode, css, c.n + ': Split hero with image area & dual CTA'));
});

// Style 3: Centered Minimal Hero
cardColors.forEach(c => {
  const cn = c.n + 'MinimalHero';
  const cls = 'hero-minimal-' + c.n.toLowerCase();
  const css = `
.${cls} {
  width: 100%;
  min-height: 280px;
  border-radius: 16px;
  padding: 56px 24px;
  text-align: center;
  background: #0a0a0c;
  border: 1px solid rgba(255,255,255,0.06);
  position: relative;
}
.${cls} .glow-line {
  width: 80px; height: 3px;
  background: ${c.hex};
  margin: 0 auto 24px;
  border-radius: 99px;
  box-shadow: 0 0 20px ${c.hex};
}
.${cls} .min-title {
  font-size: 36px; font-weight: 800; color: #fff;
  margin-bottom: 12px;
}
.${cls} .min-title span { color: ${c.hex}; }
.${cls} .min-sub {
  font-size: 16px; color: rgba(255,255,255,0.45);
  max-width: 460px; margin: 0 auto 28px; line-height: 1.6;
}
.${cls} .min-input-group {
  display: inline-flex;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  overflow: hidden;
}
.${cls} .min-input {
  padding: 12px 20px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 14px;
  outline: none;
  width: 260px;
}
.${cls} .min-input::placeholder { color: rgba(255,255,255,0.3); }
.${cls} .min-submit {
  padding: 12px 24px;
  background: ${c.hex};
  color: #fff;
  border: none;
  font-weight: 600; font-size: 14px;
  cursor: pointer;
  transition: filter 0.2s;
}
.${cls} .min-submit:hover { filter: brightness(1.15); }
`;
  const jsxCode = `import React from 'react';
import './${cn}.css';

const ${cn} = () => (
  <div className="${cls}">
    <div className="glow-line"></div>
    <h1 className="min-title">Start <span>Building</span> Today</h1>
    <p className="min-sub">Join thousands of developers using premium UI components to ship faster.</p>
    <div className="min-input-group">
      <input className="min-input" placeholder="Enter your email" readOnly />
      <button className="min-submit">Subscribe</button>
    </div>
  </div>
);

export const code = \`${esc(css)}\`;
export default ${cn};
`;
  all.push(writeComponent('heroes', cn, jsxCode, css, c.n + ': Minimal hero with email capture form'));
});


// ═══════════════════════════════════════
//  FOOTERS (10 = 2 styles × 5 colors)
// ═══════════════════════════════════════

// Style 1: Multi-Column Footer
cardColors.forEach(c => {
  const cn = c.n + 'MultiFooter';
  const cls = 'footer-multi-' + c.n.toLowerCase();
  const css = `
.${cls} {
  width: 100%;
  background: #08080a;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  padding: 48px 40px 24px;
}
.${cls} .footer-top {
  display: flex; flex-wrap: wrap; gap: 40px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.${cls} .footer-brand { flex: 1.5; min-width: 200px; }
.${cls} .brand-name {
  font-size: 22px; font-weight: 800; color: #fff;
  margin-bottom: 10px;
}
.${cls} .brand-name span { color: ${c.hex}; }
.${cls} .brand-desc {
  font-size: 13px; color: rgba(255,255,255,0.4);
  line-height: 1.6; max-width: 280px;
}
.${cls} .footer-col { flex: 1; min-width: 120px; }
.${cls} .col-title {
  font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.7);
  text-transform: uppercase; letter-spacing: 1.5px;
  margin-bottom: 16px;
}
.${cls} .col-links { list-style: none; padding: 0; margin: 0; }
.${cls} .col-links li {
  margin-bottom: 10px;
}
.${cls} .col-links a {
  font-size: 14px; color: rgba(255,255,255,0.4);
  text-decoration: none;
  transition: color 0.2s;
}
.${cls} .col-links a:hover { color: ${c.hex}; }
.${cls} .footer-bottom {
  padding-top: 20px;
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 12px;
}
.${cls} .copyright { font-size: 12px; color: rgba(255,255,255,0.3); }
.${cls} .socials { display: flex; gap: 12px; }
.${cls} .social-icon {
  width: 32px; height: 32px;
  border-radius: 8px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}
.${cls} .social-icon:hover {
  background: ${c.hex}22;
  border-color: ${c.hex};
}
`;
  const jsxCode = `import React from 'react';
import './${cn}.css';

const ${cn} = () => (
  <div className="${cls}">
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
        <div className="social-icon">▶</div>
      </div>
    </div>
  </div>
);

export const code = \`${esc(css)}\`;
export default ${cn};
`;
  all.push(writeComponent('footers', cn, jsxCode, css, c.n + ': Multi-column footer with brand, links & socials'));
});

// Style 2: Minimal CTA Footer
cardColors.forEach(c => {
  const cn = c.n + 'MinimalFooter';
  const cls = 'footer-minimal-' + c.n.toLowerCase();
  const css = `
.${cls} {
  width: 100%;
  background: #08080a;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  overflow: hidden;
}
.${cls} .footer-cta-section {
  padding: 40px;
  text-align: center;
  background: linear-gradient(135deg, ${c.dark}44, transparent);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.${cls} .cta-title {
  font-size: 24px; font-weight: 700; color: #fff;
  margin-bottom: 8px;
}
.${cls} .cta-sub {
  font-size: 14px; color: rgba(255,255,255,0.45);
  margin-bottom: 20px;
}
.${cls} .cta-button {
  padding: 12px 28px;
  background: ${c.hex}; color: #fff;
  border: none; border-radius: 8px;
  font-size: 14px; font-weight: 600;
  cursor: pointer;
  transition: filter 0.2s, transform 0.2s;
}
.${cls} .cta-button:hover {
  filter: brightness(1.15);
  transform: translateY(-2px);
}
.${cls} .footer-bar {
  padding: 20px 40px;
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 12px;
}
.${cls} .footer-links {
  display: flex; gap: 24px;
}
.${cls} .footer-links a {
  font-size: 13px; color: rgba(255,255,255,0.4);
  text-decoration: none;
  transition: color 0.2s;
}
.${cls} .footer-links a:hover { color: ${c.hex}; }
.${cls} .footer-copy {
  font-size: 12px; color: rgba(255,255,255,0.25);
}
`;
  const jsxCode = `import React from 'react';
import './${cn}.css';

const ${cn} = () => (
  <div className="${cls}">
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

export const code = \`${esc(css)}\`;
export default ${cn};
`;
  all.push(writeComponent('footers', cn, jsxCode, css, c.n + ': Minimal footer with CTA banner'));
});


// ═══════════════════════════════════════
//  WRITE UPDATED App.jsx
// ═══════════════════════════════════════
const appPath = path.resolve('./src/App.jsx');

// Read existing button imports from App.jsx to preserve them
const existingApp = fs.readFileSync(appPath, 'utf-8');
// Extract all lines that start with import
const existingImports = existingApp.split('\n').filter(l => l.startsWith('import ')).join('\n');

const newImports = all.map(c =>
  'import ' + c.name + ', { code as code' + c.name + " } from '" + c.importPath + "';"
).join('\n');

// Group by category
const cards = all.filter(c => c.category === 'cards');
const heroes = all.filter(c => c.category === 'heroes');
const footers = all.filter(c => c.category === 'footers');

function makeShowcaseEntries(items, startIdx) {
  return items.map((c, i) =>
    '        <ComponentShowcase\n' +
    '          title="' + c.name + '"\n' +
    '          description="' + c.desc + '"\n' +
    '          component={' + c.name + '}\n' +
    '          code={code' + c.name + '}\n' +
    '        />'
  ).join('\n');
}

const appCode = existingImports + '\n' + newImports + '\n\n' +
`function App() {
  const [activeCategory, setActiveCategory] = React.useState('buttons');

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Premium UI Showcase</h1>
        <p className="app-subtitle">
          A collection of 150+ stunning, copy-pasteable components built with Vanilla CSS and React.
        </p>
      </header>

      <nav className="category-nav">
        <button className={"cat-btn" + (activeCategory === 'buttons' ? ' active' : '')} onClick={() => setActiveCategory('buttons')}>
          🔘 Buttons <span className="cat-count">104</span>
        </button>
        <button className={"cat-btn" + (activeCategory === 'cards' ? ' active' : '')} onClick={() => setActiveCategory('cards')}>
          🃏 Cards <span className="cat-count">${cards.length}</span>
        </button>
        <button className={"cat-btn" + (activeCategory === 'heroes' ? ' active' : '')} onClick={() => setActiveCategory('heroes')}>
          🏔️ Heroes <span className="cat-count">${heroes.length}</span>
        </button>
        <button className={"cat-btn" + (activeCategory === 'footers' ? ' active' : '')} onClick={() => setActiveCategory('footers')}>
          📋 Footers <span className="cat-count">${footers.length}</span>
        </button>
      </nav>

      {activeCategory === 'buttons' && (
        <main className="components-grid">
` +
// Keep existing button showcase entries
existingApp.split('<main className="components-grid">')[1].split('</main>')[0] +
`
        </main>
      )}

      {activeCategory === 'cards' && (
        <main className="components-grid components-grid-wide">
${makeShowcaseEntries(cards, 0)}
        </main>
      )}

      {activeCategory === 'heroes' && (
        <main className="components-grid components-grid-full">
${makeShowcaseEntries(heroes, 0)}
        </main>
      )}

      {activeCategory === 'footers' && (
        <main className="components-grid components-grid-full">
${makeShowcaseEntries(footers, 0)}
        </main>
      )}
    </div>
  );
}

export default App;
`;

fs.writeFileSync(appPath, appCode);
console.log('Generated ' + all.length + ' new components (' + cards.length + ' cards, ' + heroes.length + ' heroes, ' + footers.length + ' footers)!');
