import React from 'react';

const mobileEffects = [
    // ─────────────────────────────────────────────
    // 1. Travel Destination Card
    // ─────────────────────────────────────────────
    {
        title: 'Travel Destination Card',
        description: 'A mobile phone-style destination card with large hero image, rating, description and CTA button. Green accent.',
        multiColor: true,
        cssTemplate: (c) => `
.travel-dest{width:280px;min-height:460px;border-radius:32px;overflow:hidden;background:#1a1a2e;color:#fff;font-family:'Inter',system-ui,sans-serif;position:relative;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.25);margin:20px auto}
.travel-dest-notch{position:absolute;top:0;left:0;right:0;display:flex;justify-content:space-between;align-items:center;padding:10px 20px;z-index:2;font-size:.7rem;font-weight:600}
.travel-dest-img{width:100%;height:260px;background:linear-gradient(135deg,${c.primary}44,${c.secondary || c.primary}44),linear-gradient(180deg,#2d5a2d,#1a4a3a,#0d3d2d);background-size:cover;position:relative;display:flex;align-items:flex-end;padding:16px}
.travel-dest-img::after{content:'';position:absolute;bottom:0;left:0;right:0;height:120px;background:linear-gradient(transparent,rgba(0,0,0,.7))}
.travel-dest-overlay{position:relative;z-index:1;width:100%;display:flex;justify-content:space-between;align-items:flex-end}
.travel-dest-name{font-size:1rem;font-weight:800;text-transform:uppercase;letter-spacing:1px;margin:0}
.travel-dest-rating{display:flex;align-items:center;gap:4px;color:${c.primary};font-weight:700;font-size:.88rem}
.travel-dest-loc{font-size:.68rem;color:rgba(255,255,255,.7);margin:2px 0 0;display:flex;align-items:center;gap:4px}
.travel-dest-body{padding:16px 18px;flex:1;display:flex;flex-direction:column;gap:12px}
.travel-dest-desc{font-size:.72rem;color:rgba(255,255,255,.65);line-height:1.6;margin:0}
.travel-dest-btn{width:100%;padding:12px;background:transparent;border:1.5px solid rgba(255,255,255,.3);border-radius:12px;color:#fff;font-size:.78rem;font-weight:600;cursor:pointer;text-align:center;transition:all .2s}
.travel-dest-btn:hover{background:${c.primary};border-color:${c.primary};color:#1a1a2e}
.travel-img-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;position:absolute;top:40px;left:12px;right:12px;z-index:1}
.travel-img-tile{height:50px;border-radius:8px;opacity:.3}
        `.replace(/\n/g, ''),
        renderPreview: (c) => (
            <div className="travel-dest">
                <div className="travel-dest-notch">
                    <span>9:41</span>
                    <span>•••</span>
                </div>
                <div className="travel-dest-img" style={{ background: `linear-gradient(180deg, ${c.primary}33, #1a3a2a 40%, #0d2d1d)` }}>
                    {/* Fake landscape layers */}
                    <div style={{ position: 'absolute', bottom: '40%', left: 0, right: 0, height: '30%', background: `linear-gradient(90deg, ${c.primary}44, ${c.secondary || c.primary}22)`, filter: 'blur(20px)' }} />
                    <div style={{ position: 'absolute', top: '20%', left: '20%', width: '60%', height: '40%', borderRadius: '50% 50% 0 0', background: `${c.primary}22`, filter: 'blur(15px)' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(transparent, rgba(0,0,0,.7))' }} />
                    <div className="travel-dest-overlay">
                        <div>
                            <h3 className="travel-dest-name">Iguazu National Park</h3>
                            <p className="travel-dest-loc">📍 Border of Argentina and Brazil</p>
                        </div>
                        <div className="travel-dest-rating">★ 4.8</div>
                    </div>
                </div>
                <div className="travel-dest-body">
                    <p className="travel-dest-desc">
                        One of the planet's most awe-inspiring sights, Iguazu National Park is home to more than 270 waterfalls cascading through lush subtropical rainforest.
                    </p>
                    <div style={{ flex: 1 }} />
                    <button className="travel-dest-btn">Add to calendar</button>
                </div>
            </div>
        ),
    },

    // ─────────────────────────────────────────────
    // 2. Travel Explorer Screen
    // ─────────────────────────────────────────────
    {
        title: 'Travel Explorer Screen',
        description: 'A mobile travel explorer with user profile, category cards, country pills, and popular places. Pink vibrant theme.',
        multiColor: true,
        cssTemplate: (c) => `
.travel-explore{width:280px;min-height:480px;border-radius:32px;overflow:hidden;background:#fff;color:#1a1a2e;font-family:'Inter',system-ui,sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.15);margin:20px auto;display:flex;flex-direction:column}
.te-notch{display:flex;justify-content:space-between;align-items:center;padding:10px 20px;font-size:.7rem;font-weight:600;color:#1a1a2e}
.te-header{display:flex;align-items:center;justify-content:space-between;padding:4px 18px 12px}
.te-user{display:flex;align-items:center;gap:10px}
.te-avatar{width:36px;height:36px;border-radius:50%;background:${c.primary};display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;color:#fff}
.te-name{font-size:.88rem;font-weight:700}
.te-balance{font-size:1rem;font-weight:800;color:${c.primary}}
.te-cats{display:flex;gap:8px;padding:8px 18px;overflow-x:auto}
.te-cat{display:flex;flex-direction:column;align-items:center;gap:4px;min-width:65px}
.te-cat-img{width:60px;height:50px;border-radius:10px;background:linear-gradient(135deg,${c.primary}22,${c.secondary || c.primary}44);display:flex;align-items:center;justify-content:center;font-size:1.2rem}
.te-cat-label{font-size:.58rem;font-weight:500;color:#6b7280;text-align:center}
.te-countries{display:flex;gap:6px;padding:10px 18px;overflow-x:auto}
.te-country{display:flex;align-items:center;gap:4px;padding:5px 12px;border:1.5px solid #e5e7eb;border-radius:99px;font-size:.68rem;font-weight:600;white-space:nowrap}
.te-flag{width:16px;height:12px;border-radius:2px;flex-shrink:0}
.te-popular{background:${c.primary};color:#fff;flex:1;border-radius:24px 24px 0 0;padding:18px;margin-top:8px}
.te-popular h3{font-size:1rem;font-weight:800;text-transform:uppercase;letter-spacing:1px;margin:0 0 12px}
.te-places{display:flex;gap:10px;overflow-x:auto}
.te-place{min-width:160px;background:rgba(255,255,255,.15);border-radius:14px;overflow:hidden;backdrop-filter:blur(10px)}
.te-place-img{height:110px;background:linear-gradient(135deg,rgba(255,255,255,.2),rgba(255,255,255,.05));display:flex;align-items:center;justify-content:center;font-size:2.5rem;border:2px solid rgba(255,255,255,.2);border-radius:14px 14px 0 0}
.te-place-body{padding:10px}
.te-place-name{font-size:.82rem;font-weight:700;margin:0 0 4px}
.te-place-desc{font-size:.62rem;opacity:.8;line-height:1.5;margin:0}
        `.replace(/\n/g, ''),
        renderPreview: (c) => (
            <div className="travel-explore">
                <div className="te-notch"><span>9:41</span><span>•••</span></div>
                <div className="te-header">
                    <div className="te-user">
                        <div className="te-avatar">CR</div>
                        <span className="te-name">CATHY RICE</span>
                    </div>
                    <span className="te-balance">$453.00</span>
                </div>
                <div className="te-cats">
                    {[{ icon: '🏔️', label: 'Mountain escapes' }, { icon: '🏙️', label: 'City streets' }, { icon: '🍜', label: 'Local food' }, { icon: '🏖️', label: 'Beaches' }].map(cat => (
                        <div key={cat.label} className="te-cat">
                            <div className="te-cat-img">{cat.icon}</div>
                            <span className="te-cat-label">{cat.label}</span>
                        </div>
                    ))}
                </div>
                <div className="te-countries">
                    {[{ name: 'Peru', flag: '🇵🇪' }, { name: 'Brazil', flag: '🇧🇷' }, { name: 'Chile', flag: '🇨🇱' }, { name: 'Argentina', flag: '🇦🇷' }].map(ct => (
                        <div key={ct.name} className="te-country">{ct.flag} {ct.name}</div>
                    ))}
                </div>
                <div className="te-popular">
                    <h3>Popular Places</h3>
                    <div className="te-places">
                        <div className="te-place">
                            <div className="te-place-img">🏛️</div>
                            <div className="te-place-body">
                                <h4 className="te-place-name">Machu Picchu</h4>
                                <p className="te-place-desc">A 15th-century Inca citadel set high in the Andes Mountains, known for dramatic views.</p>
                            </div>
                        </div>
                        <div className="te-place">
                            <div className="te-place-img">🌈</div>
                            <div className="te-place-body">
                                <h4 className="te-place-name">Rainbow Mtn</h4>
                                <p className="te-place-desc">A colorful mountain in Peruvian Andes with stunning mineral layers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },

    // ─────────────────────────────────────────────
    // 3. Travel Statistics Screen
    // ─────────────────────────────────────────────
    {
        title: 'Travel Statistics Screen',
        description: 'A mobile statistics view with filter tabs, bar chart, trip counter, and visited places with progress indicator. Lime green theme.',
        multiColor: true,
        cssTemplate: (c) => `
.travel-stats{width:280px;min-height:480px;border-radius:32px;overflow:hidden;background:#f8faf4;color:#1a1a2e;font-family:'Inter',system-ui,sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.15);margin:20px auto;display:flex;flex-direction:column}
.ts-notch{display:flex;justify-content:space-between;align-items:center;padding:10px 20px;font-size:.7rem;font-weight:600}
.ts-top-bar{display:flex;align-items:center;justify-content:space-between;padding:4px 18px 8px}
.ts-back{width:28px;height:28px;border-radius:8px;border:1px solid #e5e7eb;background:transparent;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:.8rem}
.ts-title{font-size:1.1rem;font-weight:800;text-transform:uppercase;letter-spacing:1px}
.ts-dots{background:none;border:none;font-size:1.2rem;color:#9ca3af;cursor:pointer}
.ts-tabs{display:flex;gap:6px;padding:8px 18px;overflow-x:auto}
.ts-tab{padding:5px 14px;border-radius:99px;border:1.5px solid #e5e7eb;background:transparent;font-size:.68rem;font-weight:600;cursor:pointer;white-space:nowrap;color:#6b7280}
.ts-tab.active{background:#1a1a2e;border-color:#1a1a2e;color:#fff}
.ts-body{flex:1;padding:14px 18px;display:flex;flex-direction:column;gap:14px;overflow-y:auto}
.ts-country-hdr{display:flex;justify-content:space-between;align-items:center}
.ts-country-name{font-size:1.1rem;font-weight:800;text-transform:uppercase;margin:0}
.ts-country-rating{color:${c.primary};font-weight:700;font-size:.88rem}
.ts-country-dates{font-size:.68rem;color:#6b7280;margin:0}
.ts-chart{display:flex;align-items:flex-end;gap:6px;height:80px;padding:8px 0}
.ts-chart-col{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px}
.ts-chart-bar{width:100%;border-radius:4px 4px 0 0;transition:height .5s}
.ts-chart-label{font-size:.55rem;color:#6b7280}
.ts-chart-tip{font-size:.5rem;background:${c.primary}22;color:${c.primary};padding:1px 5px;border-radius:4px;font-weight:600;margin-bottom:2px}
.ts-visited{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:12px}
.ts-visited-hdr{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
.ts-visited-title{font-size:.88rem;font-weight:800;text-transform:uppercase;margin:0}
.ts-visited-pct{background:${c.primary}22;color:${c.primary};padding:3px 10px;border-radius:99px;font-size:.65rem;font-weight:700}
.ts-visited-grid{display:flex;gap:8px;overflow-x:auto}
.ts-visited-card{min-width:75px;text-align:center}
.ts-visited-img{width:75px;height:60px;border-radius:10px;background:linear-gradient(135deg,${c.primary}22,${c.secondary || c.primary}33);display:flex;align-items:center;justify-content:center;font-size:1.5rem;margin-bottom:4px;border:2px solid ${c.primary}44}
.ts-visited-name{font-size:.62rem;font-weight:600}
        `.replace(/\n/g, ''),
        renderPreview: (c) => {
            const bars = [
                { month: 'Apr', h: 15 },
                { month: 'May', h: 25 },
                { month: 'Jun', h: 35 },
                { month: 'Jul', h: 45 },
                { month: 'Aug', h: 70, tip: '5 trips' },
                { month: 'Sep', h: 50 },
            ];
            return (
                <div className="travel-stats">
                    <div className="ts-notch"><span>9:41</span><span>•••</span></div>
                    <div className="ts-top-bar">
                        <button className="ts-back">‹</button>
                        <span className="ts-title">Statistics</span>
                        <button className="ts-dots">···</button>
                    </div>
                    <div className="ts-tabs">
                        {['All-Time', 'Country ✓', 'City', 'Places'].map((t, i) => (
                            <button key={t} className={`ts-tab ${i === 1 ? 'active' : ''}`}>{t}</button>
                        ))}
                    </div>
                    <div className="ts-body">
                        <div>
                            <div className="ts-country-hdr">
                                <h3 className="ts-country-name">Peru</h3>
                                <span className="ts-country-rating">★ 5.0</span>
                            </div>
                            <p className="ts-country-dates">18 May — 20 Sep</p>
                        </div>
                        <div className="ts-chart">
                            {bars.map(b => (
                                <div key={b.month} className="ts-chart-col">
                                    {b.tip && <span className="ts-chart-tip">{b.tip}</span>}
                                    <div className="ts-chart-bar" style={{ height: `${b.h}%`, background: c.primary }} />
                                    <div className="ts-chart-label">{b.month}</div>
                                </div>
                            ))}
                        </div>
                        <div className="ts-visited">
                            <div className="ts-visited-hdr">
                                <h4 className="ts-visited-title">You Visited</h4>
                                <span className="ts-visited-pct">76%</span>
                            </div>
                            <div className="ts-visited-grid">
                                {[{ name: 'Cusco', icon: '🏛️' }, { name: 'Arequipa', icon: '⛪' }, { name: 'Lima', icon: '🌆' }].map(p => (
                                    <div key={p.name} className="ts-visited-card">
                                        <div className="ts-visited-img">{p.icon}</div>
                                        <div className="ts-visited-name">{p.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    },

    // ─────────────────────────────────────────────
    // 4. Music Player Screen
    // ─────────────────────────────────────────────
    {
        title: 'Music Player Screen',
        description: 'A sleek mobile music player with album art, playback controls, progress bar, and gradient backdrop.',
        multiColor: true,
        cssTemplate: (c) => `
.music-player{width:280px;min-height:460px;border-radius:32px;overflow:hidden;background:linear-gradient(180deg,${c.primary}33,#1a1a2e);color:#fff;font-family:'Inter',system-ui,sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.3);margin:20px auto;display:flex;flex-direction:column;align-items:center;padding:20px 24px}
.mp-notch{display:flex;justify-content:space-between;align-items:center;width:100%;font-size:.7rem;font-weight:600;margin-bottom:16px}
.mp-album{width:180px;height:180px;border-radius:20px;background:linear-gradient(135deg,${c.primary},${c.secondary || c.primary});display:flex;align-items:center;justify-content:center;font-size:4rem;box-shadow:0 16px 40px ${c.primary}66;margin-bottom:24px}
.mp-title{font-size:1rem;font-weight:700;text-align:center;margin:0}
.mp-artist{font-size:.78rem;color:rgba(255,255,255,.6);text-align:center;margin:6px 0 20px}
.mp-progress{width:100%;margin-bottom:4px}
.mp-progress-track{width:100%;height:4px;background:rgba(255,255,255,.15);border-radius:99px;overflow:hidden}
.mp-progress-fill{height:100%;width:65%;border-radius:99px;background:${c.primary}}
.mp-times{display:flex;justify-content:space-between;font-size:.6rem;color:rgba(255,255,255,.4);margin-bottom:20px;width:100%}
.mp-controls{display:flex;align-items:center;gap:20px;margin-bottom:20px}
.mp-ctrl{background:none;border:none;color:rgba(255,255,255,.6);cursor:pointer;font-size:1.2rem}
.mp-play{width:48px;height:48px;border-radius:50%;background:${c.primary};border:none;color:#fff;font-size:1.2rem;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 20px ${c.primary}66}
.mp-extras{display:flex;align-items:center;justify-content:space-between;width:100%;color:rgba(255,255,255,.4);font-size:.8rem}
.mp-extra-btn{background:none;border:none;color:rgba(255,255,255,.4);cursor:pointer;font-size:.9rem}
        `.replace(/\n/g, ''),
        renderPreview: (c) => (
            <div className="music-player">
                <div className="mp-notch"><span>9:41</span><span>•••</span></div>
                <div className="mp-album">🎵</div>
                <h3 className="mp-title">Midnight Waves</h3>
                <p className="mp-artist">Aurora & The Echoes</p>
                <div className="mp-progress">
                    <div className="mp-progress-track"><div className="mp-progress-fill" /></div>
                </div>
                <div className="mp-times"><span>2:34</span><span>3:52</span></div>
                <div className="mp-controls">
                    <button className="mp-ctrl">⏮</button>
                    <button className="mp-ctrl">⏪</button>
                    <button className="mp-play">▶</button>
                    <button className="mp-ctrl">⏩</button>
                    <button className="mp-ctrl">⏭</button>
                </div>
                <div className="mp-extras">
                    <button className="mp-extra-btn">🔀</button>
                    <button className="mp-extra-btn">❤️</button>
                    <button className="mp-extra-btn">🔁</button>
                </div>
            </div>
        ),
    },

    // ─────────────────────────────────────────────
    // 5. Chat Messenger Screen
    // ─────────────────────────────────────────────
    {
        title: 'Chat Messenger Screen',
        description: 'A mobile messaging app with chat bubbles, typing indicator, avatar, and message input. Clean minimal theme.',
        multiColor: true,
        cssTemplate: (c) => `
.chat-screen{width:280px;min-height:460px;border-radius:32px;overflow:hidden;background:#f9fafb;color:#1a1a2e;font-family:'Inter',system-ui,sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.12);margin:20px auto;display:flex;flex-direction:column}
.cs-notch{display:flex;justify-content:space-between;align-items:center;padding:10px 20px;font-size:.7rem;font-weight:600}
.cs-header{display:flex;align-items:center;gap:10px;padding:6px 18px 12px;border-bottom:1px solid #e5e7eb}
.cs-back{background:none;border:none;font-size:.9rem;cursor:pointer;color:#6b7280}
.cs-av{width:32px;height:32px;border-radius:50%;background:${c.primary};display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#fff}
.cs-name{font-size:.85rem;font-weight:600}
.cs-status{font-size:.6rem;color:#22c55e}
.cs-body{flex:1;padding:12px 14px;display:flex;flex-direction:column;gap:8px;overflow-y:auto}
.cs-msg{max-width:75%;padding:10px 14px;border-radius:16px;font-size:.75rem;line-height:1.5}
.cs-msg-them{background:#fff;border:1px solid #e5e7eb;border-radius:16px 16px 16px 4px;align-self:flex-start;color:#1a1a2e}
.cs-msg-me{background:${c.primary};color:#fff;border-radius:16px 16px 4px 16px;align-self:flex-end}
.cs-time{font-size:.5rem;color:#9ca3af;align-self:center;margin:4px 0}
.cs-typing{display:flex;gap:4px;align-self:flex-start;padding:10px 14px;background:#fff;border:1px solid #e5e7eb;border-radius:16px}
.cs-typing-dot{width:6px;height:6px;border-radius:50%;background:#9ca3af;animation:csDotBounce 1.2s ease-in-out infinite}
.cs-typing-dot:nth-child(2){animation-delay:.2s}
.cs-typing-dot:nth-child(3){animation-delay:.4s}
@keyframes csDotBounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}
.cs-input-area{display:flex;align-items:center;gap:8px;padding:10px 14px;border-top:1px solid #e5e7eb;background:#fff}
.cs-input{flex:1;padding:8px 14px;border:1px solid #e5e7eb;border-radius:99px;font-size:.75rem;background:#f9fafb;outline:none}
.cs-send{width:32px;height:32px;border-radius:50%;background:${c.primary};border:none;color:#fff;font-size:.8rem;cursor:pointer;display:flex;align-items:center;justify-content:center}
        `.replace(/\n/g, ''),
        renderPreview: (c) => (
            <div className="chat-screen">
                <div className="cs-notch"><span>9:41</span><span>•••</span></div>
                <div className="cs-header">
                    <button className="cs-back">‹</button>
                    <div className="cs-av">JD</div>
                    <div>
                        <div className="cs-name">Jane Doe</div>
                        <div className="cs-status">● Online</div>
                    </div>
                </div>
                <div className="cs-body">
                    <div className="cs-time">Today, 2:30 PM</div>
                    <div className="cs-msg cs-msg-them">Hey! Are you free for a quick call today? 😊</div>
                    <div className="cs-msg cs-msg-me">Sure! I'm free after 4pm. What's it about?</div>
                    <div className="cs-msg cs-msg-them">Great! I wanted to discuss the new design system we're building. Lots of exciting ideas!</div>
                    <div className="cs-msg cs-msg-me">Sounds awesome! I'll prep some mood boards 🎨</div>
                    <div className="cs-msg cs-msg-them">Perfect. Talk soon!</div>
                    <div className="cs-typing">
                        <div className="cs-typing-dot" />
                        <div className="cs-typing-dot" />
                        <div className="cs-typing-dot" />
                    </div>
                </div>
                <div className="cs-input-area">
                    <input className="cs-input" placeholder="Type a message..." readOnly />
                    <button className="cs-send">➤</button>
                </div>
            </div>
        ),
    },

    // ─────────────────────────────────────────────
    // 6. Ticketo Event List Screen
    // ─────────────────────────────────────────────
    {
        title: 'Ticketo Event List',
        description: 'A dark noir mobile event browser with date header, event cards with subtle glow, and bottom nav. Teal/cyan accent.',
        multiColor: true,
        cssTemplate: (c) => `
.tk-list{width:280px;min-height:480px;border-radius:32px;overflow:hidden;background:#0a0a0a;color:#fff;font-family:'Inter',system-ui,sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.5);margin:20px auto;display:flex;flex-direction:column;position:relative}
.tk-notch{display:flex;justify-content:space-between;align-items:center;padding:10px 20px;font-size:.7rem;font-weight:600;color:rgba(255,255,255,.5)}
.tk-list-hdr{padding:6px 18px 14px;display:flex;justify-content:space-between;align-items:center}
.tk-brand{font-size:1.05rem;font-weight:800;letter-spacing:1px}
.tk-hamburger{font-size:1rem;color:rgba(255,255,255,.5);background:none;border:none;cursor:pointer}
.tk-date-banner{padding:0 18px 14px}
.tk-date-sub{font-size:.6rem;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:2px;margin:0 0 2px}
.tk-date-big{font-size:1.5rem;font-weight:800;margin:0;line-height:1.2}
.tk-date-day{font-size:1.1rem;font-weight:300;color:rgba(255,255,255,.6)}
.tk-events{flex:1;padding:0 12px;display:flex;flex-direction:column;gap:8px;overflow-y:auto}
.tk-event{background:#141414;border:1px solid #222;border-radius:14px;padding:14px;display:flex;align-items:center;justify-content:space-between;position:relative;overflow:hidden;transition:border-color .2s}
.tk-event:hover{border-color:${c.primary}44}
.tk-event-glow{position:absolute;top:50%;right:30%;width:60px;height:60px;background:${c.primary};filter:blur(40px);opacity:.08;border-radius:50%}
.tk-event-info{position:relative;z-index:1;flex:1}
.tk-event-name{font-size:.88rem;font-weight:700;margin:0 0 2px}
.tk-event-meta{font-size:.6rem;color:rgba(255,255,255,.35);margin:0}
.tk-event-loc{margin-top:4px;font-size:.6rem;color:rgba(255,255,255,.3);font-style:italic}
.tk-event-arrow{width:28px;height:28px;border-radius:8px;border:1px solid #333;background:transparent;display:flex;align-items:center;justify-content:center;cursor:pointer;color:rgba(255,255,255,.4);font-size:.75rem;position:relative;z-index:1;transition:border-color .2s}
.tk-event:hover .tk-event-arrow{border-color:${c.primary};color:${c.primary}}
.tk-bottom-nav{display:flex;align-items:center;justify-content:space-around;padding:12px 0;border-top:1px solid #1a1a1a;flex-shrink:0}
.tk-nav-icon{width:28px;height:28px;border-radius:8px;background:transparent;border:none;color:rgba(255,255,255,.3);font-size:.85rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:color .2s}
.tk-nav-icon.active{color:${c.primary}}
        `.replace(/\n/g, ''),
        renderPreview: (c) => {
            const events = [
                { name: 'BITPA\n2023', meta: '26/12/2023', loc: 'Khulna, Bangladesh' },
                { name: 'Design Summit', meta: '03/02/2024', loc: '' },
                { name: 'Artisanal Convergence', meta: '17/03/2024', loc: '' },
            ];
            return (
                <div className="tk-list">
                    <div className="tk-notch"><span>9:41</span><span>•••</span></div>
                    <div className="tk-list-hdr">
                        <span className="tk-brand">Ticketo</span>
                        <button className="tk-hamburger">☰</button>
                    </div>
                    <div className="tk-date-banner">
                        <p className="tk-date-sub">Selected</p>
                        <h2 className="tk-date-big">26 December</h2>
                        <span className="tk-date-day">Sunday</span>
                    </div>
                    <div className="tk-events">
                        {events.map((ev, i) => (
                            <div key={i} className="tk-event">
                                <div className="tk-event-glow" />
                                <div className="tk-event-info">
                                    <h4 className="tk-event-name">{ev.name.split('\n').map((l, j) => <span key={j}>{l}{j === 0 && ev.name.includes('\n') ? <br /> : ''}</span>)}</h4>
                                    <p className="tk-event-meta">{ev.meta}</p>
                                    {ev.loc && <p className="tk-event-loc">{ev.loc}</p>}
                                </div>
                                <button className="tk-event-arrow">↗</button>
                            </div>
                        ))}
                    </div>
                    <div className="tk-bottom-nav">
                        {['🏠', '🔍', '🎫', '👤'].map((ico, i) => (
                            <button key={i} className={`tk-nav-icon ${i === 0 ? 'active' : ''}`}>{ico}</button>
                        ))}
                    </div>
                </div>
            );
        },
    },

    // ─────────────────────────────────────────────
    // 7. Ticketo Ticket Detail
    // ─────────────────────────────────────────────
    {
        title: 'Ticketo Ticket Detail',
        description: 'A dark noir ticket detail view with event info, seat/row, date/time, location, barcode, and bottom nav. Minimal dark theme.',
        multiColor: true,
        cssTemplate: (c) => `
.tk-detail{width:280px;min-height:480px;border-radius:32px;overflow:hidden;background:#0a0a0a;color:#fff;font-family:'Inter',system-ui,sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.5);margin:20px auto;display:flex;flex-direction:column}
.tkd-notch{display:flex;justify-content:space-between;align-items:center;padding:10px 20px;font-size:.7rem;font-weight:600;color:rgba(255,255,255,.5)}
.tkd-header{display:flex;align-items:center;justify-content:space-between;padding:4px 18px 10px}
.tkd-brand{font-size:1.05rem;font-weight:800;letter-spacing:1px}
.tkd-menu{font-size:1rem;color:rgba(255,255,255,.5);background:none;border:none;cursor:pointer}
.tkd-ticket{margin:0 14px;background:#141414;border:1px solid #222;border-radius:16px;flex:1;display:flex;flex-direction:column;overflow:hidden;position:relative}
.tkd-event-section{padding:20px 18px;text-align:center}
.tkd-event-name{font-size:1.5rem;font-weight:800;margin:0 0 4px;letter-spacing:2px}
.tkd-event-year{font-size:1.2rem;font-weight:300;color:rgba(255,255,255,.5);margin:0}
.tkd-scan-icon{position:absolute;top:18px;right:18px;color:rgba(255,255,255,.3);font-size:.9rem}
.tkd-divider{display:flex;align-items:center;padding:0 14px;margin:0}
.tkd-divider-line{flex:1;height:1px;border-top:1px dashed #333}
.tkd-divider-dot{width:22px;height:22px;border-radius:50%;background:#0a0a0a;flex-shrink:0;margin:0 -25px;z-index:1}
.tkd-seat-row{display:flex;justify-content:center;gap:40px;padding:16px 18px}
.tkd-seat-item{text-align:center}
.tkd-seat-val{font-size:1.5rem;font-weight:800;margin:0}
.tkd-seat-label{font-size:.62rem;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:1px;margin:0}
.tkd-date-section{padding:10px 18px 8px;display:flex;justify-content:space-between;align-items:center}
.tkd-date-text{display:flex;flex-direction:column}
.tkd-date-big{font-size:1rem;font-weight:700;margin:0}
.tkd-date-day{font-size:.78rem;font-weight:400;color:rgba(255,255,255,.5);margin:0}
.tkd-time{font-size:1.8rem;font-weight:800;line-height:1}
.tkd-time-min{font-size:1rem;font-weight:300;display:block;text-align:right}
.tkd-location{padding:4px 18px 14px;font-size:.78rem;color:rgba(255,255,255,.4)}
.tkd-barcode{padding:10px 18px 16px;display:flex;flex-direction:column;align-items:center;gap:6px}
.tkd-barcode-visual{display:flex;gap:1.5px;align-items:flex-end;height:36px}
.tkd-barcode-bar{width:2px;background:#fff;border-radius:1px}
.tkd-bottom-nav{display:flex;align-items:center;justify-content:space-around;padding:12px 0;border-top:1px solid #1a1a1a;flex-shrink:0}
.tkd-nav-icon{width:28px;height:28px;border-radius:8px;background:transparent;border:none;color:rgba(255,255,255,.3);font-size:.85rem;cursor:pointer;display:flex;align-items:center;justify-content:center}
.tkd-nav-icon.active{color:${c.primary}}
        `.replace(/\n/g, ''),
        renderPreview: (c) => {
            // Generate random barcode bars
            const barWidths = Array.from({ length: 45 }, () => Math.random() > 0.3 ? 2 : 1);
            const barHeights = Array.from({ length: 45 }, () => 20 + Math.random() * 16);

            return (
                <div className="tk-detail">
                    <div className="tkd-notch"><span>9:41</span><span>•••</span></div>
                    <div className="tkd-header">
                        <span className="tkd-brand">Ticketo</span>
                        <button className="tkd-menu">☰</button>
                    </div>
                    <div className="tkd-ticket">
                        <div className="tkd-event-section">
                            <h2 className="tkd-event-name">BITPA</h2>
                            <p className="tkd-event-year">2023</p>
                            <span className="tkd-scan-icon">⎘</span>
                        </div>

                        {/* Tear line */}
                        <div className="tkd-divider">
                            <div className="tkd-divider-dot" />
                            <div className="tkd-divider-line" />
                            <div className="tkd-divider-dot" />
                        </div>

                        {/* Seat & Row */}
                        <div className="tkd-seat-row">
                            <div className="tkd-seat-item">
                                <h3 className="tkd-seat-val">203</h3>
                                <p className="tkd-seat-label">Seat</p>
                            </div>
                            <div className="tkd-seat-item">
                                <h3 className="tkd-seat-val">02</h3>
                                <p className="tkd-seat-label">Row</p>
                            </div>
                        </div>

                        {/* Date & Time */}
                        <div className="tkd-date-section">
                            <div className="tkd-date-text">
                                <h4 className="tkd-date-big">26 December</h4>
                                <p className="tkd-date-day">Sunday</p>
                            </div>
                            <div className="tkd-time">
                                12:<span className="tkd-time-min">00</span>
                            </div>
                        </div>

                        <div className="tkd-location">Khulna, Bangladesh</div>

                        {/* Barcode */}
                        <div className="tkd-barcode">
                            <div className="tkd-barcode-visual">
                                {barWidths.map((w, i) => (
                                    <div key={i} className="tkd-barcode-bar" style={{ width: `${w}px`, height: `${barHeights[i]}px` }} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="tkd-bottom-nav">
                        {['🏠', '🔍', '🎫', '👤'].map((ico, i) => (
                            <button key={i} className={`tkd-nav-icon ${i === 2 ? 'active' : ''}`}>{ico}</button>
                        ))}
                    </div>
                </div>
            );
        },
    },
];

export default mobileEffects;
