import React from 'react';
import './OrangeNeonPulseBtn.css';

const OrangeNeonPulseBtn = () => {
  return (
    <button className="btn-orange-neonpulse">
      <span>OrangeNeonPulseBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './OrangeNeonPulseBtn.css';

const OrangeNeonPulseBtn = () => {
  return (
    <button className="btn-orange-neonpulse">
      <span>OrangeNeonPulseBtn</span>
    </button>
  );
};

export default OrangeNeonPulseBtn;

/* CSS */
/* Add this to OrangeNeonPulseBtn.css */

.btn-orange-neonpulse {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fdba74;
  background-color: transparent;
  border: 2px solid #f97316;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 10px transparent;
  transition: all 0.3s;
}
.btn-orange-neonpulse:hover {
  color: #fff;
  background-color: #f97316;
  box-shadow: 0 0 15px #f97316, 0 0 30px #f97316;
}
`;

export default OrangeNeonPulseBtn;
