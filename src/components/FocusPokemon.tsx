import backgroundCard from "../assets/backgroundCard.svg";
import backgroundCardDark from "../assets/backgroundCardDark.svg";
import { useTheme } from "../Context/ThemeContext";
import { TypeIcon } from "./TypeIcon";

interface FocusPokemonProps {
  name: string;
  image: string;
  primaryType: string;
  secondaryType: string | null;
  ability: string;
}

export function FocusPokemon({
  name,
  image,
  primaryType,
  secondaryType,
  ability,
}: FocusPokemonProps) {
  const { theme } = useTheme();

  return (
    <div className="bg-white text-lg dark:bg-[#2C2C2C] dark:text-white w-3/12 max-h-[77vh] rounded-[35px] flex flex-col gap-7 items-center justify-center relative shadow-[2px_4px_11px_rgba(0,0,0,0.25)]">
      <div className="w-full flex justify-center mt-4">
        {secondaryType
          ? TypeIcon([primaryType, secondaryType])
          : TypeIcon([primaryType])}
      </div>

      <div className="relative h-full w-full flex items-center justify-center">
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
          className="absolute h-4/5 z-1 object-contain"
        />
      </div>

      <p className="mb-4">
        <span className="font-bold">Habilidade:</span>
        <span className="ml-1 capitalize font-medium">{ability.replace(/-/g, " ")}</span>
      </p>
    </div>
  );
}
