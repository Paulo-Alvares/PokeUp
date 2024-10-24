import { useEffect, useState } from "react";
import { Card } from "./Card";
import loader from "../assets/backgroundCard.svg";
import "../index.css";

interface Pokemon {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  sprites: { other: { "official-artwork": { front_default: string } } };
}

interface PokemonResult {
  name: string;
  url: string;
}

export function Pokedex() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon?limit=50"
  );
  const [loading, setLoading] = useState<boolean>(false);
  const loadedIds = new Set<number>();

  async function fetchPokemons(url: string) {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const detailedPokemons = await Promise.all(
      data.results.map(async (pokemonResult: PokemonResult) => {
        const res = await fetch(pokemonResult.url);
        const pokemon: Pokemon = await res.json();
        return pokemon;
      })
    );

    const uniquePokemons = detailedPokemons.filter((pokemon) => {
      if (!loadedIds.has(pokemon.id)) {
        loadedIds.add(pokemon.id);
        return true;
      }
      return false;
    });

    if (pokemons.length > 0) {
      setTimeout(() => {
        setPokemons((prevPokemons) => [...prevPokemons, ...uniquePokemons]);
        setNextUrl(data.next);
        setLoading(false);
      }, 2000);
    } else {
      setPokemons((prevPokemons) => [...prevPokemons, ...uniquePokemons]);
      setNextUrl(data.next);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (nextUrl) {
      fetchPokemons(nextUrl);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 500;

      if (scrollPosition >= threshold && !loading && nextUrl) {
        fetchPokemons(nextUrl);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, nextUrl]);
  return (
    <main className="max-w-[calc(100%-65px)] h-auto mx-auto grid grid-cols-5 gap-7 mb-[32px]">
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          primaryType={pokemon.types[0]?.type?.name}
          secondaryType={pokemon.types[1]?.type?.name || null}
          number={pokemon.id.toString().padStart(4, "0")}
          name={pokemon.name}
          image={pokemon.sprites.other["official-artwork"].front_default}
        />
      ))}
      {loading && (
        <div className="flex justify-center items-center col-span-5">
          <img src={loader} alt="loader" className="w-24 loader" />
        </div>
      )}
    </main>
  );
}
