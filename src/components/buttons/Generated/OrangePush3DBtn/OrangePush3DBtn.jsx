import React from 'react';
import './OrangePush3DBtn.css';

const OrangePush3DBtn = () => {
  return (
    <button className="btn-orange-push3d">
      <span>OrangePush3DBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './OrangePush3DBtn.css';

const OrangePush3DBtn = () => {
  return (
    <button className="btn-orange-push3d">
      <span>OrangePush3DBtn</span>
    </button>
  );
};

export default OrangePush3DBtn;

/* CSS */
/* Add this to OrangePush3DBtn.css */

.btn-orange-push3d {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #f97316;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 6px 0 #9a3412;
  transition: all 0.1s;
}
.btn-orange-push3d:active {
  transform: translateY(6px);
  box-shadow: 0 0px 0 #9a3412;
}
.btn-orange-push3d:hover {
  filter: brightness(1.1);
}
`;

export default OrangePush3DBtn;
