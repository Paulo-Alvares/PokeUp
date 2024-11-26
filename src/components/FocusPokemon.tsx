import backgroundCard from "../assets/backgroundCard.svg";
import backgroundCardDark from "../assets/backgroundCardDark.svg";
import { useTheme } from "../Context/ThemeContext";

interface FocusPokemonProps {
  name: string;
  image: string;
  ability: string;
  description: string;
}

export function FocusPokemon({
  name,
  image,
  ability,
  description,
}: FocusPokemonProps) {
  const { theme } = useTheme();

  return (
    <div className="bg-white dark:bg-[#2C2C2C] dark:text-white w-5/12 rounded-[35px] p-7 gap-7 flex flex-col items-center justify-center relative shadow-[2px_4px_11px_rgba(0,0,0,0.25)]">
      <div className="relative w-4/5 flex items-center justify-center">
        {theme === "light" ? (
          <img src={backgroundCard} alt="background" className="w-3/4" />
        ) : (
          <img src={backgroundCardDark} alt="background" className="w-3/4" />
        )}
        <img src={image} alt={name} className="absolute w-full z-10" />
      </div>

      <div className="text-md font-semibold dark:text-white flex flex-col w-full gap-2">
        <p>
          <span className="text-lg dark:text-gray-300 font-bold">Habilidade:</span>
          <span className="ml-1 capitalize">{ability}</span>
        </p>

        <p>
          <span className="text-lg dark:text-gray-300 font-bold">Descrição:</span>
          <span className="ml-1">{description}</span>
        </p>
      </div>
    </div>
  );
}
