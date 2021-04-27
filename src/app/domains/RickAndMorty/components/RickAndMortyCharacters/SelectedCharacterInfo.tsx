import { FC } from "react";
import { SelectedCharacterInfoProps } from "./types";

const SelectedCharacterInfo: FC<SelectedCharacterInfoProps> = ({
  character: {
    image,
    name,
    status,
    location: { name: locationName },
    gender,
    species,
    episode,
  },
}): any => (
  <>
    <img
      loading="lazy"
      className="object-cover object-center w-full h-auto"
      src={image}
      alt={name}
    />

    <div className="p-4">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
        ✍️ {name}
      </h1>

      <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
        <h1 className="px-2 text-sm">❣️ Status: {status}</h1>
      </div>

      <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
        <h1 className="px-2 text-sm">🌎 Location: {locationName}</h1>
      </div>

      <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
        <h1 className="px-2 text-sm">➡️ Gender: {gender}</h1>
      </div>
      <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
        <h1 className="px-2 text-sm">🤖 Species: {species}</h1>
      </div>
      <div className="flex items-center mt-4 mb-12 text-gray-700 dark:text-gray-200">
        <h1 className="px-2 text-sm">🎬 No of Episodes: {episode.length}</h1>
      </div>
    </div>
  </>
);

export default SelectedCharacterInfo;
