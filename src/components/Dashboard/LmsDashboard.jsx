import React, { useState } from 'react';
import './LmsDashboard.css';

const navItems = [
    { label: 'Dashboard', icon: '⊞' },
    { label: 'Messages', icon: '💬' },
    { label: 'Calendar', icon: '📅' },
    { label: 'Enrollments', icon: '📋' },
    { label: 'Courses', icon: '📚' },
    { label: 'Instructors', icon: '👨‍🏫' },
    { label: 'Students', icon: '🎓', active: true },
    { label: 'Financials', icon: '💰' },
];

const courses = [
    { name: 'French for Beginners', tag: 'Language', tagClass: 'lms-tag-lang', level: 'Beginner', students: 15, hours: 25, progress: 60, status: 'Ongoing', score: 78, cert: 'None', icon: '🇫🇷', iconBg: '#dbeafe' },
    { name: 'Business Communication', tag: 'Business', tagClass: 'lms-tag-biz', level: 'Intermediate', students: 20, hours: 40, progress: 50, status: 'Ongoing', score: 72, cert: 'None', icon: '💼', iconBg: '#fef3c7' },
    { name: 'Spanish for Beginners', tag: 'Language', tagClass: 'lms-tag-lang', level: 'Beginner', students: 18, hours: 30, progress: 100, status: 'Completed', score: 90, cert: 'Spanish, Beginner...', icon: '🇪🇸', iconBg: '#fce7f3' },
    { name: 'Content Marketing', tag: 'Marketing', tagClass: 'lms-tag-mkt', level: 'Beginner', students: 19, hours: 29, progress: 35, status: 'Ongoing', score: 64, cert: 'None', icon: '📢', iconBg: '#fce7f3' },
];

const barHeights = [65, 80, 50, 70, 90, 85, 40]; // Mon-Sun
const barDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// SVG donut
function DonutChart() {
    const r = 38;
    const c = Math.PI * 2 * r;
    const segments = [
        { pct: 55, color: '#fbbf24' },
        { pct: 15, color: '#fb923c' },
        { pct: 10, color: '#f472b6' },
    ];
    let offset = 0;

    return (
        <div className="lms-donut-wrap">
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                <circle cx="50" cy="50" r={r} fill="none" stroke="#e8e5df" strokeWidth="8" />
                {segments.map((seg, i) => {
                    const dash = (seg.pct / 100) * c;
                    const el = (
                        <circle
                            key={i}
                            cx="50" cy="50" r={r}
                            fill="none"
                            stroke={seg.color}
                            strokeWidth="8"
                            strokeDasharray={`${dash} ${c - dash}`}
                            strokeDashoffset={-offset}
                            strokeLinecap="round"
                            style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                        />
                    );
                    offset += dash;
                    return el;
                })}
            </svg>
            <div className="lms-donut-center">
                <div className="lms-donut-label" style={{ fontSize: '.5rem' }}>Total Score</div>
                <div className="lms-donut-pct">80%</div>
            </div>
        </div>
    );
}

// Mini line chart SVG
function PerfLineChart() {
    const points = [50, 45, 55, 60, 75, 65, 80];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const w = 280;
    const h = 60;
    const maxY = 100;
    const coords = points.map((p, i) => ({
        x: (i / (points.length - 1)) * (w - 20) + 10,
        y: h - (p / maxY) * (h - 10) - 5,
    }));
    const path = coords.map((c, i) => `${i === 0 ? 'M' : 'L'}${c.x},${c.y}`).join(' ');
    const area = `${path} L${coords[coords.length - 1].x},${h} L${coords[0].x},${h} Z`;

    return (
        <div className="lms-perf-chart">
            <svg viewBox={`0 0 ${w} ${h + 14}`} style={{ width: '100%', height: '100%' }}>
                {/* Grid lines */}
                {[0, 25, 50, 75, 100].map(v => (
                    <g key={v}>
                        <line x1="10" y1={h - (v / maxY) * (h - 10) - 5} x2={w - 10} y2={h - (v / maxY) * (h - 10) - 5} stroke="#e8e5df" strokeWidth="0.5" />
                        <text x="0" y={h - (v / maxY) * (h - 10) - 2} fontSize="4" fill="#9ca3af">{v}%</text>
                    </g>
                ))}
                {/* Area fill */}
                <path d={area} fill="url(#lmsGrad)" opacity="0.3" />
                {/* Line */}
                <path d={path} fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                {/* Dots */}
                {coords.map((c, i) => <circle key={i} cx={c.x} cy={c.y} r="2.5" fill="#fbbf24" stroke="#fff" strokeWidth="1" />)}
                {/* Month labels */}
                {months.map((m, i) => (
                    <text key={m} x={coords[i].x} y={h + 10} fontSize="5" fill="#9ca3af" textAnchor="middle">{m}</text>
                ))}
                <defs>
                    <linearGradient id="lmsGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

export default function LmsDashboard() {
    const [activeNav, setActiveNav] = useState('Students');

    return (
        <div className="lms-page">
            {/* ── Sidebar ── */}
            <aside className="lms-side">
                <div className="lms-logo">
                    <div className="lms-logo-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2.5">
                            <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                        </svg>
                    </div>
                    Coursify
                </div>

                {navItems.map(({ label, icon }) => (
                    <button key={label} className={`lms-nav ${activeNav === label ? 'active' : ''}`} onClick={() => setActiveNav(label)}>
                        <span>{icon}</span> {label}
                    </button>
                ))}

                <div style={{ flex: 1 }} />

                <div className="lms-side-cta">
                    <h4>Upgrade to Pro</h4>
                    <p>Unlock premium features &amp; enhance your LMS experience!</p>
                    <button className="lms-cta-btn">Upgrade Now</button>
                </div>

                <button className="lms-signout">↩ Sign Out</button>
            </aside>

            {/* ── Main ── */}
            <div className="lms-main">
                {/* Header */}
                <header className="lms-header">
                    <div className="lms-header-left">
                        <button className="lms-back-btn">←</button>
                        <div>
                            <h2>Student Details</h2>
                            <p className="lms-bread">Dashboard / <span>Students</span> / Student Details</p>
                        </div>
                    </div>
                    <div className="lms-search">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        Search anything
                    </div>
                    <div className="lms-user-area">
                        <div className="lms-user-chip">
                            <div className="lms-user-av">PS</div>
                            <div>
                                <div className="lms-user-name">Phillip Stanton</div>
                                <div className="lms-user-role">Admin</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Body */}
                <div className="lms-body">
                    {/* ── Top Row ── */}
                    <div className="lms-top">
                        {/* Student Profile */}
                        <div className="lms-profile-card">
                            <div className="lms-profile-banner">
                                <div className="lms-avatar-lg">AM</div>
                            </div>
                            <div className="lms-profile-body">
                                <div className="lms-stu-badges">
                                    <span className="lms-badge lms-badge-id">STU-005</span>
                                    <span className="lms-badge lms-badge-active">Active</span>
                                </div>
                                <h3 className="lms-stu-name">Ava Mitchell</h3>
                                <p className="lms-stu-enrolled">Enrolled on <strong>Jan 30, 2028</strong></p>
                                <div className="lms-stu-actions">
                                    <button className="lms-icon-btn">👤</button>
                                    <button className="lms-icon-btn">📞</button>
                                    <button className="lms-chat-btn">💬 Chat</button>
                                </div>
                            </div>
                            <div className="lms-contact-section">
                                <div className="lms-section-title">Contact</div>
                                <div className="lms-contact-row">
                                    <div className="lms-contact-icon">✉</div>
                                    <div>
                                        <div className="lms-contact-label">Email</div>
                                        <div className="lms-contact-val">avamitchell@email.com</div>
                                    </div>
                                </div>
                                <div className="lms-contact-row">
                                    <div className="lms-contact-icon">📞</div>
                                    <div>
                                        <div className="lms-contact-label">Phone Number</div>
                                        <div className="lms-contact-val">+1 555-3344</div>
                                    </div>
                                </div>
                                <div className="lms-contact-row">
                                    <div className="lms-contact-icon">📍</div>
                                    <div>
                                        <div className="lms-contact-label">Address</div>
                                        <div className="lms-contact-val">78 Maple Drive, New York, NY, USA</div>
                                    </div>
                                </div>

                                <div className="lms-section-title">Social Media</div>
                                <div className="lms-contact-row">
                                    <div className="lms-contact-icon">in</div>
                                    <div>
                                        <div className="lms-contact-label">LinkedIn</div>
                                        <div className="lms-contact-val">ava.mitchell</div>
                                    </div>
                                </div>
                                <div className="lms-contact-row">
                                    <div className="lms-contact-icon">𝕏</div>
                                    <div>
                                        <div className="lms-contact-label">Twitter</div>
                                        <div className="lms-contact-val">@mitchellava</div>
                                    </div>
                                </div>
                                <div className="lms-contact-row">
                                    <div className="lms-contact-icon">◎</div>
                                    <div>
                                        <div className="lms-contact-label">Instagram</div>
                                        <div className="lms-contact-val">@amavamitchell</div>
                                    </div>
                                </div>

                                <button className="lms-edit-btn">✏ Edit</button>
                            </div>
                        </div>

                        {/* Learning Activity */}
                        <div className="lms-card">
                            <div className="lms-card-hdr">
                                <h3 className="lms-card-title">Learning Activity</h3>
                                <div style={{ display: 'flex', gap: 6 }}>
                                    <button className="lms-pill">This Week ▾</button>
                                    <button className="lms-pill">···</button>
                                </div>
                            </div>
                            <div className="lms-activity-summary">
                                <span className="lms-act-big">42</span><span className="lms-act-unit">Hours</span>
                                <span className="lms-act-big" style={{ marginLeft: 12 }}>30</span><span className="lms-act-unit">Minutes</span>
                            </div>
                            <div className="lms-bar-chart">
                                {barDays.map((d, i) => (
                                    <div key={d} className="lms-bar-col">
                                        <div className="lms-bar" style={{
                                            height: `${barHeights[i]}%`,
                                            background: i === 4 ? '#fbbf24' : '#fef3c7',
                                            border: i !== 4 ? '1px solid #fde68a' : 'none'
                                        }} />
                                        <div className="lms-bar-label">{d}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="lms-course-hours">
                                <div className="lms-ch-card">
                                    <div className="lms-ch-val">16 <span className="lms-ch-unit">Hours</span></div>
                                    <div className="lms-ch-name">French for Beginners</div>
                                </div>
                                <div className="lms-ch-card">
                                    <div className="lms-ch-val">16 <span className="lms-ch-unit">Hours</span></div>
                                    <div className="lms-ch-name">Spanish for Beginners</div>
                                </div>
                                <div className="lms-ch-card">
                                    <div className="lms-ch-val">10.5 <span className="lms-ch-unit">Hours</span></div>
                                    <div className="lms-ch-name">Business Communica...</div>
                                </div>
                            </div>
                        </div>

                        {/* Performance */}
                        <div className="lms-card">
                            <div className="lms-card-hdr">
                                <h3 className="lms-card-title">Performance</h3>
                                <button className="lms-pill">Last 6 Months ▾</button>
                            </div>
                            <div className="lms-perf-top">
                                <DonutChart />
                                <div className="lms-perf-legend">
                                    <div className="lms-legend-row"><div className="lms-legend-dot" style={{ background: '#fbbf24' }} /> Participation <span className="lms-legend-val">55%</span></div>
                                    <div className="lms-legend-row"><div className="lms-legend-dot" style={{ background: '#fb923c' }} /> Quiz <span className="lms-legend-val">15%</span></div>
                                    <div className="lms-legend-row"><div className="lms-legend-dot" style={{ background: '#f472b6' }} /> Exam <span className="lms-legend-val">10%</span></div>
                                </div>
                            </div>
                            <PerfLineChart />
                            <div className="lms-perf-quote">
                                Success is the sum of small efforts, repeated day in and day out. Keep pushing forward! 💪
                            </div>
                        </div>
                    </div>

                    {/* ── Enrolled Courses ── */}
                    <div className="lms-courses-card">
                        <div className="lms-courses-hdr">
                            <h3>Enrolled Courses</h3>
                            <div className="lms-courses-filters">
                                <div className="lms-search-sm">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                    Search course, category, etc.
                                </div>
                                <button className="lms-pill">All Status ▾</button>
                                <button className="lms-view-all">View All</button>
                            </div>
                        </div>
                        <div className="lms-course-list">
                            {courses.map(c => (
                                <div key={c.name} className="lms-course-row">
                                    <div className="lms-course-icon" style={{ background: c.iconBg }}>{c.icon}</div>
                                    <div className="lms-course-info">
                                        <div className="lms-course-name">{c.name}</div>
                                        <div className="lms-course-tags">
                                            <span className={`lms-course-tag ${c.tagClass}`}>{c.tag}</span>
                                            <span className="lms-course-tag" style={{ background: '#f3f4f6', color: '#6b7280' }}>{c.level}</span>
                                        </div>
                                    </div>
                                    <div className="lms-course-meta">
                                        <div className="lms-meta-item">👥 <span className="lms-meta-val">{c.students}</span></div>
                                        <div className="lms-meta-item">⏱ <span className="lms-meta-val">{c.hours}h</span></div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                            <div className="lms-progress-mini"><div className="lms-progress-fill" style={{ width: `${c.progress}%` }} /></div>
                                            <span style={{ fontSize: '.7rem', fontWeight: 600 }}>{c.progress}%</span>
                                        </div>
                                        <span className={`lms-status ${c.status === 'Completed' ? 'lms-s-completed' : 'lms-s-ongoing'}`}>{c.status}</span>
                                    </div>
                                    <div className="lms-course-score">{c.score}<small>/100</small></div>
                                    <div className="lms-cert">
                                        <div className="lms-cert-label">Certificate:</div>
                                        <div className="lms-cert-val">{c.cert === 'None' ? '📄 None' : `📜 ${c.cert}`}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="lms-footer">
                    <span>Copyright © 2025 Peterdraw</span>
                    <div className="lms-footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Term and conditions</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="lms-footer-socials">
                        {['f', '𝕏', '◎', '▶', 'in'].map((s, i) => (
                            <div key={i} className="lms-social">{s}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
