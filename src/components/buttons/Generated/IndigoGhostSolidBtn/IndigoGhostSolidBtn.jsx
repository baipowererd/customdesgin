import React from 'react';
import './IndigoGhostSolidBtn.css';

const IndigoGhostSolidBtn = () => {
  return (
    <button className="btn-indigo-ghostsolid">
      <span>IndigoGhostSolidBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './IndigoGhostSolidBtn.css';

const IndigoGhostSolidBtn = () => {
  return (
    <button className="btn-indigo-ghostsolid">
      <span>IndigoGhostSolidBtn</span>
    </button>
  );
};

export default IndigoGhostSolidBtn;

/* CSS */
/* Add this to IndigoGhostSolidBtn.css */

.btn-indigo-ghostsolid {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(255,255,255,0.6);
  background-color: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}
.btn-indigo-ghostsolid:hover {
  color: #fff;
  background-color: #6366f1;
  border-color: #6366f1;
  box-shadow: 0 4px 15px #3730a3;
}
`;

export default IndigoGhostSolidBtn;
