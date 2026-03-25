import React from 'react';

const cardEffects = [
    {
        title: 'Profile Card',
        description: 'Gradient banner with avatar, name, role, and stats.',
        multiColor: true,
        cssTemplate: (c) => `.profile-card{width:320px;background:#111114;border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;transition:transform .3s,box-shadow .3s}.profile-card:hover{transform:translateY(-8px);box-shadow:0 20px 40px rgba(0,0,0,.4)}.profile-card .card-banner{height:100px;background:linear-gradient(135deg,${c.dark},${c.primary})}.profile-card .card-avatar{width:72px;height:72px;border-radius:50%;background:${c.primary};border:4px solid #111114;margin:-36px auto 0;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:700;color:#fff}.profile-card .card-body{padding:16px 24px 24px;text-align:center}.profile-card .card-name{font-size:18px;font-weight:600;color:#fff;margin-bottom:4px}.profile-card .card-role{font-size:13px;color:${c.light};margin-bottom:16px}.profile-card .card-stats{display:flex;justify-content:space-around;border-top:1px solid rgba(255,255,255,0.08);padding-top:16px}.profile-card .stat{text-align:center}.profile-card .stat-val{font-size:18px;font-weight:700;color:${c.primary}}.profile-card .stat-lbl{font-size:11px;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:1px}`,
        renderPreview: (c) => (
            <div className="profile-card">
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
        ),
    },
    {
        title: 'Pricing Card',
        description: 'Plan card with badge, price, feature list, and CTA button.',
        multiColor: false,
        cssTemplate: (c) => `.pricing-card{width:300px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:32px 28px;text-align:center;transition:border-color .3s,box-shadow .3s}.pricing-card:hover{border-color:${c.primary};box-shadow:0 0 30px ${c.dark}}.pricing-card .badge{display:inline-block;background:linear-gradient(135deg,${c.primary},${c.dark});color:#fff;font-size:11px;font-weight:700;padding:4px 14px;border-radius:99px;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px}.pricing-card .price{font-size:48px;font-weight:800;color:#fff}.pricing-card .price span{font-size:16px;color:rgba(255,255,255,0.5);font-weight:400}.pricing-card .period{font-size:14px;color:rgba(255,255,255,0.4);margin-bottom:24px}.pricing-card .features{list-style:none;padding:0;margin:0 0 28px;text-align:left}.pricing-card .features li{padding:8px 0;color:rgba(255,255,255,0.7);font-size:14px;border-bottom:1px solid rgba(255,255,255,0.05)}.pricing-card .features li::before{content:'✓ ';color:${c.primary};font-weight:700}.pricing-card .cta-btn{width:100%;padding:12px;background:${c.primary};color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;transition:filter .2s,transform .2s}.pricing-card .cta-btn:hover{filter:brightness(1.15);transform:scale(1.03)}`,
        renderPreview: (c) => (
            <div className="pricing-card">
                <div className="badge">Pro Plan</div>
                <div className="price">$29<span>/mo</span></div>
                <div className="period">Billed annually</div>
                <ul className="features"><li>Unlimited projects</li><li>Priority support</li><li>Advanced analytics</li><li>Custom integrations</li></ul>
                <button className="cta-btn">{c.text || 'Get Started'}</button>
            </div>
        ),
    },
    {
        title: 'Glass Card',
        description: 'Frosted glass panel with blurred glow orbs behind.',
        multiColor: true,
        cssTemplate: (c) => `.glass-card{width:320px;padding:32px;background:rgba(255,255,255,0.04);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.1);border-radius:20px;position:relative;overflow:hidden;transition:transform .3s}.glass-card:hover{transform:scale(1.03)}.glass-card::before{content:'';position:absolute;top:-50%;left:-50%;width:120px;height:120px;background:${c.primary};border-radius:50%;filter:blur(60px);opacity:0.4}.glass-card::after{content:'';position:absolute;bottom:-30%;right:-30%;width:100px;height:100px;background:${c.secondary};border-radius:50%;filter:blur(50px);opacity:0.25}.glass-card .glass-icon{width:48px;height:48px;background:linear-gradient(135deg,${c.primary},${c.dark});border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:20px;position:relative;z-index:1}.glass-card .glass-title{font-size:20px;font-weight:600;color:#fff;margin-bottom:8px;position:relative;z-index:1}.glass-card .glass-desc{font-size:14px;color:rgba(255,255,255,0.6);line-height:1.6;position:relative;z-index:1}`,
        renderPreview: (c) => (
            <div className="glass-card">
                <div className="glass-icon">✦</div>
                <div className="glass-title">Glass Panel</div>
                <div className="glass-desc">A beautiful frosted glass card with blurred background orbs and translucent overlay effects.</div>
            </div>
        ),
    },
    // 4. Hover Reveal Card
    {
        title: 'Hover Reveal Card',
        description: 'Content slides into view with a smooth transition on hover.',
        multiColor: false,
        cssTemplate: (c) => `.hover-reveal{width:320px;height:200px;background:linear-gradient(135deg,${c.dark},#111);border-radius:16px;position:relative;overflow:hidden;cursor:pointer;display:flex;align-items:flex-end}.hover-reveal .overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.9) 0%,transparent 60%);transition:background .4s}.hover-reveal:hover .overlay{background:linear-gradient(to top,${c.dark}ee 0%,${c.dark}88 100%)}.hover-reveal .hover-content{position:relative;z-index:2;padding:20px 24px;transform:translateY(20px);transition:transform .4s}.hover-reveal:hover .hover-content{transform:translateY(0)}.hover-reveal .hover-tag{font-size:11px;text-transform:uppercase;letter-spacing:2px;color:${c.light};margin-bottom:6px;font-weight:600}.hover-reveal .hover-title{font-size:20px;font-weight:700;color:#fff;margin-bottom:8px}.hover-reveal .hover-desc{font-size:13px;color:rgba(255,255,255,0.6);opacity:0;transform:translateY(10px);transition:opacity .4s .1s,transform .4s .1s}.hover-reveal:hover .hover-desc{opacity:1;transform:translateY(0)}`,
        renderPreview: (c) => (
            <div className="hover-reveal">
                <div className="overlay"></div>
                <div className="hover-content">
                    <div className="hover-tag">Featured</div>
                    <div className="hover-title">Hover to Reveal</div>
                    <div className="hover-desc">Additional details slide into view with a smooth transition on hover.</div>
                </div>
            </div>
        ),
    },
    // 4b. Vision Glass Card
    {
        title: 'Vision Glass Card',
        description: 'Ultra-refined frosted glass seen in visionOS interfaces.',
        multiColor: false,
        cssTemplate: (c) => `.vision-card{width:320px;padding:30px;background:rgba(255,255,255,0.1);backdrop-filter:blur(30px) saturate(150%);-webkit-backdrop-filter:blur(30px) saturate(150%);border-radius:28px;border:1px solid rgba(255,255,255,0.2);box-shadow:0 30px 60px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.15);display:flex;flex-direction:column;align-items:center;text-align:center}.vision-card-icon{width:80px;height:80px;border-radius:50%;background:rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;font-size:36px;margin-bottom:20px;box-shadow:inset 0 2px 4px rgba(255,255,255,0.2)}.vision-card-title{color:#fff;font-size:22px;font-weight:600;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;margin-bottom:8px;letter-spacing:-0.5px}.vision-card-desc{color:rgba(255,255,255,0.7);font-size:15px;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;line-height:1.4}`,
        renderPreview: (c) => (
            <div className="vision-card">
                <div className="vision-card-icon"></div>
                <div className="vision-card-title">Spatial UI</div>
                <div className="vision-card-desc">Experience fully immersive glass materials mimicking visionOS.</div>
            </div>
        ),
    },
    {
        title: 'Product Card',
        description: 'E-commerce product with image area, badge, price & Add to Cart.',
        multiColor: false,
        cssTemplate: (c) => `.product-card{width:280px;background:#111114;border:1px solid rgba(255,255,255,0.06);border-radius:16px;overflow:hidden;transition:transform .3s,box-shadow .3s}.product-card:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(0,0,0,.5)}.product-card .prod-img{height:180px;background:linear-gradient(160deg,#1a1a1e,${c.dark});display:flex;align-items:center;justify-content:center;font-size:60px;position:relative}.product-card .prod-badge{position:absolute;top:12px;right:12px;background:${c.primary};color:#fff;font-size:11px;font-weight:700;padding:4px 10px;border-radius:6px}.product-card .prod-body{padding:20px}.product-card .prod-name{font-size:16px;font-weight:600;color:#fff;margin-bottom:6px}.product-card .prod-desc{font-size:13px;color:rgba(255,255,255,0.5);margin-bottom:16px}.product-card .prod-footer{display:flex;justify-content:space-between;align-items:center}.product-card .prod-price{font-size:22px;font-weight:800;color:${c.primary}}.product-card .prod-buy{padding:8px 18px;background:transparent;border:1.5px solid ${c.primary};color:${c.primary};border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;transition:all .2s}.product-card .prod-buy:hover{background:${c.primary};color:#fff}`,
        renderPreview: (c) => (
            <div className="product-card">
                <div className="prod-img"><div className="prod-badge">NEW</div></div>
                <div className="prod-body">
                    <div className="prod-name">Premium Headphones</div>
                    <div className="prod-desc">Wireless noise-cancelling audio</div>
                    <div className="prod-footer">
                        <div className="prod-price">$199</div>
                        <button className="prod-buy">{c.text || 'Add to Cart'}</button>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Bubbly Blob Card',
        description: 'Soft, fluid floating blobs creating an organic, bubbly aesthetic.',
        multiColor: true,
        cssTemplate: (c) => `.bubbly-card{width:320px;height:420px;background:linear-gradient(135deg,#e0e7ff, ${c.light});border-radius:24px;position:relative;overflow:hidden;padding:32px;display:flex;flex-direction:column;justify-content:center;box-shadow:0 20px 40px rgba(0,0,0,0.1), inset 0 0 0 2px rgba(255,255,255,0.5)}.bubbly-card *{z-index:2;position:relative}.bubbly-blob{position:absolute;background:linear-gradient(135deg,${c.primary},${c.secondary});border-radius:40% 60% 70% 30% / 40% 50% 60% 50%;animation:blob-float 8s infinite alternate;opacity:0.8;z-index:1;box-shadow:inset -10px -10px 20px rgba(0,0,0,0.1), inset 10px 10px 20px rgba(255,255,255,0.4)}.blob-1{width:200px;height:200px;top:-50px;left:-50px;animation-delay:0s}.blob-2{width:150px;height:150px;bottom:-20px;right:-30px;animation-delay:-4s;border-radius:60% 40% 30% 70% / 50% 60% 40% 50%}.bubbly-card-title{font-size:28px;font-weight:800;color:#1e1e24;margin-bottom:12px;text-shadow:0 2px 4px rgba(255,255,255,0.8)}.bubbly-card-desc{font-size:15px;color:#3f3f46;line-height:1.6;font-weight:500}@keyframes blob-float{0%{transform:translate(0,0) rotate(0deg) scale(1)}100%{transform:translate(20px,20px) rotate(10deg) scale(1.1)}}`,
        renderPreview: (c) => (
            <div className="bubbly-card">
                <div className="bubbly-blob blob-1"></div>
                <div className="bubbly-blob blob-2"></div>
                <div className="bubbly-card-title">Fluid Connect</div>
                <div className="bubbly-card-desc">Experience seamless payments with organic, floating shapes and soft gradients.</div>
            </div>
        ),
    },
    {
        title: 'Spotify Album Card',
        description: 'Classic Spotify album or playlist card with a play button on hover.',
        multiColor: false,
        cssTemplate: (c) => `.spotify-card{width:200px;background:#181818;padding:16px;border-radius:8px;transition:background 0.3s ease;cursor:pointer;position:relative}.spotify-card:hover{background:#282828}.spotify-card-img-wrapper{position:relative;width:100%;aspect-ratio:1;margin-bottom:16px;box-shadow:0 8px 24px rgba(0,0,0,.5);border-radius:4px;overflow:hidden}.spotify-card-img{width:100%;height:100%;background:linear-gradient(135deg, #333, #111);display:flex;align-items:center;justify-content:center;font-size:48px}.spotify-play-btn-overlay{position:absolute;bottom:8px;right:8px;width:48px;height:48px;background:#1db954;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#000;font-size:20px;opacity:0;transform:translateY(8px);transition:all 0.3s ease;box-shadow:0 8px 8px rgba(0,0,0,0.3)}.spotify-card:hover .spotify-play-btn-overlay{opacity:1;transform:translateY(0)}.spotify-play-btn-overlay:hover{transform:scale(1.04)}.spotify-card-title{font-size:16px;font-weight:700;color:#fff;margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spotify-card-desc{font-size:14px;color:#a7a7a7;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}`,
        renderPreview: (c) => (
            <div className="spotify-card">
                <div className="spotify-card-img-wrapper">
                    <div className="spotify-card-img"></div>
                    <div className="spotify-play-btn-overlay"></div>
                </div>
                <div className="spotify-card-title">Discover Weekly</div>
                <div className="spotify-card-desc">Your weekly mixtape of fresh music. Enjoy new discoveries and deep cuts chosen just for you.</div>
            </div>
        ),
    },
    {
        title: 'Spotify Track List',
        description: 'A sleek track list displaying song details, durations cleanly.',
        multiColor: false,
        cssTemplate: (c) => `.spotify-list{width:100%;max-width:400px;background:#121212;padding:8px 0;border-radius:8px}.spotify-list-item{display:flex;align-items:center;padding:8px 16px;border-radius:4px;transition:background 0.2s;cursor:pointer}.spotify-list-item:hover{background:#2a2a2a}.spotify-list-item:hover .track-num{display:none}.spotify-list-item:hover .track-play{display:block}.spotify-list-num-col{width:30px;color:#a7a7a7;font-size:14px;text-align:right;margin-right:16px}.track-play{display:none;color:#fff;font-size:12px}.spotify-list-img{width:40px;height:40px;background:#333;border-radius:4px;margin-right:12px;display:flex;align-items:center;justify-content:center;font-size:20px}.spotify-list-info{flex:1;min-width:0}.spotify-list-title{color:#fff;font-size:16px;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:4px}.spotify-list-item:hover .spotify-list-title{color:#fff}.spotify-list-artist{color:#a7a7a7;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spotify-list-item:hover .spotify-list-artist{color:#fff}.spotify-list-duration{color:#a7a7a7;font-size:14px;margin-left:16px}`,
        renderPreview: (c) => (
            <div className="spotify-list">
                {[1, 2, 3].map(i => (
                    <div className="spotify-list-item" key={i}>
                        <div className="spotify-list-num-col">
                            <span className="track-num">{i}</span>
                            <span className="track-play"></span>
                        </div>
                        <div className="spotify-list-img"></div>
                        <div className="spotify-list-info">
                            <div className="spotify-list-title">Awesome Track {i}</div>
                            <div className="spotify-list-artist">Cool Artist</div>
                        </div>
                        <div className="spotify-list-duration">3:4{i}</div>
                    </div>
                ))}
            </div>
        ),
    },
    {
        title: 'Spotify Player Widget',
        description: 'Compact music player widget styled after Spotify desktop.',
        multiColor: false,
        cssTemplate: (c) => `.spotify-player-widget{width:360px;background:#181818;border:1px solid #282828;border-radius:8px;padding:16px;display:flex;flex-direction:column;gap:16px}.spotify-pw-header{display:flex;align-items:center;gap:12px}.spotify-pw-img{width:48px;height:48px;background:#333;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:24px}.spotify-pw-info{flex:1}.spotify-pw-title{color:#fff;font-size:14px;font-weight:600;margin-bottom:4px}.spotify-pw-title:hover{text-decoration:underline;cursor:pointer}.spotify-pw-artist{color:#a7a7a7;font-size:12px}.spotify-pw-artist:hover{color:#fff;text-decoration:underline;cursor:pointer}.spotify-pw-controls{display:flex;align-items:center;justify-content:center;gap:16px}.spotify-pw-btn{background:none;border:none;color:#a7a7a7;font-size:16px;cursor:pointer;transition:color 0.2s}.spotify-pw-btn:hover{color:#fff}.spotify-pw-play{width:32px;height:32px;border-radius:50%;background:#fff;color:#000;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform 0.2s}.spotify-pw-play:hover{transform:scale(1.05)}.spotify-pw-progress{display:flex;align-items:center;gap:8px;font-size:11px;color:#a7a7a7}.spotify-pw-bar-bg{flex:1;height:4px;background:#4d4d4d;border-radius:2px;cursor:pointer;position:relative}.spotify-pw-bar-fg{width:40%;height:100%;background:#fff;border-radius:2px}.spotify-pw-bar-bg:hover .spotify-pw-bar-fg{background:#1db954}`,
        renderPreview: (c) => (
            <div className="spotify-player-widget">
                <div className="spotify-pw-header">
                    <div className="spotify-pw-img"></div>
                    <div className="spotify-pw-info">
                        <div className="spotify-pw-title">Starlight</div>
                        <div className="spotify-pw-artist">Muse</div>
                    </div>
                    <button className="spotify-pw-btn"></button>
                </div>
                <div className="spotify-pw-controls">
                    <button className="spotify-pw-btn"></button>
                    <button className="spotify-pw-btn spotify-pw-play"></button>
                    <button className="spotify-pw-btn"></button>
                </div>
                <div className="spotify-pw-progress">
                    <span>1:23</span>
                    <div className="spotify-pw-bar-bg">
                        <div className="spotify-pw-bar-fg"></div>
                    </div>
                    <span>4:00</span>
                </div>
            </div>
        ),
    },
    {
        title: 'Apple iOS Widget',
        description: 'Classic iOS square widget with smooth rounded corners and clean typography.',
        multiColor: false,
        cssTemplate: (c) => `.ios-widget{width:160px;height:160px;background:#1c1c1e;border-radius:24px;padding:16px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 8px 24px rgba(0,0,0,0.2);font-family:-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif;cursor:pointer}.ios-widget:hover{opacity:0.9}.ios-widget-header{display:flex;align-items:center;gap:8px}.ios-widget-icon{width:24px;height:24px;background:#007aff;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;color:#fff}.ios-widget-title{color:#fff;font-size:13px;font-weight:600;letter-spacing:-0.2px}.ios-widget-val{color:#fff;font-size:32px;font-weight:300;letter-spacing:-1px;margin-bottom:-4px}.ios-widget-sub{color:#8e8e93;font-size:12px;font-weight:500}`,
        renderPreview: (c) => (
            <div className="ios-widget">
                <div className="ios-widget-header">
                    <div className="ios-widget-icon">️</div>
                    <div className="ios-widget-title">Weather</div>
                </div>
                <div>
                    <div className="ios-widget-val">72°</div>
                    <div className="ios-widget-sub">Mostly Sunny</div>
                </div>
            </div>
        ),
    },
    {
        title: 'Apple Mac Window',
        description: 'macOS inspired floating window with traffic light controls.',
        multiColor: false,
        cssTemplate: (c) => `.mac-window{width:300px;background:#1e1e1e;border:1px solid #333;border-radius:10px;overflow:hidden;box-shadow:0 20px 40px rgba(0,0,0,0.4);font-family:-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif}.mac-titlebar{height:28px;background:#2d2d2d;display:flex;align-items:center;padding:0 12px;gap:8px;border-bottom:1px solid #111}.mac-dot{width:12px;height:12px;border-radius:50%;background:#555}.mac-dot.red{background:#ff5f56;border:1px solid #e0443e}.mac-dot.yellow{background:#ffbd2e;border:1px solid #dea123}.mac-dot.green{background:#27c93f;border:1px solid #1aab29}.mac-content{padding:20px;color:#ececec;font-size:14px;line-height:1.5}`,
        renderPreview: (c) => (
            <div className="mac-window">
                <div className="mac-titlebar">
                    <div className="mac-dot red"></div>
                    <div className="mac-dot yellow"></div>
                    <div className="mac-dot green"></div>
                </div>
                <div className="mac-content">
                    <p style={{ margin: 0 }}><strong>hello_world.js</strong><br /><br />console.log("Think Different.");</p>
                </div>
            </div>
        ),
    },
    {
        title: 'Discord Profile Card',
        description: 'Gaming profile popout with server banner, avatar, and roles.',
        multiColor: false,
        cssTemplate: (c) => `.discord-profile{width:300px;background:#111214;border-radius:8px;overflow:hidden;box-shadow:0 8px 16px rgba(0,0,0,0.24);font-family:"gg sans", "Noto Sans", sans-serif}.discord-banner{height:120px;background:#5865F2}.discord-header{padding:0 16px 16px;position:relative}.discord-avatar-wrapper{position:absolute;top:-46px;left:16px;width:92px;height:92px;border-radius:50%;background:#111214;display:flex;align-items:center;justify-content:center}.discord-avatar{width:80px;height:80px;border-radius:50%;background:#232428;display:flex;align-items:center;justify-content:center;font-size:40px}.discord-status{position:absolute;bottom:0;right:0;width:24px;height:24px;background:#111214;border-radius:50%;display:flex;align-items:center;justify-content:center}.discord-status-dot{width:16px;height:16px;background:#23a559;border-radius:50%}.discord-badges{display:flex;justify-content:flex-end;padding-top:12px;height:36px;gap:4px}.discord-badge{width:22px;height:22px;background:#232428;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:12px}.discord-body{background:#232428;margin:0 16px 16px;padding:12px;border-radius:8px}.discord-name{color:#f2f3f5;font-size:20px;font-weight:600;margin-bottom:2px}.discord-tag{color:#b5bac1;font-size:14px;margin-bottom:12px}.discord-section-title{color:#b5bac1;font-size:12px;font-weight:700;text-transform:uppercase;margin-bottom:8px}.discord-roles{display:flex;gap:4px;flex-wrap:wrap}.discord-role{background:#2b2d31;border-radius:4px;padding:4px 8px;display:flex;align-items:center;gap:4px;font-size:12px;color:#dbdee1}.discord-role-dot{width:12px;height:12px;border-radius:50%;background:#e91e63}`,
        renderPreview: (c) => (
            <div className="discord-profile">
                <div className="discord-banner"></div>
                <div className="discord-header">
                    <div className="discord-avatar-wrapper">
                        <div className="discord-avatar"></div>
                        <div className="discord-status">
                            <div className="discord-status-dot"></div>
                        </div>
                    </div>
                    <div className="discord-badges">
                        <div className="discord-badge"></div>
                        <div className="discord-badge"></div>
                    </div>
                </div>
                <div className="discord-body">
                    <div className="discord-name">GamerPro</div>
                    <div className="discord-tag">gamerpro</div>
                    <div style={{ height: '12px' }}></div>
                    <div className="discord-section-title">Roles</div>
                    <div className="discord-roles">
                        <div className="discord-role"><div className="discord-role-dot"></div>Admin</div>
                        <div className="discord-role"><div className="discord-role-dot" style={{ background: '#5865F2' }}></div>Member</div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Discord Message',
        description: 'A standard Discord chat message layout with hover highlighting.',
        multiColor: false,
        cssTemplate: (c) => `.discord-msg{width:100%;max-width:400px;padding:8px 16px;display:flex;gap:16px;font-family:"gg sans", "Noto Sans", sans-serif;transition:background 0.1s;border-radius:4px;cursor:pointer}.discord-msg:hover{background:#2e3035}.discord-msg-avatar{width:40px;height:40px;border-radius:50%;background:#5865F2;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0}.discord-msg-content{flex:1}.discord-msg-header{display:flex;align-items:baseline;gap:8px;margin-bottom:4px}.discord-msg-author{color:#e91e63;font-size:16px;font-weight:500}.discord-msg-time{color:#80848e;font-size:12px;font-weight:500}.discord-msg-text{color:#dbdee1;font-size:16px;line-height:1.4}`,
        renderPreview: (c) => (
            <div className="discord-msg">
                <div className="discord-msg-avatar"></div>
                <div className="discord-msg-content">
                    <div className="discord-msg-header">
                        <div className="discord-msg-author">Pepe</div>
                        <div className="discord-msg-time">Today at 4:20 PM</div>
                    </div>
                    <div className="discord-msg-text">Has anyone seen my rare collection? Also, don't forget to push to main.</div>
                </div>
            </div>
        ),
    },
    {
        title: 'Google Material Card',
        description: 'Classic Material Design card with elevated shadow and crisp layout.',
        multiColor: false,
        cssTemplate: (c) => `.google-mat-card{width:300px;background:#fff;border-radius:8px;box-shadow:0 1px 2px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15);overflow:hidden;font-family:Roboto, sans-serif;display:flex;flex-direction:column}.google-mat-media{height:160px;background:#e8eaed;display:flex;align-items:center;justify-content:center;font-size:48px;color:#5f6368}.google-mat-body{padding:16px}.google-mat-title{color:#202124;font-size:20px;font-weight:500;margin-bottom:8px}.google-mat-sub{color:#5f6368;font-size:14px;line-height:1.5;margin-bottom:16px}.google-mat-actions{padding:8px;display:flex;gap:8px}.google-mat-btn{background:transparent;border:none;color:#1a73e8;font-size:14px;font-weight:500;padding:8px 8px;border-radius:4px;cursor:pointer;transition:background 0.2s}.google-mat-btn:hover{background:rgba(26,115,232,0.04)}`,
        renderPreview: (c) => (
            <div className="google-mat-card">
                <div className="google-mat-media">️</div>
                <div className="google-mat-body">
                    <div className="google-mat-title">Explore the Alps</div>
                    <div className="google-mat-sub">Discover breathtaking views and challenging hikes in the heart of Europe.</div>
                </div>
                <div className="google-mat-actions">
                    <button className="google-mat-btn">SHARE</button>
                    <button className="google-mat-btn">EXPLORE</button>
                </div>
            </div>
        ),
    },
    {
        title: 'Google Search Result',
        description: 'Recognizable Google search snippet with blue link, breadcrumbs, and text.',
        multiColor: false,
        cssTemplate: (c) => `.google-sr-card{width:100%;max-width:500px;background:#202124;padding:16px;border-radius:8px;font-family:arial, sans-serif}.google-sr-header{display:flex;align-items:center;gap:12px;margin-bottom:8px}.google-sr-icon{width:28px;height:28px;background:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px}.google-sr-url-area{display:flex;flex-direction:column}.google-sr-site{color:#dadce0;font-size:14px;line-height:1.2}.google-sr-url{color:#bdc1c6;font-size:12px;line-height:1.2}.google-sr-title{color:#8ab4f8;font-size:20px;line-height:1.3;margin-bottom:4px;cursor:pointer}.google-sr-title:hover{text-decoration:underline}.google-sr-desc{color:#bdc1c6;font-size:14px;line-height:1.58}`,
        renderPreview: (c) => (
            <div className="google-sr-card">
                <div className="google-sr-header">
                    <div className="google-sr-icon"></div>
                    <div className="google-sr-url-area">
                        <div className="google-sr-site">Wikipedia</div>
                        <div className="google-sr-url">https://en.wikipedia.org › wiki › React</div>
                    </div>
                </div>
                <div className="google-sr-title">React (software) - Wikipedia</div>
                <div className="google-sr-desc">React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components.</div>
            </div>
        ),
    },
    {
        title: 'Neumorphic Profile Card',
        description: 'Soft 3D extruded styling with dark mode neumorphism shadows.',
        multiColor: true,
        cssTemplate: (c) => `.neu-card{width:320px;padding:32px;background:var(--neu-bg);border-radius:24px;box-shadow:8px 8px 16px var(--neu-shadow-dark), -8px -8px 16px var(--neu-shadow-light);display:flex;flex-direction:column;align-items:center;text-align:center}.neu-card-avatar{width:96px;height:96px;border-radius:50%;background:var(--neu-bg);box-shadow:inset 6px 6px 12px var(--neu-shadow-dark), inset -6px -6px 12px var(--neu-shadow-light);display:flex;align-items:center;justify-content:center;font-size:40px;margin-bottom:20px;color:${c.primary}}.neu-card-title{color:var(--text-primary);font-size:22px;font-weight:700;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px}.neu-card-desc{color:var(--text-secondary);font-size:14px;line-height:1.6;margin-bottom:24px}.neu-card-btn{padding:12px 32px;background:var(--neu-bg);color:${c.primary};font-size:15px;font-weight:600;border:none;border-radius:12px;cursor:pointer;box-shadow:4px 4px 8px var(--neu-shadow-dark), -4px -4px 8px var(--neu-shadow-light);transition:all 0.2s ease}.neu-card-btn:hover{color:var(--text-primary)}.neu-card-btn:active{box-shadow:inset 4px 4px 8px var(--neu-shadow-dark), inset -4px -4px 8px var(--neu-shadow-light)}`,
        renderPreview: (c) => (
            <div className="neu-card">
                <div className="neu-card-avatar"></div>
                <div className="neu-card-title">Nex.us</div>
                <div className="neu-card-desc">Pushing the boundaries of UI with soft shadows and immersive physical extrusion.</div>
                <button className="neu-card-btn">{c.text || 'Follow'}</button>
            </div>
        ),
    },
    {
        title: 'Noir Ticket Card',
        description: 'A dark noir event ticket card with dashed tear line, seat info, date, and barcode. Midnight minimal aesthetic.',
        multiColor: true,
        cssTemplate: (c) => `.noir-ticket{width:280px;background:#141414;border:1px solid #222;border-radius:16px;overflow:hidden;font-family:'Inter',system-ui,sans-serif;color:#fff;transition:border-color .3s}.noir-ticket:hover{border-color:${c.primary}44}.noir-ticket-top{padding:24px 20px;text-align:center;position:relative}.noir-ticket-event{font-size:1.5rem;font-weight:800;letter-spacing:3px;margin:0}.noir-ticket-year{font-size:1rem;font-weight:300;color:rgba(255,255,255,.4);margin:2px 0 0}.noir-ticket-icon{position:absolute;top:16px;right:16px;color:rgba(255,255,255,.2);font-size:.8rem}.noir-ticket-tear{display:flex;align-items:center;padding:0}.noir-ticket-dot{width:20px;height:20px;border-radius:50%;background:#0a0a0a;flex-shrink:0;margin:0 -10px;z-index:1}.noir-ticket-dash{flex:1;border-top:1px dashed #333}.noir-ticket-mid{display:flex;justify-content:center;gap:40px;padding:16px 20px}.noir-ticket-item{text-align:center}.noir-ticket-val{font-size:1.4rem;font-weight:800;margin:0}.noir-ticket-lbl{font-size:.6rem;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:1.5px;margin:0}.noir-ticket-bottom{padding:12px 20px 20px}.noir-ticket-date{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}.noir-ticket-date-text{font-size:.88rem;font-weight:600}.noir-ticket-date-sub{font-size:.72rem;color:rgba(255,255,255,.4)}.noir-ticket-time{font-size:1.5rem;font-weight:800;line-height:1}.noir-ticket-loc{font-size:.72rem;color:rgba(255,255,255,.3);margin:6px 0 14px}.noir-ticket-barcode{display:flex;gap:1.5px;align-items:flex-end;height:30px;justify-content:center}.noir-ticket-bar{width:2px;background:#fff;border-radius:1px}`,
        renderPreview: (c) => {
            const bars = Array.from({ length: 40 }, (_, i) => 16 + Math.sin(i * 0.7) * 10 + Math.random() * 6);
            return (
                <div className="noir-ticket">
                    <div className="noir-ticket-top">
                        <h2 className="noir-ticket-event">BITPA</h2>
                        <p className="noir-ticket-year">2023</p>
                        <span className="noir-ticket-icon">⎘</span>
                    </div>
                    <div className="noir-ticket-tear">
                        <div className="noir-ticket-dot" />
                        <div className="noir-ticket-dash" />
                        <div className="noir-ticket-dot" />
                    </div>
                    <div className="noir-ticket-mid">
                        <div className="noir-ticket-item"><h3 className="noir-ticket-val">203</h3><p className="noir-ticket-lbl">Seat</p></div>
                        <div className="noir-ticket-item"><h3 className="noir-ticket-val">02</h3><p className="noir-ticket-lbl">Row</p></div>
                    </div>
                    <div className="noir-ticket-bottom">
                        <div className="noir-ticket-date">
                            <div><div className="noir-ticket-date-text">26 December</div><div className="noir-ticket-date-sub">Sunday</div></div>
                            <div className="noir-ticket-time">12:00</div>
                        </div>
                        <div className="noir-ticket-loc">Khulna, Bangladesh</div>
                        <div className="noir-ticket-barcode">
                            {bars.map((h, i) => <div key={i} className="noir-ticket-bar" style={{ height: `${h}px` }} />)}
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        title: 'Noir Info Card',
        description: 'A dark noir minimal info card with accent top line, icon, title, description and action link. Midnight dark theme.',
        multiColor: true,
        cssTemplate: (c) => `.noir-info{width:300px;background:#141414;border:1px solid #222;border-radius:14px;padding:24px;position:relative;overflow:hidden;transition:border-color .3s,transform .3s;font-family:'Inter',system-ui,sans-serif;color:#fff}.noir-info:hover{border-color:${c.primary}44;transform:translateY(-4px)}.noir-info::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:40px;height:2px;background:${c.primary};border-radius:0 0 4px 4px;transition:width .4s}.noir-info:hover::before{width:80%}.noir-info-icon{width:40px;height:40px;border-radius:10px;background:${c.primary}15;border:1px solid ${c.primary}33;display:flex;align-items:center;justify-content:center;font-size:1.1rem;margin-bottom:14px}.noir-info-title{font-size:1rem;font-weight:700;margin:0 0 8px}.noir-info-desc{font-size:.78rem;color:rgba(255,255,255,.45);line-height:1.6;margin:0 0 16px}.noir-info-link{color:${c.primary};font-size:.78rem;font-weight:600;text-decoration:none;display:flex;align-items:center;gap:4px;transition:gap .2s}.noir-info:hover .noir-info-link{gap:8px}`,
        renderPreview: (c) => (
            <div className="noir-info">
                <div className="noir-info-icon">🎫</div>
                <h3 className="noir-info-title">Event Ticketing</h3>
                <p className="noir-info-desc">Seamless booking experience with QR codes, seat selection, and instant confirmations for any event.</p>
                <a className="noir-info-link" href="#">Learn more →</a>
            </div>
        ),
    },
    {
        title: 'Holo Prism Card',
        description: 'A very dark, premium card with an intense holographic iridescent edge glow. Rainbow spectrum effect.',
        multiColor: false,
        cssTemplate: (c) => `.prism-card{width:300px;background:#050505;border-radius:20px;padding:32px 24px;position:relative;color:#fff;font-family:'Inter',system-ui,sans-serif;text-align:center;z-index:1}.prism-card::before{content:'';position:absolute;inset:-2px;border-radius:22px;background:linear-gradient(115deg,#ff0055,#ffdd00,#00ffaa,#0055ff,#ff0055);background-size:200% 200%;animation:prism-pan 4s linear infinite;z-index:-2;opacity:0.8;filter:blur(8px);transition:filter .3s,opacity .3s}.prism-card:hover::before{opacity:1;filter:blur(14px)}.prism-card::after{content:'';position:absolute;inset:0;background:#0d0d0d;border-radius:20px;z-index:-1}.prism-icon{width:56px;height:56px;margin:0 auto 16px;background:linear-gradient(115deg,#ff0055,#0055ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:32px;display:flex;align-items:center;justify-content:center}.prism-title{font-size:1.2rem;font-weight:800;margin:0 0 12px}.prism-desc{font-size:.8rem;color:rgba(255,255,255,.5);line-height:1.6;margin:0}@keyframes prism-pan{0%{background-position:0% 50%}100%{background-position:100% 50%}}`,
        renderPreview: (c) => (
            <div className="prism-card">
                <div className="prism-icon">✦</div>
                <h3 className="prism-title">Iridescent Surface</h3>
                <p className="prism-desc">Experience UI components with stunning, hardware-accelerated holographic edges and deep carbon textures.</p>
            </div>
        ),
    },
    {
        title: 'Manga Scrapbook Card',
        description: 'A vibrant cutout card with thick black borders, halftone dot patterns, red tape accents, and hard drop shadows. Japanese anime aesthetic.',
        multiColor: true,
        cssTemplate: (c) => `.manga-card{width:300px;background:#e3ded6;border:4px solid #0a0a0a;padding:24px;position:relative;color:#0a0a0a;font-family:'Inter',system-ui,sans-serif;box-shadow:12px 12px 0px ${c.primary};transition:all .2s;z-index:1;overflow:hidden}.manga-card:hover{transform:translate(4px,4px);box-shadow:8px 8px 0px ${c.primary}}.manga-card::before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background-image:radial-gradient(#0a0a0a 15%,transparent 16%);background-size:8px 8px;opacity:0.1;z-index:-1}.manga-tape{position:absolute;width:80px;height:24px;background:${c.primary};opacity:0.9;border:2px solid #0a0a0a;z-index:2}.manga-tape-tl{top:-10px;left:-20px;transform:rotate(-15deg)}.manga-tape-br{bottom:-10px;right:-20px;transform:rotate(-10deg)}.manga-badge{display:inline-block;background:#fff;border:3px solid #0a0a0a;color:#0a0a0a;font-size:.8rem;font-weight:900;text-transform:uppercase;padding:4px 12px;margin-bottom:16px;box-shadow:4px 4px 0px ${c.primary};letter-spacing:1px}.manga-title{font-size:1.6rem;font-weight:900;line-height:1.1;letter-spacing:-1px;margin:0 0 12px;text-transform:uppercase}.manga-desc{font-size:.85rem;font-weight:600;line-height:1.6;margin:0;background:#fff;padding:8px;border:2px solid #0a0a0a}`,
        renderPreview: (c) => (
            <div className="manga-card">
                <div className="manga-tape manga-tape-tl" />
                <div className="manga-tape manga-tape-br" />
                <div className="manga-badge">勇気</div>
                <h3 className="manga-title">Neo Tokyo Design</h3>
                <p className="manga-desc">A deep history of a different path. Embrace the cutout and sticker aesthetics to build dynamic interfaces.</p>
            </div>
        ),
    },
    {
        title: 'Indic Royal Card',
        description: 'An elegant presentation card featuring scalloped corner accents, delicate gold/saffron borders, and classic serif typography.',
        multiColor: true,
        cssTemplate: (c) => `.indic-card{width:300px;background:#fffdf5;border:1px solid ${c.primary}33;padding:32px;position:relative;color:#2c1e16;font-family:'Georgia',serif;text-align:center;box-shadow:0 12px 32px rgba(0,0,0,.04);transition:all .3s ease;z-index:1;border-radius:8px}.indic-card:hover{box-shadow:0 16px 48px rgba(0,0,0,.08);transform:translateY(-2px)}.indic-card::before,.indic-card::after{content:'';position:absolute;width:24px;height:24px;border:1px solid ${c.primary}66;border-radius:50%;z-index:-1}.indic-card::before{top:-12px;left:-12px;clip-path:polygon(50% 50%,100% 50%,100% 100%,50% 100%)}.indic-card::after{bottom:-12px;right:-12px;clip-path:polygon(0 0,50% 0,50% 50%,0 50%)}.indic-card-inner-border{position:absolute;inset:8px;border:1px solid ${c.primary}22;pointer-events:none;border-radius:4px}.indic-icon{width:48px;height:48px;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;font-size:32px;color:${c.primary}}.indic-title{font-size:1.4rem;font-weight:600;margin:0 0 12px;color:#2c1e16}.indic-desc{font-size:.9rem;color:#5a4a42;line-height:1.7;margin:0;font-family:'Inter',sans-serif}`,
        renderPreview: (c) => (
            <div className="indic-card">
                <div className="indic-card-inner-border" />
                <div className="indic-icon">🪔</div>
                <h3 className="indic-title">Cultural Heritage</h3>
                <p className="indic-desc">Discover the warmth of traditional patterns, royal accents, and rich jewel-toned aesthetics in modern UI.</p>
            </div>
        ),
    },
    {
        title: 'Aztec Stone Card',
        description: 'A structural, blocky presentation card echoing mesoamerican temples with step-cut corners and thick obsidian borders.',
        multiColor: true,
        cssTemplate: (c) => `.aztec-card{width:300px;background:#f5ece3;position:relative;color:#2a2421;font-family:'Inter',sans-serif;text-align:center;transition:all .2s;z-index:1;padding:32px;clip-path:polygon(20px 0,calc(100% - 20px) 0,calc(100% - 20px) 20px,100% 20px,100% calc(100% - 20px),calc(100% - 20px) calc(100% - 20px),calc(100% - 20px) 100%,20px 100%,20px calc(100% - 20px),0 calc(100% - 20px),0 20px,20px 20px)}.aztec-card-wrap{position:relative;width:304px;height:auto;z-index:1;filter:drop-shadow(8px 8px 0px ${c.primary})}.aztec-card-border{position:absolute;inset:0;background:#2a2421;z-index:0;clip-path:polygon(22px 0,calc(100% - 22px) 0,calc(100% - 22px) 22px,100% 22px,100% calc(100% - 22px),calc(100% - 22px) calc(100% - 22px),calc(100% - 22px) 100%,22px 100%,22px calc(100% - 22px),0 calc(100% - 22px),0 22px,22px 22px)}.aztec-card-inner{position:relative;z-index:2;height:100%;background:#f5ece3;clip-path:polygon(20px 0,calc(100% - 20px) 0,calc(100% - 20px) 20px,100% 20px,100% calc(100% - 20px),calc(100% - 20px) calc(100% - 20px),calc(100% - 20px) 100%,20px 100%,20px calc(100% - 20px),0 calc(100% - 20px),0 20px,20px 20px);margin:4px;padding:32px;display:flex;flex-direction:column;align-items:center}.aztec-icon{width:56px;height:56px;background:#2a2421;color:#f5ece3;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:24px;clip-path:polygon(8px 0,calc(100% - 8px) 0,calc(100% - 8px) 8px,100% 8px,100% calc(100% - 8px),calc(100% - 8px) calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,8px calc(100% - 8px),0 calc(100% - 8px),0 8px,8px 8px)}.aztec-title{font-size:1.4rem;font-weight:900;margin:0 0 12px;text-transform:uppercase;letter-spacing:1px}.aztec-desc{font-size:.85rem;font-weight:600;line-height:1.6;margin:0;color:rgba(42,36,33,0.8)}.aztec-divider{width:40px;height:4px;background:${c.primary};margin:16px auto}`,
        renderPreview: (c) => (
            <div className="aztec-card-wrap">
                <div className="aztec-card-border" />
                <div className="aztec-card-inner">
                    <div className="aztec-icon">⛰️</div>
                    <h3 className="aztec-title">Sun Temple</h3>
                    <div className="aztec-divider" />
                    <p className="aztec-desc">Inspired by massive stone structures, step pyramids, and brutal geometric carvings of ancient civilizations.</p>
                </div>
            </div>
        ),
    },
];

export default cardEffects;
