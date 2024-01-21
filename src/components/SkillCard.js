

import React from 'react';

const SkillsCard = ({ title, imageUrl, borderColor }) => {
  return (
    <div className="skills-Card" style={{ borderColor }}>
      <img src={imageUrl} alt={title} className="card-image" />
      <h6 className="card-title">{title}</h6>
    </div>
  );
};

export default SkillsCard;
