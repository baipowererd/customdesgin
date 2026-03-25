import React from 'react';

const heroEffects = [
    {
        title: 'Gradient Mesh Hero',
        description: 'Centered hero with gradient background and blurred glow orb.',
        multiColor: true,
        cssTemplate: (c) => `.gradient-hero{width:100%;min-height:320px;background:linear-gradient(135deg,#0a0a0c 0%,${c.dark} 50%,#0a0a0c 100%);border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:48px 24px;position:relative;overflow:hidden}.gradient-hero::before{content:'';position:absolute;width:300px;height:300px;background:${c.primary};border-radius:50%;filter:blur(120px);opacity:0.3;top:-80px;right:-60px}.gradient-hero .hero-tagline{font-size:12px;text-transform:uppercase;letter-spacing:3px;color:${c.light};font-weight:600;margin-bottom:16px;position:relative;z-index:1}.gradient-hero .hero-title{font-size:40px;font-weight:800;color:#fff;line-height:1.2;max-width:500px;margin-bottom:16px;position:relative;z-index:1}.gradient-hero .hero-subtitle{font-size:16px;color:rgba(255,255,255,0.5);max-width:420px;margin-bottom:32px;position:relative;z-index:1}.gradient-hero .hero-cta{padding:14px 32px;background:${c.primary};color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;transition:transform .2s,box-shadow .2s;position:relative;z-index:1}.gradient-hero .hero-cta:hover{transform:translateY(-2px);box-shadow:0 8px 24px ${c.dark}}`,
        renderPreview: (c) => (
            <div className="gradient-hero">
                <div className="hero-tagline">Welcome to the future</div>
                <h1 className="hero-title">Build Beautiful Interfaces</h1>
                <p className="hero-subtitle">Create stunning, modern web experiences with our premium design components.</p>
                <button className="hero-cta">Get Started Free</button>
            </div>
        ),
    },
    {
        title: 'Split Hero',
        description: 'Two-column hero with content left and visual right.',
        multiColor: false,
        cssTemplate: (c) => `.split-hero{width:100%;min-height:300px;display:flex;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.06)}.split-hero .hero-left{flex:1;padding:48px 40px;display:flex;flex-direction:column;justify-content:center;background:#0d0d10}.split-hero .hero-right{flex:1;background:linear-gradient(135deg,${c.dark},${c.primary});display:flex;align-items:center;justify-content:center;font-size:80px;min-width:200px}.split-hero .hero-label{display:inline-block;background:${c.primary}22;color:${c.primary};font-size:12px;font-weight:600;padding:4px 12px;border-radius:6px;margin-bottom:16px;text-transform:uppercase;letter-spacing:1px;width:fit-content}.split-hero .hero-h1{font-size:32px;font-weight:800;color:#fff;line-height:1.2;margin-bottom:12px}.split-hero .hero-p{font-size:15px;color:rgba(255,255,255,0.5);margin-bottom:24px;line-height:1.6}.split-hero .hero-actions{display:flex;gap:12px}.split-hero .btn-primary{padding:12px 24px;background:${c.primary};color:#fff;border:none;border-radius:8px;font-weight:600;cursor:pointer;transition:filter .2s}.split-hero .btn-primary:hover{filter:brightness(1.15)}.split-hero .btn-ghost{padding:12px 24px;background:transparent;color:rgba(255,255,255,0.7);border:1px solid rgba(255,255,255,0.15);border-radius:8px;font-weight:600;cursor:pointer;transition:border-color .2s,color .2s}.split-hero .btn-ghost:hover{border-color:${c.primary};color:${c.primary}}`,
        renderPreview: (c) => (
            <div className="split-hero">
                <div className="hero-left">
                    <span className="hero-label">New Release</span>
                    <h1 className="hero-h1">Design System 2.0</h1>
                    <p className="hero-p">Everything you need to build modern, responsive interfaces at scale.</p>
                    <div className="hero-actions">
                        <button className="btn-primary">Launch App</button>
                        <button className="btn-ghost">Learn More</button>
                    </div>
                </div>
                <div className="hero-right"></div>
            </div>
        ),
    },
    {
        title: 'Minimal CTA Hero',
        description: 'Centered hero with glowing accent line and email capture.',
        multiColor: false,
        cssTemplate: (c) => `.minimal-hero{width:100%;min-height:280px;border-radius:16px;padding:56px 24px;text-align:center;background:#0a0a0c;border:1px solid rgba(255,255,255,0.06)}.minimal-hero .glow-line{width:80px;height:3px;background:${c.primary};margin:0 auto 24px;border-radius:99px;box-shadow:0 0 20px ${c.primary}}.minimal-hero .min-title{font-size:36px;font-weight:800;color:#fff;margin-bottom:12px}.minimal-hero .min-title span{color:${c.primary}}.minimal-hero .min-sub{font-size:16px;color:rgba(255,255,255,0.45);max-width:460px;margin:0 auto 28px;line-height:1.6}.minimal-hero .min-input-group{display:inline-flex;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:10px;overflow:hidden}.minimal-hero .min-input{padding:12px 20px;background:transparent;border:none;color:#fff;font-size:14px;outline:none;width:260px}.minimal-hero .min-input::placeholder{color:rgba(255,255,255,0.3)}.minimal-hero .min-submit{padding:12px 24px;background:${c.primary};color:#fff;border:none;font-weight:600;font-size:14px;cursor:pointer;transition:filter .2s}.minimal-hero .min-submit:hover{filter:brightness(1.15)}`,
        renderPreview: (c) => (
            <div className="minimal-hero">
                <div className="glow-line"></div>
                <h1 className="min-title">Start <span>Building</span> Today</h1>
                <p className="min-sub">Join thousands of developers using premium UI components to ship faster.</p>
                <div className="min-input-group">
                    <input className="min-input" placeholder="Enter your email" readOnly />
                    <button className="min-submit">Subscribe</button>
                </div>
            </div>
        ),
    },
    {
        title: 'Noir Ticket Hero',
        description: 'A dark noir immersive ticket hero with pure black background, bold typography, dates, and subtle accent glow. Midnight ticket theme.',
        multiColor: true,
        cssTemplate: (c) => `.noir-hero{width:100%;min-height:360px;background:#0a0a0a;border-radius:24px;display:flex;flex-direction:column;justify-content:center;padding:48px;position:relative;overflow:hidden;font-family:'Inter',system-ui,sans-serif}.noir-hero::before{content:'';position:absolute;top:50%;right:10%;transform:translateY(-50%);width:200px;height:200px;background:${c.primary};border-radius:50%;filter:blur(100px);opacity:0.1}.noir-hero-date{font-size:.8rem;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:2px;margin:0 0 16px}.noir-hero-title{font-size:3.5rem;font-weight:900;color:#fff;line-height:1.1;letter-spacing:-1px;margin:0 0 24px;max-width:600px}.noir-hero-title span{color:transparent;-webkit-text-stroke:1px rgba(255,255,255,.2)}.noir-hero-meta{display:flex;gap:32px;margin-bottom:40px}.noir-hero-meta-item{display:flex;flex-direction:column;gap:4px}.noir-hero-meta-val{font-size:1.2rem;font-weight:700;color:#fff}.noir-hero-meta-lbl{font-size:.65rem;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px}.noir-hero-btn{display:inline-flex;align-items:center;gap:12px;padding:16px 32px;background:#141414;border:1px solid #222;border-radius:12px;color:#fff;font-size:1rem;font-weight:700;cursor:pointer;transition:all .3s;width:fit-content}.noir-hero-btn:hover{background:#1a1a1a;border-color:${c.primary};box-shadow:0 10px 30px rgba(0,0,0,.5),0 0 20px ${c.primary}15}`,
        renderPreview: (c) => (
            <div className="noir-hero">
                <p className="noir-hero-date">Upcoming Event • 26 Dec 2023</p>
                <h1 className="noir-hero-title">Design Summit <span>2024</span></h1>
                <div className="noir-hero-meta">
                    <div className="noir-hero-meta-item"><span className="noir-hero-meta-val">12:00</span><span className="noir-hero-meta-lbl">Time</span></div>
                    <div className="noir-hero-meta-item"><span className="noir-hero-meta-val">Khulna, BD</span><span className="noir-hero-meta-lbl">Location</span></div>
                    <div className="noir-hero-meta-item"><span className="noir-hero-meta-val">$150</span><span className="noir-hero-meta-lbl">Price</span></div>
                </div>
                <button className="noir-hero-btn">Get Tickets →</button>
            </div>
        ),
    },
    {
        title: 'Holo Prism Hero',
        description: 'An immersive dark hero with a vibrant holographic iridescent background glow and dark glassmorphic floating elements.',
        multiColor: false,
        cssTemplate: (c) => `.prism-hero{width:100%;min-height:380px;background:#050505;border-radius:24px;display:flex;align-items:center;justify-content:center;padding:48px;position:relative;overflow:hidden;font-family:'Inter',system-ui,sans-serif}.prism-hero::before{content:'';position:absolute;inset:0;background:linear-gradient(115deg,#ff0055,#ffdd00,#00ffaa,#0055ff,#ff0055);background-size:200% 200%;animation:prism-pan 8s linear infinite;opacity:.15;filter:blur(60px)}.prism-glass{position:relative;background:rgba(20,20,20,.6);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.08);padding:48px;border-radius:24px;text-align:center;box-shadow:0 30px 60px rgba(0,0,0,.5);max-width:600px;z-index:2}.prism-hero-title{font-size:3rem;font-weight:900;color:#fff;line-height:1.2;margin:0 0 16px}.prism-hero-desc{font-size:1.1rem;color:rgba(255,255,255,.6);line-height:1.6;margin:0 0 32px}.prism-hero-btn{padding:14px 36px;font-size:1rem;font-weight:700;color:#fff;background:#fff;color:#000;border:none;border-radius:12px;cursor:pointer;transition:transform .2s}.prism-hero-btn:hover{transform:scale(1.05)}`,
        renderPreview: (c) => (
            <div className="prism-hero">
                <div className="prism-glass">
                    <h1 className="prism-hero-title">Beyond the Edge</h1>
                    <p className="prism-hero-desc">Experience the next generation of UI with iridescent glows, dark glassmorphism, and hardware-accelerated fluid motion.</p>
                    <button className="prism-hero-btn">Explore Spectrum</button>
                </div>
            </div>
        ),
    },
    {
        title: 'Manga Sticker Hero',
        description: 'A bold, high-contrast hero section with thick black outlines, halftone background patterns, cutout elements, and hard red drop shadows. Japanese anime aesthetic.',
        multiColor: true,
        cssTemplate: (c) => `.manga-hero{width:100%;min-height:380px;background:#e3ded6;border:6px solid #0a0a0a;border-radius:0;display:flex;align-items:center;justify-content:center;padding:48px;position:relative;overflow:hidden;font-family:'Inter',system-ui,sans-serif;box-shadow:16px 16px 0px ${c.primary}}.manga-hero::before{content:'';position:absolute;inset:0;background-image:radial-gradient(#0a0a0a 15%,transparent 16%);background-size:12px 12px;opacity:0.1;z-index:0}.manga-cloud{position:absolute;background:#fff;border:4px solid #0a0a0a;border-radius:100px;top:40px;right:-40px;width:180px;height:60px;transform:rotate(-10deg);box-shadow:8px 8px 0px ${c.primary};z-index:1}.manga-cloud::before{content:'';position:absolute;background:#fff;border:4px solid #0a0a0a;border-bottom:none;border-right:none;width:80px;height:80px;border-radius:50%;top:-40px;left:40px;transform:rotate(-15deg)}.manga-content{position:relative;background:#fff;border:5px solid #0a0a0a;padding:56px 40px;text-align:center;box-shadow:-12px 12px 0px #0a0a0a;z-index:2;max-width:600px;transform:rotate(-2deg)}.manga-kanji{position:absolute;top:-30px;left:-20px;background:${c.primary};color:#fff;font-size:1.8rem;font-weight:900;padding:8px;border:3px solid #0a0a0a;transform:rotate(-15deg)}.manga-hero-title{font-size:3.5rem;font-weight:900;color:#0a0a0a;line-height:1;margin:0 0 16px;text-transform:uppercase;letter-spacing:-2px;text-shadow:4px 4px 0px ${c.primary}, -1px -1px 0 #0a0a0a, 1px -1px 0 #0a0a0a, -1px 1px 0 #0a0a0a, 1px 1px 0 #0a0a0a}.manga-hero-desc{font-size:1.1rem;font-weight:700;color:#0a0a0a;line-height:1.5;margin:0 0 24px;padding:8px;border:2px dashed #0a0a0a;background:#e3ded6}.manga-hero-btn{padding:14px 40px;background:#0a0a0a;color:#fff;border:4px solid #0a0a0a;font-size:1.1rem;font-weight:900;text-transform:uppercase;letter-spacing:1.5px;cursor:pointer;box-shadow:6px 6px 0px ${c.primary};transition:all .2s}.manga-hero-btn:hover{transform:translate(4px,4px);box-shadow:2px 2px 0px ${c.primary}}`,
        renderPreview: (c) => (
            <div className="manga-hero">
                <div className="manga-cloud" />
                <div className="manga-content">
                    <div className="manga-kanji">勇気</div>
                    <h1 className="manga-hero-title">Neo Tokyo</h1>
                    <p className="manga-hero-desc">The scrapbook aesthetic. Use solid drop shadows, comic halftones, thick strokes, and vibrant red accents to bring interfaces to life.</p>
                    <button className="manga-hero-btn">Start Reading</button>
                </div>
            </div>
        ),
    },
    {
        title: 'Indic Royal Hero',
        description: 'A grand hero section with an elegant serif layout, subtle intricate mandala patterns, and rich festive accents.',
        multiColor: true,
        cssTemplate: (c) => `.indic-hero{width:100%;min-height:380px;background:linear-gradient(135deg,#fffdf5 0%,#fbf6e8 100%);border-radius:8px;position:relative;overflow:hidden;padding:48px;font-family:'Georgia',serif;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;border:1px solid ${c.primary}22;box-shadow:0 12px 32px rgba(0,0,0,.04)}.indic-hero::before{content:'';position:absolute;inset:0;background-image:radial-gradient(${c.primary}15 1px,transparent 1px),radial-gradient(${c.primary}15 1px,transparent 1px);background-size:24px 24px;background-position:0 0,12px 12px;opacity:0.4;z-index:0}.indic-hero-corner{position:absolute;width:120px;height:120px;border:2px solid ${c.primary}44;border-radius:50%;z-index:1}.indic-hero-corner.tl{top:-60px;left:-60px}.indic-hero-corner.br{bottom:-60px;right:-60px}.indic-hero-content{position:relative;z-index:2;background:rgba(255,253,245,0.85);backdrop-filter:blur(8px);padding:48px 32px;border:1px solid ${c.primary}33;border-radius:4px;max-width:600px;box-shadow:0 8px 24px rgba(0,0,0,.03)}.indic-hero-label{font-family:'Inter',sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:3px;color:${c.primary};font-weight:700;margin:0 0 16px;display:flex;align-items:center;justify-content:center;gap:12px}.indic-hero-label::before,.indic-hero-label::after{content:'';width:40px;height:1px;background:${c.primary}66}.indic-hero-title{font-size:3rem;font-weight:400;color:#2c1e16;margin:0 0 20px;line-height:1.2}.indic-hero-desc{font-family:'Inter',sans-serif;font-size:1rem;color:#5a4a42;margin:0 0 32px;line-height:1.6}.indic-hero-actions{display:flex;gap:16px;justify-content:center}.indic-btn-primary{padding:12px 32px;background:${c.primary};color:#fffdf5;border:none;border-radius:4px;font-size:15px;font-family:'Inter',sans-serif;font-weight:600;cursor:pointer;transition:all .2s;box-shadow:0 4px 12px ${c.primary}44}.indic-btn-primary:hover{transform:translateY(-2px);box-shadow:0 6px 16px ${c.primary}66}.indic-btn-ghost{padding:12px 32px;background:transparent;color:${c.primary};border:1px solid ${c.primary};border-radius:4px;font-size:15px;font-family:'Inter',sans-serif;font-weight:600;cursor:pointer;transition:all .2s}.indic-btn-ghost:hover{background:${c.primary}0a}`,
        renderPreview: (c) => (
            <div className="indic-hero">
                <div className="indic-hero-corner tl" />
                <div className="indic-hero-corner br" />
                <div className="indic-hero-content">
                    <div className="indic-hero-label">The Festive Collection</div>
                    <h1 className="indic-hero-title">A Symphony of Colors</h1>
                    <p className="indic-hero-desc">Immerse yourself in designs inspired by rich cultural heritage, warm textiles, intricate mandalas, and beautiful typography.</p>
                    <div className="indic-hero-actions">
                        <button className="indic-btn-primary">Explore Designs</button>
                        <button className="indic-btn-ghost">View Gallery</button>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Aztec Stone Hero',
        description: 'A monumental hero section using blocky stepped borders, terracotta/sandstone color tones, and brutalist geometric patterns.',
        multiColor: true,
        cssTemplate: (c) => `.aztec-hero{width:100%;min-height:380px;background:#f5ece3;position:relative;overflow:hidden;padding:48px;font-family:'Inter',sans-serif;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;z-index:1;clip-path:polygon(40px 0,calc(100% - 40px) 0,calc(100% - 40px) 40px,100% 40px,100% calc(100% - 40px),calc(100% - 40px) calc(100% - 40px),calc(100% - 40px) 100%,40px 100%,40px calc(100% - 40px),0 calc(100% - 40px),0 40px,40px 40px)}.aztec-hero-wrap{position:relative;width:100%;filter:drop-shadow(12px 12px 0px ${c.primary})}.aztec-hero-bg{position:absolute;inset:0;background-image:linear-gradient(45deg,#2a2421 25%,transparent 25%,transparent 75%,#2a2421 75%,#2a2421),linear-gradient(45deg,#2a2421 25%,transparent 25%,transparent 75%,#2a2421 75%,#2a2421);background-size:20px 20px;background-position:0 0,10px 10px;opacity:0.04;z-index:0;pointer-events:none}.aztec-hero-border{position:absolute;inset:0;background:#2a2421;z-index:0;clip-path:polygon(44px 0,calc(100% - 44px) 0,calc(100% - 44px) 44px,100% 44px,100% calc(100% - 44px),calc(100% - 44px) calc(100% - 44px),calc(100% - 44px) 100%,44px 100%,44px calc(100% - 44px),0 calc(100% - 44px),0 44px,44px 44px)}.aztec-hero-content{position:relative;z-index:2;background:#f5ece3;padding:48px 32px;display:flex;flex-direction:column;align-items:center;margin:6px;clip-path:polygon(40px 0,calc(100% - 40px) 0,calc(100% - 40px) 40px,100% 40px,100% calc(100% - 40px),calc(100% - 40px) calc(100% - 40px),calc(100% - 40px) 100%,40px 100%,40px calc(100% - 40px),0 calc(100% - 40px),0 40px,40px 40px)}.aztec-badge{background:${c.primary};color:#fff;font-weight:900;text-transform:uppercase;letter-spacing:3px;padding:8px 16px;font-size:12px;margin-bottom:24px;clip-path:polygon(6px 0,calc(100% - 6px) 0,calc(100% - 6px) 6px,100% 6px,100% calc(100% - 6px),calc(100% - 6px) calc(100% - 6px),calc(100% - 6px) 100%,6px 100%,6px calc(100% - 6px),0 calc(100% - 6px),0 6px,6px 6px)}.aztec-hero-title{font-size:3.5rem;font-weight:900;color:#2a2421;margin:0 0 20px;line-height:1;text-transform:uppercase;letter-spacing:-1px}.aztec-hero-desc{font-size:1.1rem;font-weight:600;color:rgba(42,36,33,0.7);max-width:500px;margin:0 0 32px;line-height:1.6}.aztec-hero-btn{padding:16px 40px;background:#2a2421;color:#f5ece3;border:none;font-size:16px;font-weight:900;text-transform:uppercase;letter-spacing:2px;cursor:pointer;clip-path:polygon(10px 0,calc(100% - 10px) 0,calc(100% - 10px) 10px,100% 10px,100% calc(100% - 10px),calc(100% - 10px) calc(100% - 10px),calc(100% - 10px) 100%,10px 100%,10px calc(100% - 10px),0 calc(100% - 10px),0 10px,10px 10px);transition:all .2s;position:relative}.aztec-hero-btn:hover{background:${c.primary}}`,
        renderPreview: (c) => (
            <div className="aztec-hero-wrap">
                <div className="aztec-hero-border" />
                <div className="aztec-hero-content">
                    <div className="aztec-hero-bg" />
                    <div className="aztec-badge">Olmec Foundation</div>
                    <h1 className="aztec-hero-title">Monolithic UI</h1>
                    <p className="aztec-hero-desc">Build interfaces that feel like they were carved from solid stone block. Strong, geometric, and timeless aesthetics.</p>
                    <button className="aztec-hero-btn">Enter Pyramid</button>
                </div>
            </div>
        ),
    }
];

export default heroEffects;
