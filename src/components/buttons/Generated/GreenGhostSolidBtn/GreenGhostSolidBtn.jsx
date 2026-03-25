import React from 'react';
import './GreenGhostSolidBtn.css';

const GreenGhostSolidBtn = () => {
  return (
    <button className="btn-green-ghostsolid">
      <span>GreenGhostSolidBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './GreenGhostSolidBtn.css';

const GreenGhostSolidBtn = () => {
  return (
    <button className="btn-green-ghostsolid">
      <span>GreenGhostSolidBtn</span>
    </button>
  );
};

export default GreenGhostSolidBtn;

/* CSS */
/* Add this to GreenGhostSolidBtn.css */

.btn-green-ghostsolid {
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
.btn-green-ghostsolid:hover {
  color: #fff;
  background-color: #22c55e;
  border-color: #22c55e;
  box-shadow: 0 4px 15px #166534;
}
`;

export default GreenGhostSolidBtn;
