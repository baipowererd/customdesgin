import React from 'react';
import './BlueOutlineSweepBtn.css';

const BlueOutlineSweepBtn = () => {
  return (
    <button className="btn-blue-outlinesweep">
      <span>BlueOutlineSweepBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './BlueOutlineSweepBtn.css';

const BlueOutlineSweepBtn = () => {
  return (
    <button className="btn-blue-outlinesweep">
      <span>BlueOutlineSweepBtn</span>
    </button>
  );
};

export default BlueOutlineSweepBtn;

/* CSS */
/* Add this to BlueOutlineSweepBtn.css */

.btn-blue-outlinesweep {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #93c5fd;
  background-color: transparent;
  border: 2px solid #3b82f6;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s;
  z-index: 1;
}
.btn-blue-outlinesweep::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 0; height: 100%;
  background-color: #3b82f6;
  transition: width 0.3s ease;
  z-index: -1;
}
.btn-blue-outlinesweep:hover {
  color: #fff;
}
.btn-blue-outlinesweep:hover::before {
  width: 100%;
}
`;

export default BlueOutlineSweepBtn;
