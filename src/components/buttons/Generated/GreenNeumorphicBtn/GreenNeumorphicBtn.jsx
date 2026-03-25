import React from 'react';
import './GreenNeumorphicBtn.css';

const GreenNeumorphicBtn = () => {
  return (
    <button className="btn-green-neumorphic">
      <span>GreenNeumorphicBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './GreenNeumorphicBtn.css';

const GreenNeumorphicBtn = () => {
  return (
    <button className="btn-green-neumorphic">
      <span>GreenNeumorphicBtn</span>
    </button>
  );
};

export default GreenNeumorphicBtn;

/* CSS */
/* Add this to GreenNeumorphicBtn.css */

.btn-green-neumorphic {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #86efac;
  background-color: #1a1a1e;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 6px 6px 12px #0d0d10, -6px -6px 12px #27272c;
  transition: all 0.2s;
}
.btn-green-neumorphic:hover {
  color: #22c55e;
}
.btn-green-neumorphic:active {
  box-shadow: inset 6px 6px 12px #0d0d10, inset -6px -6px 12px #27272c;
}
`;

export default GreenNeumorphicBtn;
