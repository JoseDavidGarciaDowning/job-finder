import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./tailwind.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const container = document.getElementById("root");
const root = createRoot(container!);
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
