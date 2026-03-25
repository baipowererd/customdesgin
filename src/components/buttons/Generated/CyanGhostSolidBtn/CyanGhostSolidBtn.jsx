import React from 'react';
import './CyanGhostSolidBtn.css';

const CyanGhostSolidBtn = () => {
  return (
    <button className="btn-cyan-ghostsolid">
      <span>CyanGhostSolidBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './CyanGhostSolidBtn.css';

const CyanGhostSolidBtn = () => {
  return (
    <button className="btn-cyan-ghostsolid">
      <span>CyanGhostSolidBtn</span>
    </button>
  );
};

export default CyanGhostSolidBtn;

/* CSS */
/* Add this to CyanGhostSolidBtn.css */

.btn-cyan-ghostsolid {
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
.btn-cyan-ghostsolid:hover {
  color: #fff;
  background-color: #06b6d4;
  border-color: #06b6d4;
  box-shadow: 0 4px 15px #155e75;
}
`;

export default CyanGhostSolidBtn;
