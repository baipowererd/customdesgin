import React, { useState } from 'react';
import './Dashboard.css';

// ── Data ──────────────────────────────────────────────────────
const navItems = [
    { label: 'Dashboard', icon: '⊞' },
    { label: 'Inbox', icon: '✉' },
    { label: 'Calendar', icon: '▦' },
    { label: 'Employees', icon: '👤' },
    { label: 'Attendance', icon: '◷' },
    { label: 'Performance', icon: '📊', active: true },
    { label: 'Payroll', icon: '💳' },
    { label: 'Leave Management', icon: '□' },
    { label: 'Recruitment', icon: '🔍' },
];

const barChartData = [
    { month: 'Jan', bars: [72, 68, 60, 74] },
    { month: 'Feb', bars: [78, 75, 65, 80] },
    { month: 'Mar', bars: [76, 81, 83, 79] },
    { month: 'Apr', bars: [82, 78, 70, 85] },
    { month: 'May', bars: [86, 84, 75, 88] },
    { month: 'Jun', bars: [88, 88, 87, 88] },
];

const barColors = ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0'];

const barLegend = ['Marketing', 'Product Design', 'Human Resources', 'Operations'];

const catPerformance = [
    { name: 'Team Work', score: '4.5/5', pct: 90, color: '#10b981' },
    { name: 'Work Quality', score: '4.3/5', pct: 86, color: '#3b82f6' },
    { name: 'Problem-Solving', score: '4.1/5', pct: 82, color: '#8b5cf6' },
    { name: 'Time Management', score: '3.8/5', pct: 76, color: '#f59e0b' },
];

const employees = [
    { name: 'Olivia Mason', id: 'EMP-0234', role: 'Marketing', dept: 'Executive Marketing', tw: 4.7, wq: 4.6, ps: 4.4, tm: 4.4, score: 92, color: '#10b981' },
    { name: 'Ethan Ray', id: 'EMP-0178', role: 'UI Designer', dept: 'Product Design', tw: 4.6, wq: 4.5, ps: 4.4, tm: 4.3, score: 90, color: '#3b82f6' },
    { name: 'Lina Armand', id: 'EMP-0310', role: 'Lab Analyst', dept: 'R&D', tw: 4.2, wq: 4.0, ps: 4.1, tm: 3.5, score: 81, color: '#8b5cf6' },
    { name: 'Jacob Yuen', id: 'EMP-0115', role: 'Site Supervisor', dept: 'Operations', tw: 4.1, wq: 4.2, ps: 4.0, tm: 3.6, score: 80, color: '#f59e0b' },
    { name: 'Mia Torres', id: 'EMP-0299', role: 'HR Officer', dept: 'Human Resources', tw: 4.6, wq: 4.5, ps: 4.4, tm: 4.3, score: 89, color: '#ec4899' },
    { name: 'Farah Nabila', id: 'EMP-0267', role: 'Customer Exp Lead', dept: 'Support', tw: 4.5, wq: 4.3, ps: 4.2, tm: 4.2, score: 88, color: '#06b6d4' },
    { name: 'Daniel Cheung', id: 'EMP-0391', role: 'Compliance Spec.', dept: 'Legal', tw: 4.4, wq: 4.2, ps: 4.3, tm: 3.9, score: 87, color: '#f43f5e' },
];

const topPerformers = [
    { name: 'Olivia Mason', role: 'Marketing Executive', score: 92, color: '#10b981' },
    { name: 'Ethan Ray', role: 'UI Designer', score: 90, color: '#3b82f6' },
    { name: 'Mia Torres', role: 'HR Officer', score: 89, color: '#ec4899' },
    { name: 'Farah Nabila', role: 'Customer Experience Lead', score: 88, color: '#06b6d4' },
    { name: 'Daniel Cheung', role: 'Compliance Specialist', score: 87, color: '#f43f5e' },
];

const alerts = [
    { name: 'Anya Rodriguez', role: 'Freelance Graphic...', msg: 'Low on-time rate for deliverables, below 70% for the month.', color: '#f59e0b' },
    { name: 'Lina Armand', role: 'Lab Analyst', msg: 'Multiple overdue task submissions this quarter.', color: '#8b5cf6' },
    { name: 'Sara Kim', role: 'Customer Support Intern', msg: 'Frequently submits reports past deadline.', color: '#f43f5e' },
];

// ── Gauge SVG ─────────────────────────────────────────────────
function GaugeChart({ value = 87 }) {
    const r = 70;
    const cx = 80;
    const cy = 80;
    const circumference = Math.PI * r; // half circle
    const filled = (value / 100) * circumference;

    return (
        <svg viewBox="0 0 160 90" className={undefined}>
            {/* Track */}
            <path
                d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
                fill="none"
                stroke="var(--border-color)"
                strokeWidth="10"
                strokeLinecap="round"
            />
            {/* Fill */}
            <path
                d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
                fill="none"
                stroke="#10b981"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - filled}
                style={{ transition: 'stroke-dashoffset 1s ease' }}
            />
            {/* Knob */}
            <circle cx={cx - r + 5} cy={cy} r="5" fill="#10b981" />
        </svg>
    );
}

// ── Avatar initials helper ─────────────────────────────────────
function initials(name) {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

// ── Dashboard Component ───────────────────────────────────────
export default function Dashboard() {
    const [activeNav, setActiveNav] = useState('Performance');

    return (
        <div className="dashboard-page">

            {/* ── Sidebar ── */}
            <aside className="db-sidebar">
                <div className="db-logo">
                    <div className="db-logo-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                    </div>
                    TeamHub
                </div>

                {navItems.map(({ label, icon }) => (
                    <button
                        key={label}
                        className={`db-nav-item ${activeNav === label ? 'active' : ''}`}
                        onClick={() => setActiveNav(label)}
                    >
                        <span>{icon}</span>
                        {label}
                    </button>
                ))}

                <div style={{ flex: 1 }} />

                <div className="db-sidebar-upgrade">
                    <h4>Level Up Your HR System</h4>
                    <p>TeamHub Pro gives you full control with advanced modules and extended layouts</p>
                    <button className="db-upgrade-btn">Get TeamHub Pro</button>
                </div>
            </aside>

            {/* ── Main ── */}
            <div className="db-main">

                {/* Header */}
                <header className="db-header">
                    <div className="db-header-left">
                        <h2>{activeNav}</h2>
                        <p className="db-breadcrumb">Dashboard / <span>{activeNav}</span></p>
                    </div>

                    <div className="db-search">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        Search anything
                    </div>

                    <div className="db-header-actions">
                        <button className="db-icon-btn" title="Settings">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.74 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.74a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                            </svg>
                        </button>
                        <button className="db-icon-btn" title="Notifications" style={{ position: 'relative' }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
                            </svg>
                            <span style={{ position: 'absolute', top: 6, right: 6, width: 6, height: 6, background: '#f43f5e', borderRadius: '50%' }} />
                        </button>

                        <div className="db-user-chip">
                            <div className="db-avatar" style={{ background: '#10b981' }}>DL</div>
                            <div>
                                <span>Davis Levin</span>
                                <small>User</small>
                            </div>
                        </div>

                    </div>
                </header>

                {/* Body */}
                <div className="db-body">

                    {/* ── Left Content ── */}
                    <div className="db-content">

                        {/* Top row: Bar chart + Category bars */}
                        <div className="db-charts-row">

                            {/* Team Performance Bar Chart */}
                            <div className="db-card">
                                <div className="db-card-header">
                                    <h3 className="db-card-title">Team Performance</h3>
                                    <button className="db-pill-btn">Last Year ▾</button>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}>
                                    <div className="bar-chart-cols">
                                        {barChartData.map((group) => (
                                            <div key={group.month} className="bar-group">
                                                <div className="bar-pct-label">
                                                    {Math.round(group.bars.reduce((a, b) => a + b, 0) / group.bars.length)}%
                                                </div>
                                                <div className="bar-group-bars">
                                                    {group.bars.map((h, i) => (
                                                        <div
                                                            key={i}
                                                            className="db-bar"
                                                            style={{
                                                                height: `${h}px`,
                                                                background: barColors[i],
                                                            }}
                                                            title={`${barLegend[i]}: ${h}%`}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="bar-group-label">{group.month}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bar-chart-legend">
                                    {barLegend.map((l, i) => (
                                        <div key={l} className="legend-item">
                                            <div className="legend-dot" style={{ background: barColors[i] }} />
                                            {l}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Performance by Category */}
                            <div className="db-card">
                                <div className="db-card-header">
                                    <h3 className="db-card-title">Performance by Category</h3>
                                    <button className="db-pill-btn">This Month ▾</button>
                                </div>
                                <div className="cat-bars">
                                    {catPerformance.map((cat) => (
                                        <div key={cat.name} className="cat-bar-row">
                                            <div className="cat-bar-info">
                                                <span className="cat-bar-name">{cat.name}</span>
                                                <div className="cat-bar-scores">
                                                    <span>{cat.score}</span>
                                                    <span className="cat-bar-pct">{cat.pct}%</span>
                                                </div>
                                            </div>
                                            <div className="cat-bar-track">
                                                <div
                                                    className="cat-bar-fill"
                                                    style={{ width: `${cat.pct}%`, background: cat.color }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Employee Performance Table */}
                        <div className="db-card">
                            <div className="db-card-header">
                                <h3 className="db-card-title">Employee Performance</h3>
                                <button className="db-pill-btn">This Month ▾</button>
                            </div>
                            <div className="db-table-wrap">
                                <table className="db-table">
                                    <thead>
                                        <tr>
                                            <th>Name ↕</th>
                                            <th>Job Title ↕</th>
                                            <th>Teamwork ↕</th>
                                            <th>Work Quality ↕</th>
                                            <th>Problem Solving ↕</th>
                                            <th>Time Mgmt ↕</th>
                                            <th>Score ↕</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {employees.map((emp) => (
                                            <tr key={emp.id}>
                                                <td>
                                                    <div className="db-emp-cell">
                                                        <div className="db-emp-avatar" style={{ background: emp.color }}>
                                                            {initials(emp.name)}
                                                        </div>
                                                        <div>
                                                            <div className="db-emp-name">{emp.name}</div>
                                                            <div className="db-emp-id">{emp.id}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="db-emp-role">{emp.role}</div>
                                                    <div className="db-emp-dept">{emp.dept}</div>
                                                </td>
                                                <td>{emp.tw}</td>
                                                <td>{emp.wq}</td>
                                                <td>{emp.ps}</td>
                                                <td>{emp.tm}</td>
                                                <td>
                                                    <span className="db-score-badge">{emp.score}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="db-table-footer">
                                <span>Show 7 of 102 results</span>
                                <div className="db-pagination">
                                    <button className="db-page-btn">‹</button>
                                    {[1, 2, 3, '...', 11].map((p, i) => (
                                        <button key={i} className={`db-page-btn ${p === 1 ? 'active' : ''}`}>{p}</button>
                                    ))}
                                    <button className="db-page-btn">›</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Right Panel ── */}
                    <div className="db-right-panel">

                        {/* Average Performance Gauge */}
                        <div className="db-card" style={{ textAlign: 'center' }}>
                            <div className="db-card-header" style={{ marginBottom: 0 }}>
                                <h3 className="db-card-title">Average Performance</h3>
                                <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>···</button>
                            </div>
                            <div className="db-gauge">
                                <GaugeChart value={87} />
                                <div className="db-gauge-value">87%</div>
                                <div className="db-gauge-label">Total Score</div>
                                <div className="db-gauge-sublabel">↑ 4.7%</div>
                            </div>
                        </div>

                        {/* Top Performers */}
                        <div className="db-card">
                            <div className="db-card-header">
                                <h3 className="db-card-title">Top Performers</h3>
                                <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>···</button>
                            </div>
                            <div className="db-list">
                                {topPerformers.map((p) => (
                                    <div key={p.name} className="db-list-item">
                                        <div className="db-emp-avatar" style={{ background: p.color, width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                                            {initials(p.name)}
                                        </div>
                                        <div className="db-list-info">
                                            <div className="db-list-name">{p.name}</div>
                                            <div className="db-list-sub">{p.role}</div>
                                        </div>
                                        <div className="db-list-score">
                                            {p.score}<small>/100</small>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Time Management Alerts */}
                        <div className="db-card">
                            <div className="db-card-header">
                                <h3 className="db-card-title">Time Management Alerts</h3>
                                <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>···</button>
                            </div>
                            <div className="db-list">
                                {alerts.map((a) => (
                                    <div key={a.name} className="db-list-item" style={{ alignItems: 'flex-start' }}>
                                        <div className="db-emp-avatar" style={{ background: a.color, width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700, color: '#fff', flexShrink: 0, marginTop: 2 }}>
                                            {initials(a.name)}
                                        </div>
                                        <div className="db-list-info">
                                            <div className="db-list-name">{a.name} <span style={{ color: 'var(--text-secondary)', fontWeight: 400, fontSize: '0.72rem' }}>{a.role}</span></div>
                                            <div className="db-list-sub" style={{ whiteSpace: 'normal', lineHeight: 1.4, marginTop: 2 }}>{a.msg}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: 'auto' }}>
                            Copyright © 2025 Peterdraw
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
