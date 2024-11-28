import backgroundCard from "../assets/backgroundCard.svg";
import backgroundCardDark from "../assets/backgroundCardDark.svg";
import { useTheme } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { TypeIcon } from "./TypeIcon";

interface EvolutionCardProps {
  primaryType: string;
  secondaryType: string | null;
  number: number;
  name: string;
  image: string;
  isCurrent: boolean;
}

export function EvolutionCard({
  primaryType,
  secondaryType,
  number,
  name,
  image,
  isCurrent,
}: EvolutionCardProps) {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (!isCurrent) {
      navigate(`/pokemon/${number}`);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={`dark:text-white p-2 gap-2 flex flex-col w-60 items-center rounded-[35px] relative h-full border-2 dark:border-[#2C2C2C] border-white ${
        isCurrent
          ? "cursor-default border-zinc-300 dark:border-zinc-600"
          : "hover:border-red-600 hover:dark:border-red-600 cursor-pointer duration-300"
      }`}
    >
      <p className="text-lg font-semibold capitalize max-w-[90%] flex justify-between items-center">
        <span className="text-gray-500 text-xs font-semibold m-1 shrink-0">
          #{number}
        </span>
        <span>{name}</span>
      </p>

      <div className="relative w-full h-3/5 flex items-center justify-center">
        {theme === "light" ? (
          <img
            src={backgroundCard}
            alt="background"
            className="h-3/5 object-contain"
          />
        ) : (
          <img
            src={backgroundCardDark}
            alt="background"
            className="h-3/5 object-contain"
          />
        )}
        <img
          src={image}
          alt={name}
          className="absolute h-full z-1 object-contain"
        />
      </div>

      <div className="w-full flex justify-center">
        {secondaryType
          ? TypeIcon([primaryType, secondaryType])
          : TypeIcon([primaryType])}
      </div>
    </div>
  );
}
