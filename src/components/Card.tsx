import iconType1 from "../assets/type-icons/fire.svg";
import iconType2 from "../assets/type-icons/flying.svg";
import backgroundCard from "../assets/backgroundCard.svg";
import pokemon from "../assets/pokemon_example.png";

export function Card() {
  return (
    <div className="max-w-[calc(100%-65px)] mx-auto grid grid-cols-6 gap-7">
      <div className="bg-white h-60 p-4 rounded-[35px] flex flex-col items-center justify-center relative shadow-[3.1px_3.1px_22.6px_rgba(0,0,0,0.1),8.7px_8.7px_62.6px_rgba(0,0,0,0.065),21.8px_21.8px_150.7px_rgba(0,0,0,0.05),68px_68px_500px_rgba(0,0,0,0.035)]">
        <div className="flex gap-3">
          <div className="bg-[#FF9D55] w-8 h-8 rounded-full flex justify-center items-center">
            <img className="w-[65%]" src={iconType1} alt="" />
          </div>
          <div className="bg-[#89AAE3] w-8 h-8 rounded-full flex justify-center items-center">
            <img className="w-[65%]" src={iconType2} alt="" />
          </div>
        </div>

        <img
          src={backgroundCard}
          alt="background"
          className="inset-0 w-[70%] mt-3 object-center"
        />

        <img src={pokemon} alt="Pokémon" className="absolute w-[80%] z-10" />

        <div className="mt-4">
          <p className="text-lg font-semibold">
            <span className="text-gray-500 text-sm font-semibold">#0001</span>{" "}
            Charizard
          </p>
        </div>
      </div>
    </div>
  );
}
