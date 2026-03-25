import React from 'react';

const sidebarEffects = [
    // 1. Collapsible Sidebar
    {
        title: 'Collapsible Sidebar',
        description: 'Vertical navigation that expands on hover.',
        multiColor: false,
        cssTemplate: (c) => `.collapsible-sidebar{position:fixed;top:0;left:0;height:100vh;width:60px;background:${c.primary};transition:width .3s}.collapsible-sidebar:hover{width:200px}.collapsible-sidebar ul{list-style:none;padding:0;margin:0}.collapsible-sidebar li{display:flex;align-items:center;padding:12px;color:#fff}.collapsible-sidebar li:hover{background:${c.dark}}.collapsible-sidebar .icon{margin-right:8px}`,
        renderPreview: (c) => (
            <div className="collapsible-sidebar">
                <ul>
 <li><span className="icon"></span>Home</li>
 <li><span className="icon"></span>Projects</li>
 <li><span className="icon">️</span>Settings</li>
                </ul>
            </div>
        ),
    },
    // 2. Icon‑Only Sidebar
    {
        title: 'Icon‑Only Sidebar',
        description: 'Compact vertical bar with icons only.',
        multiColor: false,
        cssTemplate: (c) => `.icon-sidebar{position:fixed;top:0;left:0;height:100vh;width:60px;background:${c.primary};display:flex;flex-direction:column;align-items:center;padding-top:20px}.icon-sidebar a{color:#fff;margin:12px 0;font-size:24px}`,
        renderPreview: (c) => (
            <div className="icon-sidebar">
 <a href="#!" onClick={(e) => e.preventDefault()}></a>
 <a href="#!" onClick={(e) => e.preventDefault()}></a>
 <a href="#!" onClick={(e) => e.preventDefault()}>️</a>
            </div>
        ),
    },
    // 3. Drawer Style Sidebar
    {
        title: 'Drawer Sidebar',
        description: 'Overlay drawer that slides from the left.',
        multiColor: false,
        cssTemplate: (c) => `.drawer-sidebar{position:fixed;top:0;left:-250px;width:250px;height:100vh;background:${c.primary};transition:left .3s;z-index:20}.drawer-sidebar.open{left:0}.drawer-sidebar ul{list-style:none;padding:20px;margin:0}.drawer-sidebar li{margin-bottom:12px;color:#fff}`,
        renderPreview: (c) => (
            <div className="drawer-sidebar open">
                <ul>
                    <li>Dashboard</li>
                    <li>Profile</li>
                    <li>Settings</li>
                </ul>
            </div>
        ),
    },
    // 4. Discord Sidebar Server List
    {
        title: 'Discord Server Sidebar',
        description: 'The iconic pill-shaped hover effect server list.',
        multiColor: false,
        cssTemplate: (c) => `.discord-sidebar{width:72px;height:100vh;background:#1e1f22;display:flex;flex-direction:column;align-items:center;padding:12px 0;gap:8px}.discord-server{position:relative;width:48px;height:48px;background:#313338;border-radius:24px;display:flex;align-items:center;justify-content:center;color:#dbdee1;font-family:"gg sans",sans-serif;font-weight:600;font-size:16px;cursor:pointer;transition:all 0.2s cubic-bezier(0.25, 1, 0.5, 1)}.discord-server:hover{border-radius:16px;background:#5865F2;color:#fff}.discord-server::before{content:'';position:absolute;left:-16px;top:50%;transform:translateY(-50%);width:8px;height:0px;background:#fff;border-radius:0 4px 4px 0;transition:height 0.2s cubic-bezier(0.25, 1, 0.5, 1)}.discord-server:hover::before{height:20px}.discord-server.active{border-radius:16px;background:#5865F2;color:#fff}.discord-server.active::before{height:40px}.discord-divider{width:32px;height:2px;background:#313338;border-radius:1px;margin:4px 0}`,
        renderPreview: (c) => (
            <div className="discord-sidebar">
                <div className="discord-server">DM</div>
                <div className="discord-divider"></div>
 <div className="discord-server active"></div>
 <div className="discord-server"></div>
 <div className="discord-server"></div>
                <div className="discord-server" style={{ background: '#23a559' }}>+</div>
            </div>
        ),
    },
    // 5‑10 placeholders for future variations
    ...Array.from({ length: 6 }, (_, i) => ({
        title: `Sidebar Variation ${i + 5}`,
        description: 'Additional sidebar style for expansion.',
        multiColor: false,
        cssTemplate: (c) => `.sidebar-var${i + 5}{background:${c.primary};padding:12px;color:#fff}`,
        renderPreview: (c) => (
            <div className={`sidebar-var${i + 5}`} style={{ background: c.primary, color: '#fff', padding: '12px' }}>
                Sidebar Variation {i + 5}
            </div>
        ),
    })),
];

export default sidebarEffects;
