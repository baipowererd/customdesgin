import React from 'react';

const iconEffects = [
    // 1. Path Drawing Animation
    {
        title: 'Animated Path Draw',
        description: 'SVG stroke that appears to draw itself continuously.',
        multiColor: true,
        cssTemplate: (c) => `.icon-draw-container{display:flex;align-items:center;justify-content:center;padding:20px}.icon-draw{width:64px;height:64px;fill:none;stroke:${c.primary};stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:300;stroke-dashoffset:300;animation:drawPath 3s ease-in-out infinite alternate}@keyframes drawPath{0%{stroke-dashoffset:300}100%{stroke-dashoffset:0}}`,
        renderPreview: (c) => (
            <div className="icon-draw-container">
                <svg className="icon-draw" viewBox="0 0 100 100">
                    <path d="M 20 50 L 40 70 L 80 20" />
                </svg>
            </div>
        ),
    },
    // 2. Heartbeat Pulse
    {
        title: 'Heartbeat Pulse',
        description: 'An SVG heart that scales and pulses with a soft glow.',
        multiColor: true,
        cssTemplate: (c) => `.icon-pulse-container{display:flex;align-items:center;justify-content:center;padding:20px}.icon-pulse{width:64px;height:64px;fill:${c.primary};filter:drop-shadow(0 0 10px ${c.primary}88);animation:heartbeat 1.5s ease-in-out infinite}@keyframes heartbeat{0%,100%{transform:scale(1)}15%{transform:scale(1.25)}30%{transform:scale(1)}45%{transform:scale(1.15)}60%{transform:scale(1)}}`,
        renderPreview: (c) => (
            <div className="icon-pulse-container">
                <svg className="icon-pulse" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </div>
        ),
    },
    // 3. Spinning Gear
    {
        title: 'Spinning SVG Gear',
        description: 'A smooth continuous rotating cog wheel.',
        multiColor: false,
        cssTemplate: (c) => `.icon-spin-container{display:flex;align-items:center;justify-content:center;padding:20px}.icon-spin{width:64px;height:64px;fill:none;stroke:var(--text-primary);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;animation:spinGear 4s linear infinite}@keyframes spinGear{100%{transform:rotate(360deg)}}`,
        renderPreview: (c) => (
            <div className="icon-spin-container">
                <svg className="icon-spin" viewBox="0 0 24 24">
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            </div>
        ),
    },
    // 4. Hover Bouncing Arrow
    {
        title: 'Bouncing Arrow Hover',
        description: 'Arrow continuously bounces down to indicate scrolling or action.',
        multiColor: true,
        cssTemplate: (c) => `.icon-bounce-container{display:flex;align-items:center;justify-content:center;padding:20px;width:64px;height:64px;border-radius:50%;background:var(--bg-tertiary);cursor:pointer;transition:background 0.3s}.icon-bounce-container:hover{background:${c.primary}33}.icon-bounce{width:32px;height:32px;fill:none;stroke:${c.primary};stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;animation:bounceDown 2s infinite}@keyframes bounceDown{0%,20%,50%,80%,100%{transform:translateY(0)}40%{transform:translateY(-10px)}60%{transform:translateY(-5px)}}`,
        renderPreview: (c) => (
            <div className="icon-bounce-container">
                <svg className="icon-bounce" viewBox="0 0 24 24">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                </svg>
            </div>
        ),
    },
    // 5. Morphing Hamburger to Cross
    {
        title: 'Morphing Hamburger SVG',
        description: 'Interactive SVG menu icon that animates into a close (X) icon on click.',
        multiColor: false,
        cssTemplate: (c) => `.icon-morph-container{display:flex;align-items:center;justify-content:center;padding:20px}.icon-morph{width:64px;height:64px;cursor:pointer;fill:none;stroke:var(--text-primary);stroke-width:2.5;stroke-linecap:round;transition:stroke 0.3s}.icon-morph line{transition:transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s}.icon-morph.active .line1{transform:translate(5px, 6px) rotate(45deg);transform-origin:left top}.icon-morph.active .line2{opacity:0;transform:scaleX(0)}.icon-morph.active .line3{transform:translate(5px, -6px) rotate(-45deg);transform-origin:left bottom}.icon-morph:hover{stroke:${c.primary} ;}`,
        renderPreview: (c) => (
            <div className="icon-morph-container" onClick={(e) => { e.currentTarget.querySelector('.icon-morph').classList.toggle('active'); }}>
                <svg className="icon-morph" viewBox="0 0 24 24">
                    <line className="line1" x1="4" y1="6" x2="20" y2="6" />
                    <line className="line2" x1="4" y1="12" x2="20" y2="12" />
                    <line className="line3" x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>
        ),
    },
    // 6. Glowing WiFi Signal
    {
        title: 'Animated Signal Glow',
        description: 'Wi-Fi bars that light up sequentially and glow.',
        multiColor: true,
        cssTemplate: (c) => `.icon-wifi-container{display:flex;align-items:center;justify-content:center;padding:20px}.icon-wifi{width:64px;height:64px;fill:none;stroke:var(--border-color);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon-wifi .signal{stroke:${c.primary};opacity:0;filter:drop-shadow(0 0 6px ${c.primary});animation:signalGlow 2s infinite}.icon-wifi .s1{animation-delay:0s}.icon-wifi .s2{animation-delay:0.4s}.icon-wifi .s3{animation-delay:0.8s}@keyframes signalGlow{0%,100%{opacity:0}50%{opacity:1}}`,
        renderPreview: (c) => (
            <div className="icon-wifi-container">
                <svg className="icon-wifi" viewBox="0 0 24 24">
                    {/* Background paths */}
                    <path d="M5 12.55a11 11 0 0114.08 0" style={{ stroke: 'var(--border-color)' }} />
                    <path d="M8.53 16.11a6 6 0 016.95 0" style={{ stroke: 'var(--border-color)' }} />
                    <line x1="12" y1="20" x2="12.01" y2="20" style={{ stroke: 'var(--border-color)', strokeWidth: 3 }} />

                    {/* Animated front paths */}
                    <path className="signal s3" d="M5 12.55a11 11 0 0114.08 0" />
                    <path className="signal s2" d="M8.53 16.11a6 6 0 016.95 0" />
                    <line className="signal s1" x1="12" y1="20" x2="12.01" y2="20" style={{ strokeWidth: 3 }} />
                </svg>
            </div>
        ),
    },
    // 7. Loading Orbit Rings
    {
        title: 'Orbit Ring Loader',
        description: 'Two interlocking SVG rings spinning in opposite directions.',
        multiColor: true,
        cssTemplate: (c) => `.icon-orbit-container{display:flex;align-items:center;justify-content:center;padding:20px}.icon-orbit{width:64px;height:64px;fill:none;stroke-width:2.5;stroke-linecap:round}.icon-orbit .ring-outer{stroke:${c.secondary};stroke-dasharray:60 120;animation:spinOuter 2s linear infinite;transform-origin:center}.icon-orbit .ring-inner{stroke:${c.primary};stroke-dasharray:40 80;animation:spinInner 1.5s linear infinite;transform-origin:center}@keyframes spinOuter{100%{transform:rotate(360deg)}}@keyframes spinInner{100%{transform:rotate(-360deg)}}`,
        renderPreview: (c) => (
            <div className="icon-orbit-container">
                <svg className="icon-orbit" viewBox="0 0 50 50">
                    <circle className="ring-outer" cx="25" cy="25" r="20" />
                    <circle className="ring-inner" cx="25" cy="25" r="12" />
                </svg>
            </div>
        ),
    },
    // 8. Swinging Notification Bell
    {
        title: 'Swinging Notification Bell',
        description: 'A bell icon that continuously swings side-to-side.',
        multiColor: true,
        cssTemplate: (c) => `.icon-bell-container{display:flex;align-items:center;justify-content:center;padding:20px}.icon-bell{width:64px;height:64px;fill:none;stroke:${c.primary};stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;animation:bellSwing 2s ease-in-out infinite;transform-origin:top center}@keyframes bellSwing{0%,100%{transform:rotate(0)}10%{transform:rotate(15deg)}20%{transform:rotate(-15deg)}30%{transform:rotate(10deg)}40%{transform:rotate(-10deg)}50%{transform:rotate(5deg)}60%,90%{transform:rotate(0)}}`,
        renderPreview: (c) => (
            <div className="icon-bell-container">
                <svg className="icon-bell" viewBox="0 0 24 24">
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 01-3.46 0" />
                </svg>
            </div>
        ),
    },
    // 9. Pulsing Record Dot
    {
        title: 'Live Recording Pulse',
        description: 'A glowing dot surrounded by expanding rings to indicate live status.',
        multiColor: true,
        cssTemplate: (c) => `.icon-record-container{display:flex;align-items:center;justify-content:center;padding:20px}.icon-record{width:64px;height:64px}.icon-record .dot{fill:${c.primary};filter:drop-shadow(0 0 4px ${c.primary})}.icon-record .ring{fill:none;stroke:${c.primary};stroke-width:2;transform-origin:center;animation:pulseRing 2s cubic-bezier(0.25, 1, 0.5, 1) infinite}@keyframes pulseRing{0%{transform:scale(1);opacity:0.8}100%{transform:scale(3);opacity:0}}`,
        renderPreview: (c) => (
            <div className="icon-record-container">
                <svg className="icon-record" viewBox="0 0 50 50">
                    <circle className="dot" cx="25" cy="25" r="5" />
                    <circle className="ring" cx="25" cy="25" r="5" />
                    <circle className="ring" cx="25" cy="25" r="5" style={{ animationDelay: '1s' }} />
                </svg>
            </div>
        ),
    },
    // 10. Morphing Play/Pause
    {
        title: 'Morphing Play to Pause',
        description: 'A play button triangle that physically morphs into two pause bars.',
        multiColor: true,
        cssTemplate: (c) => `.icon-playpause-container{display:flex;align-items:center;justify-content:center;padding:20px}.icon-playpause{width:64px;height:64px;cursor:pointer;fill:${c.primary};transition:0.3s}.icon-playpause path{transition:d 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.icon-playpause.playing .left{d:path("M11,19 L11,5 L6,5 L6,19 Z");}.icon-playpause.playing .right{d:path("M18,19 L18,5 L13,5 L13,19 Z");}.icon-playpause:not(.playing) .left{d:path("M19,12 L5,5 L5,19 Z");}.icon-playpause:not(.playing) .right{d:path("M19,12 L19,12 L5,19 Z");}`,
        renderPreview: (c) => (
            <div className="icon-playpause-container" onClick={(e) => { e.currentTarget.querySelector('.icon-playpause').classList.toggle('playing'); }}>
                <svg className="icon-playpause" viewBox="0 0 24 24">
                    <path className="left" d="M19,12 L5,5 L5,19 Z" />
                    <path className="right" d="M19,12 L19,12 L5,19 Z" />
                </svg>
            </div>
        ),
    },
    // 11. Cloud Upload Hover
    {
        title: 'Cloud Upload Arrow',
        description: 'Hover to watch the upload arrow glide directly up into the cloud.',
        multiColor: false,
        cssTemplate: (c) => `.icon-upload-container{display:flex;align-items:center;justify-content:center;padding:20px;cursor:pointer}.icon-upload{width:64px;height:64px;stroke:var(--text-primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;fill:none}.icon-upload .cloud{transition:0.3s}.icon-upload-container:hover .cloud{stroke:${c.primary};}.icon-upload-container:hover .arrow{stroke:${c.primary};animation:uploadFly 1.5s infinite cubic-bezier(0.4, 0, 0.2, 1)}@keyframes uploadFly{0%{transform:translateY(8px);opacity:0}30%{opacity:1}70%{opacity:1}100%{transform:translateY(-8px);opacity:0}}`,
        renderPreview: (c) => (
            <div className="icon-upload-container">
                <svg className="icon-upload" viewBox="0 0 24 24">
                    <path className="cloud" d="M20 16.2A5 5 0 0018 7h-1.26A8 8 0 104 15.25" />
                    <g className="arrow">
                        <line x1="12" y1="12" x2="12" y2="21" />
                        <polyline points="16 16 12 12 8 16" />
                    </g>
                </svg>
            </div>
        ),
    },
    // 12. Success Check Draw
    {
        title: 'Success Check Draw',
        description: 'A circle that outlines itself, followed by a checkmark drawing.',
        multiColor: false,
        cssTemplate: (c) => `.icon-success-container{display:flex;align-items:center;justify-content:center;padding:20px}.icon-success{width:64px;height:64px;fill:none;stroke:${c.primary};stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.icon-success .circle{stroke-dasharray:100;stroke-dashoffset:100;animation:successCircle 1s ease-out forwards, successPulse 2s 1s infinite}.icon-success .check{stroke-dasharray:30;stroke-dashoffset:30;animation:successCheck 0.4s 0.8s ease-out forwards}@keyframes successCircle{to{stroke-dashoffset:0}}@keyframes successCheck{to{stroke-dashoffset:0}}@keyframes successPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}`,
        renderPreview: (c) => (
            <div className="icon-success-container">
                <svg className="icon-success" viewBox="0 0 24 24">
                    <circle className="circle" cx="12" cy="12" r="10" />
                    <polyline className="check" points="8 12 11 15 16 9" />
                </svg>
            </div>
        ),
    },
    // 13. Download Bounce
    {
        title: 'Hover Download Bounce',
        description: 'Hover to bounce the down arrow into the download tray.',
        multiColor: true,
        cssTemplate: (c) => `.icon-download-container{display:flex;align-items:center;justify-content:center;padding:20px;cursor:pointer}.icon-download{width:64px;height:64px;stroke:var(--text-primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;fill:none;transition:stroke 0.3s}.icon-download-container:hover .icon-download{stroke:${c.primary}}.icon-download-container:hover .d-arrow{animation:downloadDrop 0.6s infinite alternate cubic-bezier(0.5, 0, 0.5, 1)}.icon-download .tray{transition:transform 0.3s}.icon-download-container:hover .tray{transform:scaleX(1.1);stroke-width:3}@keyframes downloadDrop{0%{transform:translateY(-4px)}100%{transform:translateY(4px)}}`,
        renderPreview: (c) => (
            <div className="icon-download-container">
                <svg className="icon-download" viewBox="0 0 24 24">
                    <g className="d-arrow">
                        <line x1="12" y1="3" x2="12" y2="15" />
                        <polyline points="8 11 12 15 16 11" />
                    </g>
                    <path className="tray" d="M20 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2" />
                </svg>
            </div>
        ),
    },
    // 14. Battery Charging Fill
    {
        title: 'Battery Charging Sequence',
        description: 'Battery blocks lighting up sequentially to show a charging status.',
        multiColor: true,
        cssTemplate: (c) => `.icon-battery-container{display:flex;align-items:center;justify-content:center;padding:20px}.icon-battery{width:64px;height:64px;fill:none;stroke:var(--text-primary);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon-battery .frame{stroke:var(--border-color)}.icon-battery .bar{stroke:${c.primary};opacity:0;animation:batteryCharge 2s infinite}.icon-battery .b1{animation-delay:0.3s}.icon-battery .b2{animation-delay:0.6s}.icon-battery .b3{animation-delay:0.9s}.icon-battery .b4{animation-delay:1.2s}@keyframes batteryCharge{0%{opacity:0}50%,100%{opacity:1}}`,
        renderPreview: (c) => (
            <div className="icon-battery-container">
                <svg className="icon-battery" viewBox="0 0 24 24">
                    <rect className="frame" x="2" y="7" width="16" height="10" rx="2" ry="2" />
                    <line className="frame" x1="22" y1="11" x2="22" y2="13" />
                    <line className="bar b1" x1="5" y1="10" x2="5" y2="14" />
                    <line className="bar b2" x1="8" y1="10" x2="8" y2="14" />
                    <line className="bar b3" x1="11" y1="10" x2="11" y2="14" />
                    <line className="bar b4" x1="14" y1="10" x2="14" y2="14" />
                </svg>
            </div>
        ),
    },
    // 15. Smooth Compass Spin
    {
        title: 'Smooth Compass Spin',
        description: 'A compass dial continuously orienting north.',
        multiColor: true,
        cssTemplate: (c) => `.icon-compass-container{display:flex;align-items:center;justify-content:center;padding:20px}.icon-compass{width:64px;height:64px;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon-compass .outer{stroke:var(--border-color);fill:var(--bg-secondary)}.icon-compass .needle-n{stroke:${c.primary};fill:${c.primary}}.icon-compass .needle-s{stroke:var(--text-secondary);fill:none}.icon-compass .dial{transform-origin:12px 12px;animation:compassWobble 4s ease-in-out infinite}@keyframes compassWobble{0%,100%{transform:rotate(0)}25%{transform:rotate(12deg)}75%{transform:rotate(-12deg)}}`,
        renderPreview: (c) => (
            <div className="icon-compass-container">
                <svg className="icon-compass" viewBox="0 0 24 24">
                    <circle className="outer" cx="12" cy="12" r="10" />
                    <g className="dial">
                        <polygon className="needle-n" points="12 4 15 12 9 12" />
                        <polygon className="needle-s" points="12 20 15 12 9 12" />
                        <circle cx="12" cy="12" r="2" fill="var(--bg-primary)" stroke="var(--bg-primary)" />
                    </g>
                </svg>
            </div>
        ),
    },
    // 16. Infinity Loop Draw
    {
        title: 'Infinity Trace Ribbon',
        description: 'An infinity symbol being endlessly traced by an energetic ribbon.',
        multiColor: false,
        cssTemplate: (c) => `.icon-infinity-container{display:flex;align-items:center;justify-content:center;padding:20px}.icon-infinity{width:64px;height:64px;fill:none;stroke:${c.primary};stroke-width:3;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 8px ${c.primary}88)}.icon-infinity path{stroke-dasharray:45;stroke-dashoffset:0;animation:infinityTrace 2s linear infinite}@keyframes infinityTrace{to{stroke-dashoffset:90}}`,
        renderPreview: (c) => (
            <div className="icon-infinity-container">
                <svg className="icon-infinity" viewBox="0 0 24 24">
                    <path d="M 6 16 C 0 16 0 8 6 8 C 11 8 13 16 18 16 C 24 16 24 8 18 8 C 13 8 11 16 6 16 Z" />
                </svg>
            </div>
        ),
    }
];

export default iconEffects;
