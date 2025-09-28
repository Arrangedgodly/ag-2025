import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const CardDescription = ({ title, releaseDate }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <li className="font-freckle">
      <div
        className={
          theme == 0
            ? "timeline-start timeline-box text-stone-100 text-3xl bg-stone-700"
            : "timeline-start timeline-box text-stone-700 text-3xl bg-stone-900"
        }
      >
        {title}
      </div>
      <div
        className={
          theme == 0
            ? "timeline-end text-2xl text-stone-700 shadow-2xl"
            : "timeline-end text-2xl text-stone-500 shadow-2xl"
        }
      >
        {releaseDate}
      </div>
    </li>
  );
};

export default CardDescription;
