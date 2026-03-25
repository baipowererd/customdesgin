import React from 'react';
import './VioletHoverCard.css';

const VioletHoverCard = () => (
  <div className="card-hover-violet">
    <div className="overlay"></div>
    <div className="hover-content">
      <div className="hover-tag">Featured</div>
      <div className="hover-title">Hover to Reveal</div>
      <div className="hover-desc">Additional details slide into view with a smooth transition on hover.</div>
    </div>
  </div>
);

export const code = `
.card-hover-violet {
  width: 320px; height: 200px;
  background: linear-gradient(135deg, #4c1d95, #111);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex; align-items: flex-end;
}
.card-hover-violet .overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%);
  transition: background 0.4s;
}
.card-hover-violet:hover .overlay {
  background: linear-gradient(to top, #4c1d95ee 0%, #4c1d9588 100%);
}
.card-hover-violet .hover-content {
  position: relative; z-index: 2;
  padding: 20px 24px;
  transform: translateY(20px);
  transition: transform 0.4s;
}
.card-hover-violet:hover .hover-content {
  transform: translateY(0);
}
.card-hover-violet .hover-tag {
  font-size: 11px; text-transform: uppercase; letter-spacing: 2px;
  color: #c4b5fd; margin-bottom: 6px; font-weight: 600;
}
.card-hover-violet .hover-title {
  font-size: 20px; font-weight: 700; color: #fff; margin-bottom: 8px;
}
.card-hover-violet .hover-desc {
  font-size: 13px; color: rgba(255,255,255,0.6);
  opacity: 0; transform: translateY(10px);
  transition: opacity 0.4s 0.1s, transform 0.4s 0.1s;
}
.card-hover-violet:hover .hover-desc {
  opacity: 1; transform: translateY(0);
}
`;
export default VioletHoverCard;
