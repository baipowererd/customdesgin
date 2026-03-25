import React from 'react';
import './IndigoGradientPanBtn.css';

const IndigoGradientPanBtn = () => {
  return (
    <button className="btn-indigo-gradientpan">
      <span>IndigoGradientPanBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './IndigoGradientPanBtn.css';

const IndigoGradientPanBtn = () => {
  return (
    <button className="btn-indigo-gradientpan">
      <span>IndigoGradientPanBtn</span>
    </button>
  );
};

export default IndigoGradientPanBtn;

/* CSS */
/* Add this to IndigoGradientPanBtn.css */

.btn-indigo-gradientpan {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(45deg, #3730a3, #6366f1, #a5b4fc, #6366f1);
  background-size: 300% 300%;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-position 0.5s, transform 0.2s;
}
.btn-indigo-gradientpan:hover {
  background-position: 100% 50%;
  transform: scale(1.05);
}
`;

export default IndigoGradientPanBtn;
