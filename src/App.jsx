import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { TechEvents } from "./pages/TechEvents";
import { NonTechEvents } from "./pages/NonTechEvents";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technical-events" element={<TechEvents />} />
        <Route path="/non-technical-events" element={<NonTechEvents />} />
      </Routes>
    </>
  );
}

export default App;
