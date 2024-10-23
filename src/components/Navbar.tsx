import { Sun } from "@phosphor-icons/react";
import logo from "../assets/PokeUp.svg";

export function Navbar() {
  return (
    <>
      <header className="bg-white inset-x-0 w-full max-w-[calc(100%-65px)] mx-auto my-7 py-4 pl-16 pr-20 rounded-[35px] flex justify-between items-center shadow-[3.1px_3.1px_22.6px_rgba(0,0,0,0.1),8.7px_8.7px_62.6px_rgba(0,0,0,0.065),21.8px_21.8px_150.7px_rgba(0,0,0,0.05),68px_68px_500px_rgba(0,0,0,0.035)]">
        <img className="h-[72px]" src={logo} alt="Logo" />
        <nav className="flex gap-32 text-lg font-semibold">
          <ul className="flex gap-12">
            <a href="">
              <li className="hover:text-[#DD2C00] transition-colors duration-300">PokeDéx</li>
            </a>
            <a href="">
              <li className="hover:text-[#DD2C00] transition-colors duration-300">Contato</li>
            </a>
          </ul>
          <Sun className="hover:text-[#DD2C00] transition-colors duration-300 cursor-pointer" size={25} weight="bold" />
        </nav>
      </header>
    </>
  );
}
