import React from 'react';
import './IndigoGlitchShakeBtn.css';

const IndigoGlitchShakeBtn = () => {
  return (
    <button className="btn-indigo-glitchshake">
      <span>IndigoGlitchShakeBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './IndigoGlitchShakeBtn.css';

const IndigoGlitchShakeBtn = () => {
  return (
    <button className="btn-indigo-glitchshake">
      <span>IndigoGlitchShakeBtn</span>
    </button>
  );
};

export default IndigoGlitchShakeBtn;

/* CSS */
/* Add this to IndigoGlitchShakeBtn.css */

.btn-indigo-glitchshake {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  background-color: #a5b4fc;
  border: none;
  cursor: pointer;
  position: relative;
}
.btn-indigo-glitchshake:hover {
  animation: glitch-anim 0.3s infinite;
  background-color: #6366f1;
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

export default IndigoGlitchShakeBtn;
