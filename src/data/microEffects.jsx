import React from 'react';

const microEffects = [
    // 1. Magnetic Button
    {
        title: 'Magnetic Hover Button',
        description: 'A button with an animated border gradient that rotates on hover.',
        multiColor: true,
        cssTemplate: (c) => `.mag-btn-wrap{display:flex;align-items:center;justify-content:center;padding:40px}.mag-btn{position:relative;padding:14px 32px;background:transparent;border:none;cursor:pointer;color:var(--text-primary);font-size:1rem;font-weight:600;letter-spacing:.5px;border-radius:12px;overflow:hidden;z-index:0}.mag-btn::before{content:'';position:absolute;inset:-2px;border-radius:14px;background:conic-gradient(from 0deg,${c.primary},${c.secondary},${c.primary});animation:borderRotate 3s linear infinite;z-index:-2}.mag-btn::after{content:'';position:absolute;inset:2px;border-radius:10px;background:var(--bg-primary);z-index:-1}.mag-btn:hover{transform:scale(1.04);box-shadow:0 0 20px ${c.primary}66}@keyframes borderRotate{to{--angle:360deg}from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`,
        renderPreview: () => (
            <div className="mag-btn-wrap">
                <button className="mag-btn">Hover Me</button>
            </div>
        ),
    },
    // 2. Like Button Burst
    {
        title: 'Like Button Burst',
        description: 'A heart icon that bursts with particles when clicked.',
        multiColor: true,
        cssTemplate: (c) => `.like-btn-wrap{display:flex;align-items:center;justify-content:center;padding:40px}.like-btn{background:none;border:none;cursor:pointer;padding:12px;border-radius:50%;display:flex;align-items:center;justify-content:center;position:relative;transition:transform .1s}.like-btn:active{transform:scale(0.8)}.like-icon{width:32px;height:32px;fill:none;stroke:${c.primary};stroke-width:2;stroke-linecap:round;transition:fill .3s,transform .3s}.like-btn:hover .like-icon{fill:${c.primary};transform:scale(1.2)}.like-btn:hover{background:${c.primary}22}`,
        renderPreview: () => (
            <div className="like-btn-wrap">
                <button className="like-btn">
                    <svg className="like-icon" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </button>
            </div>
        ),
    },
    // 3. Ripple Click Effect
    {
        title: 'Ripple Effect Button',
        description: 'Material-Design inspired ripple that spreads from click point.',
        multiColor: true,
        cssTemplate: (c) => `.ripple-btn-wrap{display:flex;align-items:center;justify-content:center;padding:40px}.ripple-btn{position:relative;overflow:hidden;padding:14px 32px;background:${c.primary};border:none;border-radius:8px;color:#fff;font-size:1rem;font-weight:600;cursor:pointer;transition:opacity .2s}.ripple-btn:hover{opacity:.9}.ripple{position:absolute;border-radius:50%;background:rgba(255,255,255,0.35);transform:scale(0);animation:rippleEffect .6s linear;pointer-events:none}@keyframes rippleEffect{to{transform:scale(4);opacity:0}}`,
        renderPreview: (c) => (
            <div className="ripple-btn-wrap">
                <button
                    className="ripple-btn"
                    style={{ background: c?.primary }}
                    onMouseDown={e => {
                        const btn = e.currentTarget;
                        const circle = document.createElement('span');
                        const diameter = Math.max(btn.clientWidth, btn.clientHeight);
                        const rect = btn.getBoundingClientRect();
                        circle.style.cssText = `width:${diameter}px;height:${diameter}px;left:${e.clientX - rect.left - diameter / 2}px;top:${e.clientY - rect.top - diameter / 2}px`;
                        circle.classList.add('ripple');
                        btn.querySelector('.ripple')?.remove();
                        btn.appendChild(circle);
                    }}
                >
                    Click Me
                </button>
            </div>
        ),
    },
    // 4. Shimmer Text
    {
        title: 'Shimmer Text Effect',
        description: 'Text that gleams with a light sweep passing over it.',
        multiColor: true,
        cssTemplate: (c) => `.shimmer-text-wrap{display:flex;align-items:center;justify-content:center;padding:40px}.shimmer-text{font-size:2rem;font-weight:800;letter-spacing:-1px;background:linear-gradient(90deg,${c.primary} 0%,${c.secondary} 40%,#fff 50%,${c.secondary} 60%,${c.primary} 100%);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:shimmerText 2.5s linear infinite}@keyframes shimmerText{from{background-position:200% center}to{background-position:-200% center}}`,
        renderPreview: () => (
            <div className="shimmer-text-wrap">
                <span className="shimmer-text">Premium UI</span>
            </div>
        ),
    },
    // 5. Floating Label Input
    {
        title: 'Floating Label Input',
        description: 'A sleek input whose label floats up on focus.',
        multiColor: true,
        cssTemplate: (c) => `.float-input-wrap{display:flex;align-items:center;justify-content:center;padding:40px}.float-field{position:relative;width:220px}.float-input{width:100%;padding:18px 12px 6px;background:transparent;border:none;border-bottom:2px solid var(--border-color);color:var(--text-primary);font-size:1rem;outline:none;transition:border-color .3s;box-sizing:border-box}.float-input:focus{border-color:${c.primary}}.float-label{position:absolute;left:12px;top:14px;color:var(--text-secondary);font-size:1rem;transition:all .2s;pointer-events:none}.float-input:focus~.float-label,.float-input:not(:placeholder-shown)~.float-label{top:4px;font-size:.75rem;color:${c.primary}}`,
        renderPreview: () => (
            <div className="float-input-wrap">
                <div className="float-field">
                    <input className="float-input" placeholder=" " />
                    <label className="float-label">Your Name</label>
                </div>
            </div>
        ),
    },
    // 6. Hover Card Tilt
    {
        title: '3D Card Tilt Hover',
        description: 'A card that tilts toward the cursor on mouse hover via CSS perspective.',
        multiColor: true,
        cssTemplate: (c) => `.tilt-card-wrap{display:flex;align-items:center;justify-content:center;padding:40px;perspective:600px}.tilt-card{width:180px;height:120px;background:linear-gradient(135deg,${c.primary},${c.secondary});border-radius:16px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.1rem;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease;transform-style:preserve-3d;box-shadow:0 10px 30px ${c.primary}44}.tilt-card:hover{transform:rotateY(-8deg) rotateX(5deg) scale(1.04);box-shadow:8px 16px 40px ${c.primary}66}`,
        renderPreview: () => (
            <div className="tilt-card-wrap">
                <div className="tilt-card">Hover Me</div>
            </div>
        ),
    },
    // 7. Text Counter Ticker
    {
        title: 'Count Up Number',
        description: 'A bold number that ticks up from zero on load using CSS counter.',
        multiColor: true,
        cssTemplate: (c) => `@property --num{syntax:'<integer>';initial-value:0;inherits:false}.count-wrap{display:flex;align-items:center;justify-content:center;padding:40px;flex-direction:column;gap:8px}.count-num{font-size:3.5rem;font-weight:900;color:${c.primary};--num:0;animation:countUp 2.5s ease-out forwards;counter-reset:num var(--num)}.count-num::after{content:counter(num)}.count-label{color:var(--text-secondary);font-size:.9rem;font-weight:500}@keyframes countUp{to{--num:9999}}`,
        renderPreview: () => (
            <div className="count-wrap">
                <span className="count-num" />
                <span className="count-label">Active Users</span>
            </div>
        ),
    },
    // 8. Neon Glow Hover Button
    {
        title: 'Neon Glow Button',
        description: 'A button that radiates a vivid neon glow on hover.',
        multiColor: true,
        cssTemplate: (c) => `.neon-btn-wrap{display:flex;align-items:center;justify-content:center;padding:40px}.neon-btn{padding:14px 32px;background:transparent;border:2px solid ${c.primary};border-radius:8px;color:${c.primary};font-size:1rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:all .3s;position:relative}.neon-btn:hover{background:${c.primary}22;box-shadow:0 0 8px ${c.primary},0 0 24px ${c.primary},0 0 60px ${c.primary}66;color:${c.primary};text-shadow:0 0 8px ${c.primary}}`,
        renderPreview: () => (
            <div className="neon-btn-wrap">
                <button className="neon-btn">Neon</button>
            </div>
        ),
    },
    // 9. Staggered List Reveal
    {
        title: 'Staggered List Reveal',
        description: 'List items that slide and fade in with a cascading delay.',
        multiColor: true,
        cssTemplate: (c) => `.stagger-list{display:flex;flex-direction:column;gap:10px;padding:32px}.stagger-item{display:flex;align-items:center;gap:12px;background:${c.primary}11;border:1px solid ${c.primary}33;padding:12px 16px;border-radius:10px;color:var(--text-primary);font-size:.9rem;font-weight:500;opacity:0;transform:translateX(-20px);animation:staggerIn .5s ease forwards}.stagger-item:nth-child(1){animation-delay:.0s}.stagger-item:nth-child(2){animation-delay:.1s}.stagger-item:nth-child(3){animation-delay:.2s}.stagger-item:nth-child(4){animation-delay:.3s}.stagger-dot{width:8px;height:8px;border-radius:50%;background:${c.primary};flex-shrink:0}@keyframes staggerIn{to{opacity:1;transform:translateX(0)}}`,
        renderPreview: () => (
            <div className="stagger-list">
                {['Design System', 'Components', 'Animation', 'Exports'].map((item) => (
                    <div key={item} className="stagger-item">
                        <div className="stagger-dot" />
                        {item}
                    </div>
                ))}
            </div>
        ),
    },
    // 10. Progress Bar Fill
    {
        title: 'Animated Progress Bar',
        description: 'A smooth bar that fills with a shimmer overlay on load.',
        multiColor: true,
        cssTemplate: (c) => `.progress-wrap{display:flex;flex-direction:column;gap:16px;padding:40px;width:260px;box-sizing:border-box}.progress-row{display:flex;flex-direction:column;gap:6px}.progress-label{display:flex;justify-content:space-between;font-size:.8rem;color:var(--text-secondary)}.progress-track{height:8px;background:${c.primary}22;border-radius:99px;overflow:hidden}.progress-fill{height:100%;border-radius:99px;background:linear-gradient(90deg,${c.primary},${c.secondary});animation:fillBar 1.8s ease-out forwards;position:relative;overflow:hidden}.progress-fill::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.3) 50%,transparent 100%);animation:shimmerBar 1.5s infinite}@keyframes fillBar{from{width:0}to{width:var(--pct)}}@keyframes shimmerBar{from{transform:translateX(-100%)}to{transform:translateX(200%)}}`,
        renderPreview: () => (
            <div className="progress-wrap">
                {[{ label: 'Design', pct: '85%' }, { label: 'Frontend', pct: '72%' }, { label: 'Animation', pct: '95%' }].map(({ label, pct }) => (
                    <div key={label} className="progress-row">
                        <div className="progress-label"><span>{label}</span><span>{pct}</span></div>
                        <div className="progress-track">
                            <div className="progress-fill" style={{ '--pct': pct }} />
                        </div>
                    </div>
                ))}
            </div>
        ),
    },
];

export default microEffects;
