import React from 'react';

const tabEffects = [
    // 1. Sliding Indicator Tabs
    {
        title: 'Sliding Indicator Tabs',
        description: 'Horizontal tabs with a sliding underline that follows the active tab.',
        multiColor: false,
        cssTemplate: (c) => `.tabs{display:flex;gap:12px;position:relative;}.tab{padding:8px 16px;cursor:pointer;color:#fff;opacity:0.7;}.tab.active{opacity:1;}.tabs::after{content:'';position:absolute;bottom:0;height:2px;background:${c.primary};transition:left .3s;width:calc(100% / 3);}`,
        renderPreview: (c) => (
            <div className="tabs">
                <div className="tab active">Home</div>
                <div className="tab">Features</div>
                <div className="tab">Pricing</div>
            </div>
        ),
    },
    // 2. Pill Tabs
    {
        title: 'Pill Tabs',
        description: 'Rounded pill-shaped tabs with active highlight.',
        multiColor: true,
        cssTemplate: (c) => `.pill-tabs{display:flex;gap:8px;}.pill-tab{padding:6px 14px;border-radius:999px;background:${c.dark};color:#fff;cursor:pointer;}.pill-tab.active{background:${c.primary};}`,
        renderPreview: (c) => (
            <div className="pill-tabs">
                <div className="pill-tab active">Overview</div>
                <div className="pill-tab">Details</div>
                <div className="pill-tab">Reviews</div>
            </div>
        ),
    },
    // 3. Vertical Tabs
    {
        title: 'Vertical Tabs',
        description: 'Stacked tabs on the left side with content area.',
        multiColor: false,
        cssTemplate: (c) => `.vertical-tabs{display:flex;}.tab-list{display:flex;flex-direction:column;width:150px;background:${c.dark};}.tab-item{padding:12px 16px;color:#fff;cursor:pointer;}.tab-item.active{background:${c.primary};}`,
        renderPreview: (c) => (
            <div className="vertical-tabs">
                <div className="tab-list">
                    <div className="tab-item active">Info</div>
                    <div className="tab-item">Settings</div>
                    <div className="tab-item">Stats</div>
                </div>
                <div style={{ flex: 1, padding: '16px', color: '#fff' }}>Content area</div>
            </div>
        ),
    },
    // 4. iOS Segmented Control
    {
        title: 'iOS Segmented Control',
        description: 'Standard iOS segment picker with sliding active state.',
        multiColor: false,
        cssTemplate: (c) => `.ios-segmented{display:inline-flex;background:rgba(118,118,128,0.24);padding:2px;border-radius:8px;position:relative;width:300px}.ios-segment{flex:1;text-align:center;padding:6px 0;font-size:13px;font-weight:600;font-family:-apple-system, BlinkMacSystemFont, sans-serif;color:#fff;cursor:pointer;position:relative;z-index:2;transition:color 0.2s}.ios-segment.active{color:#000}.ios-indicator{position:absolute;top:2px;bottom:2px;left:2px;width:calc(33.333% - 1.5px);background:#fff;border-radius:6px;box-shadow:0 3px 8px rgba(0,0,0,0.12), 0 3px 1px rgba(0,0,0,0.04);transition:transform 0.25s cubic-bezier(0.25, 1, 0.5, 1);z-index:1}.ios-segmented[data-active="0"] .ios-indicator{transform:translateX(0)}.ios-segmented[data-active="1"] .ios-indicator{transform:translateX(100%)}.ios-segmented[data-active="2"] .ios-indicator{transform:translateX(200%)}`,
        renderPreview: (c) => (
            <div className="ios-segmented" data-active="0">
                <div className="ios-indicator"></div>
                <div className="ios-segment active" onClick={(e) => { const p = e.currentTarget.parentElement; p.setAttribute('data-active', '0'); p.querySelectorAll('.ios-segment').forEach(n => n.classList.remove('active')); e.currentTarget.classList.add('active'); }}>Map</div>
                <div className="ios-segment" onClick={(e) => { const p = e.currentTarget.parentElement; p.setAttribute('data-active', '1'); p.querySelectorAll('.ios-segment').forEach(n => n.classList.remove('active')); e.currentTarget.classList.add('active'); }}>Transit</div>
                <div className="ios-segment" onClick={(e) => { const p = e.currentTarget.parentElement; p.setAttribute('data-active', '2'); p.querySelectorAll('.ios-segment').forEach(n => n.classList.remove('active')); e.currentTarget.classList.add('active'); }}>Satellite</div>
            </div>
        ),
    },
    // 5‑10 placeholders for future variations
    ...Array.from({ length: 6 }, (_, i) => ({
        title: `Tab Variation ${i + 5}`,
        description: 'Additional tab style for expansion.',
        multiColor: false,
        cssTemplate: (c) => `.tab-var${i + 5}{background:${c.primary};padding:8px;color:#fff;}`,
        renderPreview: (c) => (
            <div className={`tab-var${i + 5}`} style={{ background: c.primary, color: '#fff', padding: '8px' }}>
                Tab Variation {i + 5}
            </div>
        ),
    })),
    {
        title: 'Noir Capsule Tabs',
        description: 'Dark noir pill-border tabs with accent highlight on active. Midnight ticket theme with minimal aesthetic.',
        multiColor: true,
        cssTemplate: (c) => `.noir-tabs{display:flex;gap:6px;padding:4px;background:#0a0a0a;border-radius:14px;border:1px solid #1a1a1a;font-family:'Inter',system-ui,sans-serif}.noir-tab{padding:7px 18px;border-radius:10px;border:1px solid transparent;background:transparent;color:rgba(255,255,255,.35);font-size:.78rem;font-weight:600;cursor:pointer;transition:all .2s;white-space:nowrap}.noir-tab:hover{color:rgba(255,255,255,.6)}.noir-tab.active{background:#141414;border-color:#333;color:#fff}.noir-tab.accent{background:${c.primary}15;border-color:${c.primary}44;color:${c.primary}}`,
        renderPreview: (c) => (
            <div className="noir-tabs">
                <button className="noir-tab active">All-Time</button>
                <button className="noir-tab accent">Country ✓</button>
                <button className="noir-tab">City</button>
                <button className="noir-tab">Places</button>
            </div>
        ),
    },
    {
        title: 'Indic Royal Tabs',
        description: 'Elegant, traditional tab navigation with warm tones, serif typography, and a prominent jewel-toned active state with scalloped accents.',
        multiColor: true,
        cssTemplate: (c) => `.indic-tabs{display:inline-flex;padding:6px;background:#fbf6e8;border:1px solid ${c.primary}33;border-radius:6px;box-shadow:inset 0 2px 8px rgba(0,0,0,0.02);font-family:'Georgia',serif}.indic-tab{padding:8px 24px;border:none;background:transparent;color:#5a4a42;font-size:15px;cursor:pointer;transition:all .3s ease;position:relative;z-index:1;border-radius:4px}.indic-tab:hover{color:${c.primary}}.indic-tab.active{color:#fffdf5;font-weight:600}.indic-tab.active::before{content:'';position:absolute;inset:0;background:${c.primary};border-radius:4px;z-index:-1;box-shadow:0 4px 12px ${c.primary}44}.indic-tab.active::after,.indic-tab.active .indic-tab-corner{content:'';position:absolute;width:6px;height:6px;border:1px solid rgba(255,255,255,0.4);border-radius:50%;z-index:-1}.indic-tab.active::after{top:2px;left:2px}.indic-tab.active .indic-tab-corner{bottom:2px;right:2px}`,
        renderPreview: (c) => (
            <div className="indic-tabs">
                <button className="indic-tab active">Sweets <span className="indic-tab-corner"></span></button>
                <button className="indic-tab">Decor</button>
                <button className="indic-tab">Gifts</button>
            </div>
        ),
    },
    {
        title: 'Aztec Stone Tabs',
        description: 'Blocky, architectural tabs with hard angles, thick borders, and step-like active indicators. Mesoamerican theme.',
        multiColor: true,
        cssTemplate: (c) => `.aztec-tabs{display:flex;gap:4px;padding:4px;background:#2a2421;font-family:'Inter',sans-serif}.aztec-tab{padding:12px 24px;border:none;background:#f5ece3;color:#2a2421;font-size:14px;font-weight:900;text-transform:uppercase;letter-spacing:1px;cursor:pointer;transition:all .2s;position:relative;clip-path:polygon(8px 0,calc(100% - 8px) 0,calc(100% - 8px) 8px,100% 8px,100% 100%,0 100%,0 8px,8px 8px)}.aztec-tab:hover{background:#e6ccb2}.aztec-tab.active{background:${c.primary};color:#fff}.aztec-tab.active::after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:24px;height:4px;background:#2a2421}`,
        renderPreview: (c) => (
            <div className="aztec-tabs">
                <button className="aztec-tab active">Codex</button>
                <button className="aztec-tab">Pyramid</button>
                <button className="aztec-tab">Relic</button>
            </div>
        ),
    },
];

export default tabEffects;
