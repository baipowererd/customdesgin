import React from 'react';

const navbarEffects = [
    // 1. Sticky Navbar
    {
        title: 'Sticky Navbar',
        description: 'Fixed to top, subtle shadow, color‑customizable.',
        multiColor: false,
        cssTemplate: (c) => `.sticky-nav{position:sticky;top:0;width:100%;background:${c.primary};padding:12px 24px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 8px rgba(0,0,0,0.4);z-index:10}.sticky-nav .logo{font-size:20px;font-weight:700;color:#fff}`,
        renderPreview: (c) => (
            <div className="sticky-nav">
                <div className="logo">Brand</div>
                <nav>
                    <a href="#!" onClick={(e) => e.preventDefault()} style={{ color: '#fff', marginRight: 12 }}>Home</a>
                    <a href="#!" onClick={(e) => e.preventDefault()} style={{ color: '#fff', marginRight: 12 }}>Docs</a>
                    <a href="#!" onClick={(e) => e.preventDefault()} style={{ color: '#fff' }}>Contact</a>
                </nav>
            </div>
        ),
    },
    // 2. Transparent Navbar
    {
        title: 'Transparent Navbar',
        description: 'Overlay on hero, transparent background with blur.',
        multiColor: false,
        cssTemplate: (c) => `.transparent-nav{position:fixed;top:0;width:100%;background:rgba(10,10,12,0.4);backdrop-filter:blur(12px);padding:14px 28px;display:flex;align-items:center;justify-content:space-between;z-index:10}.transparent-nav .logo{font-size:20px;font-weight:700;color:#fff}`,
        renderPreview: (c) => (
            <div className="transparent-nav">
                <div className="logo">Brand</div>
                <nav>
                    <a href="#!" onClick={(e) => e.preventDefault()} style={{ color: '#fff', marginRight: 12 }}>Home</a>
                    <a href="#!" onClick={(e) => e.preventDefault()} style={{ color: '#fff', marginRight: 12 }}>Features</a>
                    <a href="#!" onClick={(e) => e.preventDefault()} style={{ color: '#fff' }}>Login</a>
                </nav>
            </div>
        ),
    },
    // 3. Hamburger Menu
    {
        title: 'Hamburger Navbar',
        description: 'Mobile‑first menu with animated hamburger icon.',
        multiColor: false,
        cssTemplate: (c) => `.hamburger-nav{position:relative;background:${c.primary};padding:12px 24px;display:flex;align-items:center;justify-content:space-between}.hamburger-nav .logo{font-size:20px;font-weight:700;color:#fff}.hamburger-nav .menu-btn{width:28px;height:28px;position:relative;cursor:pointer}.hamburger-nav .menu-btn span{display:block;height:3px;background:#fff;margin:5px 0;transition:0.3s}.hamburger-nav .menu{display:none;position:absolute;top:100%;left:0;width:100%;background:${c.primary};padding:12px 0}.hamburger-nav .menu a{display:block;padding:8px 24px;color:#fff;text-decoration:none}`,
        renderPreview: (c) => (
            <div className="hamburger-nav">
                <div className="logo">Brand</div>
                <div className="menu-btn" onClick={(e) => { const menu = document.querySelector('.hamburger-nav .menu'); menu.style.display = menu.style.display === 'block' ? 'none' : 'block'; }}>
                    <span></span><span></span><span></span>
                </div>
                <div className="menu">
                    <a href="#!" onClick={(e) => e.preventDefault()}>Home</a>
                    <a href="#!" onClick={(e) => e.preventDefault()}>Docs</a>
                    <a href="#!" onClick={(e) => e.preventDefault()}>Contact</a>
                </div>
            </div>
        ),
    },
    // 4. Glassmorphic Navbar
    {
        title: 'Glassmorphic Navbar',
        description: 'Frosted‑glass background with subtle glow.',
        multiColor: true,
        cssTemplate: (c) => `.glass-nav{position:sticky;top:0;width:100%;background:rgba(255,255,255,0.04);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,0.1);padding:12px 24px;display:flex;align-items:center;justify-content:space-between;z-index:10}.glass-nav .logo{font-size:20px;font-weight:700;color:${c.primary}}.glass-nav nav a{color:${c.secondary};margin-right:16px;text-decoration:none}`,
        renderPreview: (c) => (
            <div className="glass-nav">
                <div className="logo">Brand</div>
                <nav>
                    <a href="#!" onClick={(e) => e.preventDefault()}>Home</a>
                    <a href="#!" onClick={(e) => e.preventDefault()}>Features</a>
                    <a href="#!" onClick={(e) => e.preventDefault()}>Pricing</a>
                </nav>
            </div>
        ),
    },
    // 5. Centered Logo Navbar
    {
        title: 'Centered Logo Navbar',
        description: 'Navigation links on the sides with a prominent centered logo.',
        multiColor: true,
        cssTemplate: (c) => `.center-nav{background:${c.dark};padding:16px 32px;display:flex;align-items:center;justify-content:center;position:relative}.center-nav .nav-links{display:flex;gap:24px}.center-nav .nav-left{position:absolute;left:32px}.center-nav .nav-right{position:absolute;right:32px}.center-nav a{color:${c.light};text-decoration:none;font-size:14px;transition:0.3s}.center-nav a:hover{color:${c.primary}}.center-nav .logo{font-size:24px;font-weight:900;letter-spacing:2px;color:#fff}`,
        renderPreview: (c) => (
            <div className="center-nav">
                <nav className="nav-links nav-left">
                    <a href="#!" onClick={(e) => e.preventDefault()}>Shop</a>
                    <a href="#!" onClick={(e) => e.preventDefault()}>Collections</a>
                </nav>
                <div className="logo">BRAND</div>
                <nav className="nav-links nav-right">
                    <a href="#!" onClick={(e) => e.preventDefault()}>Journal</a>
                    <a href="#!" onClick={(e) => e.preventDefault()}>Contact</a>
                </nav>
            </div>
        ),
    },
    // 6. Floating Pill Navbar
    {
        title: 'Floating Pill Navbar',
        description: 'Compact, pill-shaped navbar that floats at the top.',
        multiColor: false,
        cssTemplate: (c) => `.pill-nav-container{padding:20px;background:transparent}.pill-nav{background:${c.dark};max-width:400px;margin:0 auto;padding:12px 24px;border-radius:50px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 10px 30px rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.05)}.pill-nav .logo{font-weight:bold;color:#fff;background:${c.primary};width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:50%}.pill-nav nav{display:flex;gap:16px}.pill-nav nav a{color:${c.light};text-decoration:none;font-size:14px;transition:0.3s}.pill-nav nav a:hover{color:#fff}`,
        renderPreview: (c) => (
            <div className="pill-nav-container">
                <div className="pill-nav">
                    <div className="logo">B</div>
                    <nav>
                        <a href="#!" onClick={(e) => e.preventDefault()}>Home</a>
                        <a href="#!" onClick={(e) => e.preventDefault()}>Work</a>
                        <a href="#!" onClick={(e) => e.preventDefault()}>About</a>
                    </nav>
                </div>
            </div>
        ),
    },
    // 7. Minimalist Underline Navbar
    {
        title: 'Minimalist Underline',
        description: 'Clean design with a bottom border and animating link underlines.',
        multiColor: false,
        cssTemplate: (c) => `.minimal-nav{background:transparent;padding:20px 40px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.1)}.minimal-nav .logo{font-size:18px;font-weight:600;color:#fff}.minimal-nav nav{display:flex;gap:32px}.minimal-nav nav a{color:${c.light};text-decoration:none;font-size:14px;position:relative;padding-bottom:4px}.minimal-nav nav a::after{content:'';position:absolute;left:0;bottom:0;width:0%;height:2px;background:${c.primary};transition:0.3s}.minimal-nav nav a:hover::after{width:100%}`,
        renderPreview: (c) => (
            <div className="minimal-nav">
                <div className="logo">Minimal.</div>
                <nav>
                    <a href="#!" onClick={(e) => e.preventDefault()}>Products</a>
                    <a href="#!" onClick={(e) => e.preventDefault()}>Services</a>
                    <a href="#!" onClick={(e) => e.preventDefault()}>Platform</a>
                </nav>
            </div>
        ),
    },
    // 8. Call-to-Action Navbar
    {
        title: 'Call-to-Action Navbar',
        description: 'Standard layout featuring a prominent CTA button.',
        multiColor: true,
        cssTemplate: (c) => `.cta-nav{background:${c.dark};padding:16px 32px;display:flex;align-items:center;justify-content:space-between}.cta-nav .logo{font-size:22px;font-weight:800;color:#fff}.cta-nav .nav-center{display:flex;gap:24px}.cta-nav .nav-center a{color:#fff;opacity:0.8;text-decoration:none;font-size:15px;transition:0.3s}.cta-nav .nav-center a:hover{opacity:1}.cta-nav .cta-btn{background:linear-gradient(135deg,${c.primary},${c.secondary});color:#fff;border:none;padding:10px 20px;border-radius:8px;font-weight:600;cursor:pointer;transition:transform 0.2s}.cta-nav .cta-btn:hover{transform:translateY(-2px)}`,
        renderPreview: (c) => (
            <div className="cta-nav">
                <div className="logo">Startup</div>
                <nav className="nav-center">
                    <a href="#!" onClick={(e) => e.preventDefault()}>Features</a>
                    <a href="#!" onClick={(e) => e.preventDefault()}>Pricing</a>
                    <a href="#!" onClick={(e) => e.preventDefault()}>Blog</a>
                </nav>
                <button className="cta-btn">{c.text || 'Get Started'}</button>
            </div>
        ),
    },
    // 8b. macOS Dock
    {
        title: 'macOS Dock',
        description: 'Iconic hovering app dock with magnification effect on hover.',
        multiColor: false,
        cssTemplate: (c) => `.macos-dock-container{padding:20px;display:flex;justify-content:center}.macos-dock{display:flex;gap:12px;padding:10px 14px;background:rgba(255,255,255,0.2);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.4);border-radius:18px;box-shadow:0 10px 30px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.6)}.macos-dock-icon{width:48px;height:48px;background:rgba(255,255,255,0.9);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;cursor:pointer;transition:all 0.2s cubic-bezier(0.25, 1, 0.5, 1);box-shadow:0 4px 10px rgba(0,0,0,0.2);position:relative}.macos-dock-icon:hover{transform:scale(1.4) translateY(-10px);z-index:2}.macos-dock-icon:active{transform:scale(1.1) translateY(-2px)}.macos-dock-icon::after{content:'';position:absolute;bottom:-8px;width:4px;height:4px;background:rgba(255,255,255,0.8);border-radius:50%;opacity:0}.macos-dock-icon.active::after{opacity:1}`,
        renderPreview: (c) => (
            <div className="macos-dock-container">
                <div className="macos-dock">
                    <div className="macos-dock-icon"></div>
                    <div className="macos-dock-icon active">️</div>
                    <div className="macos-dock-icon"></div>
                    <div className="macos-dock-icon">️</div>
                </div>
            </div>
        ),
    },
    // 9. Dual-Row Navbar
    {
        title: 'Dual-Row Navbar',
        description: 'Top row for contacts/socials, bottom row for navigation.',
        multiColor: true,
        cssTemplate: (c) => `.dual-nav{display:flex;flex-direction:column}.dual-nav .top-row{background:${c.dark};padding:8px 32px;display:flex;justify-content:space-between;font-size:12px;color:${c.light};border-bottom:1px solid rgba(255,255,255,0.05)}.dual-nav .bottom-row{background:${c.primary};padding:16px 32px;display:flex;align-items:center;justify-content:space-between}.dual-nav .logo{font-size:24px;font-weight:bold;color:#fff}.dual-nav nav{display:flex;gap:24px}.dual-nav nav a{color:#fff;text-decoration:none;font-size:15px;font-weight:500;text-transform:uppercase;letter-spacing:1px}`,
        renderPreview: (c) => (
            <div className="dual-nav">
                <div className="top-row">
                    <span>Email: hello@brand.com</span>
                    <span>Follow Us: 𝕏 | IG | IN</span>
                </div>
                <div className="bottom-row">
                    <div className="logo">Corporate</div>
                    <nav>
                        <a href="#!" onClick={(e) => e.preventDefault()}>Home</a>
                        <a href="#!" onClick={(e) => e.preventDefault()}>About</a>
                        <a href="#!" onClick={(e) => e.preventDefault()}>Investors</a>
                    </nav>
                </div>
            </div>
        ),
    },
    // 10. Split Glow Navbar
    {
        title: 'Split Glow Navbar',
        description: 'Modern boxed navbar with a bottom glowing border.',
        multiColor: false,
        cssTemplate: (c) => `.glow-nav-wrap{padding:24px;background:transparent}.glow-nav{background:${c.dark};padding:16px 32px;border-radius:12px;display:flex;align-items:center;justify-content:space-between;border-bottom:3px solid ${c.primary};box-shadow:0 8px 30px rgba(0,0,0,0.6), 0 4px 15px ${c.primary}40}.glow-nav .logo{color:${c.primary};font-size:22px;font-weight:900;text-transform:uppercase}.glow-nav nav{display:flex;gap:20px;align-items:center}.glow-nav nav a{color:#fff;text-decoration:none;font-size:14px;opacity:0.7;transition:0.3s}.glow-nav nav a:hover{opacity:1;color:${c.primary}}`,
        renderPreview: (c) => (
            <div className="glow-nav-wrap">
                <div className="glow-nav">
                    <div className="logo">Neon</div>
                    <nav>
                        <a href="#!" onClick={(e) => e.preventDefault()}>Home</a>
                        <a href="#!" onClick={(e) => e.preventDefault()}>Explore</a>
                        <a href="#!" onClick={(e) => e.preventDefault()}>Profile</a>
                    </nav>
                </div>
            </div>
        ),
    },
    // 11. Neumorphic Navbar
    {
        title: 'Neumorphic Navbar',
        description: 'A soft, embossed dark-mode navigation bar.',
        multiColor: true,
        cssTemplate: (c) => `.neu-nav{background:var(--neu-bg);padding:16px 32px;display:flex;align-items:center;justify-content:space-between;box-shadow:8px 8px 16px var(--neu-shadow-dark), -8px -8px 16px var(--neu-shadow-light);border-radius:0 0 24px 24px;margin-bottom:20px}.neu-nav .logo{font-size:22px;font-weight:800;color:${c.primary};letter-spacing:1px;text-shadow:2px 2px 4px var(--neu-shadow-dark), -2px -2px 4px var(--neu-shadow-light)}.neu-nav nav{display:flex;gap:16px}.neu-nav nav a{padding:10px 20px;background:var(--neu-bg);color:var(--text-primary);text-decoration:none;font-size:14px;font-weight:600;border-radius:12px;box-shadow:4px 4px 8px var(--neu-shadow-dark), -4px -4px 8px var(--neu-shadow-light);transition:all 0.2s ease}.neu-nav nav a:hover{color:${c.primary}}.neu-nav nav a:active{box-shadow:inset 4px 4px 8px var(--neu-shadow-dark), inset -4px -4px 8px var(--neu-shadow-light)}`,
        renderPreview: (c) => (
            <div className="neu-nav">
                <div className="logo">NEXUS</div>
                <nav>
                    <a href="#!" onClick={(e) => e.preventDefault()}>Home</a>
                    <a href="#!" onClick={(e) => e.preventDefault()}>About</a>
                    <a href="#!" onClick={(e) => e.preventDefault()}>Contact</a>
                </nav>
            </div>
        ),
    },
    {
        title: 'Noir Navbar',
        description: 'A dark noir minimal navbar with pure black background, subtle bottom border, and accent-lit active link. Midnight ticket theme.',
        multiColor: true,
        cssTemplate: (c) => `.noir-nav{width:100%;background:#0a0a0a;border-bottom:1px solid #1a1a1a;padding:0 24px;display:flex;align-items:center;justify-content:space-between;font-family:'Inter',system-ui,sans-serif;height:56px;box-sizing:border-box}.noir-nav-brand{font-size:1rem;font-weight:800;color:#fff;letter-spacing:1px;display:flex;align-items:center;gap:8px}.noir-nav-dot{width:8px;height:8px;border-radius:50%;background:${c.primary}}.noir-nav-links{display:flex;gap:0}.noir-nav-links a{color:rgba(255,255,255,.35);text-decoration:none;font-size:.82rem;font-weight:500;padding:18px 16px;position:relative;transition:color .2s;border-bottom:2px solid transparent}.noir-nav-links a:hover{color:rgba(255,255,255,.7)}.noir-nav-links a.active{color:${c.primary};border-bottom-color:${c.primary}}.noir-nav-right{display:flex;align-items:center;gap:10px}.noir-nav-btn{padding:7px 18px;background:transparent;border:1px solid #333;border-radius:8px;color:rgba(255,255,255,.6);font-size:.75rem;font-weight:600;cursor:pointer;transition:all .2s}.noir-nav-btn:hover{border-color:${c.primary};color:${c.primary}}`,
        renderPreview: (c) => (
            <div className="noir-nav">
                <div className="noir-nav-brand"><div className="noir-nav-dot" /> Ticketo</div>
                <nav className="noir-nav-links">
                    <a href="#!" className="active" onClick={e => e.preventDefault()}>Events</a>
                    <a href="#!" onClick={e => e.preventDefault()}>Tickets</a>
                    <a href="#!" onClick={e => e.preventDefault()}>Schedule</a>
                    <a href="#!" onClick={e => e.preventDefault()}>About</a>
                </nav>
                <div className="noir-nav-right">
                    <button className="noir-nav-btn">Sign In</button>
                </div>
            </div>
        ),
    },
    {
        title: 'Manga Sticker Navbar',
        description: 'A bold, high-contrast navbar with thick black outlines, halftone accents, and chunky links. Japanese street art theme.',
        multiColor: true,
        cssTemplate: (c) => `.manga-nav{width:100%;background:#e3ded6;border-bottom:4px solid #0a0a0a;padding:0 24px;display:flex;align-items:center;justify-content:space-between;font-family:'Inter',system-ui,sans-serif;height:64px;box-sizing:border-box;position:relative;overflow:hidden}.manga-nav::before{content:'';position:absolute;inset:0;background-image:radial-gradient(#0a0a0a 15%,transparent 16%);background-size:8px 8px;opacity:0.05;z-index:0;pointer-events:none}.manga-nav-brand{font-size:1.4rem;font-weight:900;color:#0a0a0a;text-transform:uppercase;letter-spacing:-1px;display:flex;align-items:center;gap:8px;position:relative;z-index:1;text-shadow:2px 2px 0px ${c.primary}, -1px -1px 0 #0a0a0a, 1px -1px 0 #0a0a0a, -1px 1px 0 #0a0a0a, 1px 1px 0 #0a0a0a;color:#fff}.manga-nav-links{display:flex;gap:16px;position:relative;z-index:1;align-items:center}.manga-nav-link{color:#0a0a0a;text-decoration:none;font-size:.9rem;font-weight:800;text-transform:uppercase;letter-spacing:1px;position:relative;transition:all .2s;background:#fff;border:2px solid #0a0a0a;padding:4px 12px;box-shadow:3px 3px 0px ${c.primary}}.manga-nav-link:hover{transform:translate(2px,2px);box-shadow:1px 1px 0px ${c.primary}}`,
        renderPreview: (c) => (
            <div className="manga-nav">
                <div className="manga-nav-brand">東京</div>
                <nav className="manga-nav-links">
                    <a href="#!" className="manga-nav-link" onClick={e => e.preventDefault()}>Shop</a>
                    <a href="#!" className="manga-nav-link" onClick={e => e.preventDefault()}>About</a>
                </nav>
            </div>
        ),
    },
    {
        title: 'Indic Royal Navbar',
        description: 'A grand navigation bar with warm off-white tones, subtle border styling, and elegant typography suitable for cultural heritage themes.',
        multiColor: true,
        cssTemplate: (c) => `.indic-nav{width:100%;background:#fffdf5;border-bottom:1px solid ${c.primary}22;padding:0 32px;display:flex;align-items:center;justify-content:space-between;height:72px;box-sizing:border-box;box-shadow:0 4px 12px rgba(0,0,0,.02);position:relative}.indic-nav::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent 0%,${c.primary}66 50%,transparent 100%)}.indic-nav-brand{font-size:1.6rem;font-weight:400;color:${c.primary};font-family:'Georgia',serif;display:flex;align-items:center;gap:12px;letter-spacing:1px}.indic-nav-links{display:flex;gap:24px;align-items:center}.indic-nav-link{color:#5a4a42;text-decoration:none;font-size:15px;font-family:'Inter',sans-serif;font-weight:500;transition:all .2s;position:relative;padding:8px 4px}.indic-nav-link:hover{color:${c.primary}}.indic-nav-link.active{color:${c.primary};font-weight:700}.indic-nav-link.active::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:${c.primary};border-radius:2px}`,
        renderPreview: (c) => (
            <div className="indic-nav">
                <div className="indic-nav-brand">🪔 Virasat</div>
                <nav className="indic-nav-links">
                    <a href="#!" className="indic-nav-link active" onClick={e => e.preventDefault()}>Traditions</a>
                    <a href="#!" className="indic-nav-link" onClick={e => e.preventDefault()}>Heritage</a>
                    <a href="#!" className="indic-nav-link" onClick={e => e.preventDefault()}>Culture</a>
                </nav>
            </div>
        ),
    },
    {
        title: 'Aztec Stone Navbar',
        description: 'A heavy, monolithic navigation bar with blocky stone aesthetics, sharp stepped accents, and structural borders.',
        multiColor: true,
        cssTemplate: (c) => `.aztec-nav{width:100%;background:#f5ece3;border:4px solid #2a2421;padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:64px;box-sizing:border-box;box-shadow:8px 8px 0px ${c.primary};font-family:'Inter',sans-serif}.aztec-nav-brand{font-size:1.4rem;font-weight:900;color:#2a2421;text-transform:uppercase;letter-spacing:2px;display:flex;align-items:center;gap:12px;background:${c.primary};padding:4px 12px;color:#fff;border:2px solid #2a2421;clip-path:polygon(6px 0,calc(100% - 6px) 0,calc(100% - 6px) 6px,100% 6px,100% calc(100% - 6px),calc(100% - 6px) calc(100% - 6px),calc(100% - 6px) 100%,6px 100%,6px calc(100% - 6px),0 calc(100% - 6px),0 6px,6px 6px)}.aztec-nav-links{display:flex;gap:4px}.aztec-nav-link{color:#2a2421;text-decoration:none;font-size:14px;font-weight:900;text-transform:uppercase;letter-spacing:1px;padding:8px 16px;border:2px solid transparent;transition:all .2s}.aztec-nav-link:hover{background:#e6ccb2}.aztec-nav-link.active{border-color:#2a2421;background:#fff;box-shadow:4px 4px 0px ${c.primary}}`,
        renderPreview: (c) => (
            <div className="aztec-nav">
                <div className="aztec-nav-brand">Templo</div>
                <nav className="aztec-nav-links">
                    <a href="#!" className="aztec-nav-link active" onClick={e => e.preventDefault()}>Artifacts</a>
                    <a href="#!" className="aztec-nav-link" onClick={e => e.preventDefault()}>Lore</a>
                </nav>
            </div>
        ),
    }
];

export default navbarEffects;
