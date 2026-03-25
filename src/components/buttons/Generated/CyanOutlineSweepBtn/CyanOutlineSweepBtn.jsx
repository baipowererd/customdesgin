import React from 'react';
import './CyanOutlineSweepBtn.css';

const CyanOutlineSweepBtn = () => {
  return (
    <button className="btn-cyan-outlinesweep">
      <span>CyanOutlineSweepBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './CyanOutlineSweepBtn.css';

const CyanOutlineSweepBtn = () => {
  return (
    <button className="btn-cyan-outlinesweep">
      <span>CyanOutlineSweepBtn</span>
    </button>
  );
};

export default CyanOutlineSweepBtn;

/* CSS */
/* Add this to CyanOutlineSweepBtn.css */

.btn-cyan-outlinesweep {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #67e8f9;
  background-color: transparent;
  border: 2px solid #06b6d4;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s;
  z-index: 1;
}
.btn-cyan-outlinesweep::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 0; height: 100%;
  background-color: #06b6d4;
  transition: width 0.3s ease;
  z-index: -1;
}
.btn-cyan-outlinesweep:hover {
  color: #fff;
}
.btn-cyan-outlinesweep:hover::before {
  width: 100%;
}
`;

export default CyanOutlineSweepBtn;
