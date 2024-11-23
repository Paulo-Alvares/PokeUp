import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";

export default function App() {
  return (
    <>
      <div className="">
        <ThemeProvider>
          <Outlet />
        </ThemeProvider>
      </div>
    </>
  );
}
