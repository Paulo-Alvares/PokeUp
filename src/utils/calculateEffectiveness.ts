import { typeEffectiveness, TypeKey } from "./typeEffectiveness";

export function calculateEffectiveness(pokemonTypes: TypeKey[]) {
  const advantages = new Set<TypeKey>();
  const resistences = new Set<TypeKey>();
  const weaknesses = new Set<TypeKey>();
  const immunities = new Set<TypeKey>();

  pokemonTypes.forEach((type) => {
    const effectiveness = typeEffectiveness[type];
    if (!effectiveness) return;

    effectiveness.advantages.forEach((t) => advantages.add(t));

    effectiveness.immunities.forEach((t) => immunities.add(t));

    Object.entries(typeEffectiveness).forEach(([otherType, otherEffectiveness]) => {
      if (otherEffectiveness.advantages.includes(type)) {
        weaknesses.add(otherType as TypeKey);
      }
    });

    effectiveness.resistences.forEach((t) => resistences.add(t));
  });

  immunities.forEach((type) => {
    weaknesses.delete(type);
    resistences.delete(type);
  });

  return {
    advantages: Array.from(advantages),
    resistances: Array.from(resistences),
    weaknesses: Array.from(weaknesses),
    immunities: Array.from(immunities),
  };
}
