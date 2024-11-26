import { TypeIcon } from "./TypeIcon";

interface TypeRelationProps {
  primaryType: string;
  secondaryType: string | null;
  advantages?: string[];
  weaknesses?: string[];
  resistences?: string[];
  immunities?: string[];
}

export function TypeRelation({
  primaryType,
  secondaryType,
  advantages,
  weaknesses,
  resistences,
  immunities,
}: TypeRelationProps) {
  return (
    <div className="h-fit w-[15%] flex pt-4 pb-5 justify-center bg-white dark:bg-[#2C2C2C] rounded-[35px] shadow-[2px_4px_11px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col">
        <div>
          <h3 className="text-lg font-semibold dark:text-white mb-1">Tipos</h3>
          {secondaryType
            ? TypeIcon([primaryType, secondaryType])
            : TypeIcon([primaryType])}
        </div>

        {advantages && advantages.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold dark:text-white mb-1">
              Vantagens
            </h3>
            {TypeIcon(advantages)}
          </div>
        )}

        {weaknesses && weaknesses.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold dark:text-white mb-1">
              Fraquezas
            </h3>
            {TypeIcon(weaknesses)}
          </div>
        )}

        {resistences && resistences.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold dark:text-white mb-1">
              Resistências
            </h3>
            {TypeIcon(resistences)}
          </div>
        )}

        {immunities && immunities.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold dark:text-white mb-1">
              Imunidades
            </h3>
            {TypeIcon(immunities)}
          </div>
        )}
      </div>
    </div>
  );
}
