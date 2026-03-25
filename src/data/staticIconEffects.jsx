import React from 'react';

const staticIconEffects = [
    // 1. Premium Home
    {
        title: 'Premium Home',
        description: 'A crisp, perfectly rounded home icon. Hovers to primary color.',
        multiColor: true,
        cssTemplate: (c) => `.static-icon-container{display:flex;align-items:center;justify-content:center;padding:20px;cursor:pointer}.static-icon{width:64px;height:64px;fill:none;stroke:var(--text-primary);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:all 0.3s ease}.static-icon-container:hover .static-icon{stroke:${c.primary};transform:translateY(-2px)}`,
        renderPreview: (c) => (
            <div className="static-icon-container">
                <svg className="static-icon" viewBox="0 0 24 24">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            </div>
        ),
    },
    // 2. User Profile
    {
        title: 'User Profile',
        description: 'Clean user silhouette built with geometric precision.',
        multiColor: true,
        cssTemplate: (c) => `.static-icon-container{display:flex;align-items:center;justify-content:center;padding:20px;cursor:pointer}.static-icon{width:64px;height:64px;fill:none;stroke:var(--text-primary);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:all 0.3s ease}.static-icon-container:hover .static-icon{stroke:${c.primary};transform:translateY(-2px)}`,
        renderPreview: (c) => (
            <div className="static-icon-container">
                <svg className="static-icon" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            </div>
        ),
    },
    // 3. Crisp Settings Core
    {
        title: 'Settings Cog',
        description: 'Symmetric mechanical cog icon for settings menus.',
        multiColor: true,
        cssTemplate: (c) => `.static-icon-container{display:flex;align-items:center;justify-content:center;padding:20px;cursor:pointer}.static-icon{width:64px;height:64px;fill:none;stroke:var(--text-primary);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:all 0.3s ease}.static-icon-container:hover .static-icon{stroke:${c.primary};transform:scale(1.05) rotate(15deg)}`,
        renderPreview: (c) => (
            <div className="static-icon-container">
                <svg className="static-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
            </div>
        ),
    },
    // 4. Magnifying Search
    {
        title: 'Magnifying Search',
        description: 'Clean angled search glass with precise proportions.',
        multiColor: true,
        cssTemplate: (c) => `.static-icon-container{display:flex;align-items:center;justify-content:center;padding:20px;cursor:pointer}.static-icon{width:64px;height:64px;fill:none;stroke:var(--text-primary);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:all 0.3s ease}.static-icon-container:hover .static-icon{stroke:${c.primary};transform:translateY(-2px)}`,
        renderPreview: (c) => (
            <div className="static-icon-container">
                <svg className="static-icon" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </div>
        ),
    },
    // 5. Secure Lock
    {
        title: 'Secure Lock',
        description: 'Traditional padlock icon meant for authentication or privacy walls.',
        multiColor: true,
        cssTemplate: (c) => `.static-icon-container{display:flex;align-items:center;justify-content:center;padding:20px;cursor:pointer}.static-icon{width:64px;height:64px;fill:none;stroke:var(--text-primary);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:all 0.3s ease}.static-icon-container:hover .static-icon{stroke:${c.primary};transform:translateY(-2px)}`,
        renderPreview: (c) => (
            <div className="static-icon-container">
                <svg className="static-icon" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            </div>
        ),
    },
    // 6. Two-Tone Inbox
    {
        title: 'Two-Tone Mail',
        description: 'An envelope using varying Opacity levels for depth.',
        multiColor: true,
        cssTemplate: (c) => `.two-tone-icon-container{display:flex;align-items:center;justify-content:center;padding:20px;cursor:pointer}.two-tone-icon{width:64px;height:64px;fill:none;stroke:var(--text-primary);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:all 0.3s ease}.two-tone-icon .body{stroke:var(--text-secondary);opacity:0.75}.two-tone-icon .flap{stroke:var(--text-primary)}.two-tone-icon-container:hover .two-tone-icon{transform:scale(1.05)}.two-tone-icon-container:hover .two-tone-icon .body, .two-tone-icon-container:hover .two-tone-icon .flap{stroke:${c.primary}}`,
        renderPreview: (c) => (
            <div className="two-tone-icon-container">
                <svg className="two-tone-icon" viewBox="0 0 24 24">
                    <path className="body" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline className="flap" points="22,6 12,13 2,6" />
                </svg>
            </div>
        ),
    },
    // 7. Location Pin
    {
        title: 'Map Location Pin',
        description: 'Standard tear-drop location pin with inner dot.',
        multiColor: true,
        cssTemplate: (c) => `.static-icon-container{display:flex;align-items:center;justify-content:center;padding:20px;cursor:pointer}.static-icon{width:64px;height:64px;fill:none;stroke:var(--text-primary);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:all 0.3s ease}.static-icon-container:hover .static-icon{stroke:${c.primary};transform:translateY(-4px)}`,
        renderPreview: (c) => (
            <div className="static-icon-container">
                <svg className="static-icon" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            </div>
        ),
    },
    // 8. Solid Heart (Fill Hover)
    {
        title: 'Outline to Fill Heart',
        description: 'Icon that transitions from an outline to a solid fill on hover.',
        multiColor: true,
        cssTemplate: (c) => `.fill-icon-container{display:flex;align-items:center;justify-content:center;padding:20px;cursor:pointer}.fill-icon{width:64px;height:64px;fill:transparent;stroke:var(--text-primary);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:all 0.3s ease}.fill-icon-container:hover .fill-icon{stroke:${c.primary};fill:${c.primary};transform:scale(1.1)}`,
        renderPreview: (c) => (
            <div className="fill-icon-container">
                <svg className="fill-icon" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            </div>
        ),
    },
    // 9. Calendar 
    {
        title: 'Calendar',
        description: 'Minimalist block calendar perfect for dates of events.',
        multiColor: true,
        cssTemplate: (c) => `.static-icon-container{display:flex;align-items:center;justify-content:center;padding:20px;cursor:pointer}.static-icon{width:64px;height:64px;fill:none;stroke:var(--text-primary);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:all 0.3s ease}.static-icon-container:hover .static-icon{stroke:${c.primary};transform:translateY(-2px)}`,
        renderPreview: (c) => (
            <div className="static-icon-container">
                <svg className="static-icon" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            </div>
        ),
    },
    // 10. Abstract Geometry (Two-Tone Fill)
    {
        title: 'Two-Tone Geometry',
        description: 'Stacked shapes for an abstract logo or icon with distinct stroke and fill colors.',
        multiColor: true,
        cssTemplate: (c) => `.abstract-icon-container{display:flex;align-items:center;justify-content:center;padding:20px;cursor:pointer}.abstract-icon{width:64px;height:64px;fill:transparent;stroke:var(--text-primary);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)}.abstract-icon-container:hover .abstract-icon{transform:rotate(90deg)}.abstract-icon-container:hover .tri1{stroke:${c.primary};fill:${c.primary}33}.abstract-icon-container:hover .tri2{stroke:${c.secondary};fill:${c.secondary}33}`,
        renderPreview: (c) => (
            <div className="abstract-icon-container">
                <svg className="abstract-icon" viewBox="0 0 24 24">
                    <polygon className="tri1" points="12 2 2 22 22 22" />
                    <polygon className="tri2" points="12 22 2 2 22 2" />
                </svg>
            </div>
        ),
    }

];

export default staticIconEffects;
