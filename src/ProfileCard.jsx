import React, { Children } from 'react';

const ProfileCard = ({ name, imagePath, Children }) => {
  return (
    <>
      <img src={imagePath} alt={name} />
      <p>{name}</p>
      <h3>{Children}</h3>
    </>
  );
};

export default ProfileCard;
