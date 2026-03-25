import React from 'react';
import './OrangeGhostSolidBtn.css';

const OrangeGhostSolidBtn = () => {
  return (
    <button className="btn-orange-ghostsolid">
      <span>OrangeGhostSolidBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './OrangeGhostSolidBtn.css';

const OrangeGhostSolidBtn = () => {
  return (
    <button className="btn-orange-ghostsolid">
      <span>OrangeGhostSolidBtn</span>
    </button>
  );
};

export default OrangeGhostSolidBtn;

/* CSS */
/* Add this to OrangeGhostSolidBtn.css */

.btn-orange-ghostsolid {
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
.btn-orange-ghostsolid:hover {
  color: #fff;
  background-color: #f97316;
  border-color: #f97316;
  box-shadow: 0 4px 15px #9a3412;
}
`;

export default OrangeGhostSolidBtn;
