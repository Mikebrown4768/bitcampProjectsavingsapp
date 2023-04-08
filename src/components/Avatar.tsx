import React from "react";

interface AvatarProps {
  imageUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  return <img className="rounded-full w-14 h-14 object-cover" src={imageUrl} alt="avatar" />;
};

export default Avatar;
