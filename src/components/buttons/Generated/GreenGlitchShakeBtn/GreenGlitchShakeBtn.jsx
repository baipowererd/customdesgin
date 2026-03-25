import React from 'react';
import './GreenGlitchShakeBtn.css';

const GreenGlitchShakeBtn = () => {
  return (
    <button className="btn-green-glitchshake">
      <span>GreenGlitchShakeBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './GreenGlitchShakeBtn.css';

const GreenGlitchShakeBtn = () => {
  return (
    <button className="btn-green-glitchshake">
      <span>GreenGlitchShakeBtn</span>
    </button>
  );
};

export default GreenGlitchShakeBtn;

/* CSS */
/* Add this to GreenGlitchShakeBtn.css */

.btn-green-glitchshake {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  background-color: #86efac;
  border: none;
  cursor: pointer;
  position: relative;
}
.btn-green-glitchshake:hover {
  animation: glitch-anim 0.3s infinite;
  background-color: #22c55e;
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

export default GreenGlitchShakeBtn;
