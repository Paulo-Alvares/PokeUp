import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Sun, Moon, List, X } from "@phosphor-icons/react";
import { useTheme } from "../Context/ThemeContext";
import logo from "../assets/PokeUp.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
export function Navbar({ redirectPage }) {
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (_jsxs("header", { className: "bg-white text-black dark:bg-[#2C2C2C] dark:text-white h-24 max-w-[95%] mx-auto my-7 py-4 px-10 rounded-[35px] flex justify-between items-center shadow-md relative", children: [_jsx(Link, { to: redirectPage ?? "/", children: _jsx("img", { className: "h-16", src: logo, alt: "Logo" }) }), _jsx("nav", { className: `${isMenuOpen ? "flex" : "hidden"} absolute top-[100%] right-0 mt-2 w-48 bg-white dark:bg-[#2C2C2C] rounded-lg shadow-md md:flex md:static md:w-auto md:mt-0 md:bg-transparent md:dark:bg-transparent md:shadow-none`, children: _jsxs("ul", { className: "flex flex-col md:flex-row md:gap-12 text-lg font-semibold", children: [_jsxs("li", { className: "hover:text-[#DD2C00] transition-colors duration-300 group cursor-pointer py-2 px-4 md:py-0 md:px-0", onClick: () => {
                                navigate("/");
                                setIsMenuOpen(false);
                            }, children: ["PokeD\u00E9x", _jsx("div", { className: "bg-[#DD2C00] w-0 h-[1.5px] rounded-full transition-all duration-300 ease-in-out group-hover:w-full" })] }), _jsxs("li", { className: "hover:text-[#DD2C00] transition-colors duration-300 group cursor-pointer py-2 px-4 md:py-0 md:px-0", onClick: () => {
                                navigate("contact");
                                setIsMenuOpen(false);
                            }, children: ["Contato", _jsx("div", { className: "bg-[#DD2C00] w-0 h-[1.5px] rounded-full transition-all duration-300 ease-in-out group-hover:w-full" })] })] }) }), _jsxs("div", { className: "flex items-center gap-6", children: [_jsx("div", { onClick: toggleTheme, className: "cursor-pointer", children: theme === "light" ? (_jsx(Sun, { className: "hover:text-[#DD2C00] transition-colors duration-300", size: 25, weight: "bold" })) : (_jsx(Moon, { className: "hover:text-[#DD2C00] transition-colors duration-300", size: 25, weight: "bold" })) }), _jsx("div", { onClick: () => setIsMenuOpen(!isMenuOpen), className: "cursor-pointer md:hidden", children: isMenuOpen ? (_jsx(X, { className: "hover:text-[#DD2C00] transition-colors duration-300", size: 28, weight: "bold" })) : (_jsx(List, { className: "hover:text-[#DD2C00] transition-colors duration-300", size: 28, weight: "bold" })) })] })] }));
}
