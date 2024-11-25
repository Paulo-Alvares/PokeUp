import backgroundCard from "../assets/backgroundCard.svg";
import backgroundCardDark from "../assets/backgroundCardDark.svg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

interface PrevPokemonProps {
  number: number;
  name: string;
  image: string;
  prevOrNext: boolean;
}

export function PrevPokemon({
  number,
  name,
  image,
  prevOrNext,
}: PrevPokemonProps) {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon/${number}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white dark:bg-[#2C2C2C] dark:text-white rounded-[35px] relative w-64 h-16 p-6 flex gap-3 items-center justify-center shadow-[2px_4px_11px_rgba(0,0,0,0.25)] hover:-translate-y-2 duration-300 cursor-pointer"
    >
      <div className="relative w-16 flex items-center justify-center">
        {theme === "light" ? (
          <img src={backgroundCard} alt="background" className="h-12" />
        ) : (
          <img src={backgroundCardDark} alt="background" className="h-12" />
        )}
        <img src={image} alt={name} className="absolute h-14 z-10" />
      </div>
      <div className="flex flex-col justify-center items-center">
        {prevOrNext ? (
          <ArrowLeft size={20} weight="bold" />
        ) : (
          <ArrowRight size={20} weight="bold" />
        )}
        <p className="text-lg font-semibold capitalize flex justify-between items-center">
          <span className="text-gray-500 text-xs font-semibold m-1">
            #{number}
          </span>
          <span>{name}</span>
        </p>
      </div>
    </div>
  );
}
