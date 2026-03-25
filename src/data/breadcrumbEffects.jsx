import React from 'react';

const breadcrumbEffects = [
    // 1. Animated Breadcrumbs
    {
        title: 'Animated Breadcrumbs',
        description: 'Breadcrumb trail with sliding underline animation on hover.',
        multiColor: false,
        cssTemplate: (c) => `.breadcrumbs{display:flex;gap:8px;align-items:center;color:#fff;font-size:14px;}.breadcrumb{position:relative;padding:4px 8px;cursor:pointer;}.breadcrumb::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:${c.primary};transition:width .3s;}.breadcrumb:hover::after{width:100%;}`,
        renderPreview: (c) => (
            <nav className="breadcrumbs">
                <span className="breadcrumb">Home</span>
                <span className="breadcrumb">Products</span>
                <span className="breadcrumb">Premium UI</span>
            </nav>
        ),
    },
    // 2. Breadcrumbs with Icons
    {
        title: 'Icon Breadcrumbs',
        description: 'Breadcrumbs that include an icon before each segment.',
        multiColor: false,
        cssTemplate: (c) => `.breadcrumbs-icons{display:flex;gap:8px;align-items:center;color:#fff;font-size:14px;}.breadcrumb-icon{display:flex;align-items:center;}.breadcrumb-icon span{margin-left:4px;}`,
        renderPreview: (c) => (
            <nav className="breadcrumbs-icons">
 <div className="breadcrumb-icon"><span></span><span>Home</span></div>
 <div className="breadcrumb-icon"><span></span><span>Library</span></div>
 <div className="breadcrumb-icon"><span></span><span>Docs</span></div>
            </nav>
        ),
    },
    // 3‑10 placeholders for future variations
    ...Array.from({ length: 8 }, (_, i) => ({
        title: `Breadcrumb Variation ${i + 3}`,
        description: 'Additional breadcrumb style for expansion.',
        multiColor: false,
        cssTemplate: (c) => `.breadcrumb-var${i + 3}{color:${c.primary};padding:4px;}`,
        renderPreview: (c) => (
            <div className={`breadcrumb-var${i + 3}`} style={{ color: c.primary, padding: '4px' }}>
                Breadcrumb Variation {i + 3}
            </div>
        ),
    })),
];

export default breadcrumbEffects;
