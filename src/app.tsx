import { Navbar } from "./components/Navbar";
import { Pokedex } from "./components/Pokedex";
import { ThemeProvider } from "./Context/ThemeContext";

export function App() {
  return (
    <>
      <div className="">
        <ThemeProvider>
          <Navbar />
          <Pokedex />
        </ThemeProvider>
      </div>
    </>
  );
}
