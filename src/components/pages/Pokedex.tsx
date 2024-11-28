import { useState, useEffect, useRef } from "react";
import { Card } from "../Card";
import loader from "../../assets/backgroundCard.svg";
import { CaretDown, CaretUp, Funnel, MagnifyingGlass } from "@phosphor-icons/react";
import "../../index.css";
import axios from "axios";
import { Navbar } from "../Navbar";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchPokemonByGeneration = async () => {
      try {
        setIsLoading(true);
        const { start, end } = generationRanges[generation];
        const requests = Array.from({ length: end - start + 1 }, (_, i) =>
          axios.get(`https://pokeapi.co/api/v2/pokemon/${start + i}`)
        );
        const results = await Promise.all(requests);
        setPokemonList(results.map((res) => res.data));
      } catch (error) {
        console.error(`Error fetching generation ${generation}:`, error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonByGeneration();
  }, [generation]);

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cleanPokemonName = (name: string) => name.split("-")[0];

  return (
    <>
      <Navbar />

      <main className="max-w-[95%] mx-auto flex flex-col gap-7">
        <div className="w-full grid gap-7 grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="col-span-3 md:col-span-2 flex items-center bg-white dark:bg-[#2C2C2C] dark:text-white h-11 rounded-full shadow-md px-4">
            <MagnifyingGlass size={17} weight="bold" />
            <input
              type="search"
              id="search"
              placeholder="Procure um pokémon por aqui..."
              className="dark:bg-[#2C2C2C] dark:text-white w-full text-base font-semibold placeholder-[#9B9B9B] outline-none ml-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div
            ref={dropdownRef}
            onClick={toggleDropdown}
            className="relative col-span-3 md:col-span-1 lg:col-start-4 xl:col-start-5 flex items-center bg-white dark:bg-[#2C2C2C] dark:text-white h-11 rounded-full shadow-md px-4 cursor-pointer font-semibold z-50 duration-300 hover:bg-[#DD2C00] hover:text-white dark:hover:bg-[#DD2C00]"
          >
            <Funnel size={17} weight="bold" />
            <div className="w-full text-center ml-2">{generation}</div>
            {isOpen && (
              <div className="absolute top-full left-0 w-full rounded-md dropdown">
                {Object.keys(generationRanges).map((gen) => (
                  <div
                    key={gen}
                    onClick={() => {
                      setGeneration(gen);
                      setIsOpen(false);
                    }}
                    className="bg-white dark:bg-[#2C2C2C] dark:text-white shadow-[2px_4px_11px_rgba(0,0,0,0.25)] text-center m-1 p-2 rounded-full cursor-pointer hover:-translate-y-2 text-black duration-300 hover:bg-[#DD2C00] hover:text-white dark:hover:bg-[#DD2C00]"
                  >
                    {gen}
                  </div>
                ))}
              </div>
            )}
            {isOpen ? (
              <CaretUp size={17} weight="bold" />
            ) : (
              <CaretDown size={17} weight="bold" />
            )}
          </div>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 mb-[32px]">
          {isLoading ? (
            <div className="flex justify-center items-center col-span-5">
              <img src={loader} alt="loader" className="w-24 loader" />
            </div>
          ) : (
            filteredPokemonList.map((pokemon) => (
              <Card
                key={pokemon.id}
                primaryType={pokemon.types[0]?.type.name}
                secondaryType={pokemon.types[1]?.type.name}
                number={pokemon.id}
                name={cleanPokemonName(pokemon.name)}
                image={pokemon.sprites.other["official-artwork"].front_default}
              />
            ))
          )}
        </div>
      </main>
    </>
  );
}
