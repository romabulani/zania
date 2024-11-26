import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const AppRender = () =>
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

const initializeWorker = async () => {
  try {
    const { worker } = await import("./mocks/handler");
    await worker.start({
      serviceWorker: {
        url: "/mockServiceWorker.js",
      },
    });
    console.log("[MSW] Service Worker registered successfully.");
    AppRender();
  } catch (error) {
    console.error("[MSW] Failed to register the Service Worker:", error);
  }
};

initializeWorker();
