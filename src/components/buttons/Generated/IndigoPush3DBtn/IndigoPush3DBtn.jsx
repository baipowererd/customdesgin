import React from 'react';
import './IndigoPush3DBtn.css';

const IndigoPush3DBtn = () => {
  return (
    <button className="btn-indigo-push3d">
      <span>IndigoPush3DBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './IndigoPush3DBtn.css';

const IndigoPush3DBtn = () => {
  return (
    <button className="btn-indigo-push3d">
      <span>IndigoPush3DBtn</span>
    </button>
  );
};

export default IndigoPush3DBtn;

/* CSS */
/* Add this to IndigoPush3DBtn.css */

.btn-indigo-push3d {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #6366f1;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 6px 0 #3730a3;
  transition: all 0.1s;
}
.btn-indigo-push3d:active {
  transform: translateY(6px);
  box-shadow: 0 0px 0 #3730a3;
}
.btn-indigo-push3d:hover {
  filter: brightness(1.1);
}
`;

export default IndigoPush3DBtn;
