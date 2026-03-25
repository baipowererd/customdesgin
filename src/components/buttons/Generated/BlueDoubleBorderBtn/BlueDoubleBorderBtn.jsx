import React from 'react';
import './BlueDoubleBorderBtn.css';

const BlueDoubleBorderBtn = () => {
  return (
    <button className="btn-blue-doubleborder">
      <span>BlueDoubleBorderBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './BlueDoubleBorderBtn.css';

const BlueDoubleBorderBtn = () => {
  return (
    <button className="btn-blue-doubleborder">
      <span>BlueDoubleBorderBtn</span>
    </button>
  );
};

export default BlueDoubleBorderBtn;

/* CSS */
/* Add this to BlueDoubleBorderBtn.css */

.btn-blue-doubleborder {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #93c5fd;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}
.btn-blue-doubleborder::before, .btn-blue-doubleborder::after {
  content: '';
  position: absolute;
  width: 20px; height: 20px;
  border: 2px solid transparent;
  transition: 0.3s;
}
.btn-blue-doubleborder::before {
  top: 0; left: 0;
  border-top-color: #3b82f6;
  border-left-color: #3b82f6;
}
.btn-blue-doubleborder::after {
  bottom: 0; right: 0;
  border-bottom-color: #3b82f6;
  border-right-color: #3b82f6;
}
.btn-blue-doubleborder:hover {
  color: #3b82f6;
  letter-spacing: 2px;
}
.btn-blue-doubleborder:hover::before, .btn-blue-doubleborder:hover::after {
  width: 100%; height: 100%;
}
`;

export default BlueDoubleBorderBtn;
