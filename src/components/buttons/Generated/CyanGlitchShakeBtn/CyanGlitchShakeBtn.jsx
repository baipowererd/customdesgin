import React from 'react';
import './CyanGlitchShakeBtn.css';

const CyanGlitchShakeBtn = () => {
  return (
    <button className="btn-cyan-glitchshake">
      <span>CyanGlitchShakeBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './CyanGlitchShakeBtn.css';

const CyanGlitchShakeBtn = () => {
  return (
    <button className="btn-cyan-glitchshake">
      <span>CyanGlitchShakeBtn</span>
    </button>
  );
};

export default CyanGlitchShakeBtn;

/* CSS */
/* Add this to CyanGlitchShakeBtn.css */

.btn-cyan-glitchshake {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  background-color: #67e8f9;
  border: none;
  cursor: pointer;
  position: relative;
}
.btn-cyan-glitchshake:hover {
  animation: glitch-anim 0.3s infinite;
  background-color: #06b6d4;
  color: #fff;
}
@keyframes glitch-anim {
  0% { transform: translate(0) }
  20% { transform: translate(-2px, 2px) }
  40% { transform: translate(-2px, -2px) }
  60% { transform: translate(2px, 2px) }
  80% { transform: translate(2px, -2px) }
  100% { transform: translate(0) }
}
`;

export default CyanGlitchShakeBtn;
