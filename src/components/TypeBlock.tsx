import { TypeIcon } from "./TypeIcon";

interface TypeBlockProps {
  title: string;
  types: string[];
}

export function TypeBlock({ title, types }: TypeBlockProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <h3 className="text-lg font-semibold dark:text-white">
        {title}
      </h3>
      <div>{TypeIcon(types)}</div>
    </div>
  );
}
