import { Card } from "./components/Card";
import { Filtering } from "./components/Filtering";
import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Filtering />
        <Card />
      </div>
    </>
  );
}
