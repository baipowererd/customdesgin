import React from 'react';
import './GreenGradientPanBtn.css';

const GreenGradientPanBtn = () => {
  return (
    <button className="btn-green-gradientpan">
      <span>GreenGradientPanBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './GreenGradientPanBtn.css';

const GreenGradientPanBtn = () => {
  return (
    <button className="btn-green-gradientpan">
      <span>GreenGradientPanBtn</span>
    </button>
  );
};

export default GreenGradientPanBtn;

/* CSS */
/* Add this to GreenGradientPanBtn.css */

.btn-green-gradientpan {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(45deg, #166534, #22c55e, #86efac, #22c55e);
  background-size: 300% 300%;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-position 0.5s, transform 0.2s;
}
.btn-green-gradientpan:hover {
  background-position: 100% 50%;
  transform: scale(1.05);
}
`;

export default GreenGradientPanBtn;
