

import React from 'react';

const SkillsCard = ({ title, imageUrl, borderColor,isDarkMode }) => {
  return (
    <div className="skills-Card" style={{ borderColor }}>
      <img src={imageUrl} alt={title} className="card-image" />
      <h6 className="dark-mode">{title}</h6>
    </div>
  );
};

export default SkillsCard;
