import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { LuListMusic } from "react-icons/lu";
import { FaInfoCircle } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

function Dock({ currentPage, setCurrentPage }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme == 0
          ? "dock dock-xl bg-stone-100 text-slate-900 z-10"
          : "dock dock-xl bg-neutral text-neutral-content z-10"
      }
    >
      <button
        className={currentPage == "home" ? "dock-active" : ""}
        onClick={() => setCurrentPage("home")}
      >
        <FaHome size="2em" />
        <span className="dock-label">Home</span>
      </button>

      <button
        className={currentPage == "max" ? "dock-active" : ""}
        onClick={() => setCurrentPage("max")}
      >
        <LuListMusic size="2em" />
        <span className="dock-label">Max for Live</span>
      </button>

      <button
        className={currentPage == "about" ? "dock-active" : ""}
        onClick={() => setCurrentPage("about")}
      >
        <FaInfoCircle size="2em" />
        <span className="dock-label">About Me</span>
      </button>
    </div>
  );
}

export default Dock;
