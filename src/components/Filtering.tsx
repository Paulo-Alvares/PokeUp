import { Funnel, MagnifyingGlass } from "@phosphor-icons/react";

export function Filtering() {
  return (
    <>
      <div className="max-w-[calc(100%-65px)] mx-auto my-7 flex justify-between items-center">
        <div className="bg-white dark:bg-[#2C2C2C] dark:text-white w-full max-w-[calc(50%-20px)] h-11 rounded-full flex items-center gap-2 shadow-[2px_4px_11px_rgba(0,0,0,0.25)]">
          <label htmlFor="search">
            <MagnifyingGlass size={17} weight="bold" className="mx-8" />
          </label>
          <input
            type="search"
            id="search"
            placeholder="Procure um pokémon por aqui..."
            className="dark:bg-[#2C2C2C] w-[82%] text-base font-semibold placeholder-[#9B9B9B] outline-none"
            style={{ WebkitAppearance: "none" }}
          />
        </div>

        <div className="bg-white dark:bg-[#2C2C2C] dark:text-white w-full max-w-[calc(50%-326px)] h-11 rounded-full flex items-center gap-2 shadow-[2px_4px_11px_rgba(0,0,0,0.25)]">
          <label htmlFor="selection">
            <Funnel size={17} weight="bold" className="ml-8" />
          </label>
          <select id="selection" className="dark:bg-[#2C2C2C] w-[75%] text-base font-semibold outline-none">
            <option value="" className="text-base font-semibold text-center">National Dex</option>
            <option value="" className="text-base font-semibold text-center">Gen 1</option>
            <option value="" className="text-base font-semibold text-center">Gen 2</option>
            <option value="" className="text-base font-semibold text-center">Gen 3</option>
            <option value="" className="text-base font-semibold text-center">Gen 4</option>
            <option value="" className="text-base font-semibold text-center">Gen 5</option>
            <option value="" className="text-base font-semibold text-center">Gen 6</option>
            <option value="" className="text-base font-semibold text-center">Gen 7</option>
            <option value="" className="text-base font-semibold text-center">Gen 8</option>
            <option value="" className="text-base font-semibold text-center">Gen 9</option>
          </select>
        </div>
      </div>
    </>
  );
}
