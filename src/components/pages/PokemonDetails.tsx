import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { X } from "@phosphor-icons/react";
import { PrevPokemon } from "../PrevPokemon";
import { FocusPokemon } from "../FocusPokemon";
import { Stats } from "../Stats";
import { calculateEffectiveness } from "../../utils/calculateEffectiveness";
import { TypeKey } from "../../utils/typeEffectiveness";

interface PokemonDetailsProps {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  sprites: { other: { "official-artwork": { front_default: string } } };
  stats: { base_stat: number; stat: { name: string } }[];
}

export function PokemonDetails() {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<PokemonDetailsProps | null>(null);
  const [previousPokemon, setPreviousPokemon] =
    useState<PokemonDetailsProps | null>(null);
  const [nextPokemon, setNextPokemon] = useState<PokemonDetailsProps | null>(
    null
  );
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
        if (Number(id) < 1010) {
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

  const pokemonTypes = pokemon.types
    .map((type) => type.type.name as TypeKey)
    .filter((type): type is TypeKey => type !== null);

  const { advantages, weaknesses, resistances, immunities } = calculateEffectiveness(
    pokemonTypes || []
  );

  return (
    <div className="flex flex-col items-center p-7 gap-7 h-[100vh]">
      <div className="flex gap-7">
        {previousPokemon && (
          <div
            onClick={() => navigate(`/pokemon/${previousPokemon.id}`)}
            className="cursor-pointer"
          >
            <PrevPokemon
              number={previousPokemon.id}
              name={previousPokemon.name}
              image={
                previousPokemon.sprites.other["official-artwork"].front_default
              }
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
              image={
                nextPokemon.sprites.other["official-artwork"].front_default
              }
              prevOrNext={false}
            />
          </div>
        )}
        <X
          size={35}
          onClick={() => navigate(`/`)}
          weight="bold"
          className="cursor-pointer absolute right-7 top-7 dark:text-white dark:hover:text-[#DD2C00] hover:text-[#DD2C00]"
        />
      </div>

      <div className="w-full h-full flex gap-7">
        <FocusPokemon
          primaryType={pokemon.types[0].type.name}
          secondaryType={pokemon.types[1] ? pokemon.types[1].type.name : null}
          number={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.other["official-artwork"].front_default}
        />

        <div className="w-4/6">
          <Stats
            advantages={advantages}
            weaknesses={weaknesses}
            resistences={resistances}
            immunities={immunities}
            stats={{
              hp: pokemon.stats[0].base_stat,
              attack: pokemon.stats[1].base_stat,
              defense: pokemon.stats[2].base_stat,
              specialAttack: pokemon.stats[3].base_stat,
              specialDefense: pokemon.stats[4].base_stat,
              speed: pokemon.stats[5].base_stat,
            }}
          />
        </div>
      </div>
    </div>
  );
}
