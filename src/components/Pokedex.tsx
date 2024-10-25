import { useState, useEffect } from "react";
import { Card } from "./Card";
import loader from "../assets/backgroundCard.svg";
import { Funnel, MagnifyingGlass } from "@phosphor-icons/react";
import "../index.css";

interface GenerationRange {
  start: number;
  end: number;
}

const generationRanges: Record<string, GenerationRange> = {
  "National Dex": { start: 1, end: 1010 },
  "Gen 1": { start: 1, end: 151 },
  "Gen 2": { start: 152, end: 251 },
  "Gen 3": { start: 252, end: 386 },
  "Gen 4": { start: 387, end: 493 },
  "Gen 5": { start: 494, end: 649 },
  "Gen 6": { start: 650, end: 721 },
  "Gen 7": { start: 722, end: 809 },
  "Gen 8": { start: 810, end: 898 },
  "Gen 9": { start: 899, end: 1010 },
};

interface Pokemon {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  sprites: { other: { "official-artwork": { front_default: string } } };
}

export function Pokedex() {
  const [generation, setGeneration] = useState("Gen 1");
  const [pokemonList, setPokemonList] = useState([] as Pokemon[]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNationalDex = async () => {
    const { start, end } = generationRanges["National Dex"];
    const requests = [];
    for (let i = start; i <= end; i++) {
      requests.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => res.json()));
    }
    const results = await Promise.all(requests);
    setPokemonList(results);
  };

  useEffect(() => {
    setIsLoading(true);
    if (generation === "National Dex") {
      fetchNationalDex();
    } else {
      const fetchPokemonByGeneration = async () => {
        const { start, end } = generationRanges[generation];
        const requests = [];
        for (let i = start; i <= end; i++) {
          requests.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => res.json()));
        }
        const results = await Promise.all(requests);
        setPokemonList(results);
      };
      setIsLoading(false);
      
      fetchPokemonByGeneration();
    }
  }, [generation]);

  return (
    <main className="max-w-[calc(100%-65px)] h-auto mx-auto">
      <div className="w-full mx-auto my-7 flex justify-between items-center">
        <div className="bg-white dark:bg-[#2C2C2C] dark:text-white w-full max-w-[calc(50%-20px)] h-11 rounded-full flex items-center gap-2 shadow">
          <label htmlFor="search">
            <MagnifyingGlass size={17} weight="bold" className="mx-8" />
          </label>
          <input
            type="search"
            id="search"
            placeholder="Procure um pokémon por aqui..."
            className="dark:bg-[#2C2C2C] dark:text-white w-[82%] text-base font-semibold placeholder-[#9B9B9B] outline-none"
          />
        </div>

        <div className="bg-white dark:bg-[#2C2C2C] dark:text-white w-full max-w-[calc(50%-326px)] h-11 rounded-full flex items-center gap-2 shadow">
          <label htmlFor="selection">
            <Funnel size={17} weight="bold" className="ml-8" />
          </label>
          <select
            id="selection"
            value={generation}
            onChange={(e) => setGeneration(e.target.value)}
            className="w-[75%] dark:bg-[#2C2C2C] dark:text-white text-base font-semibold outline-none"
          >
            {Object.keys(generationRanges).map((gen) => (
              <option key={gen} value={gen}>
                {gen}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-full grid grid-cols-5 gap-7 mb-[32px]">
        {isLoading ? (
          <div className="flex justify-center items-center col-span-5">
            <img src={loader} alt="loader" className="w-24 loader" />
          </div>
        ) : (
          pokemonList.map((pokemon) => (
            <Card
              key={pokemon.id}
              primaryType={pokemon.types[0]?.type.name}
              secondaryType={pokemon.types[1]?.type.name}
              number={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other['official-artwork'].front_default}
            />
          ))
        )}
      </div>
    </main>
  );
}
