import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";
export default function App() {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "", children: _jsx(ThemeProvider, { children: _jsx(Outlet, {}) }) }) }));
}
