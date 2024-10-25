import { Sun, Moon } from "@phosphor-icons/react";
import { useTheme } from "../Context/ThemeContext";
import logo from "../assets/PokeUp.svg";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="bg-white text-black dark:bg-[#2C2C2C] dark:text-white inset-x-0 w-full max-w-[calc(100%-65px)] mx-auto my-7 py-4 pl-16 pr-20 rounded-[35px] flex justify-between items-center shadow-[2px_4px_11px_rgba(0,0,0,0.25)]">
        <img className="h-[72px]" src={logo} alt="Logo" />
        <nav className="flex gap-32 text-lg font-semibold">
          <ul className="flex gap-12">
            <a href="">
              <li className="hover:text-[#DD2C00] transition-colors duration-300 group">
                PokeDéx
                <div className="bg-[#DD2C00] w-0 h-[1.5px] rounded-full transition-all duration-300 ease-in-out group-hover:w-full"></div>
              </li>
            </a>
            <a href="">
              <li className="hover:text-[#DD2C00] transition-colors duration-300 group">
                Contato
                <div className="bg-[#DD2C00] w-0 h-[1.5px] rounded-full transition-all duration-300 ease-in-out group-hover:w-full"></div>
              </li>
            </a>
          </ul>
          <div onClick={toggleTheme} className="cursor-pointer">
            {theme === "light" ? (
              <Sun
                className="hover:text-[#DD2C00] transition-colors duration-300"
                size={25}
                weight="bold"
              />
            ) : (
              <Moon
                className="hover:text-[#DD2C00] transition-colors duration-300"
                size={25}
                weight="bold"
              />
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
