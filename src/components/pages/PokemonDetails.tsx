import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { X } from "@phosphor-icons/react";
import { PrevPokemon } from "../PrevPokemon";

interface PokemonDetailsProps {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  sprites: { other: { "official-artwork": { front_default: string } } };
}

export function PokemonDetails() {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<PokemonDetailsProps | null>(null);
  const [previousPokemon, setPreviousPokemon] = useState<PokemonDetailsProps | null>(null);
  const [nextPokemon, setNextPokemon] = useState<PokemonDetailsProps | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const currentPokemon = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemon(currentPokemon.data);

        if (Number(id) > 1) {
          const previous = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${Number(id) - 1}`
          );
          setPreviousPokemon(previous.data);
        }
        if (Number(id) < 1010) { // Ajustar para o total de Pokémons disponíveis
          const next = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${Number(id) + 1}`
          );
          setNextPokemon(next.data);
        }
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-5 mb-5 my-7">
        {previousPokemon && (
          <div
            onClick={() => navigate(`/pokemon/${previousPokemon.id}`)}
            className="cursor-pointer"
          >
            <PrevPokemon
              number={previousPokemon.id}
              name={previousPokemon.name}
              image={previousPokemon.sprites.other["official-artwork"].front_default}
              prevOrNext={true}
            />
          </div>
        )}

        {nextPokemon && (
          <div
            onClick={() => navigate(`/pokemon/${nextPokemon.id}`)}
            className="cursor-pointer"
          >
            <PrevPokemon
              number={nextPokemon.id}
              name={nextPokemon.name}
              image={nextPokemon.sprites.other["official-artwork"].front_default}
              prevOrNext={false}
            />
          </div>
        )}
        <X size={35} onClick={() => navigate(`/`)} weight="bold" className="cursor-pointer absolute right-7 top-7 dark:text-white dark:hover:text-[#DD2C00] hover:text-[#DD2C00]" />
      </div>

      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="h-60"
        />
      </div>
    </div>
  );
}
