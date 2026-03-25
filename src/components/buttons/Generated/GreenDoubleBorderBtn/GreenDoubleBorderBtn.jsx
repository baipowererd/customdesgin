import React from 'react';
import './GreenDoubleBorderBtn.css';

const GreenDoubleBorderBtn = () => {
  return (
    <button className="btn-green-doubleborder">
      <span>GreenDoubleBorderBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './GreenDoubleBorderBtn.css';

const GreenDoubleBorderBtn = () => {
  return (
    <button className="btn-green-doubleborder">
      <span>GreenDoubleBorderBtn</span>
    </button>
  );
};

export default GreenDoubleBorderBtn;

/* CSS */
/* Add this to GreenDoubleBorderBtn.css */

.btn-green-doubleborder {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #86efac;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}
.btn-green-doubleborder::before, .btn-green-doubleborder::after {
  content: '';
  position: absolute;
  width: 20px; height: 20px;
  border: 2px solid transparent;
  transition: 0.3s;
}
.btn-green-doubleborder::before {
  top: 0; left: 0;
  border-top-color: #22c55e;
  border-left-color: #22c55e;
}
.btn-green-doubleborder::after {
  bottom: 0; right: 0;
  border-bottom-color: #22c55e;
  border-right-color: #22c55e;
}
.btn-green-doubleborder:hover {
  color: #22c55e;
  letter-spacing: 2px;
}
.btn-green-doubleborder:hover::before, .btn-green-doubleborder:hover::after {
  width: 100%; height: 100%;
}
`;

export default GreenDoubleBorderBtn;
