import React from 'react';
import './BlueNeonPulseBtn.css';

const BlueNeonPulseBtn = () => {
  return (
    <button className="btn-blue-neonpulse">
      <span>BlueNeonPulseBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './BlueNeonPulseBtn.css';

const BlueNeonPulseBtn = () => {
  return (
    <button className="btn-blue-neonpulse">
      <span>BlueNeonPulseBtn</span>
    </button>
  );
};

export default BlueNeonPulseBtn;

/* CSS */
/* Add this to BlueNeonPulseBtn.css */

.btn-blue-neonpulse {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #93c5fd;
  background-color: transparent;
  border: 2px solid #3b82f6;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 10px transparent;
  transition: all 0.3s;
}
.btn-blue-neonpulse:hover {
  color: #fff;
  background-color: #3b82f6;
  box-shadow: 0 0 15px #3b82f6, 0 0 30px #3b82f6;
}
`;

export default BlueNeonPulseBtn;
