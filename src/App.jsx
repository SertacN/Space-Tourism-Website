import "./App.css";
import "./mobile.css";
import "./tablet.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/space-tourism-website/" element={<Home />} />
        <Route
          path="/space-tourism-website/destination"
          element={<Destination />}
        />
        <Route path="/space-tourism-website/crew" element={<Crew />} />
        <Route
          path="/space-tourism-website/technology"
          element={<Technology />}
        />
      </Routes>
    </div>
  );
}

export default App;
