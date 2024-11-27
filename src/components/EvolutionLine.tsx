import { CaretRight } from "@phosphor-icons/react";
import { EvolutionCard } from "./EvolutionCard";

interface EvolutionChain {
  id: number;
  name: string;
  image: string;
  types: { type: { name: string } }[];
}

interface EvolutionLineProps {
  evolutionChain: EvolutionChain[];
  currentPokemonId: number;
}

export function EvolutionLine({
  evolutionChain,
  currentPokemonId,
}: EvolutionLineProps) {
  if (evolutionChain.length === 1) {
    return (
      <div className="bg-white h-60 text-xl dark:bg-[#2C2C2C] dark:text-white rounded-[35px] p-4 shadow-[2px_4px_11px_rgba(0,0,0,0.25)] flex items-center justify-center font-semibold">
        <div className="flex items-center h-60">Pokémon de estágio único</div>
      </div>
    );
  }

  return (
    <div className="bg-white h-60 dark:bg-[#2C2C2C] dark:text-white rounded-[35px] p-4 shadow-[2px_4px_11px_rgba(0,0,0,0.25)] flex justify-center gap-5">
      {evolutionChain.map((evo, index) => (
        <div key={evo.id} className="flex items-center h-full">
          <EvolutionCard
            primaryType={evo.types[0].type.name}
            secondaryType={evo.types[1] ? evo.types[1].type.name : null}
            number={evo.id}
            name={evo.name}
            image={evo.image}
            isCurrent={evo.id === currentPokemonId}
          />

          {index < evolutionChain.length - 1 && (
            <span className="ml-6 text-xl dark:text-white text-black">
              <CaretRight size={35} weight="regular" />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
