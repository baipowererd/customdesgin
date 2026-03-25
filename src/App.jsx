import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import ButtonShowcase from './components/ButtonShowcase';
import ThemeShowcase from './components/ThemeShowcase';
import dashboardEffects from './data/dashboardEffects';
import buttonEffects from './data/buttonEffects';
import cardEffects from './data/cardEffects';
import heroEffects from './data/heroEffects';
import footerEffects from './data/footerEffects';
import navbarEffects from './data/navbarEffects';
import sidebarEffects from './data/sidebarEffects';
import tabEffects from './data/tabEffects';
import breadcrumbEffects from './data/breadcrumbEffects';
import inputEffects from './data/inputEffects';
import toggleEffects from './data/toggleEffects';
import selectEffects from './data/selectEffects';
import formEffects from './data/formEffects';
import iconEffects from './data/iconEffects';
import staticIconEffects from './data/staticIconEffects';
import lucideStaticIcons from './data/lucideStaticIcons';
import loaderEffects from './data/loaderEffects';
import microEffects from './data/microEffects';
import mobileEffects from './data/mobileEffects';

const categories = [
  { key: 'buttons', label: ' Buttons', data: buttonEffects },
  { key: 'cards', label: ' Cards', data: cardEffects },
  { key: 'heroes', label: '️ Heroes', data: heroEffects },
  { key: 'footers', label: ' Footers', data: footerEffects },
  { key: 'navbars', label: ' Navbars', data: navbarEffects },
  { key: 'sidebars', label: ' Sidebars', data: sidebarEffects },
  { key: 'tabs', label: ' Tabs', data: tabEffects },
  { key: 'breadcrumbs', label: ' Breadcrumbs', data: breadcrumbEffects },
  { key: 'inputs', label: '️ Inputs', data: inputEffects },
  { key: 'toggles', label: '️ Toggles', data: toggleEffects },
  { key: 'selects', label: ' Selects', data: selectEffects },
  { key: 'forms', label: ' Forms', data: formEffects },
  { key: 'icons', label: ' Animated Icons', data: iconEffects },
  { key: 'static-icons', label: '️ Static SVGs', data: [...staticIconEffects, ...lucideStaticIcons] },
  { key: 'loaders', label: ' Loaders', data: loaderEffects },
  { key: 'micro', label: ' Micro-interactions', data: microEffects },
  { key: 'mobile', label: '📱 Mobile Screens', data: mobileEffects },
  { key: 'dashboards', label: ' Dashboards', data: dashboardEffects },
];

const themes = [
  { key: 'glass', label: ' Glassmorphism', keywords: ['glass'] },
  { key: 'neon', label: ' Neon Glow', keywords: ['neon', 'glow'] },
  { key: 'neu', label: ' Neumorphism', keywords: ['neu'] },
  { key: 'gradient', label: ' Gradients', keywords: ['gradient'] },
  { key: 'minimal', label: ' Minimalist', keywords: ['minimal', 'simple', 'clean', 'transparent'] },
  { key: 'bubbly', label: ' Bubbly', keywords: ['bubbly', 'blob', 'bubble', 'floating', 'soft'] },
  { key: 'noir', label: '🖤 Dark Noir', keywords: ['noir', 'dark noir', 'midnight', 'ticket'] },
  { key: 'prism', label: '🌈 Prism Edge', keywords: ['prism', 'holo', 'iridescent', 'rainbow', 'spectrum'] },
  { key: 'manga', label: '🎌 Manga Cutout', keywords: ['manga', 'comic', 'anime', 'sticker', 'tokyo', 'cutout'] },
  { key: 'indic', label: '🪔 Indic Heritage', keywords: ['indic', 'desi', 'mandala', 'spice', 'heritage', 'festive'] },
  { key: 'aztec', label: '🏜️ Aztec Geometry', keywords: ['aztec', 'maya', 'mesoamerican', 'stepped', 'stone'] },
];

const brands = [
  { key: 'spotify', label: ' Spotify', keywords: ['spotify', 'music'] },
  { key: 'google', label: ' Google', keywords: ['google', 'material', 'alphabet'] },
  { key: 'apple', label: ' Apple', keywords: ['apple', 'ios', 'mac', 'cupertino'] },
  { key: 'discord', label: ' Discord', keywords: ['discord', 'gaming'] },
];

// Flatten all components and inject their categoryKey for correct rendering
const allComponents = categories.flatMap(cat =>
  cat.data.map(item => ({ ...item, categoryKey: cat.key }))
);

function App() {
  const [viewMode, setViewMode] = useState('component'); // 'component', 'theme', 'brand', 'dashboard'
  const [activeCategory, setActiveCategory] = useState('buttons');
  const [activeTheme, setActiveTheme] = useState('glass');
  const [activeBrand, setActiveBrand] = useState('spotify');
  const [globalTheme, setGlobalTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', globalTheme);
  }, [globalTheme]);

  const toggleGlobalTheme = () => {
    setGlobalTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const getDisplayedComponents = () => {
    if (viewMode === 'component') {
      return categories.find(c => c.key === activeCategory)?.data || [];
    } else if (viewMode === 'theme') {
      const activeKw = themes.find(t => t.key === activeTheme)?.keywords || [];
      return allComponents.filter(item => {
        const text = (item.title + ' ' + (item.description || '')).toLowerCase();
        return activeKw.some(kw => text.includes(kw));
      });
    } else if (viewMode === 'brand') {
      const activeKw = brands.find(b => b.key === activeBrand)?.keywords || [];
      return allComponents.filter(item => {
        const text = (item.title + ' ' + (item.description || '')).toLowerCase();
        return activeKw.some(kw => text.includes(kw));
      });
    }
    return [];
  };

  const displayedComponents = getDisplayedComponents();

  // Wide/Full grid styling rules only apply in component mode
  const gridClass = viewMode === 'component'
    ? (activeCategory === 'cards' ? ' components-grid-wide' : '') +
    (activeCategory === 'heroes' || activeCategory === 'footers' || activeCategory === 'dashboards' ? ' components-grid-full' : '')
    : '';

  return (
    <div className="app-container">
      <button
        className="theme-toggle-btn"
        onClick={toggleGlobalTheme}
        aria-label="Toggle dark/light mode"
        title={`Switch to ${globalTheme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {globalTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <header className="app-header">
        <h1 className="app-title">Premium UI Showcase</h1>
        <p className="app-subtitle">
          A curated collection of stunning, customizable components. Pick an effect, choose your colors, copy the code.
        </p>

        {/* View Mode Toggle */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
          <button
            className={`cat-btn ${viewMode === 'component' ? 'active' : ''}`}
            onClick={() => setViewMode('component')}
            style={{ borderRadius: '20px', padding: '6px 16px', fontWeight: 'bold' }}
          >
            By Component
          </button>
          <button
            className={`cat-btn ${viewMode === 'theme' ? 'active' : ''}`}
            onClick={() => setViewMode('theme')}
            style={{ borderRadius: '20px', padding: '6px 16px', fontWeight: 'bold' }}
          >
            By Theme
          </button>
          <button
            className={`cat-btn ${viewMode === 'brand' ? 'active' : ''}`}
            onClick={() => setViewMode('brand')}
            style={{ borderRadius: '20px', padding: '6px 16px', fontWeight: 'bold' }}
          >
            By Brand
          </button>

        </div>
      </header>

      {/* Navigation mapping based on View Mode */}
      <nav className="category-nav">
        {viewMode === 'component' ? (
          categories.map((cat) => (
            <button
              key={cat.key}
              className={"cat-btn" + (activeCategory === cat.key ? ' active' : '')}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label} <span className="cat-count">{cat.data.length}</span>
            </button>
          ))
        ) : viewMode === 'theme' ? (
          themes.map((theme) => {
            const count = allComponents.filter(item => {
              const text = (item.title + ' ' + (item.description || '')).toLowerCase();
              return theme.keywords.some(kw => text.includes(kw));
            }).length;

            return (
              <button
                key={theme.key}
                className={"cat-btn" + (activeTheme === theme.key ? ' active' : '')}
                onClick={() => setActiveTheme(theme.key)}
              >
                {theme.label} <span className="cat-count">{count}</span>
              </button>
            )
          })
        ) : (
          brands.map((brand) => {
            const count = allComponents.filter(item => {
              const text = (item.title + ' ' + (item.description || '')).toLowerCase();
              return brand.keywords.some(kw => text.includes(kw));
            }).length;

            return (
              <button
                key={brand.key}
                className={"cat-btn" + (activeBrand === brand.key ? ' active' : '')}
                onClick={() => setActiveBrand(brand.key)}
              >
                {brand.label} <span className="cat-count">{count}</span>
              </button>
            )
          })
        )}
      </nav>

      <main className={'components-grid' + gridClass}>
        {displayedComponents.map((effect, i) => {
          // Determine category (for correctly styling Buttons or layout logic)
          const catKey = viewMode === 'component' ? activeCategory : effect.categoryKey;

          // Match logic to display badges (now supports themes and brands)
          const effectText = (effect.title + ' ' + (effect.description || '')).toLowerCase();
          const effectThemes = themes.filter(t => t.keywords.some(kw => effectText.includes(kw))).map(t => ({ ...t, type: 'theme' }));
          const effectBrands = brands.filter(b => b.keywords.some(kw => effectText.includes(kw))).map(b => ({ ...b, type: 'brand' }));
          const matchedTags = [...effectThemes, ...effectBrands];

          const handleTagClick = (tag) => {
            setViewMode(tag.type);
            if (tag.type === 'theme') setActiveTheme(tag.key);
            if (tag.type === 'brand') setActiveBrand(tag.key);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          };

          if (catKey === 'buttons') {
            return (
              <ButtonShowcase
                key={i}
                title={effect.title}
                description={effect.description}
                cssTemplate={effect.cssTemplate}
                multiColor={effect.multiColor}
                matchedTags={matchedTags}
                onTagClick={handleTagClick}
              />
            );
          }
          if (catKey === 'dashboards' && effect.component) {
            const DashComp = effect.component;
            return (
              <div key={i} style={{ gridColumn: '1 / -1', marginBottom: '24px' }}>
                <div style={{ marginBottom: '12px' }}>
                  <h3 style={{ margin: '0 0 4px', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{effect.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{effect.description}</p>
                </div>
                <DashComp />
              </div>
            );
          }
          return (
            <ThemeShowcase
              key={i}
              title={effect.title}
              description={effect.description}
              cssTemplate={effect.cssTemplate}
              renderPreview={effect.renderPreview}
              multiColor={effect.multiColor}
              matchedTags={matchedTags}
              onTagClick={handleTagClick}
            />
          );
        })}
        {displayedComponents.length === 0 && (
          <div style={{ padding: '40px', textAlign: 'center', color: '#888', gridColumn: '1 / -1' }}>
            No components found for this theme.
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
