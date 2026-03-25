import React from 'react';
import './IndigoUnderlineFlipBtn.css';

const IndigoUnderlineFlipBtn = () => {
  return (
    <button className="btn-indigo-underlineflip">
      <span>IndigoUnderlineFlipBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './IndigoUnderlineFlipBtn.css';

const IndigoUnderlineFlipBtn = () => {
  return (
    <button className="btn-indigo-underlineflip">
      <span>IndigoUnderlineFlipBtn</span>
    </button>
  );
};

export default IndigoUnderlineFlipBtn;

/* CSS */
/* Add this to IndigoUnderlineFlipBtn.css */

.btn-indigo-underlineflip {
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
.btn-indigo-underlineflip::after {
  content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 100%; height: 2px;
  background-color: #6366f1;
  transition: height 0.3s;
  z-index: -1;
}
.btn-indigo-underlineflip:hover::after {
  height: 100%;
}
`;

export default IndigoUnderlineFlipBtn;
