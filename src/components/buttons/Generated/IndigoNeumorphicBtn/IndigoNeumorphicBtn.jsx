import React from 'react';
import './IndigoNeumorphicBtn.css';

const IndigoNeumorphicBtn = () => {
  return (
    <button className="btn-indigo-neumorphic">
      <span>IndigoNeumorphicBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './IndigoNeumorphicBtn.css';

const IndigoNeumorphicBtn = () => {
  return (
    <button className="btn-indigo-neumorphic">
      <span>IndigoNeumorphicBtn</span>
    </button>
  );
};

export default IndigoNeumorphicBtn;

/* CSS */
/* Add this to IndigoNeumorphicBtn.css */

.btn-indigo-neumorphic {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #a5b4fc;
  background-color: #1a1a1e;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 6px 6px 12px #0d0d10, -6px -6px 12px #27272c;
  transition: all 0.2s;
}
.btn-indigo-neumorphic:hover {
  color: #6366f1;
}
.btn-indigo-neumorphic:active {
  box-shadow: inset 6px 6px 12px #0d0d10, inset -6px -6px 12px #27272c;
}
`;

export default IndigoNeumorphicBtn;
