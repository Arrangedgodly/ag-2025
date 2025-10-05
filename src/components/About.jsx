import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import TextPressure from "./TextPressure";
import TrueFocus from './TrueFocus';

function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex flex-col flex-1 w-70vw">
      <p
        className={
          theme == 0
            ? "text-6xl text-center w-full mt-20 font-geo text-stone-700"
            : "text-6xl text-center w-full mt-20 font-geo text-stone-400"
        }
      >
        Meet
      </p>
      <TextPressure
        text="Grady"
        className={theme == 0 ? "text-stone-700" : "text-stone-400"}
        flex={false}
        scale={true}
      />
      <TrueFocus
        sentence="Artist Coder Dad Musician"
        blurAmount={8}
      />
    </div>
  );
}

export default About;
