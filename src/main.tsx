import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WasilApp from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api.service.config/query.config/index.ts";
import { Provider } from "react-redux";
import { store } from "./shared/store/index.ts";
import { AuthProvider } from "./modules/auth/context/auth.context.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <WasilApp />
          </AuthProvider>
        </QueryClientProvider>
      </Provider>
    </StrictMode>
  </BrowserRouter>,
);
