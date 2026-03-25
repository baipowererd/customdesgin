import React from 'react';
import './OrangeGlitchShakeBtn.css';

const OrangeGlitchShakeBtn = () => {
  return (
    <button className="btn-orange-glitchshake">
      <span>OrangeGlitchShakeBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './OrangeGlitchShakeBtn.css';

const OrangeGlitchShakeBtn = () => {
  return (
    <button className="btn-orange-glitchshake">
      <span>OrangeGlitchShakeBtn</span>
    </button>
  );
};

export default OrangeGlitchShakeBtn;

/* CSS */
/* Add this to OrangeGlitchShakeBtn.css */

.btn-orange-glitchshake {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  background-color: #fdba74;
  border: none;
  cursor: pointer;
  position: relative;
}
.btn-orange-glitchshake:hover {
  animation: glitch-anim 0.3s infinite;
  background-color: #f97316;
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

export default OrangeGlitchShakeBtn;
