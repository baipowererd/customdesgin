import React from 'react';
import './CyanUnderlineFlipBtn.css';

const CyanUnderlineFlipBtn = () => {
  return (
    <button className="btn-cyan-underlineflip">
      <span>CyanUnderlineFlipBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './CyanUnderlineFlipBtn.css';

const CyanUnderlineFlipBtn = () => {
  return (
    <button className="btn-cyan-underlineflip">
      <span>CyanUnderlineFlipBtn</span>
    </button>
  );
};

export default CyanUnderlineFlipBtn;

/* CSS */
/* Add this to CyanUnderlineFlipBtn.css */

.btn-cyan-underlineflip {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
}
.btn-cyan-underlineflip::after {
  content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 100%; height: 2px;
  background-color: #06b6d4;
  transition: height 0.3s;
  z-index: -1;
}
.btn-cyan-underlineflip:hover::after {
  height: 100%;
}
`;

export default CyanUnderlineFlipBtn;
