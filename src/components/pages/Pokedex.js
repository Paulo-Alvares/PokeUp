import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Card } from "../Card";
import loader from "../../assets/backgroundCard.svg";
import { Funnel, MagnifyingGlass } from "@phosphor-icons/react";
import "../../index.css";
import axios from "axios";
import { Navbar } from "../Navbar";
const generationRanges = {
    "National Dex": { start: 1, end: 1010 },
    "Gen 1": { start: 1, end: 151 },
    "Gen 2": { start: 152, end: 251 },
    "Gen 3": { start: 252, end: 386 },
    "Gen 4": { start: 387, end: 493 },
    "Gen 5": { start: 494, end: 649 },
    "Gen 6": { start: 650, end: 721 },
    "Gen 7": { start: 722, end: 809 },
    "Gen 8": { start: 810, end: 898 },
    "Gen 9": { start: 899, end: 1010 },
};
export function Pokedex() {
    const [generation, setGeneration] = useState("Gen 1");
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        const fetchPokemonByGeneration = async () => {
            try {
                setIsLoading(true);
                const { start, end } = generationRanges[generation];
                const requests = Array.from({ length: end - start + 1 }, (_, i) => axios.get(`https://pokeapi.co/api/v2/pokemon/${start + i}`));
                const results = await Promise.all(requests);
                setPokemonList(results.map((res) => res.data));
            }
            catch (error) {
                console.error(`Error fetching generation ${generation}:`, error);
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchPokemonByGeneration();
    }, [generation]);
    const filteredPokemonList = pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("main", { className: "max-w-[95%] mx-auto flex flex-col gap-7", children: [_jsxs("div", { className: "w-full grid gap-7 grid-cols-3 lg:grid-cols-4 xl:grid-cols-5", children: [_jsxs("div", { className: "col-span-3 md:col-span-2 flex items-center bg-white dark:bg-[#2C2C2C] dark:text-white h-11 rounded-full shadow-md px-4", children: [_jsx(MagnifyingGlass, { size: 17, weight: "bold" }), _jsx("input", { type: "search", id: "search", placeholder: "Procure um pok\u00E9mon por aqui...", className: "dark:bg-[#2C2C2C] dark:text-white w-full text-base font-semibold placeholder-[#9B9B9B] outline-none ml-2", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) })] }), _jsxs("div", { className: "col-span-3 md:col-span-1 lg:col-start-4 xl:col-start-5 flex items-center bg-white dark:bg-[#2C2C2C] dark:text-white h-11 rounded-full shadow-md px-4", children: [_jsx(Funnel, { size: 17, weight: "bold" }), _jsx("select", { id: "selection", value: generation, onChange: (e) => setGeneration(e.target.value), className: "w-full dark:bg-[#2C2C2C] dark:text-white text-base text-center font-semibold outline-none ml-2", children: Object.keys(generationRanges).map((gen) => (_jsx("option", { value: gen, className: "font-semibold", children: gen }, gen))) })] })] }), _jsx("div", { className: "w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 mb-[32px]", children: isLoading ? (_jsx("div", { className: "flex justify-center items-center col-span-5", children: _jsx("img", { src: loader, alt: "loader", className: "w-24 loader" }) })) : (filteredPokemonList.map((pokemon) => (_jsx(Card, { primaryType: pokemon.types[0]?.type.name, secondaryType: pokemon.types[1]?.type.name, number: pokemon.id, name: pokemon.name, image: pokemon.sprites.other["official-artwork"].front_default }, pokemon.id)))) })] })] }));
}
