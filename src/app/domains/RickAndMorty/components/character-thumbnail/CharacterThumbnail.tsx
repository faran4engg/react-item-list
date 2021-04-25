import { FC } from "react";

export interface CharacterThumbnailProps {
  url: string;
}

const CharacterThumbnail: FC<CharacterThumbnailProps> = ({ url }) => {
  return (
    <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
      <img
        loading="lazy"
        src={url}
        alt="avatar"
        className="w-full bg-gray-300 bg-center bg-auto rounded-lg shadow-md"
      />
    </div>
  );
};

export default CharacterThumbnail;
