import { FaHome } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import { LuListMusic } from "react-icons/lu";

function Dock({ currentPage, setCurrentPage, theme }) {
  return (
    <div
      className={
        theme == 0
          ? "dock dock-xl bg-stone-100 text-slate-900"
          : "dock dock-xl bg-neutral text-neutral-content"
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
        className={currentPage == "settings" ? "dock-active" : ""}
        onClick={() => setCurrentPage("settings")}
      >
        <RiSettings4Fill size="2em" />
        <span className="dock-label">Settings</span>
      </button>
    </div>
  );
}

export default Dock;
