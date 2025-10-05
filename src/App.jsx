import { useState, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { CardContext } from "./contexts/CardContext";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Max from "./components/Max";
import About from "./components/About";
import BottomDock from "./components/BottomDock";
import AlbumPage from "./components/AlbumPage";
import { albums } from "./constants/albums";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("userTheme") ? localStorage.getItem("userTheme") : 0
  );
  const [activeCard, setActiveCard] = useState(-1);

  useEffect(() => {
    localStorage.setItem("userTheme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="flex flex-col min-h-screen max-h-screen min-w-screen max-w-screen justify-center items-center m-0 p-0">
        <Navbar />
        <div
          className={
            theme == 0
              ? "bg-stone-100 text-stone-700 flex flex-1 flex-col max-w-screen min-w-screen items-center relative min-h-screen max-h-screen"
              : "bg-stone-900 text-stone-300 flex flex-1 flex-col max-w-screen min-w-screen items-center relative min-h-screen max-h-screen"
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <CardContext.Provider value={{ activeCard, setActiveCard }}>
                  <Home />
                </CardContext.Provider>
              }
            />
            <Route path="/max" element={<Max />} />
            <Route path="/about" element={<About />} />
            <Route path="/albums/:url" element={<AlbumPage data={albums} />} />
          </Routes>
        </div>
        <BottomDock />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
