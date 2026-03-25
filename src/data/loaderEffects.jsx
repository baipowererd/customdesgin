import React from 'react';

const loaderEffects = [
    // 1. Pulsing Dots
    {
        title: 'Pulsing Dots Loader',
        description: 'Three dots that pulse in a rhythmic wave sequence.',
        multiColor: true,
        cssTemplate: (c) => `.dots-loader{display:flex;align-items:center;justify-content:center;gap:10px;padding:32px}.dot{width:14px;height:14px;border-radius:50%;background:${c.primary};animation:dotPulse 1.4s ease-in-out infinite both}.dot:nth-child(1){animation-delay:-0.32s}.dot:nth-child(2){animation-delay:-0.16s}@keyframes dotPulse{0%,80%,100%{transform:scale(0);opacity:.4}40%{transform:scale(1);opacity:1}}`,
        renderPreview: () => (
            <div className="dots-loader">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
            </div>
        ),
    },
    // 2. Spinning Ring
    {
        title: 'Spinning Ring Loader',
        description: 'A bordered ring that spins with a colored leading edge.',
        multiColor: true,
        cssTemplate: (c) => `.ring-loader{display:flex;align-items:center;justify-content:center;padding:32px}.ring{width:56px;height:56px;border-radius:50%;border:4px solid transparent;border-top-color:${c.primary};border-right-color:${c.secondary};animation:ringSpn 0.9s linear infinite}@keyframes ringSpn{to{transform:rotate(360deg)}}`,
        renderPreview: () => (
            <div className="ring-loader">
                <div className="ring" />
            </div>
        ),
    },
    // 3. Morphing Blob
    {
        title: 'Morphing Blob Loader',
        description: 'A fluid blob that continuously morphs its border-radius.',
        multiColor: true,
        cssTemplate: (c) => `.blob-loader{display:flex;align-items:center;justify-content:center;padding:32px}.blob{width:60px;height:60px;background:${c.primary};animation:blobMorph 2.5s ease-in-out infinite}@keyframes blobMorph{0%,100%{border-radius:60% 40% 30% 70% / 60% 30% 70% 40%}25%{border-radius:30% 60% 70% 40% / 50% 60% 30% 60%}50%{border-radius:50% 60% 30% 60% / 30% 60% 70% 40%}75%{border-radius:60% 40% 60% 30% / 60% 70% 30% 40%}}`,
        renderPreview: () => (
            <div className="blob-loader">
                <div className="blob" />
            </div>
        ),
    },
    // 4. Skeleton Screen
    {
        title: 'Skeleton Screen Loader',
        description: 'A shimmering card placeholder common in content-loading UIs.',
        multiColor: false,
        cssTemplate: () => `.skeleton-loader{padding:24px;display:flex;flex-direction:column;gap:12px;width:220px}.skel{border-radius:6px;background:linear-gradient(90deg,var(--border-color) 25%,var(--bg-primary) 50%,var(--border-color) 75%);background-size:200% 100%;animation:shimmer 1.5s infinite}.skel-avatar{width:48px;height:48px;border-radius:50%}.skel-line{height:12px}.skel-line.short{width:60%}.skel-line.full{width:100%}@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`,
        renderPreview: () => (
            <div className="skeleton-loader">
                <div className="skel skel-avatar" />
                <div className="skel skel-line full" />
                <div className="skel skel-line full" />
                <div className="skel skel-line short" />
            </div>
        ),
    },
    // 5. Bar Wave
    {
        title: 'Bar Wave Loader',
        description: 'Five bars that rise and fall like an audio equalizer.',
        multiColor: true,
        cssTemplate: (c) => `.bar-loader{display:flex;align-items:center;justify-content:center;gap:5px;padding:32px}.bar{width:8px;height:40px;border-radius:4px;background:${c.primary};animation:barWave 1.2s ease-in-out infinite}.bar:nth-child(1){animation-delay:0s}.bar:nth-child(2){animation-delay:0.1s}.bar:nth-child(3){animation-delay:0.2s}.bar:nth-child(4){animation-delay:0.3s}.bar:nth-child(5){animation-delay:0.4s}@keyframes barWave{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1.0)}}`,
        renderPreview: () => (
            <div className="bar-loader">
                {[1, 2, 3, 4, 5].map(i => <div key={i} className="bar" />)}
            </div>
        ),
    },
    // 6. Orbit Spinner
    {
        title: 'Orbit Spinner',
        description: 'A small ball orbiting a central dot at a continuous pace.',
        multiColor: true,
        cssTemplate: (c) => `.orbit-loader{display:flex;align-items:center;justify-content:center;padding:32px}.orbit-wrapper{position:relative;width:60px;height:60px;animation:orbitSpin 1.2s linear infinite}.orbit-center{position:absolute;inset:0;margin:auto;width:12px;height:12px;border-radius:50%;background:${c.secondary}}.orbit-ball{position:absolute;top:0;left:50%;transform:translateX(-50%);width:12px;height:12px;border-radius:50%;background:${c.primary};box-shadow:0 0 8px ${c.primary}88}@keyframes orbitSpin{to{transform:rotate(360deg)}}`,
        renderPreview: () => (
            <div className="orbit-loader">
                <div className="orbit-wrapper">
                    <div className="orbit-center" />
                    <div className="orbit-ball" />
                </div>
            </div>
        ),
    },
    // 7. Liquid Fill
    {
        title: 'Liquid Fill Loader',
        description: 'A circular gauge that fills from the bottom like a liquid.',
        multiColor: true,
        cssTemplate: (c) => `.liquid-loader{display:flex;align-items:center;justify-content:center;padding:32px}.liquid-ring{width:64px;height:64px;border-radius:50%;border:3px solid ${c.primary}33;position:relative;overflow:hidden}.liquid-fill{position:absolute;bottom:0;left:0;right:0;background:${c.primary}99;animation:liquidRise 2s ease-in-out infinite alternate}.liquid-shine{position:absolute;inset:0;background:conic-gradient(transparent 60%,${c.primary}22 100%);animation:liquidSpin 3s linear infinite}@keyframes liquidRise{from{height:10%}to{height:90%}}@keyframes liquidSpin{to{transform:rotate(360deg)}}`,
        renderPreview: () => (
            <div className="liquid-loader">
                <div className="liquid-ring">
                    <div className="liquid-fill" />
                    <div className="liquid-shine" />
                </div>
            </div>
        ),
    },
    // 8. Typewriter Dots
    {
        title: 'Typing Indicator',
        description: 'The classic "someone is typing" bubble from chat UIs.',
        multiColor: true,
        cssTemplate: (c) => `.typing-loader{display:flex;align-items:center;justify-content:center;padding:32px}.typing-bubble{background:${c.primary}22;border:1px solid ${c.primary}44;border-radius:20px 20px 20px 4px;padding:14px 18px;display:flex;gap:6px;align-items:center}.typing-dot{width:8px;height:8px;border-radius:50%;background:${c.primary};animation:typingBounce 1.2s ease-in-out infinite}.typing-dot:nth-child(2){animation-delay:0.2s}.typing-dot:nth-child(3){animation-delay:0.4s}@keyframes typingBounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-8px)}}`,
        renderPreview: () => (
            <div className="typing-loader">
                <div className="typing-bubble">
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                </div>
            </div>
        ),
    },
    // 9. Circular Progress
    {
        title: 'Circular Progress',
        description: 'An SVG arc that continuously draws and resets its progress.',
        multiColor: true,
        cssTemplate: (c) => `.circ-loader{display:flex;align-items:center;justify-content:center;padding:32px}.circ-svg{width:64px;height:64px;transform:rotate(-90deg)}.circ-track{fill:none;stroke:${c.primary}22;stroke-width:6}.circ-bar{fill:none;stroke:${c.primary};stroke-width:6;stroke-linecap:round;stroke-dasharray:163;animation:circFill 2s ease-in-out infinite}@keyframes circFill{0%{stroke-dashoffset:163;opacity:1}80%{stroke-dashoffset:0;opacity:1}100%{stroke-dashoffset:0;opacity:0}}`,
        renderPreview: () => (
            <div className="circ-loader">
                <svg className="circ-svg" viewBox="0 0 60 60">
                    <circle className="circ-track" cx="30" cy="30" r="26" />
                    <circle className="circ-bar" cx="30" cy="30" r="26" />
                </svg>
            </div>
        ),
    },
    // 10. Glowing Pulse Ring
    {
        title: 'Glowing Pulse Ring',
        description: 'Expanding rings that radiate outward like a sonar ping.',
        multiColor: true,
        cssTemplate: (c) => `.pulse-ring-loader{display:flex;align-items:center;justify-content:center;padding:32px;position:relative}.pulse-core{width:20px;height:20px;border-radius:50%;background:${c.primary};box-shadow:0 0 12px ${c.primary}}.pulse-ring{position:absolute;width:20px;height:20px;border-radius:50%;border:2px solid ${c.primary};animation:ringExpand 1.8s ease-out infinite}.pulse-ring:nth-child(2){animation-delay:0.6s}.pulse-ring:nth-child(3){animation-delay:1.2s}@keyframes ringExpand{0%{transform:scale(1);opacity:0.8}100%{transform:scale(4);opacity:0}}`,
        renderPreview: () => (
            <div className="pulse-ring-loader">
                <div className="pulse-ring" />
                <div className="pulse-ring" />
                <div className="pulse-ring" />
                <div className="pulse-core" />
            </div>
        ),
    },
    {
        title: 'Holo Prism Loader',
        description: 'A spinning iridescent ring with a vibrant blurred spectrum glow. Prism holographic theme.',
        multiColor: false,
        cssTemplate: (c) => `.prism-loader{display:flex;align-items:center;justify-content:center;padding:40px;position:relative}.prism-spin{width:56px;height:56px;border-radius:50%;position:relative;animation:prism-spin-fast 1.5s linear infinite}.prism-spin::before{content:'';position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg,transparent 0%,#ff0055 20%,#ffdd00 40%,#00ffaa 60%,#0055ff 80%,transparent 100%);-webkit-mask:radial-gradient(transparent 55%,#000 56%);mask:radial-gradient(transparent 55%,#000 56%)}.prism-spin::after{content:'';position:absolute;inset:-4px;border-radius:50%;background:conic-gradient(from 0deg,transparent 0%,#ff0055 20%,#ffdd00 40%,#00ffaa 60%,#0055ff 80%,transparent 100%);filter:blur(10px);opacity:0.6;z-index:-1}@keyframes prism-spin-fast{to{transform:rotate(360deg)}}`,
        renderPreview: (c) => (
            <div className="prism-loader">
                <div className="prism-spin" />
            </div>
        ),
    },
    {
        title: 'Manga Sticker Loader',
        description: 'A spinning, thick-bordered square loader with hard drop shadow and a manga speed-line or halftone aesthetic.',
        multiColor: true,
        cssTemplate: (c) => `.manga-loader{display:flex;align-items:center;justify-content:center;padding:40px}.manga-spin{width:40px;height:40px;background:#fff;border:4px solid #0a0a0a;box-shadow:6px 6px 0px ${c.primary};animation:manga-flip 1s cubic-bezier(0.25, 1, 0.5, 1) infinite;position:relative}.manga-spin::before{content:'';position:absolute;inset:2px;background-image:radial-gradient(#0a0a0a 15%,transparent 16%);background-size:6px 6px;opacity:0.6}@keyframes manga-flip{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.2);box-shadow:12px 12px 0px ${c.primary}}100%{transform:rotate(360deg) scale(1)}}`,
        renderPreview: (c) => (
            <div className="manga-loader">
                <div className="manga-spin" />
            </div>
        ),
    },
    {
        title: 'Indic Royal Loader',
        description: 'An elegant, mesmerizing loader mimicking a spinning mandala or traditional rangoli pattern with warm colors.',
        multiColor: true,
        cssTemplate: (c) => `.indic-loader{display:flex;align-items:center;justify-content:center;padding:48px;position:relative}.indic-spin{width:48px;height:48px;position:relative;animation:indic-spin-slow 4s linear infinite}.indic-spin::before,.indic-spin::after{content:'';position:absolute;inset:0;border:2px solid ${c.primary}88;border-radius:8px;transform:rotate(45deg);animation:indic-pulse 2s ease-in-out infinite alternate}.indic-spin::after{border-color:${c.primary};transform:rotate(0deg);animation-delay:1s}.indic-dot{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:12px;height:12px;background:${c.primary};border-radius:50%;box-shadow:0 0 12px ${c.primary}}@keyframes indic-spin-slow{to{transform:rotate(360deg)}}@keyframes indic-pulse{0%{transform:rotate(45deg) scale(0.8);border-radius:24px}100%{transform:rotate(45deg) scale(1.1);border-radius:8px}}`,
        renderPreview: (c) => (
            <div className="indic-loader">
                <div className="indic-spin">
                    <div className="indic-dot" />
                </div>
            </div>
        ),
    },
    {
        title: 'Aztec Stone Loader',
        description: 'A spinning monolithic block with stepped corners and brutalist solid drop shadow. Aztec geometry theme.',
        multiColor: true,
        cssTemplate: (c) => `.aztec-loader{display:flex;align-items:center;justify-content:center;padding:40px}.aztec-spin{width:48px;height:48px;position:relative;background:#f5ece3;border:4px solid #2a2421;box-shadow:8px 8px 0px ${c.primary};animation:aztec-tumble 1.5s cubic-bezier(0.25, 1, 0.5, 1) infinite;clip-path:polygon(8px 0,calc(100% - 8px) 0,calc(100% - 8px) 8px,100% 8px,100% calc(100% - 8px),calc(100% - 8px) calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,8px calc(100% - 8px),0 calc(100% - 8px),0 8px,8px 8px)}@keyframes aztec-tumble{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.1);box-shadow:12px 12px 0px ${c.primary}}100%{transform:rotate(360deg) scale(1)}}`,
        renderPreview: (c) => (
            <div className="aztec-loader">
                <div className="aztec-spin" />
            </div>
        ),
    }
];

export default loaderEffects;
