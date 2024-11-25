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
  weaknesses: string[];
  resistences: string[];
  immunities?: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}

export function Stats({
  advantages,
  weaknesses,
  resistences,
  immunities,
  stats,
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
    <div className="h-3/5 flex gap-7 p-4 bg-white dark:bg-[#2C2C2C] rounded-[35px] shadow-[2px_4px_11px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col gap-4 overflow-scroll px-4">
        {advantages && advantages.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold dark:text-white">Vantagens</h3>
            {renderIcons(advantages)}
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold dark:text-white">Fraquezas</h3>
          {renderIcons(weaknesses)}
        </div>

        <div>
          <h3 className="text-lg font-semibold dark:text-white">Resistências</h3>
          {renderIcons(resistences)}
        </div>

        {immunities && immunities.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold dark:text-white">Imunidades</h3>
            {renderIcons(immunities)}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold dark:text-white">Stats</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span className="font-medium dark:text-gray-300">HP:</span>
            <span>{stats.hp}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium dark:text-gray-300">Attack:</span>
            <span>{stats.attack}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium dark:text-gray-300">Defense:</span>
            <span>{stats.defense}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium dark:text-gray-300">Sp. Attack:</span>
            <span>{stats.specialAttack}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium dark:text-gray-300">Sp. Defense:</span>
            <span>{stats.specialDefense}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium dark:text-gray-300">Speed:</span>
            <span>{stats.speed}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-bold dark:text-gray-100">Total Base:</span>
            <span className="font-bold">{totalBase}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

