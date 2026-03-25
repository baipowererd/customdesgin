import React from 'react';
import './IndigoNeonPulseBtn.css';

const IndigoNeonPulseBtn = () => {
  return (
    <button className="btn-indigo-neonpulse">
      <span>IndigoNeonPulseBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './IndigoNeonPulseBtn.css';

const IndigoNeonPulseBtn = () => {
  return (
    <button className="btn-indigo-neonpulse">
      <span>IndigoNeonPulseBtn</span>
    </button>
  );
};

export default IndigoNeonPulseBtn;

/* CSS */
/* Add this to IndigoNeonPulseBtn.css */

.btn-indigo-neonpulse {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #a5b4fc;
  background-color: transparent;
  border: 2px solid #6366f1;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 10px transparent;
  transition: all 0.3s;
}
.btn-indigo-neonpulse:hover {
  color: #fff;
  background-color: #6366f1;
  box-shadow: 0 0 15px #6366f1, 0 0 30px #6366f1;
}
`;

export default IndigoNeonPulseBtn;
