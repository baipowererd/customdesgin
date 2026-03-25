import React from 'react';
import './BlueNeumorphicBtn.css';

const BlueNeumorphicBtn = () => {
  return (
    <button className="btn-blue-neumorphic">
      <span>BlueNeumorphicBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './BlueNeumorphicBtn.css';

const BlueNeumorphicBtn = () => {
  return (
    <button className="btn-blue-neumorphic">
      <span>BlueNeumorphicBtn</span>
    </button>
  );
};

export default BlueNeumorphicBtn;

/* CSS */
/* Add this to BlueNeumorphicBtn.css */

.btn-blue-neumorphic {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #93c5fd;
  background-color: #1a1a1e;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 6px 6px 12px #0d0d10, -6px -6px 12px #27272c;
  transition: all 0.2s;
}
.btn-blue-neumorphic:hover {
  color: #3b82f6;
}
.btn-blue-neumorphic:active {
  box-shadow: inset 6px 6px 12px #0d0d10, inset -6px -6px 12px #27272c;
}
`;

export default BlueNeumorphicBtn;
