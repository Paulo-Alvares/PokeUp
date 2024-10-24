import { Filtering } from "./components/Filtering";
import { Navbar } from "./components/Navbar";
import { Pokedex } from "./components/Pokedex";
import { ThemeProvider } from "./Context/ThemeContext";

export function App() {
  return (
    <>
      <div className="">
        <ThemeProvider>
          <Navbar />
          <Filtering />
          <Pokedex />
        </ThemeProvider>
      </div>
    </>
  );
}
