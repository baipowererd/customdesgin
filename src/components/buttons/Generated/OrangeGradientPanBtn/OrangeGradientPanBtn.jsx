import React from 'react';
import './OrangeGradientPanBtn.css';

const OrangeGradientPanBtn = () => {
  return (
    <button className="btn-orange-gradientpan">
      <span>OrangeGradientPanBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './OrangeGradientPanBtn.css';

const OrangeGradientPanBtn = () => {
  return (
    <button className="btn-orange-gradientpan">
      <span>OrangeGradientPanBtn</span>
    </button>
  );
};

export default OrangeGradientPanBtn;

/* CSS */
/* Add this to OrangeGradientPanBtn.css */

.btn-orange-gradientpan {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(45deg, #9a3412, #f97316, #fdba74, #f97316);
  background-size: 300% 300%;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-position 0.5s, transform 0.2s;
}
.btn-orange-gradientpan:hover {
  background-position: 100% 50%;
  transform: scale(1.05);
}
`;

export default OrangeGradientPanBtn;
