import React from 'react';
import './BlueDiagonalSwipeBtn.css';

const BlueDiagonalSwipeBtn = () => {
  return (
    <button className="btn-blue-diagonalswipe">
      <span>BlueDiagonalSwipeBtn</span>
    </button>
  );
};

export const code = `import React from 'react';
import './BlueDiagonalSwipeBtn.css';

const BlueDiagonalSwipeBtn = () => {
  return (
    <button className="btn-blue-diagonalswipe">
      <span>BlueDiagonalSwipeBtn</span>
    </button>
  );
};

export default BlueDiagonalSwipeBtn;

/* CSS */
/* Add this to BlueDiagonalSwipeBtn.css */

.btn-blue-diagonalswipe {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #93c5fd;
  background-color: #222;
  border: 2px solid #222;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.4s;
  z-index: 1;
}
.btn-blue-diagonalswipe::before {
  content: '';
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: #3b82f6;
  transform: translateX(-100%) rotate(45deg);
  transform-origin: top left;
  transition: transform 0.4s;
  z-index: -1;
}
.btn-blue-diagonalswipe:hover {
  color: #fff;
  border-color: #3b82f6;
}
.btn-blue-diagonalswipe:hover::before {
  transform: translateX(0) rotate(0);
}
`;

export default BlueDiagonalSwipeBtn;
