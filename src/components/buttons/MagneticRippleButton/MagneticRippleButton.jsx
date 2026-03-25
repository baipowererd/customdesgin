import React, { useRef, useState } from 'react';
import './MagneticRippleButton.css';

const MagneticRippleButton = () => {
  const buttonRef = useRef(null);
  const [rippleStyle, setRippleStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Magnetic pull effect
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / 4;
    const deltaY = (y - centerY) / 4;

    buttonRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translate(0px, 0px)';
    }
  };

  const handleClick = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      left: x + 'px',
      top: y + 'px',
      width: size + 'px',
      height: size + 'px',
    };

    setRippleStyle(newRipple);

    // reset after animation
    setTimeout(() => {
      setRippleStyle({});
    }, 600);
  };

  return (
    <div className="magnetic-wrapper">
      <button
        ref={buttonRef}
        className="magnetic-ripple-btn"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <span>Magnetic Effect</span>
        {rippleStyle.width && (
          <span className="ripple" style={rippleStyle}></span>
        )}
      </button>
    </div>
  );
};

export const code = `import React, { useRef, useState } from 'react';
import './MagneticRippleButton.css';

const MagneticRippleButton = () => {
  const buttonRef = useRef(null);
  const [rippleStyle, setRippleStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Magnetic pull effect
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / 4;
    const deltaY = (y - centerY) / 4;
    
    buttonRef.current.style.transform = \`translate(\\\${deltaX}px, \\\${deltaY}px)\`;
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translate(0px, 0px)';
    }
  };

  const handleClick = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    setRippleStyle({
      left: x + 'px',
      top: y + 'px',
      width: size + 'px',
      height: size + 'px',
    });
    
    setTimeout(() => {
      setRippleStyle({});
    }, 600);
  };

  return (
    <div className="magnetic-wrapper">
      <button
        ref={buttonRef}
        className="magnetic-ripple-btn"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <span>Magnetic Effect</span>
        {rippleStyle.width && (
          <span className="ripple" style={rippleStyle}></span>
        )}
      </button>
    </div>
  );
};

export default MagneticRippleButton;

/* CSS */
/* Add this to MagneticRippleButton.css */
.magnetic-wrapper {
  padding: 20px;
}

.magnetic-ripple-btn {
  position: relative;
  padding: 16px 36px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background: #27272a;
  border: 1px solid #3f3f46;
  border-radius: 12px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.magnetic-ripple-btn:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.25);
  border-color: #52525b;
}

.magnetic-ripple-btn span {
  position: relative;
  z-index: 2;
  pointer-events: none;
}

.magnetic-ripple-btn .ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0);
  animation: ripple-effect 0.6s linear;
  pointer-events: none;
  z-index: 1;
}

@keyframes ripple-effect {
  to {
    transform: scale(2.5);
    opacity: 0;
  }
}
`;

export default MagneticRippleButton;
