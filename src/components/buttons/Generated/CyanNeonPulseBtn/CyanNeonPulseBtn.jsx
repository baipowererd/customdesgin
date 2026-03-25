import React from 'react';
import './CyanNeonPulseBtn.css';

const CyanNeonPulseBtn = () => {
  return (
    <button className="btn-cyan-neonpulse">
      <span>CyanNeonPulseBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './CyanNeonPulseBtn.css';

const CyanNeonPulseBtn = () => {
  return (
    <button className="btn-cyan-neonpulse">
      <span>CyanNeonPulseBtn</span>
    </button>
  );
};

export default CyanNeonPulseBtn;

/* CSS */
/* Add this to CyanNeonPulseBtn.css */

.btn-cyan-neonpulse {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #67e8f9;
  background-color: transparent;
  border: 2px solid #06b6d4;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 10px transparent;
  transition: all 0.3s;
}
.btn-cyan-neonpulse:hover {
  color: #fff;
  background-color: #06b6d4;
  box-shadow: 0 0 15px #06b6d4, 0 0 30px #06b6d4;
}
`;

export default CyanNeonPulseBtn;
