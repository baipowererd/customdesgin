import React from 'react';
import './AmberProfileCard.css';

const AmberProfileCard = () => (
  <div className="card-profile-amber">
    <div className="card-banner"></div>
    <div className="card-avatar">J</div>
    <div className="card-body">
      <div className="card-name">Jane Doe</div>
      <div className="card-role">Senior Designer</div>
      <div className="card-stats">
        <div className="stat"><div className="stat-val">142</div><div className="stat-lbl">Posts</div></div>
        <div className="stat"><div className="stat-val">8.2k</div><div className="stat-lbl">Followers</div></div>
        <div className="stat"><div className="stat-val">312</div><div className="stat-lbl">Following</div></div>
      </div>
    </div>
  </div>
);

export const code = `
.card-profile-amber {
  width: 320px;
  background: #1a1508;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.card-profile-amber:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}
.card-profile-amber .card-banner {
  height: 100px;
  background: linear-gradient(135deg, #78350f, #f59e0b);
}
.card-profile-amber .card-avatar {
  width: 72px; height: 72px;
  border-radius: 50%;
  background: #f59e0b;
  border: 4px solid #1a1508;
  margin: -36px auto 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 28px; font-weight: 700; color: #fff;
}
.card-profile-amber .card-body {
  padding: 16px 24px 24px;
  text-align: center;
}
.card-profile-amber .card-name {
  font-size: 18px; font-weight: 600; color: #fff; margin-bottom: 4px;
}
.card-profile-amber .card-role {
  font-size: 13px; color: #fcd34d; margin-bottom: 16px;
}
.card-profile-amber .card-stats {
  display: flex; justify-content: space-around;
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 16px;
}
.card-profile-amber .stat { text-align: center; }
.card-profile-amber .stat-val { font-size: 18px; font-weight: 700; color: #f59e0b; }
.card-profile-amber .stat-lbl { font-size: 11px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 1px; }
`;
export default AmberProfileCard;
