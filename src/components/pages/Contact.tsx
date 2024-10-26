import {
  CodepenLogo,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { Navbar } from "../Navbar";
import me from "../../assets/me.png";

export function Contact() {
  return (
    <>
      <Navbar />

      <main className="max-w-[calc(100%-65px)] h-auto mx-auto flex justify-evenly">
        <div className="w-[35%] bg-white dark:bg-[#2C2C2C] mr-7 p-5 rounded-full flex justify-center items-center shadow-[2px_4px_11px_rgba(0,0,0,0.25)]">
          <img src={me} alt="Foto do Autor" />
        </div>

        <div className="max-w-[55%] bg-white dark:bg-[#2C2C2C] dark:text-white p-10 rounded-[35px] flex flex-col font-semibold justify-between items-center shadow-[2px_4px_11px_rgba(0,0,0,0.25)]">
          <p className="text-lg text-justify">
            Olá! Meu nome é Paulo Alvares, sou desenvolvedor full stack formado
            em Análise e Desenvolvimento de Sistemas, com experiência em
            tecnologias como TypeScript, Node.js, React, Python, Java e
            SpringBoot. Desde cedo, a programação e o universo Pokémon sempre
            estiveram presentes na minha vida, e é por isso que decidi unir
            essas duas paixões neste projeto de Pokédex. Se você quiser
            conversar sobre tecnologia, Pokémon ou oportunidades na área de
            programação, fique à vontade para me contatar!
          </p>

          <div className="w-full mb-10 h-12 flex justify-between">
            <a
              href="https://github.com/Paulo-Alvares"
              className="w-[20%] bg-white text-black dark:bg-[#2C2C2C] dark:text-white hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white flex items-center justify-center rounded-full shadow-[2px_4px_11px_rgba(0,0,0,0.25)] duration-300"
            >
              <GithubLogo className="text-4xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/paulo-alvares/"
              className="w-[20%] bg-white text-black dark:bg-[#2C2C2C] dark:text-white hover:bg-[#0a66c2] hover:text-white dark:hover:bg-[#0a66c2] dark:hover:text-white flex items-center justify-center rounded-full shadow-[2px_4px_11px_rgba(0,0,0,0.25)] duration-300"
            >
              <LinkedinLogo className="text-4xl" />
            </a>
            <a
              href=""
              className="w-[20%] bg-white text-black dark:bg-[#2C2C2C] dark:text-white hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white flex items-center justify-center rounded-full shadow-[2px_4px_11px_rgba(0,0,0,0.25)] duration-300"
            >
              <EnvelopeSimple className="text-4xl" />
            </a>
            <a
              href=""
              className="w-[20%] bg-white text-black dark:bg-[#2C2C2C] dark:text-white hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white flex items-center justify-center rounded-full shadow-[2px_4px_11px_rgba(0,0,0,0.25)] duration-300"
            >
              <CodepenLogo className="text-4xl" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
