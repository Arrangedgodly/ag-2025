import { useState } from "react";
import { ThemeContext } from "./components/ThemeContext";
import { CardContext } from "./components/CardContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Max from "./components/Max";
import About from "./components/About";
import Dock from "./components/Dock";

function App() {
  const [currentPage, setCurrentPage] = useState("max");
  const [theme, setTheme] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="flex flex-col min-h-screen max-h-screen justify-center items-center min-w-screen max-w-screen">
        <Navbar />
        <div
          className={
            theme == 0
              ? "bg-stone-100 text-stone-900 flex-1 flex-col max-w-screen min-w-screen justify-center items-center"
              : "bg-stone-900 text-stone-100 flex-1 flex-col max-w-screen min-w-screen justify-center items-center"
          }
        >
          {currentPage == "home" && (
            <CardContext.Provider value={{ activeCard, setActiveCard }}>
              <Home />
            </CardContext.Provider>
          )}
          {currentPage == "max" && <Max />}
          {currentPage == "about" && <About />}
        </div>
        <Dock
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          theme={theme}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
