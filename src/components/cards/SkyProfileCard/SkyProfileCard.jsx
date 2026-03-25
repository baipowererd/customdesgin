import React from 'react';
import './SkyProfileCard.css';

const SkyProfileCard = () => (
  <div className="card-profile-sky">
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
.card-profile-sky {
  width: 320px;
  background: #0a1520;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.card-profile-sky:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}
.card-profile-sky .card-banner {
  height: 100px;
  background: linear-gradient(135deg, #075985, #0ea5e9);
}
.card-profile-sky .card-avatar {
  width: 72px; height: 72px;
  border-radius: 50%;
  background: #0ea5e9;
  border: 4px solid #0a1520;
  margin: -36px auto 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 28px; font-weight: 700; color: #fff;
}
.card-profile-sky .card-body {
  padding: 16px 24px 24px;
  text-align: center;
}
.card-profile-sky .card-name {
  font-size: 18px; font-weight: 600; color: #fff; margin-bottom: 4px;
}
.card-profile-sky .card-role {
  font-size: 13px; color: #7dd3fc; margin-bottom: 16px;
}
.card-profile-sky .card-stats {
  display: flex; justify-content: space-around;
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 16px;
}
.card-profile-sky .stat { text-align: center; }
.card-profile-sky .stat-val { font-size: 18px; font-weight: 700; color: #0ea5e9; }
.card-profile-sky .stat-lbl { font-size: 11px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 1px; }
`;
export default SkyProfileCard;
