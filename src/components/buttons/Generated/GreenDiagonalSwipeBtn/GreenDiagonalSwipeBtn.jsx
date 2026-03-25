import React from 'react';
import './GreenDiagonalSwipeBtn.css';

const GreenDiagonalSwipeBtn = () => {
  return (
    <button className="btn-green-diagonalswipe">
      <span>GreenDiagonalSwipeBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './GreenDiagonalSwipeBtn.css';

const GreenDiagonalSwipeBtn = () => {
  return (
    <button className="btn-green-diagonalswipe">
      <span>GreenDiagonalSwipeBtn</span>
    </button>
  );
};

export default GreenDiagonalSwipeBtn;

/* CSS */
/* Add this to GreenDiagonalSwipeBtn.css */

.btn-green-diagonalswipe {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #86efac;
  background-color: #222;
  border: 2px solid #222;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.4s;
  z-index: 1;
}
.btn-green-diagonalswipe::before {
  content: '';
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: #22c55e;
  transform: translateX(-100%) rotate(45deg);
  transform-origin: top left;
  transition: transform 0.4s;
  z-index: -1;
}
.btn-green-diagonalswipe:hover {
  color: #fff;
  border-color: #22c55e;
}
.btn-green-diagonalswipe:hover::before {
  transform: translateX(0) rotate(0);
}
`;

export default GreenDiagonalSwipeBtn;
