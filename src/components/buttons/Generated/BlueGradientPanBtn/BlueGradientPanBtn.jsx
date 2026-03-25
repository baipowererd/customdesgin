import React from 'react';
import './BlueGradientPanBtn.css';

const BlueGradientPanBtn = () => {
  return (
    <button className="btn-blue-gradientpan">
      <span>BlueGradientPanBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './BlueGradientPanBtn.css';

const BlueGradientPanBtn = () => {
  return (
    <button className="btn-blue-gradientpan">
      <span>BlueGradientPanBtn</span>
    </button>
  );
};

export default BlueGradientPanBtn;

/* CSS */
/* Add this to BlueGradientPanBtn.css */

.btn-blue-gradientpan {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(45deg, #1e40af, #3b82f6, #93c5fd, #3b82f6);
  background-size: 300% 300%;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-position 0.5s, transform 0.2s;
}
.btn-blue-gradientpan:hover {
  background-position: 100% 50%;
  transform: scale(1.05);
}
`;

export default BlueGradientPanBtn;
