import React from 'react';
import './OrangeOutlineSweepBtn.css';

const OrangeOutlineSweepBtn = () => {
  return (
    <button className="btn-orange-outlinesweep">
      <span>OrangeOutlineSweepBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './OrangeOutlineSweepBtn.css';

const OrangeOutlineSweepBtn = () => {
  return (
    <button className="btn-orange-outlinesweep">
      <span>OrangeOutlineSweepBtn</span>
    </button>
  );
};

export default OrangeOutlineSweepBtn;

/* CSS */
/* Add this to OrangeOutlineSweepBtn.css */

.btn-orange-outlinesweep {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fdba74;
  background-color: transparent;
  border: 2px solid #f97316;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s;
  z-index: 1;
}
.btn-orange-outlinesweep::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 0; height: 100%;
  background-color: #f97316;
  transition: width 0.3s ease;
  z-index: -1;
}
.btn-orange-outlinesweep:hover {
  color: #fff;
}
.btn-orange-outlinesweep:hover::before {
  width: 100%;
}
`;

export default OrangeOutlineSweepBtn;
