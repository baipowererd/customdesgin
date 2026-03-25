import React from 'react';
import './FitnessDashboard.css';

// ── Progress Ring SVG ──
function ProgressRing() {
    const rings = [
        { r: 58, pct: 85, color: '#4ade80', width: 10 },
        { r: 44, pct: 75, color: '#fbbf24', width: 10 },
        { r: 30, pct: 65, color: '#86efac', width: 10 },
    ];
    return (
        <svg viewBox="0 0 140 140">
            {rings.map(({ r, pct, color, width }, i) => {
                const c = 2 * Math.PI * r;
                return (
                    <g key={i}>
                        <circle cx="70" cy="70" r={r} fill="none" stroke="#e8e5df" strokeWidth={width} opacity="0.3" />
                        <circle
                            cx="70" cy="70" r={r}
                            fill="none" stroke={color} strokeWidth={width}
                            strokeDasharray={c}
                            strokeDashoffset={c * (1 - pct / 100)}
                            strokeLinecap="round"
                            style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 1s ease' }}
                        />
                    </g>
                );
            })}
        </svg>
    );
}

// ── ECG Path ──
const ecgPath = 'M0,30 L30,30 L35,30 L40,10 L45,50 L50,5 L55,55 L60,25 L65,30 L90,30 L95,30 L100,10 L105,50 L110,5 L115,55 L120,25 L125,30 L160,30 L165,30 L170,10 L175,50 L180,5 L185,55 L190,25 L195,30 L230,30';

export default function FitnessDashboard() {
    return (
        <div className="fit-page">
            <div className="fit-grid">

                {/* ── 1. Progress Card ── */}
                <div className="fit-card fit-progress">
                    <div className="fit-card-hdr">
                        <h3 className="fit-card-title">Progress</h3>
                        <button className="fit-pill">This Week ▾</button>
                    </div>
                    <p className="fit-pct-big">75%</p>
                    <p className="fit-pct-label">Goal Completion</p>

                    <div className="fit-ring-wrap">
                        <ProgressRing />
                    </div>

                    <div className="fit-training-list">
                        {[
                            { name: 'Cardio Training', sub: '5/6 sets of HIIT session', pct: '85%', color: '#3b82f6' },
                            { name: 'Strength Training', sub: '4/5 sets of full-body strength circuit', pct: '75%', color: '#fbbf24' },
                            { name: 'Flexibility Training', sub: '3/4 sets of yoga sessions', pct: '65%', color: '#86efac' },
                        ].map(t => (
                            <div key={t.name} className="fit-train-row">
                                <div className="fit-train-dot" style={{ background: t.color }} />
                                <div className="fit-train-info">
                                    <div className="fit-train-name">{t.name}</div>
                                    <div className="fit-train-sub">{t.sub}</div>
                                </div>
                                <div className="fit-train-pct">{t.pct}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── 2. Heart Beat ── */}
                <div className="fit-card fit-card-green">
                    <div className="fit-card-hdr">
                        <h3 className="fit-card-title">❤️ Heart Beat</h3>
                        <button className="fit-dots">···</button>
                    </div>
                    <div className="fit-hb-val">
                        <span className="fit-hb-num">110</span>
                        <span className="fit-hb-unit">bpm</span>
                        <span className="fit-hb-badge">Normal</span>
                    </div>
                    <p className="fit-hb-msg">You are calm and ready for exercises!</p>
                    <div className="fit-ecg">
                        <svg viewBox="0 0 230 60" preserveAspectRatio="none">
                            <path className="fit-ecg-line" d={ecgPath} />
                        </svg>
                    </div>
                </div>

                {/* ── 3. Running Activity (top right) ── */}
                <div className="fit-card" style={{ gridRow: 'span 1' }}>
                    <div className="fit-card-hdr">
                        <h3 className="fit-card-title">🏃 Running Activity</h3>
                        <div style={{ display: 'flex', gap: 6 }}>
                            <button className="fit-pill">Today</button>
                        </div>
                    </div>

                    {/* Route */}
                    <div className="fit-run-route">
                        <div className="fit-run-point">
                            <div className="fit-run-dot-lg" />
                            <div className="fit-run-loc">Central Park Entrance</div>
                            <div className="fit-run-time">6:30 AM</div>
                        </div>
                        <div className="fit-run-line">
                            <span className="fit-run-dist">→ 8 km →</span>
                        </div>
                        <div className="fit-run-point">
                            <div className="fit-run-dot-lg" style={{ background: '#f43f5e' }} />
                            <div className="fit-run-loc">Central Park North Gate</div>
                            <div className="fit-run-time">7:20 AM</div>
                        </div>
                    </div>

                    <div className="fit-run-stats">
                        {[
                            { label: 'Duration', val: '50', unit: 'min' },
                            { label: 'Steps', val: '10,500', unit: '' },
                            { label: 'Avg. Pace', val: '10', unit: 'min/km' },
                            { label: 'Calories', val: '450', unit: 'cal' },
                        ].map(s => (
                            <div key={s.label} className="fit-run-stat">
                                <div className="fit-run-stat-label">{s.label}</div>
                                <div className="fit-run-stat-val">{s.val} <span className="fit-run-stat-unit">{s.unit}</span></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── 4. Health Score ── */}
                <div className="fit-card fit-card-green">
                    <div className="fit-card-hdr">
                        <h3 className="fit-card-title">💚 Health Score</h3>
                        <button className="fit-dots">···</button>
                    </div>
                    <div className="fit-hs-row">
                        <span className="fit-hs-pct">82%</span>
                        <span className="fit-hs-badge">Very Healthy</span>
                    </div>
                    <div className="fit-hs-bars">
                        {[1, 1, 1, 1, 1, 0, 0].map((full, i) => (
                            <div key={i} className={`fit-hs-bar ${full ? '' : 'dim'}`} />
                        ))}
                    </div>
                    <p className="fit-hs-msg">Keep up your good work, Kalendra!</p>
                </div>

                {/* ── 5. Profile + Today's Activity (right col, row 2-3) ── */}
                <div className="fit-card fit-profile" style={{ gridRow: 'span 2' }}>
                    <div className="fit-card-hdr">
                        <h3 className="fit-card-title">My Profile</h3>
                        <button className="fit-dots">···</button>
                    </div>

                    <div className="fit-profile-av">KW</div>
                    <h3 className="fit-profile-name">Kalendra Wingman</h3>
                    <div className="fit-profile-meta">
                        <span className="fit-profile-badge">🏅 Advanced</span>
                        <span>•</span>
                        <span>⭐ 14,750</span>
                    </div>

                    <div className="fit-profile-stats">
                        <div>
                            <div className="fit-ps-label">Weight</div>
                            <div className="fit-ps-val">75 <span className="fit-ps-unit">kg</span></div>
                        </div>
                        <div>
                            <div className="fit-ps-label">Height</div>
                            <div className="fit-ps-val">175 <span className="fit-ps-unit">cm</span></div>
                        </div>
                        <div>
                            <div className="fit-ps-label">Age</div>
                            <div className="fit-ps-val">29 <span className="fit-ps-unit">yrs</span></div>
                        </div>
                    </div>

                    {/* Today's Activity */}
                    <div className="fit-today">
                        <div className="fit-today-hdr">
                            <h4 className="fit-today-title">Today's Activity</h4>
                            <span className="fit-today-pill">🏃 Running ▾</span>
                        </div>

                        <div className="fit-map-area">
                            <div className="fit-map">
                                <div className="fit-map-path" />
                                <div className="fit-map-pin">📍</div>
                            </div>
                            <div className="fit-trail-info">
                                <div className="fit-trail-time">⏱ 6:30 AM - 7:20 AM</div>
                                <h4 className="fit-trail-name">Park Loop Trail</h4>
                                <div className="fit-trail-stats">
                                    {[
                                        { label: 'Distance', val: '5 miles (8 km)' },
                                        { label: 'Total Time', val: '50 minutes' },
                                        { label: 'Total Steps', val: '10,500 steps' },
                                        { label: 'Total Calories', val: '450 Cal' },
                                        { label: 'Average Pace', val: '10 minutes/mile' },
                                    ].map(r => (
                                        <div key={r.label} className="fit-trail-row">
                                            <span className="fit-trail-label">{r.label}</span>
                                            <span className="fit-trail-val">{r.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── 6. Meal Card ── */}
                <div className="fit-card fit-meal">
                    <div className="fit-meal-img">🥗</div>
                    <div className="fit-meal-info">
                        <div className="fit-meal-tags">
                            <span className="fit-meal-tag">Dinner</span>
                            <span className="fit-meal-meta">🔥 Easy &nbsp; ⏱ 30 minutes</span>
                        </div>
                        <div className="fit-meal-name">Lean & Green</div>
                        <p className="fit-meal-desc">Baked Salmon with Steamed Broccoli and Brown Rice</p>
                        <div className="fit-meal-score">Health Score: <span>85</span>/100</div>
                        <div className="fit-meal-health-bar">
                            {Array.from({ length: 17 }, (_, i) => (
                                <div key={i} className={`fit-meal-bar-seg ${i >= 14 ? 'dim' : ''}`} />
                            ))}
                        </div>
                        <button className="fit-add-btn">+ Add</button>
                    </div>
                    <div className="fit-meal-macros">
                        {[
                            { label: '450 Cal', color: '#4ade80' },
                            { label: '40g Carbs', color: '#fbbf24' },
                            { label: '35g Protein', color: '#3b82f6' },
                            { label: '15g Fats', color: '#f43f5e' },
                        ].map(m => (
                            <div key={m.label} className="fit-macro-row">
                                <div className="fit-macro-dot" style={{ background: m.color }} />
                                <span className="fit-macro-val">{m.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
