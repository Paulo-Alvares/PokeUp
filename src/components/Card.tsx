import backgroundCard from "../assets/backgroundCard.svg";
import backgroundCardDark from "../assets/backgroundCardDark.svg";
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
import { useTheme } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";

interface CardProps {
  primaryType: string;
  secondaryType: string | null;
  number: number;
  name: string;
  image: string;
}

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

export function Card({
  primaryType,
  secondaryType,
  number,
  name,
  image,
}: CardProps) {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon/${number}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white dark:bg-[#2C2C2C] dark:text-white h-60 rounded-[35px] p-4 flex flex-col items-center justify-between relative shadow-[2px_4px_11px_rgba(0,0,0,0.25)] hover:-translate-y-2 duration-300 cursor-pointer"
    >
      <p className="text-lg font-semibold capitalize max-w-[90%] flex justify-between items-center overflow-hidden whitespace-nowrap">
        <span className="text-gray-500 text-xs font-semibold m-1 shrink-0">
          #{number}
        </span>
        <span className="overflow-hidden text-ellipsis">{name}</span>
      </p>

      <div className="relative w-full flex items-center justify-center">
        {theme === "light" ? (
          <img src={backgroundCard} alt="background" className="h-[75%]" />
        ) : (
          <img src={backgroundCardDark} alt="background" className="h-[75%]" />
        )}
        <img src={image} alt={name} className="absolute h-[95%] z-10" />
      </div>

      <div className="flex gap-3">
        <div
          className="w-8 h-8 rounded-full flex justify-center items-center"
          style={{ backgroundColor: typeIcons[primaryType].color }}
        >
          <img
            className="w-[60%]"
            src={typeIcons[primaryType].icon}
            alt={primaryType}
          />
        </div>
        {secondaryType && (
          <div
            className="w-8 h-8 rounded-full flex justify-center items-center"
            style={{ backgroundColor: typeIcons[secondaryType].color }}
          >
            <img
              className="w-[60%]"
              src={typeIcons[secondaryType].icon}
              alt={secondaryType}
            />
          </div>
        )}
      </div>
    </div>
  );
}
