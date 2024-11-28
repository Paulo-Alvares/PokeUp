import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PrevPokemon } from "../PrevPokemon";
import { FocusPokemon } from "../FocusPokemon";
import { Stats } from "../Stats";
import { calculateEffectiveness } from "../../utils/calculateEffectiveness";
import { TypeKey } from "../../utils/typeEffectiveness";
import { TypeRelation } from "../TypeRelation";
import { EvolutionLine } from "../EvolutionLine";
import { X } from "@phosphor-icons/react";

interface PokemonDetailsProps {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  sprites: { other: { "official-artwork": { front_default: string } } };
  stats: { base_stat: number; stat: { name: string } }[];
  ability: string;
  description: string;
}

interface EvolutionChain {
  id: number;
  name: string;
  image: string;
  types: { type: { name: string } }[];
}

export function PokemonDetails() {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<PokemonDetailsProps | null>(null);
  const [previousPokemon, setPreviousPokemon] =
    useState<PokemonDetailsProps | null>(null);
  const [nextPokemon, setNextPokemon] = useState<PokemonDetailsProps | null>(
    null
  );
  const [evolutionChain, setEvolutionChain] = useState<EvolutionChain[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const currentPokemon = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );

        const pokemonSpecies = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`
        );

        setPokemon({
          ...currentPokemon.data,
          ability: currentPokemon.data.abilities[0]?.ability.name || "Unknown",
          description:
            pokemonSpecies.data.flavor_text_entries
              .find(
                (entry: { flavor_text: string; language: { name: string } }) =>
                  entry.language.name === "en"
              )
              ?.flavor_text.replace(/\n|\f/g, " ") || "Descrição indisponível.",
        });

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

        const evolutionChainResponse = await axios.get(
          pokemonSpecies.data.evolution_chain.url
        );

        const chain = [];
        let current = evolutionChainResponse.data.chain;

        while (current) {
          const name = current.species.name;
          const pokeResponse = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          );

          chain.push({
            id: pokeResponse.data.id,
            name: pokeResponse.data.name,
            image:
              pokeResponse.data.sprites.other["official-artwork"].front_default,
            types: pokeResponse.data.types,
          });

          current = current.evolves_to[0];
        }

        setEvolutionChain(chain);
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

  const { advantages, weaknesses, resistances, immunities } =
    calculateEffectiveness(pokemonTypes || []);

  const cleanPokemonName = (name: string) => name.split("-")[0];

  return (
    <div className="flex flex-col dark:text-white items-center p-7 gap-7 h-[100vh] overflow-hidden">
      <div className="flex h-16 gap-7">
        {(previousPokemon && pokemon.id !== 1) && (
          <div
            onClick={() => navigate(`/pokemon/${previousPokemon.id}`)}
            className="cursor-pointer absolute left-7"
          >
            <PrevPokemon
              number={previousPokemon.id}
              name={cleanPokemonName(previousPokemon.name)}
              image={
                previousPokemon.sprites.other["official-artwork"].front_default
              }
              prevOrNext={true}
            />
          </div>
        )}

        <p className="text-5xl font-semibold capitalize items-center flex h-16 p-6 gap-3">
          <span className="text-gray-500 dark:text-zinc-300 text-sm font-semibold">
            #{pokemon.id}
          </span>
          <span>{cleanPokemonName(pokemon.name)}</span>
        </p>

        {nextPokemon && (
          <div
            onClick={() => navigate(`/pokemon/${nextPokemon.id}`)}
            className="cursor-pointer absolute right-24"
          >
            <PrevPokemon
              number={nextPokemon.id}
              name={cleanPokemonName(nextPokemon.name)}
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

      <div className="w-full flex gap-7">
        <FocusPokemon
          name={cleanPokemonName(pokemon.name)}
          image={pokemon.sprites.other["official-artwork"].front_default}
          primaryType={pokemon.types[0].type.name}
          secondaryType={pokemon.types[1] ? pokemon.types[1].type.name : null}
          ability={pokemon.ability}
        />

        <div className="w-7/12 h-[77vh] flex flex-col gap-7">
          <div className="flex h-1/2 gap-7">
            <div className="bg-white dark:bg-[#2C2C2C] dark:text-white w-1/2 p-4 flex flex-col gap-2 font-semibold rounded-[35px] shadow-[2px_4px_11px_rgba(0,0,0,0.25)]">
              <p className="flex flex-col">
                <span>{pokemon.description}</span>
              </p>
            </div>
            <Stats
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

          <EvolutionLine
            evolutionChain={evolutionChain}
            currentPokemonId={pokemon.id}
          />
        </div>

        <TypeRelation
          advantages={advantages}
          weaknesses={weaknesses}
          resistences={resistances}
          immunities={immunities}
        />
      </div>
    </div>
  );
}
