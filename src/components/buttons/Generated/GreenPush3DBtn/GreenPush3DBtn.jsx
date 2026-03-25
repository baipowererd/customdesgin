import React from 'react';
import './GreenPush3DBtn.css';

const GreenPush3DBtn = () => {
  return (
    <button className="btn-green-push3d">
      <span>GreenPush3DBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './GreenPush3DBtn.css';

const GreenPush3DBtn = () => {
  return (
    <button className="btn-green-push3d">
      <span>GreenPush3DBtn</span>
    </button>
  );
};

export default GreenPush3DBtn;

/* CSS */
/* Add this to GreenPush3DBtn.css */

.btn-green-push3d {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #22c55e;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 6px 0 #166534;
  transition: all 0.1s;
}
.btn-green-push3d:active {
  transform: translateY(6px);
  box-shadow: 0 0px 0 #166534;
}
.btn-green-push3d:hover {
  filter: brightness(1.1);
}
`;

export default GreenPush3DBtn;
