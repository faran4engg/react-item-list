import { FC } from "react";
import { infoMap } from "./selectedCharInfoMap";
import { SelectedCharacterInfoProps } from "./types";

const SelectedCharacterInfo: FC<SelectedCharacterInfoProps> = ({
  character,
}): any => (
  <>
    <img
      loading="lazy"
      className="object-cover object-center w-full h-auto"
      src={character.image}
      alt={character.name}
      height={100}
      width={100}
    />

    <div className="p-4">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
        ✍️ {character.name}
      </h1>

      {infoMap.map((info) => {
        const key = Object.keys(info)[0];
        const { icon, label } = info[key];
        const value =
          key === "location"
            ? character[key].name
            : key === "episode"
            ? character[key].length
            : character[key];

        return (
          <div
            key={label}
            className="flex items-center mt-4 text-gray-700 dark:text-gray-200"
          >
            <h1 className="px-2 text-sm">{`${icon} ${label} ${value}`}</h1>
          </div>
        );
      })}
    </div>
  </>
);

export default SelectedCharacterInfo;
