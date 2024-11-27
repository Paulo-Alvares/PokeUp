import { TypeBlock } from "./TypeBlock";

interface TypeRelationProps {
  advantages?: string[];
  weaknesses?: string[];
  resistences?: string[];
  immunities?: string[];
}

export function TypeRelation({
  advantages,
  weaknesses,
  resistences,
  immunities,
}: TypeRelationProps) {
  return (
    <div className="h-2/5 w-full py-2 px-4 bg-white dark:bg-[#2C2C2C] rounded-[35px] shadow-[2px_4px_11px_rgba(0,0,0,0.25)]">
      <div className="grid grid-cols-4 gap-1">
        {advantages && advantages.length > 0 && (
          <TypeBlock title="Vantagem" types={advantages} />
        )}

        {weaknesses && weaknesses.length > 0 && (
          <TypeBlock title="Fraqueza" types={weaknesses} />
        )}

        {resistences && resistences.length > 0 && (
          <TypeBlock title="Resistência" types={resistences} />
        )}

        {immunities && immunities.length > 0 && (
          <TypeBlock title="Imunidade" types={immunities} />
        )}
      </div>
    </div>
  );
}
