import React from 'react';
import './OrangeNeumorphicBtn.css';

const OrangeNeumorphicBtn = () => {
  return (
    <button className="btn-orange-neumorphic">
      <span>OrangeNeumorphicBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './OrangeNeumorphicBtn.css';

const OrangeNeumorphicBtn = () => {
  return (
    <button className="btn-orange-neumorphic">
      <span>OrangeNeumorphicBtn</span>
    </button>
  );
};

export default OrangeNeumorphicBtn;

/* CSS */
/* Add this to OrangeNeumorphicBtn.css */

.btn-orange-neumorphic {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fdba74;
  background-color: #1a1a1e;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 6px 6px 12px #0d0d10, -6px -6px 12px #27272c;
  transition: all 0.2s;
}
.btn-orange-neumorphic:hover {
  color: #f97316;
}
.btn-orange-neumorphic:active {
  box-shadow: inset 6px 6px 12px #0d0d10, inset -6px -6px 12px #27272c;
}
`;

export default OrangeNeumorphicBtn;
