import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code2, Monitor, Copy, Check, Palette, Type, Info, X, Atom, FileJson } from 'lucide-react';
import './ButtonShowcase.css';

const presetPalettes = [
    { primary: '#6366f1', secondary: '#818cf8', name: 'Indigo' },
    { primary: '#ef4444', secondary: '#f87171', name: 'Red' },
    { primary: '#f97316', secondary: '#fb923c', name: 'Orange' },
    { primary: '#eab308', secondary: '#facc15', name: 'Yellow' },
    { primary: '#22c55e', secondary: '#4ade80', name: 'Green' },
    { primary: '#06b6d4', secondary: '#22d3ee', name: 'Cyan' },
    { primary: '#3b82f6', secondary: '#60a5fa', name: 'Blue' },
    { primary: '#a855f7', secondary: '#c084fc', name: 'Purple' },
    { primary: '#ec4899', secondary: '#f472b6', name: 'Pink' },
    { primary: '#f43f5e', secondary: '#fb7185', name: 'Rose' },
    { primary: '#14b8a6', secondary: '#2dd4bf', name: 'Teal' },
    { primary: '#fff', secondary: '#d4d4d8', name: 'White' },
];

function darken(hex, amount = 40) {
    const num = parseInt(hex.replace('#', ''), 16);
    let r = Math.max(0, (num >> 16) - amount);
    let g = Math.max(0, ((num >> 8) & 0x00FF) - amount);
    let b = Math.max(0, (num & 0x0000FF) - amount);
    return '#' + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
}

function lighten(hex, amount = 60) {
    const num = parseInt(hex.replace('#', ''), 16);
    let r = Math.min(255, (num >> 16) + amount);
    let g = Math.min(255, ((num >> 8) & 0x00FF) + amount);
    let b = Math.min(255, (num & 0x0000FF) + amount);
    return '#' + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
}

const ButtonShowcase = ({ title, description, cssTemplate, multiColor, matchedTags, onTagClick }) => {
    const [activeTab, setActiveTab] = useState('preview');
    const [copied, setCopied] = useState(false);
    const [primary, setPrimary] = useState('#6366f1');
    const [secondary, setSecondary] = useState('#818cf8');
    const [showPicker, setShowPicker] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [codeTab, setCodeTab] = useState('react'); // 'react' or 'css'

    // Edit Modal State
    const [editSettings, setEditSettings] = useState({
        text: '',
        fontSize: '',
        fontFamily: '',
        fontWeight: '',
    });

    // Generate unique class for this canvas to scope CSS overrides
    const canvasId = `canvas-${title.replace(/[^a-zA-Z0-9]/g, '-')}`;

    const colors = {
        primary,
        secondary,
        dark: darken(primary),
        light: lighten(primary),
    };

    const generatedCSS = cssTemplate(colors);
    const code = generatedCSS;

    // Generate dynamic React code for button
    const className = title.replace(/\s+/g, '');
    const generatedReactCode = `/* React Button Component */
const ${className} = () => {
  return (
    <button className="${generatedCSS.match(/\.([a-zA-Z0-9_-]+)/)?.[1] || 'custom-btn'}" style={{
      ${editSettings.fontSize ? `fontSize: "${editSettings.fontSize}px",` : ''}
      ${editSettings.fontWeight ? `fontWeight: "${editSettings.fontWeight}",` : ''}
      ${editSettings.fontFamily ? `fontFamily: "${editSettings.fontFamily}",` : ''}
    }}>
      ${editSettings.text || title}
    </button>
  );
};`;

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const applyPreset = (p) => {
        setPrimary(p.primary);
        setSecondary(p.secondary);
    };

    const cssVars = {
        '--btn-primary': primary,
        '--btn-secondary': secondary,
        '--btn-dark': colors.dark,
        '--btn-light': colors.light,
    };

    return (
        <div className="showcase-card">
            <div className="showcase-header">
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <h3 className="showcase-title">{title}</h3>
                        {matchedTags && matchedTags.map(t => (
                            <span
                                key={t.key}
                                className="theme-badge"
                                onClick={() => onTagClick && onTagClick(t)}
                                title={`View all ${t.label} components`}
                            >
                                {t.label}
                            </span>
                        ))}
                    </div>
                    {description && <p className="showcase-description">{description}</p>}
                </div>
                <div className="showcase-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('preview')}
                    >
                        <Monitor size={16} /> Preview
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                        onClick={() => setActiveTab('code')}
                    >
                        <Code2 size={16} /> Code
                    </button>
                    <button
                        className={`tab-btn ${isEditing ? 'active' : ''}`}
                        onClick={() => { setActiveTab('preview'); setIsEditing(!isEditing); }}
                        title="Live Edit Text"
                    >
                        <Type size={16} /> Edit
                    </button>
                </div>
            </div>

            <div className="showcase-content">
                {activeTab === 'preview' ? (
                    <div className="preview-area" style={{ position: 'relative' }}>
                        {isEditing && ReactDOM.createPortal(
                            <div className="edit-modal-backdrop" onClick={() => setIsEditing(false)}>
                                <div className="edit-modal-content" onClick={e => e.stopPropagation()}>
                                    {/* Left: Component Preview */}
                                    <div className="edit-modal-left">
                                        <div className={`preview-canvas ${canvasId}`} style={cssVars}>
                                            <style>{generatedCSS}</style>
                                            {(editSettings.fontSize || editSettings.fontWeight || editSettings.fontFamily) && (
                                                <style>
                                                    {`
                                                    .edit-modal-left .${canvasId} *:not(svg):not(path):not(circle):not(rect):not(polyline):not(line):not(polygon):not(g) {
                                                        ${editSettings.fontSize ? `font-size: ${editSettings.fontSize}px !important;` : ''}
                                                        ${editSettings.fontWeight ? `font-weight: ${editSettings.fontWeight} !important;` : ''}
                                                        ${editSettings.fontFamily ? `font-family: ${editSettings.fontFamily} !important;` : ''}
                                                    }
                                                    `}
                                                </style>
                                            )}
                                            <button
                                                className={`demo-btn ${generatedCSS.match(/\.([a-zA-Z0-9_-]+)/)?.[1] || ''}`}
                                                style={{
                                                    background: title === 'Apple iOS Button' ? '#007aff' :
                                                        title === 'Google Material Button' ? '#1a73e8' :
                                                            title === 'Spotify Play Button' ? '#1db954' :
                                                                title === 'Discord Gaming Button' ? '#5865F2' : undefined
                                                }}
                                            >
                                                {editSettings.text || title}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Right: Component Settings */}
                                    <div className="edit-modal-right">
                                        <div className="edit-modal-header">
                                            Settings
                                            <button className="close-btn" onClick={() => setIsEditing(false)}><X size={18} /></button>
                                        </div>
                                        <div className="edit-control-group">
                                            <label>Text Content</label>
                                            <input
                                                type="text"
                                                value={editSettings.text}
                                                placeholder="Default..."
                                                onChange={e => setEditSettings({ ...editSettings, text: e.target.value })}
                                            />
                                        </div>
                                        <div className="edit-control-group">
                                            <label>Font Family</label>
                                            <select value={editSettings.fontFamily} onChange={e => setEditSettings({ ...editSettings, fontFamily: e.target.value })}>
                                                <option value="">Default (Inter)</option>
                                                <option value="system-ui, sans-serif">System UI</option>
                                                <option value="'Courier New', monospace">Monospace</option>
                                                <option value="'Times New Roman', serif">Serif</option>
                                            </select>
                                        </div>
                                        <div className="edit-control-group">
                                            <label>Font Size (px)</label>
                                            <input
                                                type="number"
                                                value={editSettings.fontSize}
                                                placeholder="e.g. 16"
                                                onChange={e => setEditSettings({ ...editSettings, fontSize: e.target.value })}
                                            />
                                        </div>
                                        <div className="edit-control-group">
                                            <label>Font Weight</label>
                                            <select value={editSettings.fontWeight} onChange={e => setEditSettings({ ...editSettings, fontWeight: e.target.value })}>
                                                <option value="">Default</option>
                                                <option value="400">Regular (400)</option>
                                                <option value="500">Medium (500)</option>
                                                <option value="600">Semibold (600)</option>
                                                <option value="700">Bold (700)</option>
                                                <option value="800">Extra Bold (800)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>,
                            document.body
                        )}
                        <div className={`preview-canvas ${canvasId}`} style={cssVars}>
                            <style>{generatedCSS}</style>
                            {(editSettings.fontSize || editSettings.fontWeight || editSettings.fontFamily) && (
                                <style>
                                    {`
                                    .${canvasId} *:not(svg):not(path):not(circle):not(rect):not(polyline):not(line):not(polygon):not(g) {
                                        ${editSettings.fontSize ? `font-size: ${editSettings.fontSize}px !important;` : ''}
                                        ${editSettings.fontWeight ? `font-weight: ${editSettings.fontWeight} !important;` : ''}
                                        ${editSettings.fontFamily ? `font-family: ${editSettings.fontFamily} !important;` : ''}
                                    }
                                    `}
                                </style>
                            )}
                            <button
                                className={`demo-btn ${generatedCSS.match(/\.([a-zA-Z0-9_-]+)/)?.[1] || ''}`}
                                style={{
                                    background: title === 'Apple iOS Button' ? '#007aff' :
                                        title === 'Google Material Button' ? '#1a73e8' :
                                            title === 'Spotify Play Button' ? '#1db954' :
                                                title === 'Discord Gaming Button' ? '#5865F2' : undefined
                                }}
                            >
                                {editSettings.text || title}
                            </button>
                        </div>

                        {/* Color Customizer */}
                        {!['Apple iOS Button', 'Google Material Button', 'Spotify Play Button', 'Discord Gaming Button'].includes(title) && (
                            <div className="color-bar">
                                <div className="color-bar-left">
                                    <Palette size={14} />
                                    <span className="color-bar-label">Theme</span>
                                </div>
                                <div className="color-swatches">
                                    {presetPalettes.map((p) => {
                                        let presetStyle = { background: p.primary };
                                        let activeClass = primary === p.primary ? 'active' : '';

                                        return (
                                            <button
                                                key={p.name}
                                                className={`swatch ${activeClass}`}
                                                style={presetStyle}
                                                title={p.name}
                                                onClick={() => applyPreset(p)}
                                            />
                                        );
                                    })}
                                    <button
                                        className="swatch swatch-custom"
                                        title="Custom color"
                                        onClick={() => setShowPicker(!showPicker)}
                                    >

                                    </button>
                                </div>
                            </div>
                        )}

                        {showPicker && (
                            <div className="custom-picker">
                                <div className="picker-row">
                                    <label>Primary</label>
                                    <input
                                        type="color"
                                        value={primary}
                                        onChange={(e) => setPrimary(e.target.value)}
                                    />
                                    <span className="hex-val">{primary}</span>
                                </div>
                                {multiColor && (
                                    <div className="picker-row">
                                        <label>Secondary</label>
                                        <input
                                            type="color"
                                            value={secondary}
                                            onChange={(e) => setSecondary(e.target.value)}
                                        />
                                        <span className="hex-val">{secondary}</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="code-container">
                        <div className="code-header-tabs">
                            <button
                                className={`code-tab-btn ${codeTab === 'react' ? 'active' : ''}`}
                                onClick={() => setCodeTab('react')}
                            >
                                <Atom size={14} /> React
                            </button>
                            <button
                                className={`code-tab-btn ${codeTab === 'css' ? 'active' : ''}`}
                                onClick={() => setCodeTab('css')}
                            >
                                <FileJson size={14} /> CSS
                            </button>
                        </div>

                        <div className="code-block-wrapper">
                            <button className="copy-btn" onClick={() => {
                                const codeToCopy = codeTab === 'react' ? generatedReactCode : generatedCSS;
                                navigator.clipboard.writeText(codeToCopy);
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                            }}>
                                {copied ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
                                {copied ? 'Copied!' : 'Copy'}
                            </button>

                            {codeTab === 'react' ? (
                                <SyntaxHighlighter language="jsx" style={vscDarkPlus}
                                    customStyle={{ margin: 0, padding: '1.5rem', background: 'var(--bg-tertiary)', borderRadius: '0', fontSize: '14px', maxHeight: '400px' }}>
                                    {generatedReactCode}
                                </SyntaxHighlighter>
                            ) : (
                                <SyntaxHighlighter language="css" style={vscDarkPlus}
                                    customStyle={{ margin: 0, padding: '1.5rem', background: 'var(--bg-tertiary)', borderRadius: '0', fontSize: '14px', maxHeight: '400px' }}>
                                    {generatedCSS}
                                </SyntaxHighlighter>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ButtonShowcase;
