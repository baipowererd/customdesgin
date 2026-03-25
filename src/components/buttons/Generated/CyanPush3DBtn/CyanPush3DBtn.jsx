import React from 'react';
import './CyanPush3DBtn.css';

const CyanPush3DBtn = () => {
  return (
    <button className="btn-cyan-push3d">
      <span>CyanPush3DBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './CyanPush3DBtn.css';

const CyanPush3DBtn = () => {
  return (
    <button className="btn-cyan-push3d">
      <span>CyanPush3DBtn</span>
    </button>
  );
};

export default CyanPush3DBtn;

/* CSS */
/* Add this to CyanPush3DBtn.css */

.btn-cyan-push3d {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #06b6d4;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 6px 0 #155e75;
  transition: all 0.1s;
}
.btn-cyan-push3d:active {
  transform: translateY(6px);
  box-shadow: 0 0px 0 #155e75;
}
.btn-cyan-push3d:hover {
  filter: brightness(1.1);
}
`;

export default CyanPush3DBtn;
