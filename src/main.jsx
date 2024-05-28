import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import "./index.css";
import Routes from "./routes/routes.jsx";
import store from "./store/store";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <div className="container mx-auto py-5 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs">
                    <RouterProvider router={Routes} />
                    <Toaster />
                </div>
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);
