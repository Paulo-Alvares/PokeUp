const typeEffectivenessData = {
  bug: {
    advantages: ["grass", "psychic", "dark"],
    weaknesses: ["fire", "flying", "rock"],
    resistences: ["fighting", "grass", "ground"],
    immunities: [],
  },
  dark: {
    advantages: ["psychic", "ghost"],
    weaknesses: ["fighting", "dark", "fairy"],
    resistences: ["dark", "ghost"],
    immunities: ["psychic"],
  },
  dragon: {
    advantages: ["dragon"],
    weaknesses: ["ice", "dragon", "fairy"],
    resistences: ["electric", "fire", "water", "bug"],
    immunities: [],
  },
  electric: {
    advantages: ["water", "flying"],
    weaknesses: ["ground"],
    resistences: ["electric", "flying", "steel"],
    immunities: [],
  },
  fairy: {
    advantages: ["fighting", "dragon", "dark"],
    weaknesses: ["poison", "steel"],
    resistences: ["dark", "fighting", "bug"],
    immunities: ["dragon"],
  },
  fighting: {
    advantages: ["normal", "ice", "rock", "dark", "steel"],
    weaknesses: ["flying", "psychic", "fairy"],
    resistences: ["dark", "rock", "bug"],
    immunities: [],
  },
  fire: {
    advantages: ["grass", "ice", "bug", "steel"],
    weaknesses: ["water", "rock", "ground"],
    resistences: ["steel", "fire", "grass", "ice", "bug", "fairy"],
    immunities: [],
  },
  flying: {
    advantages: ["grass", "fighting", "bug"],
    weaknesses: ["electric", "rock", "ice"],
    resistences: ["grass", "fighting", "bug"],
    immunities: ["ground"],
  },
  ghost: {
    advantages: ["psychic", "ghost"],
    weaknesses: ["dark", "ghost"],
    resistences: ["poison", "bug"],
    immunities: ["normal", "fighting"],
  },
  grass: {
    advantages: ["water", "ground", "rock"],
    weaknesses: ["fire", "poison", "flying", "bug", "ice"],
    resistences: ["water", "grass", "electric", "ground"],
    immunities: [],
  },
  ground: {
    advantages: ["fire", "electric", "poison", "rock", "steel"],
    weaknesses: ["grass", "water", "ice"],
    resistences: ["poison", "rock"],
    immunities: ["electric"],
  },
  ice: {
    advantages: ["grass", "ground", "flying", "dragon"],
    weaknesses: ["fire", "rock", "fighting", "steel"],
    resistences: ["ice"],
    immunities: [],
  },
  normal: {
    advantages: [],
    weaknesses: ["fighting"],
    resistences: [],
    immunities: ["ghost"],
  },
  poison: {
    advantages: ["grass", "fairy"],
    weaknesses: ["ground", "psychic"],
    resistences: ["poison", "bug", "fairy", "fighting", "grass", "steel"],
    immunities: [],
  },
  psychic: {
    advantages: ["fighting", "poison"],
    weaknesses: ["bug", "ghost", "dark"],
    resistences: ["psychic", "fighting"],
    immunities: [],
  },
  rock: {
    advantages: ["fire", "ice", "flying", "bug"],
    weaknesses: ["fighting", "ground", "steel", "grass", "water"],
    resistences: ["fire", "normal", "poison", "flying"],
    immunities: [],
  },
  steel: {
    advantages: ["ice", "rock", "fairy"],
    weaknesses: ["fire", "ground", "fighting"],
    resistences: [
      "ice",
      "normal",
      "grass",
      "flying",
      "rock",
      "psychic",
      "dragon",
      "fairy",
      "steel",
      "bug",
    ],
    immunities: ["poison"],
  },
  water: {
    advantages: ["fire", "ground", "rock"],
    weaknesses: ["grass", "electric"],
    resistences: ["fire", "water", "ice", "steel"],
    immunities: [],
  },
} as const;

export type TypeKey = keyof typeof typeEffectivenessData;

export const typeEffectiveness = typeEffectivenessData;
