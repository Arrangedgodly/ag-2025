import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Max from "./components/Max";
import Settings from "./components/Settings";
import Dock from "./components/Dock";

function App() {
  const [currentPage, setCurrentPage] = useState("max");
  const [theme, setTheme] = useState(0);
  return (
    <div className="flex flex-col min-h-screen max-h-screen">
      <Navbar theme={theme} setTheme={setTheme} />
        {currentPage == "home" && <Home theme={theme} />}
        {currentPage == "max" && <Max theme={theme} />}
        {currentPage == "settings" && <Settings theme={theme} />}
      <Dock
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        theme={theme}
      />
    </div>
  );
}

export default App;
