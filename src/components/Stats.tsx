import { useMemo } from "react";

interface StatsProps {
  stats: Record<StatKeys, number>;
}

type StatKeys =
  | "hp"
  | "attack"
  | "defense"
  | "specialAttack"
  | "specialDefense"
  | "speed";

const statLabels: Record<StatKeys, string> = {
  hp: "Hp",
  attack: "Atk",
  defense: "Def",
  specialAttack: "Sp. Atk",
  specialDefense: "Sp. Def",
  speed: "Speed",
};

export function Stats({ stats }: StatsProps) {
  const totalBase = useMemo(
    () =>
      stats.hp +
      stats.attack +
      stats.defense +
      stats.specialAttack +
      stats.specialDefense +
      stats.speed,
    [stats]
  );

  const statusRange = {
    hp: { min: 1, max: 255 },
    attack: { min: 0, max: 255 },
    defense: { min: 0, max: 250 },
    specialAttack: { min: 0, max: 255 },
    specialDefense: { min: 0, max: 250 },
    speed: { min: 0, max: 180 },
  };
  
  return (
    <div className="w-1/2 flex gap-4 p-3 px-7 bg-white dark:bg-[#2C2C2C] overflow-hidden rounded-[35px] shadow-[2px_4px_11px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col flex-1 justify-center">
        <ul className="flex flex-col font-semibold gap-1">
          {Object.keys(stats).map((key) => {
            const statKey = key as StatKeys;
            const statValue = stats[statKey];
            const statMin = statusRange[statKey].min;
            const statMax = statusRange[statKey].max;
            const progressBarWidth =
              ((statValue - statMin) / (statMax - statMin)) * 100;

            return (
              <li className="flex items-center" key={statKey}>
                <span className="font-semibold w-1/3 text-right capitalize text-nowrap">
                  {statLabels[statKey]}:
                </span>

                <div className="relative w-2/3 h-2 bg-gray-300 rounded-full overflow-hidden mx-4">
                  <div
                    className="absolute top-0 left-0 h-full bg-red-600 rounded-full duration-300"
                    style={{ width: `${progressBarWidth}%` }}
                  ></div>
                </div>

                <span className="w-1/6">{statValue}</span>
              </li>
            );
          })}
          <li className="flex">
            <span className="font-bold w-[calc(26%+2px)] flex justify-end">Total:</span>
            <span className="w-2/3 mx-4">{totalBase}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
