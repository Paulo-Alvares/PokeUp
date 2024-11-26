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
    <div className="h-1/2 flex gap-4 pt-3 px-7 bg-white dark:bg-[#2C2C2C] overflow-hidden rounded-[35px] shadow-[2px_4px_11px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-semibold dark:text-white">Stats</h3>
        <ul className="flex flex-col font-semibold">
          {Object.keys(stats).map((key) => {
            const statKey = key as StatKeys;
            const statValue = stats[statKey];
            const statMin = statusRange[statKey].min;
            const statMax = statusRange[statKey].max;
            const progressBarWidth =
              ((statValue - statMin) / (statMax - statMin)) * 100;

            return (
              <li className="flex h-1/6" key={statKey}>
                <div className="flex items-center w-full gap-4">
                  <span className="font-semibold dark:text-gray-300 w-1/5 text-right capitalize text-nowrap">
                    {statLabels[statKey]}:
                  </span>

                  <div className="relative w-2/3 h-2 bg-gray-300 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-red-600 rounded-full duration-300"
                      style={{ width: `${progressBarWidth}%` }}
                    ></div>
                  </div>

                  <span>{statValue}</span>
                </div>
              </li>
            );
          })}
          <li className="flex gap-4">
            <span className="font-bold">Total Base:</span>
            <span>{totalBase}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
