import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WasilApp from "./App.tsx";
import { HashRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api.service.config/query.config/index.ts";
import { Provider } from "react-redux";
import { store } from "./shared/store/index.ts";

createRoot(document.getElementById("root")!).render(
  // {/* <BrowserRouter> */}
  <HashRouter>
    <StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <WasilApp />
        </QueryClientProvider>
      </Provider>
    </StrictMode>
  </HashRouter>,
  // {/* </BrowserRouter> */}
);
