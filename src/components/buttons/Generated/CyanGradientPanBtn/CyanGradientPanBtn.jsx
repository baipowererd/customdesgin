import React from 'react';
import './CyanGradientPanBtn.css';

const CyanGradientPanBtn = () => {
  return (
    <button className="btn-cyan-gradientpan">
      <span>CyanGradientPanBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './CyanGradientPanBtn.css';

const CyanGradientPanBtn = () => {
  return (
    <button className="btn-cyan-gradientpan">
      <span>CyanGradientPanBtn</span>
    </button>
  );
};

export default CyanGradientPanBtn;

/* CSS */
/* Add this to CyanGradientPanBtn.css */

.btn-cyan-gradientpan {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(45deg, #155e75, #06b6d4, #67e8f9, #06b6d4);
  background-size: 300% 300%;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-position 0.5s, transform 0.2s;
}
.btn-cyan-gradientpan:hover {
  background-position: 100% 50%;
  transform: scale(1.05);
}
`;

export default CyanGradientPanBtn;
