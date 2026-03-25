// Each effect is { title, description, multiColor, cssTemplate(colors) => string }
// colors = { primary, secondary, dark, light }

const buttonEffects = [
  {
    title: 'Neon Glow',
    description: 'Animated gradient border with a vibrant neon glow shadow.',
    multiColor: true,
    cssTemplate: (c) => `/* Neon Glow Button */
.demo-btn-neon-glow {
  position: relative;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: #0f0f12;
  border: none;
  cursor: pointer;
  border-radius: 99px;
  isolation: isolate;
}
.demo-btn-neon-glow::before {
  content: "";
  position: absolute;
  inset: -2px;
  z-index: -1;
  background: linear-gradient(90deg, ${c.primary}, ${c.secondary}, ${c.primary});
  border-radius: inherit;
  background-size: 200% 200%;
  animation: neon-pan 3s linear infinite;
}
.demo-btn-neon-glow::after {
  content: "";
  position: absolute;
  inset: -2px;
  z-index: -2;
  background: linear-gradient(90deg, ${c.primary}, ${c.secondary}, ${c.primary});
  border-radius: inherit;
  background-size: 200% 200%;
  animation: neon-pan 3s linear infinite;
  filter: blur(14px);
  opacity: 0.6;
  transition: opacity 0.3s, filter 0.3s;
}
.demo-btn-neon-glow:hover::after {
  opacity: 1;
  filter: blur(22px);
}
@keyframes neon-pan {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}`,
  },
  {
    title: 'Glassmorphism',
    description: 'Frosted glass effect with a sweeping light reflection on hover.',
    multiColor: false,
    cssTemplate: (c) => `/* Glassmorphism Button */
.demo-btn-glassmorphism {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}
.demo-btn-glassmorphism:hover {
  background: ${c.primary}22;
  border-color: ${c.primary}55;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px ${c.dark}66;
}
.demo-btn-glassmorphism::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 50%; height: 100%;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent);
  transform: skewX(-20deg);
}
.demo-btn-glassmorphism:hover::before {
  animation: glass-shine 1.5s ease;
}
@keyframes glass-shine {
  0% { left: -100%; }
  100% { left: 200%; }
}`,
  },
  {
    title: 'Push 3D',
    description: 'A tactile 3D button that physically pushes down on click.',
    multiColor: false,
    cssTemplate: (c) => `/* Push 3D Button */
.demo-btn-push-3d {
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: ${c.primary};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 6px 0 ${c.dark}, 0 8px 15px rgba(0,0,0,0.3);
  transition: all 0.1s;
}
.demo-btn-push-3d:hover {
  filter: brightness(1.08);
}
.demo-btn-push-3d:active {
  transform: translateY(6px);
  box-shadow: 0 0 0 ${c.dark}, 0 2px 5px rgba(0,0,0,0.3);
}`,
  },
  {
    title: 'Sweep Fill',
    description: 'Outline button with a smooth background sweep from left to right.',
    multiColor: false,
    cssTemplate: (c) => `/* Sweep Fill Button */
.demo-btn-sweep-fill {
  position: relative;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  color: ${c.primary};
  background: transparent;
  border: 2px solid ${c.primary};
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.35s;
  z-index: 1;
}
.demo-btn-sweep-fill::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 0; height: 100%;
  background: ${c.primary};
  transition: width 0.35s ease;
  z-index: -1;
}
.demo-btn-sweep-fill:hover { color: #fff; }
.demo-btn-sweep-fill:hover::before { width: 100%; }`,
  },
  {
    title: 'Gradient Pan',
    description: 'Animated gradient that slowly pans across the button.',
    multiColor: true,
    cssTemplate: (c) => `/* Gradient Pan Button */
.demo-btn-gradient-pan {
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(90deg, ${c.primary}, ${c.secondary}, ${c.primary});
  background-size: 200% auto;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  animation: grad-pan 3s linear infinite;
  transition: transform 0.2s, box-shadow 0.2s;
}
.demo-btn-gradient-pan:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 24px ${c.dark}88;
}
@keyframes grad-pan {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}`,
  },
  {
    title: 'Neon Pulse',
    description: 'Outlined button that glows with a pulsing neon aura on hover.',
    multiColor: false,
    cssTemplate: (c) => `/* Neon Pulse Button */
.demo-btn-neon-pulse {
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  color: ${c.primary};
  background: transparent;
  border: 2px solid ${c.primary};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}
.demo-btn-neon-pulse:hover {
  color: #fff;
  background: ${c.primary};
  box-shadow: 0 0 15px ${c.primary}, 0 0 40px ${c.primary}88, 0 0 80px ${c.primary}44;
}`,
  },
  {
    title: 'Neumorphic',
    description: 'Soft 3D neumorphism that depresses inward on click.',
    multiColor: false,
    cssTemplate: (c) => `/* Neumorphic Button */
.demo-btn-neumorphic {
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  background: var(--neu-bg);
  border: none;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 6px 6px 14px var(--neu-shadow-dark), -6px -6px 14px var(--neu-shadow-light);
  transition: all 0.2s;
}
.demo-btn-neumorphic:hover { color: ${c.primary}; }
.demo-btn-neumorphic:active {
  box-shadow: inset 6px 6px 14px var(--neu-shadow-dark), inset -6px -6px 14px var(--neu-shadow-light);
}`,
  },
  {
    title: 'Ghost Solidify',
    description: 'Transparent ghost button that fills solid on hover.',
    multiColor: false,
    cssTemplate: (c) => `/* Ghost Solidify Button */
.demo-btn-ghost-solidify {
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(255,255,255,0.55);
  background: transparent;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.demo-btn-ghost-solidify:hover {
  color: #fff;
  background: ${c.primary};
  border-color: ${c.primary};
  box-shadow: 0 6px 20px ${c.dark}88;
  transform: translateY(-2px);
}`,
  },
  {
    title: 'Diagonal Swipe',
    description: 'Color wipes in diagonally from the corner on hover.',
    multiColor: false,
    cssTemplate: (c) => `/* Diagonal Swipe Button */
.demo-btn-diagonal-swipe {
  position: relative;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  color: ${c.light};
  background: #1a1a1e;
  border: 2px solid #1a1a1e;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.4s, border-color 0.4s;
  z-index: 1;
}
.demo-btn-diagonal-swipe::before {
  content: '';
  position: absolute;
  inset: 0;
  background: ${c.primary};
  transform: translateX(-100%) rotate(45deg);
  transform-origin: top left;
  transition: transform 0.4s ease;
  z-index: -1;
}
.demo-btn-diagonal-swipe:hover {
  color: #fff;
  border-color: ${c.primary};
}
.demo-btn-diagonal-swipe:hover::before {
  transform: translateX(0) rotate(0);
}`,
  },
  {
    title: 'Underline Rise',
    description: 'Underline grows upward to fill the entire button.',
    multiColor: false,
    cssTemplate: (c) => `/* Underline Rise Button */
.demo-btn-underline-rise {
  position: relative;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
}
.demo-btn-underline-rise::after {
  content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 100%; height: 3px;
  background: ${c.primary};
  transition: height 0.3s ease;
  z-index: -1;
  border-radius: 4px;
}
.demo-btn-underline-rise:hover::after {
  height: 100%;
}`,
  },
  {
    title: 'Border Brackets',
    description: 'Expanding bracket borders that frame the button on hover.',
    multiColor: false,
    cssTemplate: (c) => `/* Border Brackets Button */
.demo-btn-border-brackets {
  position: relative;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  color: ${c.light};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s, letter-spacing 0.3s;
}
.demo-btn-border-brackets::before,
.demo-btn-border-brackets::after {
  content: '';
  position: absolute;
  width: 20px; height: 20px;
  border: 2px solid transparent;
  transition: width 0.3s, height 0.3s;
}
.demo-btn-border-brackets::before {
  top: 0; left: 0;
  border-top-color: ${c.primary};
  border-left-color: ${c.primary};
}
.demo-btn-border-brackets::after {
  bottom: 0; right: 0;
  border-bottom-color: ${c.primary};
  border-right-color: ${c.primary};
}
.demo-btn-border-brackets:hover {
  color: ${c.primary};
  letter-spacing: 2px;
}
.demo-btn-border-brackets:hover::before,
.demo-btn-border-brackets:hover::after {
  width: 100%; height: 100%;
}`,
  },
  {
    title: 'Glitch Shake',
    description: 'Chaotic glitch vibration effect on hover.',
    multiColor: false,
    cssTemplate: (c) => `/* Glitch Shake Button */
.demo-btn-glitch-shake {
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  background: ${c.light};
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
}
.demo-btn-glitch-shake:hover {
  animation: glitch-shake 0.3s infinite;
  background: ${c.primary};
  color: #fff;
}
@keyframes glitch-shake {
  0%   { transform: translate(0); }
  20%  { transform: translate(-2px, 2px); }
  40%  { transform: translate(-2px, -2px); }
  60%  { transform: translate(2px, 2px); }
  80%  { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}`,
  },
  {
    title: 'Liquid Fill',
    description: 'An animated wave of liquid fills the button from below on hover.',
    multiColor: false,
    cssTemplate: (c) => `/* Liquid Fill Button */
.demo-btn-liquid-fill {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 500;
  color: ${c.primary};
  background: transparent;
  border: 2px solid ${c.primary};
  border-radius: 99px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.4s;
  z-index: 1;
}
.demo-btn-liquid-fill::before {
  content: '';
  position: absolute;
  bottom: -100%; left: 0;
  width: 100%; height: 200%;
  background: ${c.primary};
  transition: bottom 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
.demo-btn-liquid-fill:hover {
  color: #fff;
}
.demo-btn-liquid-fill:hover::before {
  bottom: -10%;
}`,
  },
  {
    title: 'Magnetic Hover',
    description: 'Button subtly follows the mouse cursor with a magnetic pull.',
    multiColor: false,
    cssTemplate: (c) => `/* Magnetic Hover Button
   (Requires JS for the magnetic effect — see preview) */
.demo-btn-magnetic-hover {
  padding: 16px 36px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background: ${c.primary};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: box-shadow 0.2s, filter 0.2s;
}
.demo-btn-magnetic-hover:hover {
  box-shadow: 0 12px 28px ${c.dark}88;
  filter: brightness(1.1);
}`,
  },
  {
    title: 'Spotlight',
    description: 'A radial spotlight follows the mouse across the button surface.',
    multiColor: true,
    cssTemplate: (c) => `/* Spotlight Button */
.demo-btn-spotlight {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: ${c.dark};
  border: 1px solid ${c.primary}33;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.3s;
}
.demo-btn-spotlight:hover {
  border-color: ${c.primary}88;
}
.demo-btn-spotlight::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  width: 120px; height: 120px;
  background: radial-gradient(circle, ${c.primary}55, transparent 70%);
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}
.demo-btn-spotlight:hover::before {
  opacity: 1;
}`,
  },
  {
    title: 'Pill Outline',
    description: 'A minimal pill-shaped outline button with smooth color transition.',
    multiColor: false,
    cssTemplate: (c) => `/* Pill Outline Button */
.demo-btn-pill-outline {
  padding: 12px 36px;
  font-size: 15px;
  font-weight: 500;
  color: ${c.primary};
  background: transparent;
  border: 1.5px solid ${c.primary};
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.25s ease;
}
.demo-btn-pill-outline:hover {
  background: ${c.primary};
  color: #fff;
  box-shadow: 0 4px 16px ${c.dark}66;
}`,
  },
  {
    title: 'Scale Pop',
    description: 'Elastic scale-up with a spring-like bounce on hover.',
    multiColor: false,
    cssTemplate: (c) => `/* Scale Pop Button */
.demo-btn-scale-pop {
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: ${c.primary};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;
}
.demo-btn-scale-pop:hover {
  transform: scale(1.12);
  box-shadow: 0 8px 24px ${c.dark}88;
}
.demo-btn-scale-pop:active {
  transform: scale(0.95);
}`,
  },
  {
    title: 'Double Layer',
    description: 'A double-layered shadow button with depth effect on hover.',
    multiColor: true,
    cssTemplate: (c) => `/* Double Layer Button */
.demo-btn-double-layer {
  position: relative;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: ${c.primary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1;
  transition: transform 0.3s;
}
.demo-btn-double-layer::before {
  content: '';
  position: absolute;
  inset: 0;
  background: ${c.secondary};
  border-radius: inherit;
  z-index: -1;
  transform: translate(6px, 6px);
  transition: transform 0.3s;
}
.demo-btn-double-layer:hover {
  transform: translate(-3px, -3px);
}
.demo-btn-double-layer:hover::before {
  transform: translate(8px, 8px);
}`,
  },
    {
        title: 'Cyberpunk Glitch',
        description: 'Random glitch offsets on hover. Requires custom keyframes in a real app.',
        multiColor: false,
        cssTemplate: (c) => `.cyberpunk-btn{position:relative;padding:12px 30px;background:${c.primary};color:#fff;font-weight:bold;font-size:16px;text-transform:uppercase;border:none;box-shadow:4px 4px 0 #000;cursor:pointer;transition:transform 0.1s;overflow:hidden}.cyberpunk-btn::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:rgba(255,255,255,0.2);transition:left 0.3s}.cyberpunk-btn:hover::before{left:100%}.cyberpunk-btn:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #000}`,
    },
    {
        title: 'Spotify Play Button',
        description: 'Iconic circular pill button reminiscent of Spotify music app.',
        multiColor: true,
        cssTemplate: (c) => `.spotify-play-btn{padding:14px 32px;background:#1db954;color:#000;border:none;border-radius:500px;font-size:14px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all 0.2s ease-in-out}.spotify-play-btn:hover{transform:scale(1.04);background:#1ed760}.spotify-play-btn:active{transform:scale(1);opacity:0.7}`,
    },
    {
        title: 'Google Material Button',
        description: 'Classic Material Design raised button like Google.',
        multiColor: true,
        cssTemplate: (c) => `.google-btn{padding:10px 24px;background:#1a73e8;color:#fff;border:none;border-radius:4px;font-size:14px;font-weight:500;font-family:Roboto, sans-serif;cursor:pointer;transition:box-shadow 0.2s, background 0.2s;box-shadow:0 1px 2px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15)}.google-btn:hover{box-shadow:0 1px 3px 0 rgba(60,64,67,0.3),0 4px 8px 3px rgba(60,64,67,0.15);background:#1b66c9}.google-btn:active{box-shadow:0 1px 2px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15);background:#1a5ebb}`,
    },
    {
        title: 'Apple iOS Button',
        description: 'Standard primary action button from iOS with perfect typography and tap state.',
        multiColor: false,
        cssTemplate: (c) => `.apple-btn{padding:14px 32px;background:#007aff;color:#fff;border:none;border-radius:14px;font-size:17px;font-weight:600;font-family:-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif;letter-spacing:-0.4px;cursor:pointer;transition:opacity 0.2s, transform 0.1s}.apple-btn:active{opacity:0.6;transform:scale(0.96)}`,
    },
    {
        title: 'Discord Gaming Button',
        description: 'Chunky, sharp-cornered colored block typical of Discord.',
        multiColor: true,
        cssTemplate: (c) => `.discord-btn{padding:10px 24px;background:#5865F2;color:#fff;border:none;border-radius:3px;font-size:16px;font-weight:500;font-family:"gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;cursor:pointer;transition:background-color 0.17s ease, color 0.17s ease}.discord-btn:hover{background-color:#4752c4}.discord-btn:active{background-color:#3c45a5}`,
    },
  {
    title: 'Shine Sweep',
    description: 'A bright shine sweeps across the button continuously.',
    multiColor: false,
    cssTemplate: (c) => `/* Shine Sweep Button */
.demo-btn-shine-sweep {
  position: relative;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: ${c.primary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
}
.demo-btn-shine-sweep::before {
  content: '';
  position: absolute;
  top: 0; left: -75%;
  width: 50%; height: 100%;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent);
  transform: skewX(-20deg);
  animation: sweep 2.5s ease-in-out infinite;
}
@keyframes sweep {
  0%   { left: -75%; }
  100% { left: 150%; }
}`,
  },
  {
    title: 'Rotate Icon',
    description: 'Arrow icon rotates on hover indicating forward action.',
    multiColor: false,
    cssTemplate: (c) => `/* Rotate Icon Button */
.demo-btn-rotate-icon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: ${c.primary};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s;
}
.demo-btn-rotate-icon::after {
  content: '→';
  display: inline-block;
  transition: transform 0.3s ease;
}
.demo-btn-rotate-icon:hover::after {
  transform: translateX(4px);
}
.demo-btn-rotate-icon:hover {
  background: ${c.dark};
}`,
  },
  {
    title: 'Bubbly Float',
    description: 'A floating blob like button with soft fluid animations.',
    multiColor: true,
    cssTemplate: (c) => `/* Bubbly Float Button */
.demo-btn-bubbly-float {
  position: relative;
  padding: 16px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, ${c.light}, ${c.primary});
  border: none;
  cursor: pointer;
  border-radius: 40px 60px 50px 40px / 50px 40px 60px 50px;
  box-shadow: 0 10px 20px ${c.dark}44, inset 0 4px 8px rgba(255,255,255,0.4);
  animation: blob-float 4s ease-in-out infinite alternate;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.demo-btn-bubbly-float:hover {
  filter: brightness(1.1);
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 15px 25px ${c.dark}66, inset 0 4px 8px rgba(255,255,255,0.5);
  border-radius: 50px 40px 60px 40px / 40px 60px 50px 50px;
}
.demo-btn-bubbly-float:active {
  transform: translateY(2px) scale(0.98);
  box-shadow: 0 5px 10px ${c.dark}33, inset 0 2px 4px rgba(255,255,255,0.3);
}
@keyframes blob-float {
  0% { border-radius: 40px 60px 50px 40px / 50px 40px 60px 50px; transform: translateY(0); }
  50% { border-radius: 50px 40px 60px 50px / 40px 60px 50px 40px; transform: translateY(-3px); }
  100% { border-radius: 60px 50px 40px 60px / 60px 50px 40px 50px; transform: translateY(0); }
}`,
  },
  {
    title: 'Dark Noir Ghost',
    description: 'A midnight noir button with subtle border, ghost styling, and accent glow on hover. Ultra-minimal dark theme.',
    multiColor: true,
    cssTemplate: (c) => `/* Dark Noir Ghost Button */
.demo-btn-noir-ghost {
  padding: 12px 32px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255,255,255,0.6);
  background: transparent;
  border: 1px solid #333;
  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.demo-btn-noir-ghost:hover {
  color: ${c.primary};
  border-color: ${c.primary};
  box-shadow: 0 0 20px ${c.primary}22, inset 0 0 20px ${c.primary}08;
}
.demo-btn-noir-ghost::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: ${c.primary};
  transition: width 0.4s ease;
}
.demo-btn-noir-ghost:hover::after {
  width: 100%;
}`,
  },
  {
    title: 'Dark Noir Solid',
    description: 'A noir midnight solid button with dark background, sharp edges, and subtle accent line indicator.',
    multiColor: true,
    cssTemplate: (c) => `/* Dark Noir Solid Button */
.demo-btn-noir-solid {
  padding: 13px 36px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background: #141414;
  border: 1px solid #222;
  border-radius: 12px;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.demo-btn-noir-solid::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: ${c.primary};
  border-radius: 0 0 4px 4px;
  transition: width 0.4s ease;
}
.demo-btn-noir-solid:hover::before {
  width: 80%;
}
.demo-btn-noir-solid:hover {
  background: #1a1a1a;
  border-color: #333;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  transform: translateY(-2px);
}`,
  },
  {
    title: 'Holo Prism Edge',
    description: 'A dark textured button with a vibrant, animated holographic spectrum edge glow. Prism iridescent theme.',
    multiColor: false,
    cssTemplate: (c) => `/* Holo Prism Edge Button */
.demo-btn-prism {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background: #0a0a0a;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  letter-spacing: 1px;
  z-index: 1;
  transition: transform 0.2s;
}
.demo-btn-prism:hover {
  transform: scale(1.02) translateY(-2px);
}
.demo-btn-prism::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 18px;
  background: linear-gradient(115deg, #ff003c, #ff9a00, #ffe100, #00ff88, #00b3ff, #6200ff, #ff00c8, #ff003c);
  background-size: 300% 300%;
  animation: prism-spin 4s linear infinite;
  z-index: -2;
  opacity: 0.7;
  filter: blur(6px);
  transition: filter 0.3s, opacity 0.3s;
}
.demo-btn-prism:hover::before {
  opacity: 1;
  filter: blur(12px);
}
.demo-btn-prism::after {
  content: '';
  position: absolute;
  inset: 0px;
  background: linear-gradient(180deg, #1f1f1f 0%, #0a0a0a 100%);
  border-radius: 16px;
  z-index: -1;
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
}
@keyframes prism-spin {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}`,
  },
  {
    title: 'Manga Sticker Button',
    description: 'A sharp, high-contrast button inspired by Tokyo street art and manga cutouts. Features thick borders and solid red drop shadows.',
    multiColor: true,
    cssTemplate: (c) => `/* Manga Sticker Button */
.demo-btn-manga {
  position: relative;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #0a0a0a;
  background: #e3ded6;
  border: 3px solid #0a0a0a;
  cursor: pointer;
  box-shadow: 6px 6px 0px ${c.primary};
  transition: all 0.2s ease;
  font-family: 'Inter', system-ui, sans-serif;
}
.demo-btn-manga:hover {
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0px ${c.primary};
}
.demo-btn-manga:active {
  transform: translate(6px, 6px);
  box-shadow: 0px 0px 0px ${c.primary};
}`,
  },
  {
    title: 'Indic Royal Button',
    description: 'An elegant button with intricate curved corners, warm gold/saffron accents, and a rich cultural aesthetic.',
    multiColor: true,
    cssTemplate: (c) => `/* Indic Royal Button */
.demo-btn-indic {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: ${c.primary};
  background: #fffdf5;
  border: 1px solid ${c.primary};
  cursor: pointer;
  border-radius: 4px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  font-family: 'Georgia', serif;
  box-shadow: inset 0 0 0 4px #fffdf5, inset 0 0 0 5px ${c.primary}44, 0 4px 14px rgba(0,0,0,0.06);
}
.demo-btn-indic::before, .demo-btn-indic::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  border: 1px solid ${c.primary};
  border-radius: 50%;
  transition: all 0.3s ease;
}
.demo-btn-indic::before {
  top: -6px;
  left: -6px;
  clip-path: polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%);
}
.demo-btn-indic::after {
  bottom: -6px;
  right: -6px;
  clip-path: polygon(0 0, 50% 0, 50% 50%, 0 50%);
}
.demo-btn-indic:hover {
  background: ${c.primary};
}
.demo-btn-aztec:hover::after {
  transform: translate(4px, 4px);
}
.demo-btn-aztec:active::before {
  transform: translate(6px, 6px);
}
.demo-btn-aztec:active::after {
  transform: translate(6px, 6px);
}`,
  },
];

export default buttonEffects;
