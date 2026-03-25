import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code2, Monitor, Copy, Check } from 'lucide-react';
import './ComponentShowcase.css';

const ComponentShowcase = ({ title, description, component: Component, code }) => {
  const [activeTab, setActiveTab] = useState('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="showcase-card">
      <div className="showcase-header">
        <div>
          <h3 className="showcase-title">{title}</h3>
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
        </div>
      </div>

      <div className="showcase-content">
        {activeTab === 'preview' ? (
          <div className="preview-container">
            <div className="preview-canvas">
              <Component />
            </div>
          </div>
        ) : (
          <div className="code-container">
            <button className="copy-btn" onClick={handleCopy} title="Copy Code">
              {copied ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <SyntaxHighlighter
              language="jsx"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '1.5rem',
                background: 'var(--bg-tertiary)',
                borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
                fontSize: '14px',
                maxHeight: '400px',
              }}
              wrapLines={true}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentShowcase;
