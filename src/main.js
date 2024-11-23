import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter";
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(AppRouter, {}) }));
