import React from 'react';
import './BlueUnderlineFlipBtn.css';

const BlueUnderlineFlipBtn = () => {
  return (
    <button className="btn-blue-underlineflip">
      <span>BlueUnderlineFlipBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './BlueUnderlineFlipBtn.css';

const BlueUnderlineFlipBtn = () => {
  return (
    <button className="btn-blue-underlineflip">
      <span>BlueUnderlineFlipBtn</span>
    </button>
  );
};

export default BlueUnderlineFlipBtn;

/* CSS */
/* Add this to BlueUnderlineFlipBtn.css */

.btn-blue-underlineflip {
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
.btn-blue-underlineflip::after {
  content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 100%; height: 2px;
  background-color: #3b82f6;
  transition: height 0.3s;
  z-index: -1;
}
.btn-blue-underlineflip:hover::after {
  height: 100%;
}
`;

export default BlueUnderlineFlipBtn;
