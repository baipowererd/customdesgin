import React from 'react';
import './BlueGlitchShakeBtn.css';

const BlueGlitchShakeBtn = () => {
  return (
    <button className="btn-blue-glitchshake">
      <span>BlueGlitchShakeBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './BlueGlitchShakeBtn.css';

const BlueGlitchShakeBtn = () => {
  return (
    <button className="btn-blue-glitchshake">
      <span>BlueGlitchShakeBtn</span>
    </button>
  );
};

export default BlueGlitchShakeBtn;

/* CSS */
/* Add this to BlueGlitchShakeBtn.css */

.btn-blue-glitchshake {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  background-color: #93c5fd;
  border: none;
  cursor: pointer;
  position: relative;
}
.btn-blue-glitchshake:hover {
  animation: glitch-anim 0.3s infinite;
  background-color: #3b82f6;
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

export default BlueGlitchShakeBtn;
