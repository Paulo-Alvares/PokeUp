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

      <main className="max-w-[calc(100%-65px)] mx-auto flex flex-col lg:flex-row justify-evenly items-center lg:items-start p-5">
        <img
          src={me}
          alt="Foto do Autor"
          className="w-3/4 sm:w-1/2 lg:w-[35%] rounded-full border-solid border-[20px] border-white dark:border-[#2C2C2C] shadow-[2px_4px_11px_rgba(0,0,0,0.25)] mb-5 lg:mb-0"
        />

        <div className="w-full lg:max-w-[55%] bg-white dark:bg-[#2C2C2C] dark:text-white p-6 sm:p-10 rounded-[35px] flex flex-col font-semibold justify-between items-center shadow-[2px_4px_11px_rgba(0,0,0,0.25)]">
          <p className="text-sm sm:text-base lg:text-lg text-justify mb-6">
            Olá! Meu nome é Paulo Alvares, sou desenvolvedor full stack formado
            em Análise e Desenvolvimento de Sistemas, com experiência em
            tecnologias como TypeScript, Node.js, React, Python, Java e
            SpringBoot. Desde cedo, a programação e o universo Pokémon sempre
            estiveram presentes na minha vida, e é por isso que decidi unir
            essas duas paixões neste projeto de Pokédex. Se você quiser
            conversar sobre tecnologia, Pokémon ou oportunidades na área de
            programação, fique à vontade para me contatar!
          </p>

          <div className="w-full flex flex-wrap justify-between gap-4">
            <a
              href="https://github.com/Paulo-Alvares"
              target="_blank"
              className="w-1/4 sm:w-[22%] p-2 bg-white text-black dark:bg-[#2C2C2C] dark:text-white hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white flex items-center justify-center rounded-full shadow-[2px_4px_11px_rgba(0,0,0,0.25)] duration-300"
            >
              <GithubLogo className="text-3xl sm:text-4xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/paulo-alvares/"
              target="_blank"
              className="w-1/4 sm:w-[22%] bg-white text-black dark:bg-[#2C2C2C] dark:text-white hover:bg-[#0a66c2] hover:text-white dark:hover:bg-[#0a66c2] dark:hover:text-white flex items-center justify-center rounded-full shadow-[2px_4px_11px_rgba(0,0,0,0.25)] duration-300"
            >
              <LinkedinLogo className="text-3xl sm:text-4xl" />
            </a>
            <a
              href="mailto:pauloalvares66@gmail.com"
              target="_blank"
              className="w-1/4 sm:w-[22%] bg-white text-black dark:bg-[#2C2C2C] dark:text-white hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white flex items-center justify-center rounded-full shadow-[2px_4px_11px_rgba(0,0,0,0.25)] duration-300"
            >
              <EnvelopeSimple className="text-3xl sm:text-4xl" />
            </a>
            <a
              href="https://codepen.io/Poulos-Alvares"
              target="_blank"
              className="w-1/4 sm:w-[22%] bg-white text-black dark:bg-[#2C2C2C] dark:text-white hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white flex items-center justify-center rounded-full shadow-[2px_4px_11px_rgba(0,0,0,0.25)] duration-300"
            >
              <CodepenLogo className="text-3xl sm:text-4xl" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
