import React from 'react';
import './IndigoOutlineSweepBtn.css';

const IndigoOutlineSweepBtn = () => {
  return (
    <button className="btn-indigo-outlinesweep">
      <span>IndigoOutlineSweepBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './IndigoOutlineSweepBtn.css';

const IndigoOutlineSweepBtn = () => {
  return (
    <button className="btn-indigo-outlinesweep">
      <span>IndigoOutlineSweepBtn</span>
    </button>
  );
};

export default IndigoOutlineSweepBtn;

/* CSS */
/* Add this to IndigoOutlineSweepBtn.css */

.btn-indigo-outlinesweep {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #a5b4fc;
  background-color: transparent;
  border: 2px solid #6366f1;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s;
  z-index: 1;
}
.btn-indigo-outlinesweep::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 0; height: 100%;
  background-color: #6366f1;
  transition: width 0.3s ease;
  z-index: -1;
}
.btn-indigo-outlinesweep:hover {
  color: #fff;
}
.btn-indigo-outlinesweep:hover::before {
  width: 100%;
}
`;

export default IndigoOutlineSweepBtn;
