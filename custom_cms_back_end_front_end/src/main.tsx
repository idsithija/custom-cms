import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux";
import { store } from "./lib/redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </Provider>
  </React.StrictMode>
);
