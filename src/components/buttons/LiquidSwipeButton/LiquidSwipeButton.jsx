import React from 'react';
import './LiquidSwipeButton.css';

const LiquidSwipeButton = () => {
    return (
        <button className="liquid-btn">
            <span>Liquid Swipe</span>
            <div className="liquid"></div>
        </button>
    );
};

export const code = `import React from 'react';
import './LiquidSwipeButton.css';

const LiquidSwipeButton = () => {
  return (
    <button className="liquid-btn">
      <span>Liquid Swipe</span>
      <div className="liquid"></div>
    </button>
  );
};

export default LiquidSwipeButton;

/* CSS */
/* Add this to LiquidSwipeButton.css */
.liquid-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background: transparent;
  border: 2px solid #00f2fe;
  border-radius: 99px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  transition: color 0.4s ease;
  z-index: 1;
}

.liquid-btn span {
  position: relative;
  z-index: 2;
}

.liquid-btn:hover {
  color: #fff;
}

.liquid-btn .liquid {
  position: absolute;
  top: -80px;
  left: 0;
  width: 100%;
  height: 200px;
  background: #00f2fe;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  z-index: -1;
  transform: translateY(100%);
}

.liquid-btn .liquid::before,
.liquid-btn .liquid::after {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  top: 0;
  left: 50%;
  transform: translate(-50%, -75%);
}

.liquid-btn .liquid::before {
  border-radius: 45%;
  background: rgba(20, 20, 20, 1);
  animation: animate 5s linear infinite;
}

.liquid-btn .liquid::after {
  border-radius: 40%;
  background: rgba(20, 20, 20, 0.5);
  animation: animate 10s linear infinite;
}

.liquid-btn:hover .liquid {
  transform: translateY(0);
}

@keyframes animate {
  0% { transform: translate(-50%, -75%) rotate(0deg); }
  100% { transform: translate(-50%, -75%) rotate(360deg); }
}
`;

export default LiquidSwipeButton;
