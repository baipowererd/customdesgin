import React from 'react';

const toggleEffects = [
    // 1. Apple iOS Switch
    {
        title: 'Apple iOS Switch',
        description: 'The classic smooth green toggle from iOS.',
        multiColor: false,
        cssTemplate: (c) => `.ios-switch{position:relative;width:51px;height:31px;background:#e9e9ea;border-radius:31px;cursor:pointer;transition:background 0.3s ease}.ios-switch::after{content:'';position:absolute;top:2px;left:2px;width:27px;height:27px;background:#fff;border-radius:50%;box-shadow:0 3px 8px rgba(0,0,0,0.15), 0 1px 1px rgba(0,0,0,0.16), 0 3px 1px rgba(0,0,0,0.1);transition:transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)}.ios-switch.active{background:#34c759}.ios-switch.active::after{transform:translateX(20px)}`,
        renderPreview: (c) => (
            <div className="ios-switch active" onClick={(e) => { e.currentTarget.classList.toggle('active'); }} />
        ),
    },
    // 2. Custom Checkmark
    {
        title: 'Custom Checkmark',
        description: 'Checkbox with animated checkmark stroke.',
        multiColor: true,
        cssTemplate: (c) => `.checkbox{position:relative;width:20px;height:20px;border:2px solid ${c.dark};border-radius:4px;cursor:pointer;transition:border-color .3s}.checkbox::after{content:'';position:absolute;left:4px;top:0;width:6px;height:12px;border-right:2px solid ${c.primary};border-bottom:2px solid ${c.primary};transform:scale(0) rotate(45deg);transition:transform .3s}.checkbox.checked{border-color:${c.primary}}.checkbox.checked::after{transform:scale(1)}`,
        renderPreview: (c) => (
            <div className="checkbox checked" onClick={(e) => { e.currentTarget.classList.toggle('checked'); }} />
        ),
    },
    // 3. Icon Toggle
    {
        title: 'Icon Toggle',
        description: 'Toggle that switches between two icons.',
        multiColor: false,
        cssTemplate: (c) => `.icon-toggle{display:flex;align-items:center;cursor:pointer;color:${c.light}}.icon-toggle .icon{margin-right:8px;font-size:18px}.icon-toggle.active .icon{color:${c.primary}}`,
        renderPreview: (c) => (
            <div className="icon-toggle active" onClick={(e) => { e.currentTarget.classList.toggle('active'); }}>
                <span className="icon"></span>Dark Mode
            </div>
        ),
    },
    // 4. Glowing Switch
    {
        title: 'Glowing Switch',
        description: 'A neon-styled switch that emits a glow when active.',
        multiColor: false,
        cssTemplate: (c) => `.glow-switch{position:relative;width:56px;height:28px;background:rgba(255,255,255,0.1);border-radius:14px;cursor:pointer;transition:0.4s;box-shadow:inset 0 0 5px rgba(0,0,0,0.5)}.glow-switch::after{content:'';position:absolute;top:4px;left:4px;width:20px;height:20px;background:#fff;border-radius:50%;transition:0.4s;box-shadow:0 2px 4px rgba(0,0,0,0.2)}.glow-switch.active{background:${c.primary};box-shadow:0 0 15px ${c.primary}, inset 0 0 5px rgba(0,0,0,0.2)}.glow-switch.active::after{left:32px;background:#fff}`,
        renderPreview: (c) => (
            <div className="glow-switch active" onClick={(e) => { e.currentTarget.classList.toggle('active'); }} />
        ),
    },
    // 5. Neumorphic Toggle
    {
        title: 'Neumorphic Toggle',
        description: 'Soft 3D embossed style matching dark setups.',
        multiColor: true,
        cssTemplate: (c) => `.neu-switch{position:relative;width:60px;height:30px;background:var(--neu-bg);border-radius:15px;cursor:pointer;box-shadow:inset 4px 4px 8px var(--neu-shadow-dark), inset -4px -4px 8px var(--neu-shadow-light);transition:0.3s}.neu-switch::after{content:'';position:absolute;top:2px;left:2px;width:26px;height:26px;background:var(--neu-bg);border-radius:50%;box-shadow:3px 3px 6px var(--neu-shadow-dark), -2px -2px 5px var(--neu-shadow-light);transition:transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)}.neu-switch.active::after{transform:translateX(30px);background:${c.primary};box-shadow:0 0 10px ${c.primary}}`,
        renderPreview: (c) => (
            <div className="neu-switch" onClick={(e) => { e.currentTarget.classList.toggle('active'); }} />
        ),
    },
    // 6. Text Label Toggle
    {
        title: 'Text Label Toggle',
        description: 'Switch with built-in ON and OFF text.',
        multiColor: false,
        cssTemplate: (c) => `.text-switch{position:relative;width:70px;height:32px;background:${c.dark};border-radius:16px;cursor:pointer;transition:0.3s;overflow:hidden}.text-switch::before{content:'OFF';position:absolute;right:10px;top:50%;transform:translateY(-50%);font-size:10px;font-weight:bold;color:${c.light};transition:0.3s}.text-switch::after{content:'ON';position:absolute;left:-20px;top:50%;transform:translateY(-50%);font-size:10px;font-weight:bold;color:#fff;transition:0.3s;opacity:0}.text-switch .thumb{position:absolute;top:4px;left:4px;width:24px;height:24px;background:#fff;border-radius:50%;transition:0.3s;z-index:2;box-shadow:0 2px 4px rgba(0,0,0,0.3)}.text-switch.active{background:${c.primary}}.text-switch.active::before{opacity:0;right:-20px}.text-switch.active::after{opacity:1;left:12px}.text-switch.active .thumb{left:42px}`,
        renderPreview: (c) => (
            <div className="text-switch active" onClick={(e) => { e.currentTarget.classList.toggle('active'); }}>
                <div className="thumb"></div>
            </div>
        ),
    },
    // 7. Day/Night Toggle
    {
        title: 'Day / Night Toggle',
        description: 'Thematic toggle showing sun and moon emojis.',
        multiColor: false,
        cssTemplate: (c) => `.daynight-switch{position:relative;width:60px;height:32px;background:#1e293b;border-radius:16px;cursor:pointer;transition:background 0.4s}.daynight-switch .thumb{position:absolute;top:4px;left:4px;width:24px;height:24px;background:#fff;border-radius:50%;transition:left 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);display:flex;align-items:center;justify-content:center;font-size:14px;box-shadow:0 2px 5px rgba(0,0,0,0.3)}.daynight-switch.active{background:#38bdf8}.daynight-switch.active .thumb{left:32px;background:#fef08a}`,
        renderPreview: (c) => (
            <div className="daynight-switch" onClick={(e) => {
                const t = e.currentTarget;
                t.classList.toggle('active');
                const span = t.querySelector('.thumb span');
                span.textContent = t.classList.contains('active') ? '️' : '';
            }}>
                <div className="thumb"><span></span></div>
            </div>
        ),
    },
    // 8. Minimalist Line Toggle
    {
        title: 'Line Track Toggle',
        description: 'A very thin background line with a larger floating handle.',
        multiColor: true,
        cssTemplate: (c) => `.line-switch{position:relative;width:40px;height:12px;background:rgba(255,255,255,0.2);border-radius:6px;cursor:pointer;transition:0.3s;margin:8px 0}.line-switch::after{content:'';position:absolute;top:-4px;left:0;width:20px;height:20px;background:${c.light};border-radius:50%;transition:0.3s;box-shadow:0 1px 3px rgba(0,0,0,0.4)}.line-switch.active{background:${c.secondary}}.line-switch.active::after{left:20px;background:${c.primary}}`,
        renderPreview: (c) => (
            <div className="line-switch" onClick={(e) => { e.currentTarget.classList.toggle('active'); }} />
        ),
    },
    // 9. Square Modern Switch
    {
        title: 'Square Block Switch',
        description: 'Sharp, modern aesthetics with square edges rather than pills.',
        multiColor: false,
        cssTemplate: (c) => `.square-switch{position:relative;width:48px;height:24px;background:${c.dark};border:2px solid rgba(255,255,255,0.1);cursor:pointer;transition:0.3s}.square-switch::after{content:'';position:absolute;top:2px;left:2px;width:16px;height:16px;background:${c.light};transition:0.3s}.square-switch.active{background:${c.primary};border-color:${c.primary}}.square-switch.active::after{left:26px;background:#fff}`,
        renderPreview: (c) => (
            <div className="square-switch" onClick={(e) => { e.currentTarget.classList.toggle('active'); }} />
        ),
    },
    // 10. Morphing Checkbox -> Circle
    {
        title: 'Morphing Checkbox',
        description: 'Starts as a square checkbox, morphs into a circular check.',
        multiColor: true,
        cssTemplate: (c) => `.morph-check{position:relative;width:24px;height:24px;background:transparent;border:2px solid ${c.light};border-radius:4px;cursor:pointer;transition:all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);display:flex;align-items:center;justify-content:center}.morph-check svg{width:14px;height:14px;stroke:#fff;stroke-width:3;stroke-dasharray:20;stroke-dashoffset:20;fill:none;transition:stroke-dashoffset 0.4s 0.1s}.morph-check.checked{background:${c.primary};border-color:${c.primary};border-radius:12px}.morph-check.checked svg{stroke-dashoffset:0}`,
        renderPreview: (c) => (
            <div className="morph-check checked" onClick={(e) => { e.currentTarget.classList.toggle('checked'); }}>
                <svg viewBox="0 0 16 12">
                    <polyline points="2 6 6 10 14 2" />
                </svg>
            </div>
        ),
    },
    {
        title: 'Neumorphic Button Toggle',
        description: 'A button-style toggle that looks physically pressed when active.',
        multiColor: true,
        cssTemplate: (c) => `.neu-btn-toggle{padding:12px 24px;background:var(--neu-bg);border-radius:12px;color:var(--text-primary);font-weight:600;font-size:15px;cursor:pointer;box-shadow:6px 6px 14px var(--neu-shadow-dark), -6px -6px 14px var(--neu-shadow-light);transition:all 0.2s ease;user-select:none}.neu-btn-toggle.active{color:${c.primary};box-shadow:inset 6px 6px 14px var(--neu-shadow-dark), inset -6px -6px 14px var(--neu-shadow-light)}`,
        renderPreview: (c) => (
            <div className="neu-btn-toggle active" onClick={(e) => { e.currentTarget.classList.toggle('active'); }}>
                Toggle State
            </div>
        ),
    },
    {
        title: 'Noir Toggle',
        description: 'A dark noir minimal toggle with deep black track, subtle border, and accent-colored active state. Midnight ticket theme.',
        multiColor: true,
        cssTemplate: (c) => `.noir-toggle{position:relative;width:48px;height:26px;background:#1a1a1a;border:1px solid #333;border-radius:26px;cursor:pointer;transition:all 0.3s ease}.noir-toggle::after{content:'';position:absolute;top:3px;left:3px;width:18px;height:18px;background:#444;border-radius:50%;transition:all 0.3s cubic-bezier(0.25,1,0.5,1)}.noir-toggle.active{background:${c.primary}22;border-color:${c.primary}66}.noir-toggle.active::after{transform:translateX(22px);background:${c.primary};box-shadow:0 0 8px ${c.primary}66}.noir-toggle-wrap{display:flex;align-items:center;gap:12px;color:rgba(255,255,255,.5);font-size:13px;font-family:'Inter',system-ui,sans-serif;font-weight:500}`,
        renderPreview: (c) => (
            <div className="noir-toggle-wrap" onClick={(e) => { const t = e.currentTarget.querySelector('.noir-toggle'); t.classList.toggle('active'); }}>
                <div className="noir-toggle active" />
                Notifications
            </div>
        ),
    },
    {
        title: 'Manga Sticker Toggle',
        description: 'A chunky, thick-bordered toggle switch with hard shadow and rapid snap animation. Tokyo street vibe.',
        multiColor: true,
        cssTemplate: (c) => `.manga-toggle{position:relative;width:54px;height:30px;background:#fff;border:3px solid #0a0a0a;border-radius:0;cursor:pointer;box-shadow:4px 4px 0px ${c.primary};transition:all 0.15s ease;overflow:hidden}.manga-toggle::after{content:'';position:absolute;top:0px;left:0px;width:24px;height:24px;background:#0a0a0a;border:2px solid #0a0a0a;border-radius:0;transition:transform 0.15s cubic-bezier(0,0,0,1)}.manga-toggle.active{background:${c.primary}}.manga-toggle.active::after{transform:translateX(24px);background:#fff;border-color:#0a0a0a}.manga-toggle:active{transform:translate(2px,2px);box-shadow:2px 2px 0px ${c.primary}}.manga-toggle-wrap{display:flex;align-items:center;gap:16px;color:#0a0a0a;font-size:14px;font-family:'Inter',system-ui,sans-serif;font-weight:900;text-transform:uppercase;letter-spacing:1px}`,
        renderPreview: (c) => (
            <div className="manga-toggle-wrap" onClick={(e) => { const t = e.currentTarget.querySelector('.manga-toggle'); t.classList.toggle('active'); }}>
                <div className="manga-toggle active" />
                Power On
            </div>
        ),
    },
    {
        title: 'Indic Royal Toggle',
        description: 'An elegant switch featuring a warm off-white track, delicate borders, and a rich colorful active state.',
        multiColor: true,
        cssTemplate: (c) => `.indic-toggle-wrap{display:flex;align-items:center;gap:12px;color:#2c1e16;font-size:15px;font-family:'Georgia',serif;font-weight:600}.indic-toggle{position:relative;width:52px;height:28px;background:#fbf6e8;border:1px solid ${c.primary}44;border-radius:30px;cursor:pointer;transition:all .3s ease;box-shadow:inset 0 2px 4px rgba(0,0,0,.04)}.indic-toggle::before{content:'';position:absolute;inset:2px;border:1px dashed ${c.primary}22;border-radius:30px}.indic-toggle::after{content:'';position:absolute;top:3px;left:4px;width:20px;height:20px;background:#fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.15),0 0 0 1px ${c.primary}15;transition:all .3s cubic-bezier(0.4,0,0.2,1)}.indic-toggle.active{background:${c.primary};border-color:${c.primary}}.indic-toggle.active::before{border-color:rgba(255,255,255,.2)}.indic-toggle.active::after{transform:translateX(22px);background:#fff;box-shadow:0 2px 6px rgba(0,0,0,.2)}`,
        renderPreview: (c) => (
            <div className="indic-toggle-wrap" onClick={(e) => { const t = e.currentTarget.querySelector('.indic-toggle'); t.classList.toggle('active'); }}>
                <div className="indic-toggle active" />
                Festive Mode
            </div>
        ),
    },
    {
        title: 'Aztec Stone Toggle',
        description: 'A structural toggle switch with a blocky, stepped thumb and thick obsidian borders. Mesoamerican geometry.',
        multiColor: true,
        cssTemplate: (c) => `.aztec-toggle-wrap{display:flex;align-items:center;gap:16px;color:#2a2421;font-size:14px;font-family:'Inter',sans-serif;font-weight:900;text-transform:uppercase;letter-spacing:1px}.aztec-toggle{position:relative;width:60px;height:24px;background:#2a2421;cursor:pointer;transition:all .2s ease;box-shadow:inset 0 0 0 2px #fff}.aztec-toggle::after{content:'';position:absolute;top:-4px;left:0px;width:32px;height:32px;background:#f5ece3;border:4px solid #2a2421;box-shadow:4px 4px 0 0 ${c.primary};transition:all 0.2s cubic-bezier(0.25,1,0.5,1);clip-path:polygon(4px 0,calc(100% - 4px) 0,calc(100% - 4px) 4px,100% 4px,100% calc(100% - 4px),calc(100% - 4px) calc(100% - 4px),calc(100% - 4px) 100%,4px 100%,4px calc(100% - 4px),0 calc(100% - 4px),0 4px,4px 4px)}.aztec-toggle.active{background:${c.primary}}.aztec-toggle.active::after{transform:translateX(28px);background:#fff}`,
        renderPreview: (c) => (
            <div className="aztec-toggle-wrap" onClick={(e) => { const t = e.currentTarget.querySelector('.aztec-toggle'); t.classList.toggle('active'); }}>
                <div className="aztec-toggle active" />
                Stone Gate
            </div>
        ),
    }
];

export default toggleEffects;
