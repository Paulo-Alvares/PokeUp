import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "../App";
import { Pokedex } from "../components/pages/Pokedex";
import { Contact } from "../components/pages/Contact";
import { PokemonDetails } from "../components/pages/PokemonDetails";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Pokedex />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
