import React from 'react';

const selectEffects = [
    // 1. Custom Styled Select
    {
        title: 'Custom Styled Select',
        description: 'Select element with custom background and arrow.',
        multiColor: false,
        cssTemplate: (c) => `.custom-select{position:relative;width:200px;background:${c.dark};border:none;border-radius:8px;padding:8px 12px;color:#fff;appearance:none;cursor:pointer}.custom-select::after{content:'▼';position:absolute;right:12px;top:50%;transform:translateY(-50%);color:${c.light}}`,
        renderPreview: (c) => (
            <select className="custom-select">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
        ),
    },
    // 2. Searchable Dropdown
    {
        title: 'Searchable Dropdown',
        description: 'Dropdown with an input to filter options.',
        multiColor: true,
        cssTemplate: (c) => `.searchable-dropdown{position:relative;width:220px}.searchable-dropdown input{width:100%;padding:8px 12px;border:none;border-radius:8px;background:${c.dark};color:#fff;outline:none}.searchable-dropdown ul{position:absolute;top:100%;left:0;width:100%;max-height:150px;overflow-y:auto;background:${c.dark};border-radius:0 0 8px 8px;margin:0;padding:0;list-style:none;display:none}.searchable-dropdown.open ul{display:block}.searchable-dropdown li{padding:8px 12px;color:#fff;cursor:pointer}.searchable-dropdown li:hover{background:${c.primary}}`,
        renderPreview: (c) => (
            <div className="searchable-dropdown" onClick={(e) => { e.currentTarget.classList.toggle('open'); }}>
                <input type="text" placeholder="Search..." readOnly />
                <ul>
                    <li>Apple</li>
                    <li>Banana</li>
                    <li>Cherry</li>
                </ul>
            </div>
        ),
    },
    // 3. Multi‑Select Tags
    {
        title: 'Multi‑Select Tags',
        description: 'Select multiple items displayed as removable tags.',
        multiColor: false,
        cssTemplate: (c) => `.multi-select{display:flex;flex-wrap:wrap;gap:8px;background:${c.dark};padding:8px;border-radius:8px}.multi-select .tag{background:${c.primary};color:#fff;padding:4px 8px;border-radius:4px;display:flex;align-items:center}.multi-select .tag .remove{margin-left:4px;cursor:pointer}`,
        renderPreview: (c) => (
            <div className="multi-select">
                <span className="tag">React<span className="remove">✕</span></span>
                <span className="tag">Vue<span className="remove">✕</span></span>
                <span className="tag">Svelte<span className="remove">✕</span></span>
            </div>
        ),
    },
    // 4. Icon‑Prefixed Select
    {
        title: 'Icon‑Prefixed Select',
        description: 'Select with an icon inside the field.',
        multiColor: false,
 cssTemplate: (c) => `.icon-select{position:relative;width:200px;background:${c.dark};border:none;border-radius:8px;padding:8px 12px 8px 36px;color:#fff;appearance:none;cursor:pointer}.icon-select::before{content:'';position:absolute;left:12px;top:50%;transform:translateY(-50%);color:${c.light}}`,
        renderPreview: (c) => (
            <select className="icon-select">
                <option>Folder 1</option>
                <option>Folder 2</option>
                <option>Folder 3</option>
            </select>
        ),
    },
    // 5. Rounded Select
    {
        title: 'Rounded Select',
        description: 'Fully rounded select dropdown.',
        multiColor: false,
        cssTemplate: (c) => `.rounded-select{width:180px;padding:8px 12px;border:none;border-radius:999px;background:${c.dark};color:#fff;appearance:none;cursor:pointer}`,
        renderPreview: (c) => (
            <select className="rounded-select">
                <option>Red</option>
                <option>Green</option>
                <option>Blue</option>
            </select>
        ),
    },
    // 5b. Google Material Select
    {
        title: 'Google Material Select',
        description: 'Material Design outlined select with standard spacing.',
        multiColor: true,
        cssTemplate: (c) => `.mat-select-wrap{position:relative;width:200px;font-family:Roboto,sans-serif}.mat-select-wrap select{width:100%;padding:16px 14px;background:transparent;border:1px solid #5f6368;border-radius:4px;color:#fff;font-size:16px;outline:none;transition:border-color 0.2s;appearance:none;cursor:pointer}.mat-select-wrap select:focus{border:2px solid #8ab4f8;padding:15px 13px}.mat-select-wrap::after{content:'▼';position:absolute;right:14px;top:50%;transform:translateY(-50%);color:#9aa0a6;pointer-events:none;font-size:12px}.mat-select-wrap label{position:absolute;left:10px;top:-10px;padding:0 4px;background:#0A0A0A;color:#9aa0a6;font-size:12px;pointer-events:none}.mat-select-wrap select:focus + label{color:#8ab4f8;font-weight:500}`,
        renderPreview: (c) => (
            <div className="mat-select-wrap">
                <select defaultValue="1">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </select>
                <label>Category</label>
            </div>
        ),
    },
    // 6. Floating Label Select
    {
        title: 'Floating Label Select',
        description: 'Select with a floating label that animates on focus/selection.',
        multiColor: false,
        cssTemplate: (c) => `.floating-select-wrap{position:relative;width:200px}.floating-select-wrap select{width:100%;padding:16px 12px 4px;border:none;border-bottom:2px solid ${c.light};background:transparent;color:#fff;appearance:none;cursor:pointer;outline:none}.floating-select-wrap select:focus{border-bottom-color:${c.primary}}.floating-select-wrap label{position:absolute;left:12px;top:10px;font-size:10px;color:${c.light};pointer-events:none;transition:0.2s}.floating-select-wrap select::after{content:'▼';position:absolute;right:12px;top:50%;transform:translateY(-50%);color:${c.light};pointer-events:none}`,
        renderPreview: (c) => (
            <div className="floating-select-wrap">
                <select defaultValue="">
                    <option value="" disabled hidden></option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                <label>Floating Label</label>
            </div>
        ),
    },
    // 7. Underlined Select
    {
        title: 'Underlined Select',
        description: 'Minimalist select with only a bottom border.',
        multiColor: false,
        cssTemplate: (c) => `.underlined-select{width:200px;padding:8px 0;border:none;border-bottom:2px solid ${c.light};background:transparent;color:#fff;appearance:none;cursor:pointer;outline:none}.underlined-select:focus{border-bottom-color:${c.primary}}.underlined-select option{background:${c.dark};color:#fff}`,
        renderPreview: (c) => (
            <select className="underlined-select">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
        ),
    },
    // 8. Glassmorphic Select
    {
        title: 'Glassmorphic Select',
        description: 'Select with a glassmorphism blurred background effect.',
        multiColor: false,
        cssTemplate: (c) => `.glass-select{width:200px;padding:10px 14px;border:1px solid rgba(255,255,255,0.2);border-radius:12px;background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);color:#fff;appearance:none;cursor:pointer;outline:none;box-shadow:0 4px 6px rgba(0,0,0,0.1)}.glass-select option{background:${c.dark};color:#fff}`,
        renderPreview: (c) => (
            <select className="glass-select">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
        ),
    },
    // 9. Gradient Border Select
    {
        title: 'Gradient Border Select',
        description: 'Select with a colorful gradient border.',
        multiColor: true,
        cssTemplate: (c) => `.gradient-border-select-wrap{padding:2px;background:linear-gradient(90deg, ${c.primary}, ${c.secondary});border-radius:8px;display:inline-block}.gradient-border-select-wrap select{width:200px;padding:8px 12px;border:none;border-radius:6px;background:${c.dark};color:#fff;appearance:none;cursor:pointer;outline:none}.gradient-border-select-wrap select option{background:${c.dark};color:#fff}`,
        renderPreview: (c) => (
            <div className="gradient-border-select-wrap">
                <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>
        ),
    },
    // 10. Neon Glow Select
    {
        title: 'Neon Glow Select',
        description: 'Select dropdown with a glowing neon border effect.',
        multiColor: false,
        cssTemplate: (c) => `.neon-select{width:200px;padding:10px 14px;border:1px solid ${c.primary};border-radius:8px;background:transparent;color:#fff;appearance:none;cursor:pointer;outline:none;transition:0.3s;box-shadow:0 0 5px ${c.primary}, inset 0 0 5px ${c.primary}}.neon-select:focus{box-shadow:0 0 15px ${c.primary}, inset 0 0 10px ${c.primary}}.neon-select option{background:${c.dark};color:#fff}`,
        renderPreview: (c) => (
            <select className="neon-select">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
        ),
    }
];

export default selectEffects;
