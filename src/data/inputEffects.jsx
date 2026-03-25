import React from 'react';

const inputEffects = [
    // 1. Floating Label Input
    {
        title: 'Floating Label Input',
        description: 'Label moves up when the field is focused or has content.',
        multiColor: false,
        cssTemplate: (c) => `.floating-input{position:relative;margin:24px 0}.floating-input input{width:100%;padding:12px 8px;background:transparent;border:none;border-bottom:2px solid ${c.dark};color:#fff;font-size:16px;outline:none}.floating-input label{position:absolute;left:8px;top:12px;color:${c.light};transition:all .2s}.floating-input input:focus + label,.floating-input input:not(:placeholder-shown) + label{top:-12px;font-size:12px;color:${c.primary}}`,
        renderPreview: (c) => (
            <div className="floating-input">
                <input type="text" placeholder=" " id="floating" />
                <label htmlFor="floating">Username</label>
            </div>
        ),
    },
    // 2. Underline Input
    {
        title: 'Underline Input',
        description: 'Simple underline that animates on focus.',
        multiColor: false,
        cssTemplate: (c) => `.underline-input{margin:24px 0}.underline-input input{width:100%;padding:8px 0;background:transparent;border:none;border-bottom:2px solid ${c.light};color:#fff;font-size:16px;outline:none;transition:border-color .2s}.underline-input input:focus{border-bottom-color:${c.primary}}`,
        renderPreview: (c) => (
            <div className="underline-input">
                <input type="text" placeholder="Email" />
            </div>
        ),
    },
    // 3. Neon Glow Input
    {
        title: 'Neon Glow Input',
        description: 'Input with neon border that glows on focus.',
        multiColor: true,
        cssTemplate: (c) => `.neon-input{margin:24px 0}.neon-input input{width:100%;padding:12px;border:2px solid ${c.dark};background:transparent;color:#fff;font-size:16px;outline:none;transition:box-shadow .3s}.neon-input input:focus{box-shadow:0 0 12px ${c.primary}}`,
        renderPreview: (c) => (
            <div className="neon-input">
                <input type="text" placeholder="Search" />
            </div>
        ),
    },
    // 4. Search Bar
    {
        title: 'Search Bar',
        description: 'Full‑width search input with icon.',
        multiColor: false,
        cssTemplate: (c) => `.search-bar{display:flex;align-items:center;background:${c.dark};border-radius:8px;overflow:hidden;margin:24px 0}.search-bar input{flex:1;padding:10px 12px;background:transparent;border:none;color:#fff;font-size:16px;outline:none}.search-bar button{background:${c.primary};border:none;padding:10px 16px;color:#fff;cursor:pointer}`,
        renderPreview: (c) => (
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button></button>
            </div>
        ),
    },
    // 5. Rounded Input
    {
        title: 'Rounded Input',
        description: 'Input with fully rounded corners and subtle background.',
        multiColor: false,
        cssTemplate: (c) => `.rounded-input{margin:24px 0}.rounded-input input{width:100%;padding:12px 16px;border:none;border-radius:999px;background:${c.dark};color:#fff;font-size:16px;outline:none}`,
        renderPreview: (c) => (
            <div className="rounded-input">
                <input type="text" placeholder="Enter name" />
            </div>
        ),
    },
    // 6. Bubbly Input
    {
        title: 'Bubbly Input',
        description: 'Soft, floating 3D bubble style input field.',
        multiColor: true,
        cssTemplate: (c) => `.bubbly-input{position:relative;margin:24px 0}.bubbly-input input{width:100%;padding:16px 20px;background:#ffffff22;border:2px solid transparent;border-radius:40px;color:#fff;font-size:16px;outline:none;box-shadow:inset 0 4px 6px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.1);backdrop-filter:blur(8px);transition:all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)}.bubbly-input input::placeholder{color:rgba(255,255,255,0.6)}.bubbly-input input:focus{background:rgba(255,255,255,0.1);border-color:${c.primary};box-shadow:inset 0 4px 6px rgba(0,0,0,0.1), 0 12px 24px ${c.dark}66;transform:translateY(-2px)}`,
        renderPreview: (c) => (
            <div className="bubbly-input">
                <input type="text" placeholder="Enter your email..." />
            </div>
        ),
    },
    // 7. Google Material Input
    {
        title: 'Google Material Input',
        description: 'Material Design outlined text field with floating label.',
        multiColor: true,
        cssTemplate: (c) => `.material-input{position:relative;margin:24px 0;width:100%;font-family:Roboto,sans-serif}.material-input input{width:100%;padding:16px 14px;background:transparent;border:1px solid #5f6368;border-radius:4px;color:#fff;font-size:16px;outline:none;transition:border-color 0.2s}.material-input label{position:absolute;left:10px;top:16px;padding:0 4px;background:#0A0A0A;color:#9aa0a6;font-size:16px;transition:all 0.2s;pointer-events:none}.material-input input:focus{border:2px solid #8ab4f8;padding:15px 13px}.material-input input:focus + label,.material-input input:not(:placeholder-shown) + label{top:-10px;font-size:12px;color:#8ab4f8;font-weight:500}`,
        renderPreview: (c) => (
            <div className="material-input">
                <input type="text" placeholder=" " id="mat-input" />
                <label htmlFor="mat-input">Email or phone</label>
            </div>
        ),
    },
    // 8. Discord Chat Input
    {
        title: 'Discord Chat Input',
        description: 'The familiar pill-shaped chat bar from Discord.',
        multiColor: false,
        cssTemplate: (c) => `.discord-input{position:relative;margin:24px 0;width:100%;display:flex;align-items:center;background:#383a40;border-radius:8px;padding:0 16px;font-family:"gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}.discord-input-icon{background:transparent;border:none;color:#b5bac1;font-size:24px;cursor:pointer;padding:10px 0;margin-right:12px;display:flex;align-items:center;justify-content:center;transition:color 0.2s}.discord-input-icon:hover{color:#dbdee1}.discord-input input{flex:1;background:transparent;border:none;color:#dbdee1;font-size:16px;padding:14px 0;outline:none}.discord-input input::placeholder{color:#6d6f78}`,
        renderPreview: (c) => (
            <div className="discord-input">
                <button className="discord-input-icon">⊕</button>
                <input type="text" placeholder="Message #general" />
            </div>
        ),
    },
    // 9. Neumorphic Input
    {
        title: 'Neumorphic Input',
        description: 'Soft 3D inset shadow to create an embedded physical field effect.',
        multiColor: true,
        cssTemplate: (c) => `.neu-input{margin:24px 0;width:100%}.neu-input input{width:100%;padding:16px 20px;background:var(--neu-bg);border:none;border-radius:12px;color:var(--text-primary);font-size:16px;outline:none;box-shadow:inset 6px 6px 12px var(--neu-shadow-dark), inset -6px -6px 12px var(--neu-shadow-light);transition:all 0.3s ease}.neu-input input::placeholder{color:var(--text-secondary)}.neu-input input:focus{box-shadow:inset 8px 8px 16px var(--neu-shadow-dark), inset -8px -8px 16px var(--neu-shadow-light);color:${c.primary}}`,
        renderPreview: (c) => (
            <div className="neu-input">
                <input type="text" placeholder="Type something..." />
            </div>
        ),
    },
    {
        title: 'Noir Search Input',
        description: 'A dark noir search input with subtle border, icon, and accent glow on focus. Midnight minimal theme.',
        multiColor: true,
        cssTemplate: (c) => `.noir-search-wrap{position:relative;width:280px}.noir-search{width:100%;padding:12px 16px 12px 40px;background:#141414;border:1px solid #222;border-radius:12px;color:#fff;font-size:14px;font-family:'Inter',system-ui,sans-serif;outline:none;transition:all .3s}.noir-search::placeholder{color:rgba(255,255,255,.25)}.noir-search:focus{border-color:${c.primary}66;box-shadow:0 0 0 3px ${c.primary}11}.noir-search-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:rgba(255,255,255,.25);font-size:14px;pointer-events:none;transition:color .3s}.noir-search:focus ~ .noir-search-icon{color:${c.primary}}`,
        renderPreview: (c) => (
            <div className="noir-search-wrap">
                <input className="noir-search" type="text" placeholder="Search anything..." />
                <span className="noir-search-icon">🔍</span>
            </div>
        ),
    },
    {
        title: 'Holo Prism Input',
        description: 'A dark textured input that reveals a vibrant, animated holographic spectrum edge glow when focused. Prism theme.',
        multiColor: false,
        cssTemplate: (c) => `.prism-input-wrap{position:relative;width:280px;z-index:1}.prism-input{width:100%;padding:14px 18px;background:#0a0a0a;border:none;border-radius:12px;color:#fff;font-size:15px;font-family:'Inter',system-ui,sans-serif;outline:none;position:relative;z-index:2}.prism-input::placeholder{color:rgba(255,255,255,.3)}.prism-input-wrap::before{content:'';position:absolute;inset:-2px;border-radius:14px;background:linear-gradient(115deg,#ff0055,#ffdd00,#00ffaa,#0055ff,#ff0055);background-size:200% 200%;animation:prism-pan 4s linear infinite;z-index:0;opacity:0.3;filter:blur(4px);transition:opacity .3s,filter .3s}.prism-input:focus ~ .prism-input-bg::before,.prism-input-wrap:focus-within::before{opacity:1;filter:blur(8px)}.prism-input-bg{position:absolute;inset:0;background:linear-gradient(180deg,#1a1a1a 0%,#0a0a0a 100%);border-radius:12px;z-index:1}`,
        renderPreview: (c) => (
            <div className="prism-input-wrap">
                <input className="prism-input" type="text" placeholder="Enter magical codeword..." />
                <div className="prism-input-bg" />
            </div>
        ),
    },
    {
        title: 'Manga Sticker Input',
        description: 'A chunky, high-contrast input field with solid red drop shadow and thick borders. Tokyo street aesthetic.',
        multiColor: true,
        cssTemplate: (c) => `.manga-input-wrap{position:relative;width:280px}.manga-input{width:100%;padding:14px 16px;background:#fff;border:3px solid #0a0a0a;color:#0a0a0a;font-size:15px;font-weight:700;font-family:'Inter',system-ui,sans-serif;outline:none;box-shadow:6px 6px 0px ${c.primary};transition:all .2s;text-transform:uppercase;letter-spacing:1px}.manga-input::placeholder{color:rgba(10,10,10,.3)}.manga-input:focus{transform:translate(2px,2px);box-shadow:4px 4px 0px ${c.primary}}`,
        renderPreview: (c) => (
            <div className="manga-input-wrap">
                <input className="manga-input" type="text" placeholder="username" />
            </div>
        ),
    },
    {
        title: 'Indic Royal Input',
        description: 'An elegant, minimal text input inspired by traditional heritage with warm borders and classic serif typography.',
        multiColor: true,
        cssTemplate: (c) => `.indic-input-wrap{position:relative;width:280px}.indic-input{width:100%;padding:12px 16px;background:rgba(255,253,245,0.7);border:1px solid ${c.primary}33;border-bottom:3px solid ${c.primary}88;color:#2c1e16;font-size:16px;font-family:'Georgia',serif;outline:none;border-radius:6px 6px 0 0;transition:all .3s ease}.indic-input::placeholder{color:rgba(44,30,22,.4);font-style:italic}.indic-input:focus{background:#fffdf5;border-color:${c.primary};border-bottom-width:3px;box-shadow:0 8px 16px rgba(0,0,0,.04)}.indic-input-icon{position:absolute;right:16px;top:50%;transform:translateY(-50%);color:${c.primary};opacity:0.6}`,
        renderPreview: (c) => (
            <div className="indic-input-wrap">
                <input className="indic-input" type="text" placeholder="Enter your name..." />
                <span className="indic-input-icon">✧</span>
            </div>
        ),
    },
    {
        title: 'Aztec Stone Input',
        description: 'A structural, blocky text input mirroring carved stone with heavy bottom borders and sharp interior shadows.',
        multiColor: true,
        cssTemplate: (c) => `.aztec-input-wrap{position:relative;width:280px}.aztec-input{width:100%;padding:14px 18px;background:#f5ece3;border:4px solid #2a2421;color:#2a2421;font-size:15px;font-weight:700;font-family:'Inter',system-ui,sans-serif;outline:none;box-shadow:inset 4px 4px 0px rgba(0,0,0,0.05);transition:all .2s;border-bottom-width:8px}.aztec-input::placeholder{color:rgba(42,36,33,.4);text-transform:uppercase;letter-spacing:1px;font-size:12px}.aztec-input:focus{background:#fff;border-color:${c.primary};box-shadow:inset 4px 4px 0px ${c.primary}33}`,
        renderPreview: (c) => (
            <div className="aztec-input-wrap">
                <input className="aztec-input" type="text" placeholder="Engrave Name" />
            </div>
        ),
    }
];

export default inputEffects;
