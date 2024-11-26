import { typeEffectiveness, TypeKey } from "./typeEffectiveness";

export function calculateEffectiveness(pokemonTypes: TypeKey[]) {
  const combinedAdvantages = new Set<TypeKey>();
  const combinedWeaknesses = new Set<TypeKey>();
  const combinedResistances = new Set<TypeKey>();
  const combinedImmunities = new Set<TypeKey>();

  pokemonTypes.forEach((type) => {
    const effectiveness = typeEffectiveness[type];
    if (!effectiveness) return;

    effectiveness.advantages.forEach((t) => combinedAdvantages.add(t));
    effectiveness.weaknesses.forEach((t) => combinedWeaknesses.add(t));
    effectiveness.resistences.forEach((t) => combinedResistances.add(t));
    effectiveness.immunities.forEach((t) => combinedImmunities.add(t));
  });

  combinedImmunities.forEach((type) => {
    combinedWeaknesses.delete(type);
    combinedResistances.delete(type);
  });

  combinedResistances.forEach((type) => {
    if (combinedWeaknesses.has(type)) {
      combinedWeaknesses.delete(type);
    }
  });

  return {
    advantages: Array.from(combinedAdvantages),
    weaknesses: Array.from(combinedWeaknesses),
    resistances: Array.from(combinedResistances),
    immunities: Array.from(combinedImmunities),
  };
}
