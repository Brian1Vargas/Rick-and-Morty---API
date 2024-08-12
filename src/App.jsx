import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Personajes from "./Pages/Personajes";
import Episodios from "./Pages/Episodios";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/rick-and-morty/personajes" />} />
        <Route path="/rick-and-morty/personajes" element={<Personajes />} />
        <Route path="/rick-and-morty/episodios" element={<Episodios />} />
      </Routes>
    </BrowserRouter>
  );
}
