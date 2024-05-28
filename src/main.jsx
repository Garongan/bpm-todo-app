import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Routes from "./routes/routes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <div className="container mx-auto py-5 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs">
                <RouterProvider router={Routes} />
                <Toaster />
            </div>
        </QueryClientProvider>
    </React.StrictMode>
);
