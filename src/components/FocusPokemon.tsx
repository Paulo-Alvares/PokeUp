import backgroundCard from "../assets/backgroundCard.svg";
import backgroundCardDark from "../assets/backgroundCardDark.svg";
import { useTheme } from "../Context/ThemeContext";
import { TypeIcon } from "./TypeIcon";

interface FocusPokemonProps {
  name: string;
  image: string;
  primaryType: string;
  secondaryType: string | null;
}

export function FocusPokemon({
  name,
  image,
  primaryType,
  secondaryType,
}: FocusPokemonProps) {
  const { theme } = useTheme();

  return (
    <div className="bg-white dark:bg-[#2C2C2C] dark:text-white h-3/5 rounded-[35px] flex flex-col items-center justify-center relative shadow-[2px_4px_11px_rgba(0,0,0,0.25)]">
      <div className="relative h-full w-full flex items-center justify-center">
        {theme === "light" ? (
          <img src={backgroundCard} alt="background" className="h-3/4" />
        ) : (
          <img src={backgroundCardDark} alt="background" className="h-3/4" />
        )}
        <img src={image} alt={name} className="absolute h-full z-1" />
      </div>

      <div className="flex absolute top-4 left-4">
        {secondaryType
          ? TypeIcon([primaryType, secondaryType])
          : TypeIcon([primaryType])}
      </div>

      {/* <div className="text-md font-semibold dark:text-white flex flex-col w-full gap-2">
        <p>
          <span className="text-lg dark:text-gray-300 font-bold">Habilidade:</span>
          <span className="ml-1 capitalize">{ability}</span>
        </p>

        <p>
          <span className="text-lg dark:text-gray-300 font-bold">Descrição:</span>
          <span className="ml-1">{description}</span>
        </p>
      </div> */}
    </div>
  );
}
