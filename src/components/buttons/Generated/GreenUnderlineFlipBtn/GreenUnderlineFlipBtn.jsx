import React from 'react';
import './GreenUnderlineFlipBtn.css';

const GreenUnderlineFlipBtn = () => {
  return (
    <button className="btn-green-underlineflip">
      <span>GreenUnderlineFlipBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './GreenUnderlineFlipBtn.css';

const GreenUnderlineFlipBtn = () => {
  return (
    <button className="btn-green-underlineflip">
      <span>GreenUnderlineFlipBtn</span>
    </button>
  );
};

export default GreenUnderlineFlipBtn;

/* CSS */
/* Add this to GreenUnderlineFlipBtn.css */

.btn-green-underlineflip {
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
.btn-green-underlineflip::after {
  content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 100%; height: 2px;
  background-color: #22c55e;
  transition: height 0.3s;
  z-index: -1;
}
.btn-green-underlineflip:hover::after {
  height: 100%;
}
`;

export default GreenUnderlineFlipBtn;
