import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { App } from "../App";
import { Pokedex } from "../components/pages/Pokedex";
import { Contact } from "../components/pages/Contact";
const AppRouter = () => {
    return (_jsx(Router, { children: _jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(App, {}), children: [_jsx(Route, { index: true, element: _jsx(Pokedex, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) })] }) }) }));
};
export default AppRouter;
