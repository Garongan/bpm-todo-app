import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <div className="container mx-auto py-5">
            <App />
        </div>
    </React.StrictMode>
);
