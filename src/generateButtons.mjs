import fs from 'fs';
import path from 'path';

const outDir = path.resolve('./src/components/buttons/Generated');
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

const colors = [
  { name: 'Red', hex: '#ef4444', dark: '#991b1b', light: '#fca5a5' },
  { name: 'Blue', hex: '#3b82f6', dark: '#1e40af', light: '#93c5fd' },
  { name: 'Green', hex: '#22c55e', dark: '#166534', light: '#86efac' },
  { name: 'Purple', hex: '#a855f7', dark: '#6b21a8', light: '#d8b4fe' },
  { name: 'Orange', hex: '#f97316', dark: '#9a3412', light: '#fdba74' },
  { name: 'Cyan', hex: '#06b6d4', dark: '#155e75', light: '#67e8f9' },
  { name: 'Pink', hex: '#ec4899', dark: '#9d174d', light: '#f9a8d4' },
  { name: 'Teal', hex: '#14b8a6', dark: '#115e59', light: '#5eead4' },
  { name: 'Yellow', hex: '#eab308', dark: '#854d0e', light: '#fde047' },
  { name: 'Indigo', hex: '#6366f1', dark: '#3730a3', light: '#a5b4fc' },
];

function escapeForTemplateLiteral(str) {
  return str.replace(/\\/g, '\\\\').replace(/\`/g, '\\`').replace(/\\$/g, '\\$');
}

function genReactCode(className, componentName, cssStyles) {
  const codeString = `import React from 'react';
import './${componentName}.css';

const ${componentName} = () => {
  return (
    <button className="${className}">
      <span>${componentName}</span>
    </button>
  );
};

export default ${componentName};

/* CSS */
/* Add this to ${componentName}.css */
${cssStyles}
`;

  return `import React from 'react';
import './${componentName}.css';

const ${componentName} = () => {
  return (
    <button className="${className}">
      <span>${componentName}</span>
    </button>
  );
};

export const code = \`${escapeForTemplateLiteral(codeString)}\`;

export default ${componentName};
`;
}

const generators = [
  {
    name: 'Push3D',
    desc: 'A 3D button that pushes down on active.',
    gen: (c, name, className) => `
.${className} {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: ${c.hex};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 6px 0 ${c.dark};
  transition: all 0.1s;
}
.${className}:active {
  transform: translateY(6px);
  box-shadow: 0 0px 0 ${c.dark};
}
.${className}:hover {
  filter: brightness(1.1);
}`
  },
  {
    name: 'OutlineSweep',
    desc: 'Outline button with sweep background fill.',
    gen: (c, name, className) => `
.${className} {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: ${c.light};
  background-color: transparent;
  border: 2px solid ${c.hex};
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s;
  z-index: 1;
}
.${className}::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 0; height: 100%;
  background-color: ${c.hex};
  transition: width 0.3s ease;
  z-index: -1;
}
.${className}:hover {
  color: #fff;
}
.${className}:hover::before {
  width: 100%;
}`
  },
  {
    name: 'GradientPan',
    desc: 'Animated gradient background.',
    gen: (c, name, className) => `
.${className} {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(45deg, ${c.dark}, ${c.hex}, ${c.light}, ${c.hex});
  background-size: 300% 300%;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-position 0.5s, transform 0.2s;
}
.${className}:hover {
  background-position: 100% 50%;
  transform: scale(1.05);
}`
  },
  {
    name: 'NeonPulse',
    desc: 'Pulsing neon glow effect.',
    gen: (c, name, className) => `
.${className} {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: ${c.light};
  background-color: transparent;
  border: 2px solid ${c.hex};
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 10px transparent;
  transition: all 0.3s;
}
.${className}:hover {
  color: #fff;
  background-color: ${c.hex};
  box-shadow: 0 0 15px ${c.hex}, 0 0 30px ${c.hex};
}`
  },
  {
    name: 'Neumorphic',
    desc: 'Soft dark neumorphism style.',
    gen: (c, name, className) => `
.${className} {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: ${c.light};
  background-color: #1a1a1e;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 6px 6px 12px #0d0d10, -6px -6px 12px #27272c;
  transition: all 0.2s;
}
.${className}:hover {
  color: ${c.hex};
}
.${className}:active {
  box-shadow: inset 6px 6px 12px #0d0d10, inset -6px -6px 12px #27272c;
}`
  },
  {
    name: 'GhostSolid',
    desc: 'Fades from ghost to solid.',
    gen: (c, name, className) => `
.${className} {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(255,255,255,0.6);
  background-color: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}
.${className}:hover {
  color: #fff;
  background-color: ${c.hex};
  border-color: ${c.hex};
  box-shadow: 0 4px 15px ${c.dark};
}`
  },
  {
    name: 'DiagonalSwipe',
    desc: 'Background swipe from the corner.',
    gen: (c, name, className) => `
.${className} {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: ${c.light};
  background-color: #222;
  border: 2px solid #222;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.4s;
  z-index: 1;
}
.${className}::before {
  content: '';
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: ${c.hex};
  transform: translateX(-100%) rotate(45deg);
  transform-origin: top left;
  transition: transform 0.4s;
  z-index: -1;
}
.${className}:hover {
  color: #fff;
  border-color: ${c.hex};
}
.${className}:hover::before {
  transform: translateX(0) rotate(0);
}`
  },
  {
    name: 'UnderlineFlip',
    desc: 'Underline expands to fill button.',
    gen: (c, name, className) => `
.${className} {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
}
.${className}::after {
  content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 100%; height: 2px;
  background-color: ${c.hex};
  transition: height 0.3s;
  z-index: -1;
}
.${className}:hover::after {
  height: 100%;
}`
  },
  {
    name: 'DoubleBorder',
    desc: 'Animated double border brackets.',
    gen: (c, name, className) => `
.${className} {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: ${c.light};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}
.${className}::before, .${className}::after {
  content: '';
  position: absolute;
  width: 20px; height: 20px;
  border: 2px solid transparent;
  transition: 0.3s;
}
.${className}::before {
  top: 0; left: 0;
  border-top-color: ${c.hex};
  border-left-color: ${c.hex};
}
.${className}::after {
  bottom: 0; right: 0;
  border-bottom-color: ${c.hex};
  border-right-color: ${c.hex};
}
.${className}:hover {
  color: ${c.hex};
  letter-spacing: 2px;
}
.${className}:hover::before, .${className}:hover::after {
  width: 100%; height: 100%;
}`
  },
  {
    name: 'GlitchShake',
    desc: 'Glitch shake effect on hover.',
    gen: (c, name, className) => `
.${className} {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  background-color: ${c.light};
  border: none;
  cursor: pointer;
  position: relative;
}
.${className}:hover {
  animation: glitch-anim 0.3s infinite;
  background-color: ${c.hex};
  color: #fff;
}
@keyframes glitch-anim {
  0% { transform: translate(0) }
  20% { transform: translate(-2px, 2px) }
  40% { transform: translate(-2px, -2px) }
  60% { transform: translate(2px, 2px) }
  80% { transform: translate(2px, -2px) }
  100% { transform: translate(0) }
}`
  }
];

let generatedComponents = [];

colors.forEach((c) => {
  generators.forEach((g) => {
    const componentName = `${c.name}${g.name}Btn`;
    const className = `btn-${c.name.toLowerCase()}-${g.name.toLowerCase()}`;
    
    const css = g.gen(c, componentName, className);
    const jsx = genReactCode(className, componentName, css);
    
    const dir = path.join(outDir, componentName);
    fs.mkdirSync(dir, { recursive: true });
    
    fs.writeFileSync(path.join(dir, `${componentName}.jsx`), jsx);
    fs.writeFileSync(path.join(dir, `${componentName}.css`), css);
    
    generatedComponents.push({
      componentName,
      description: `${c.name} themed: ${g.desc}`
    });
  });
});

// Update App.jsx
const appPath = path.resolve('./src/App.jsx');

const imports = generatedComponents.map(c => 
  `import ${c.componentName}, { code as code${c.componentName} } from './components/buttons/Generated/${c.componentName}/${c.componentName}';`
).join('\n');

const componentsList = generatedComponents.map((c, i) => `
        <ComponentShowcase 
          title="Button #${i + 5}: ${c.componentName}" 
          description="${c.description}"
          component={${c.componentName}}
          code={code${c.componentName}}
        />`).join('');

const appCode = `import React from 'react';
import ComponentShowcase from './components/ComponentShowcase';
import NeonGlowButton, { code as neonCode } from './components/buttons/NeonGlowButton/NeonGlowButton';
import GlassButton, { code as glassCode } from './components/buttons/GlassButton/GlassButton';
import LiquidSwipeButton, { code as liquidCode } from './components/buttons/LiquidSwipeButton/LiquidSwipeButton';
import MagneticRippleButton, { code as magneticCode } from './components/buttons/MagneticRippleButton/MagneticRippleButton';

${imports}

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Premium UI Showcase</h1>
        <p className="app-subtitle">
          A collection of 104 stunning, copy-pasteable buttons built with Vanilla CSS and React.
          Designed for high-performance and modern aesthetics.
        </p>
      </header>
      
      <main className="components-grid">
        <ComponentShowcase 
          title="Neon Glow" 
          description="Vibrant animated gradient border."
          component={NeonGlowButton}
          code={neonCode}
        />
        <ComponentShowcase 
          title="Glassmorphism" 
          description="Frosted glass effect with a sweeping reflection loop."
          component={GlassButton}
          code={glassCode}
        />
        <ComponentShowcase 
          title="Magnetic Ripple" 
          description="A sleek dark button that reveals a ripple effect and morphs towards the mouse pointer."
          component={MagneticRippleButton}
          code={magneticCode}
        />
        <ComponentShowcase 
          title="Liquid Swipe" 
          description="An outlined container that fills up with an animated wave fluid layer on hover."
          component={LiquidSwipeButton}
          code={liquidCode}
        />
        ${componentsList}
      </main>
    </div>
  );
}

export default App;
`;

fs.writeFileSync(appPath, appCode);
console.log('Successfully generated 100 buttons!');
