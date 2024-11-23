import { Sun, Moon, List, X } from "@phosphor-icons/react";
import { useTheme } from "../Context/ThemeContext";
import logo from "../assets/PokeUp.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

interface NavbarProps {
  redirectPage?: string;
}

export function Navbar({ redirectPage }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black dark:bg-[#2C2C2C] dark:text-white h-24 max-w-[95%] mx-auto my-7 py-4 px-10 rounded-[35px] flex justify-between items-center shadow-md relative">
      <Link to={redirectPage ?? "/"}>
        <img className="h-16" src={logo} alt="Logo" />
      </Link>
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-[100%] right-0 mt-2 w-48 bg-white dark:bg-[#2C2C2C] rounded-lg shadow-md md:flex md:static md:w-auto md:mt-0 md:bg-transparent md:dark:bg-transparent md:shadow-none`}
      >
        <ul className="flex flex-col md:flex-row md:gap-12 text-lg font-semibold">
          <li
            className="hover:text-[#DD2C00] transition-colors duration-300 group cursor-pointer py-2 px-4 md:py-0 md:px-0"
            onClick={() => {
              navigate("/");
              setIsMenuOpen(false);
            }}
          >
            PokeDéx
            <div className="bg-[#DD2C00] w-0 h-[1.5px] rounded-full transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </li>
          <li
            className="hover:text-[#DD2C00] transition-colors duration-300 group cursor-pointer py-2 px-4 md:py-0 md:px-0"
            onClick={() => {
              navigate("contact");
              setIsMenuOpen(false);
            }}
          >
            Contato
            <div className="bg-[#DD2C00] w-0 h-[1.5px] rounded-full transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-6">
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
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer md:hidden"
        >
          {isMenuOpen ? (
            <X
              className="hover:text-[#DD2C00] transition-colors duration-300"
              size={28}
              weight="bold"
            />
          ) : (
            <List
              className="hover:text-[#DD2C00] transition-colors duration-300"
              size={28}
              weight="bold"
            />
          )}
        </div>
      </div>
    </header>
  );
}
