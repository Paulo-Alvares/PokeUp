import { useMemo } from "react";
import bugType from "../assets/type-icons/bug.svg";
import darkType from "../assets/type-icons/dark.svg";
import dragonType from "../assets/type-icons/dragon.svg";
import electricType from "../assets/type-icons/electric.svg";
import fairyType from "../assets/type-icons/fairy.svg";
import fightingType from "../assets/type-icons/fighting.svg";
import fireType from "../assets/type-icons/fire.svg";
import flyingType from "../assets/type-icons/flying.svg";
import ghostType from "../assets/type-icons/ghost.svg";
import grassType from "../assets/type-icons/grass.svg";
import groundType from "../assets/type-icons/ground.svg";
import iceType from "../assets/type-icons/ice.svg";
import normalType from "../assets/type-icons/normal.svg";
import poisonType from "../assets/type-icons/poison.svg";
import psychicType from "../assets/type-icons/psychic.svg";
import rockType from "../assets/type-icons/rock.svg";
import steelType from "../assets/type-icons/steel.svg";
import waterType from "../assets/type-icons/water.svg";

const typeIcons: { [key: string]: { icon: string; color: string } } = {
  bug: { icon: bugType, color: "#a6b71a" },
  dark: { icon: darkType, color: "#725744" },
  dragon: { icon: dragonType, color: "#7238f6" },
  electric: { icon: electricType, color: "#ebd23d" },
  fairy: { icon: fairyType, color: "#dfa5df" },
  fighting: { icon: fightingType, color: "#bb3327" },
  fire: { icon: fireType, color: "#f77d33" },
  flying: { icon: flyingType, color: "#a58de1" },
  ghost: { icon: ghostType, color: "#72589d" },
  grass: { icon: grassType, color: "#75c558" },
  ground: { icon: groundType, color: "#dac765" },
  ice: { icon: iceType, color: "#99d8d5" },
  normal: { icon: normalType, color: "#ada878" },
  poison: { icon: poisonType, color: "#9f439a" },
  psychic: { icon: psychicType, color: "#e76283" },
  rock: { icon: rockType, color: "#b7a133" },
  steel: { icon: steelType, color: "#b6b9d1" },
  water: { icon: waterType, color: "#688fef" },
};

interface StatsProps {
  advantages?: string[];
  weaknesses?: string[];
  resistences?: string[];
  immunities?: string[];
  ability: string;
  description: string;
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

export function Stats({
  advantages,
  weaknesses,
  resistences,
  immunities,
  stats,
  ability,
  description,
}: StatsProps) {
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

  const renderIcons = (typeList: string[]) => (
    <div className="grid grid-cols-3 gap-1">
      {typeList.map((type) => (
        <div
          key={type}
          className="flex items-center justify-center w-8 h-8 rounded-full"
          style={{ backgroundColor: typeIcons[type].color }}
        >
          <img src={typeIcons[type].icon} alt={type} className="w-3/5" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="h-1/2 flex gap-4 pt-3 px-7 bg-white dark:bg-[#2C2C2C] overflow-hidden rounded-[35px] shadow-[2px_4px_11px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col gap-4 overflow-scroll pr-3">
        {advantages && advantages.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold dark:text-white mb-1">Vantagens</h3>
            {renderIcons(advantages)}
          </div>
        )}

        {weaknesses && weaknesses.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold dark:text-white mb-1">Fraquezas</h3>
            {renderIcons(weaknesses)}
          </div>
        )}

        {resistences && resistences.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold dark:text-white mb-1">
              Resistências
            </h3>
            {renderIcons(resistences)}
          </div>
        )}

        {immunities && immunities.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold dark:text-white mb-1">
              Imunidades
            </h3>
            {renderIcons(immunities)}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 w-1/3">
        <div>
          <h3 className="text-lg font-semibold dark:text-white">Habilidade</h3>
          <span className="dark:text-gray-300 capitalize">{ability}</span>
        </div>

        <div>
          <h3 className="text-lg font-semibold dark:text-white">Descrição</h3>
          <p className="dark:text-gray-300">{description}</p>
        </div>
      </div>

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
