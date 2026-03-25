import React, { useState } from 'react';
import './ShippingDashboard.css';

// ── Data ──
const navItems = [
    { label: 'Dashboard', icon: '⊞' },
    { label: 'Analytics', icon: '📊', active: true },
    { label: 'Calendar', icon: '📅' },
    { label: 'Shipments', icon: '📦' },
    { label: 'Tracking', icon: '📍' },
    { label: 'Warehouse', icon: '🏭' },
    { label: 'Fleets', icon: '🚛' },
    { label: 'Drivers', icon: '👤' },
    { label: 'Invoices & Billing', icon: '💳' },
    { label: 'Message', icon: '💬', badge: 19 },
    { label: 'Notification', icon: '🔔', badge: 5 },
    { label: 'Settings', icon: '⚙' },
];

const countries = [
    { name: 'United States', shipments: 950, pct: 38, colors: ['#3c3b6e', '#b22234'] },
    { name: 'Germany', shipments: 550, pct: 22, colors: ['#000', '#dd0000', '#ffcc00'] },
    { name: 'Japan', shipments: 400, pct: 16, colors: ['#fff', '#bc002d'] },
    { name: 'Australia', shipments: 350, pct: 14, colors: ['#00008b', '#fff'] },
    { name: 'Canada', shipments: 250, pct: 10, colors: ['#ff0000', '#fff'] },
];

const companies = [
    { name: 'TechGear Inc.', sub: 'Electronics', val: 620 },
    { name: 'StyleHub Co.', sub: 'Fashion & Apparel', val: 480 },
    { name: 'FreshNest', sub: 'Home & Kitchen', val: 430 },
    { name: 'AutoParts Pro', sub: 'Automotive', val: 390 },
    { name: 'FitPlus Gear', sub: 'Sports Equipment', val: 350 },
];

const shipments = [
    { id: '#SH9283746', company: 'TechGear Inc.', compSub: 'Electronics', carrier: 'FedEx', cat: 'Electronics', weight: '1,200 kg', origin: 'Los Angeles, CA', dest: 'Chicago, IL', dateATD: 'Mar 20, 2035 – 10:00 AM', dateETA: 'Mar 23, 2035 – 3:00 PM', progress: 60, status: 'transit' },
    { id: '#SH9182635', company: 'StyleHub Co.', compSub: 'Fashion', carrier: 'DHL', cat: 'Apparel', weight: '850 kg', origin: 'New York, NY', dest: 'Atlanta, GA', dateATD: 'Mar 19, 2035 – 11:30 AM', dateETA: 'Mar 22, 2035 – 1:00 PM', progress: 75, status: 'out' },
    { id: '#SH9037821', company: 'FreshNest', compSub: 'Home & Kitchen', carrier: 'UPS', cat: 'Kitchen Appliances', weight: '1,450 kg', origin: 'Dallas, TX', dest: 'Miami, FL', dateATD: 'Mar 18, 2035 – 09:00 AM', dateETA: 'Mar 21, 2035 – 6:00 PM', progress: 100, status: 'delivered' },
    { id: '#SH9374652', company: 'FitPlus Gear', compSub: 'Sports', carrier: 'USPS', cat: 'Fitness Equipment', weight: '960 kg', origin: 'Seattle, WA', dest: 'Denver, CO', dateATD: 'Mar 21, 2035 – 08:45 AM', dateETA: 'Mar 25, 2035 – 4:30 PM', progress: 40, status: 'processing' },
    { id: '#SH9457830', company: 'AutoParts Pro', compSub: 'Automotive', carrier: 'Aramex', cat: 'Engine Components', weight: '1,680 kg', origin: 'Detroit, MI', dest: 'San Diego, CA', dateATD: 'Mar 20, 2035 – 07:15 AM', dateETA: 'Mar 26, 2035 – 2:00 PM', progress: 50, status: 'transit' },
];

const statusClass = { transit: 'sn-s-transit', delivered: 'sn-s-delivered', processing: 'sn-s-processing', out: 'sn-s-out' };
const statusLabel = { transit: 'In Transit', delivered: 'Delivered', processing: 'Processing', out: 'Out for Delivery' };

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const heatData = [
    [.2, .3, .3, .4, .6, .8, .9, .8, .5, .4, .3, .2],
    [.1, .2, .4, .5, .7, .9, .8, .7, .6, .4, .3, .1],
    [.2, .3, .5, .6, .8, .7, .6, .7, .8, .5, .3, .2],
    [.3, .4, .5, .7, .8, .9, .9, .8, .6, .5, .3, .2],
    [.2, .3, .6, .7, .9, .9, .8, .7, .5, .4, .2, .1],
    [.1, .2, .3, .5, .6, .7, .7, .6, .4, .3, .2, .1],
    [.1, .1, .2, .3, .4, .5, .4, .3, .2, .2, .1, .1],
];

export default function ShippingDashboard() {
    const [activeNav, setActiveNav] = useState('Analytics');
    const [activeTab, setActiveTab] = useState('All');
    const tabs = ['All', 'Delivered', 'In Transit', 'Processing', 'Out for Delivery'];

    return (
        <div className="ship-page">
            {/* ── Sidebar ── */}
            <aside className="sn-sidebar">
                <div className="sn-logo">
                    <div className="sn-logo-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                            <path d="M5 18H3a2 2 0 01-2-2V8a2 2 0 012-2h3.93a2 2 0 011.66.9l.82 1.2a2 2 0 001.66.9H21a2 2 0 012 2v7a2 2 0 01-2 2h-2" />
                            <circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" />
                        </svg>
                    </div>
                    SHIPNOW
                </div>

                <div className="sn-user-block">
                    <div className="sn-user-avatar">JD</div>
                    <div>
                        <div className="sn-user-name">John Doe</div>
                        <div className="sn-user-role">Admin</div>
                    </div>
                </div>

                {navItems.map(({ label, icon, badge }) => (
                    <button
                        key={label}
                        className={`sn-nav ${activeNav === label ? 'active' : ''}`}
                        onClick={() => setActiveNav(label)}
                    >
                        <span>{icon}</span>
                        {label}
                        {badge && <span className="sn-nav-badge">{badge}</span>}
                    </button>
                ))}

                <div className="sn-sidebar-cta">
                    <h4>Loving ShipNow Free?</h4>
                    <p>Go Pro to access priority support, real-time tracking, and full analytics.</p>
                    <button className="sn-cta-btn">Go Pro Today</button>
                </div>
            </aside>

            {/* ── Main ── */}
            <div className="sn-main">
                <header className="sn-header">
                    <div className="sn-header-left">
                        <h2>Analytics</h2>
                        <p className="sn-bread">Dashboard / <span>Analytics</span></p>
                    </div>
                    <div className="sn-search">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        Search anything
                    </div>
                </header>

                <div className="sn-body">
                    {/* ── Stat Cards ── */}
                    <div className="sn-stat-grid">
                        <div className="sn-stat-main">
                            <div className="sn-stat-label">📦 Total Shipments</div>
                            <div className="sn-stat-val">1,284</div>
                            <div className="sn-stat-change sn-up">+8.7% ●</div>
                        </div>
                        <div className="sn-stat">
                            <div className="sn-stat-label"><div className="sn-stat-dot" style={{ background: '#f59e0b' }} /> Road Freight</div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                                <div className="sn-stat-val">1,150</div>
                                <span className="sn-stat-change sn-up">+4.37%</span>
                            </div>
                        </div>
                        <div className="sn-stat">
                            <div className="sn-stat-label"><div className="sn-stat-dot" style={{ background: '#3b82f6' }} /> Ocean Freight</div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                                <div className="sn-stat-val">425</div>
                                <span className="sn-stat-change sn-down">-2.06%</span>
                            </div>
                        </div>
                        <div className="sn-stat">
                            <div className="sn-stat-label"><div className="sn-stat-dot" style={{ background: '#10b981' }} /> Rail Freight</div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                                <div className="sn-stat-val">225</div>
                                <span className="sn-stat-change sn-up">+1.28%</span>
                            </div>
                        </div>
                        <div className="sn-stat">
                            <div className="sn-stat-label"><div className="sn-stat-dot" style={{ background: '#8b5cf6' }} /> Air Freight</div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                                <div className="sn-stat-val">700</div>
                                <span className="sn-stat-change sn-up">+3.45%</span>
                            </div>
                        </div>
                    </div>

                    {/* ── Row: Countries, Companies, Delivery + Heatmap ── */}
                    <div className="sn-row-3">
                        {/* Top Country */}
                        <div className="sn-card">
                            <div className="sn-card-hdr">
                                <h3 className="sn-card-title">Top Country</h3>
                                <button className="sn-card-pill">···</button>
                            </div>
                            <div className="sn-country-list">
                                {countries.map(c => (
                                    <div key={c.name} className="sn-country-row">
                                        <div className="sn-flag" style={{ background: `linear-gradient(180deg, ${c.colors[0]}, ${c.colors[1] || c.colors[0]})` }} />
                                        <span className="sn-country-name">{c.name}</span>
                                        <span className="sn-country-val">{c.shipments} Shipments</span>
                                        <span className="sn-country-pct">{c.pct}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Top Company */}
                        <div className="sn-card">
                            <div className="sn-card-hdr">
                                <h3 className="sn-card-title">Top Company</h3>
                                <button className="sn-card-pill">···</button>
                            </div>
                            <div className="sn-comp-list">
                                {companies.map(co => (
                                    <div key={co.name} className="sn-comp-row">
                                        <div className="sn-comp-icon">{co.name[0]}</div>
                                        <div className="sn-comp-info">
                                            <div className="sn-comp-name">{co.name}</div>
                                            <div className="sn-comp-sub">{co.sub}</div>
                                        </div>
                                        <div className="sn-comp-val">{co.val}<span className="sn-comp-unit">Shipments</span></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Busy Periods */}
                        <div className="sn-card">
                            <div className="sn-card-hdr">
                                <h3 className="sn-card-title">Busy Periods</h3>
                                <button className="sn-card-pill">This Month ▾</button>
                            </div>
                            <div style={{ fontSize: '.7rem', color: 'var(--text-secondary)', marginBottom: 8 }}>
                                Highest Activity: <strong style={{ color: 'var(--text-primary)' }}>12 pm – 3 pm</strong>
                            </div>
                            <div className="sn-heat">
                                <div />
                                {Array.from({ length: 12 }, (_, i) => (
                                    <div key={i} className="sn-heat-hlbl">{`${8 + i}${8 + i < 12 ? ' am' : ' pm'}`}</div>
                                ))}
                                {days.map((d, di) => (
                                    <React.Fragment key={d}>
                                        <div className="sn-heat-lbl">{d}</div>
                                        {heatData[di].map((v, i) => (
                                            <div key={i} className="sn-heat-cell" style={{ background: `rgba(232, 93, 74, ${v})` }} />
                                        ))}
                                    </React.Fragment>
                                ))}
                            </div>
                            <div className="sn-heat-legend">
                                Less
                                {[0.15, 0.35, 0.55, 0.75, 0.95].map((o, i) => (
                                    <div key={i} className="sn-heat-legend-box" style={{ background: `rgba(232, 93, 74, ${o})` }} />
                                ))}
                                More
                            </div>
                        </div>
                    </div>

                    {/* ── Shipment Table ── */}
                    <div className="sn-card">
                        <div className="sn-card-hdr">
                            <h3 className="sn-card-title">Shipment List</h3>
                            <button className="sn-card-pill">This Month ▾</button>
                        </div>
                        <div className="sn-tabs">
                            {tabs.map(t => (
                                <button key={t} className={`sn-tab ${activeTab === t ? 'active' : ''}`} onClick={() => setActiveTab(t)}>{t}</button>
                            ))}
                        </div>
                        <div style={{ overflowX: 'auto' }}>
                            <table className="sn-tbl">
                                <thead>
                                    <tr>
                                        <th>Shipping ID ↕</th>
                                        <th>Company ↕</th>
                                        <th>Carriers ↕</th>
                                        <th>Category ↕</th>
                                        <th>Weight ↕</th>
                                        <th>Route ↕</th>
                                        <th>Date ↕</th>
                                        <th>Progress ↕</th>
                                        <th>Status ↕</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {shipments.map(s => (
                                        <tr key={s.id}>
                                            <td><span className="sn-ship-id">{s.id}</span></td>
                                            <td>
                                                <div className="sn-ship-company">{s.company}</div>
                                                <div className="sn-ship-sub">{s.compSub}</div>
                                            </td>
                                            <td>{s.carrier}</td>
                                            <td>{s.cat}</td>
                                            <td>{s.weight}</td>
                                            <td>
                                                <div className="sn-route-origin">{s.origin} <span className="sn-route-tag">(Origin)</span></div>
                                                <div className="sn-route-dest">{s.dest} <span className="sn-route-tag">(Destination)</span></div>
                                            </td>
                                            <td>
                                                <div style={{ fontSize: '.7rem' }}>{s.dateATD} <span className="sn-route-tag">(ATD)</span></div>
                                                <div style={{ fontSize: '.68rem', color: 'var(--text-secondary)' }}>{s.dateETA} <span className="sn-route-tag">(ETA)</span></div>
                                            </td>
                                            <td>
                                                <div className="sn-progress-track"><div className="sn-progress-fill" style={{ width: `${s.progress}%` }} /></div>
                                                <span style={{ fontSize: '.7rem', fontWeight: 600 }}>{s.progress}%</span>
                                            </td>
                                            <td><span className={`sn-status ${statusClass[s.status]}`}>{statusLabel[s.status]}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="sn-footer">
                    <span>Copyright © 2025 Peterdraw</span>
                    <div className="sn-footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Term and conditions</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="sn-footer-socials">
                        {['f', '𝕏', '◎', '▶', 'in'].map((s, i) => (
                            <div key={i} className="sn-social-icon" style={{ fontSize: '0.65rem', fontWeight: 700 }}>{s}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
