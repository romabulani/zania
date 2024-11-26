import React from "react";
import "./App.css";
import { AppProvider } from "./contexts/AppContext";
import Header from "./components/Header";
import Cards from "./components/Cards";
import LastSavedTime from "./components/LastSavedTime";

const App: React.FC = () => (
  <AppProvider>
    <div className="app">
      <Header />
      <Cards />
      <LastSavedTime />
    </div>
  </AppProvider>
);

export default App;
