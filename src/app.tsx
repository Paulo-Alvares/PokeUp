import { Filtering } from "./components/Filtering";
import { Navbar } from "./components/Navbar";
import { Pokedex } from "./components/Pokedex";

export function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Filtering />
        <Pokedex />
      </div>
    </>
  );
}
