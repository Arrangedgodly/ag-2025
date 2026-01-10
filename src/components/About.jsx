import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Dither from "./Dither";
import TextPressure from "./TextPressure";
import TrueFocus from "./TrueFocus";

function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex flex-col flex-1 w-70vw">
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          left: "0",
        }}
      >
        <Dither
          waveColor={theme == 0 ? [1.0, 1.0, 1.0] : [0.2, 0.2, 0.2]}
          disableAnimation={false}
          enableMouseInteraction={false}
          colorNum={40}
          waveAmplitude={0.8}
          waveFrequency={3}
          waveSpeed={0.02}
        />
      </div>
      <p
        className={
          theme == 0
            ? "text-6xl text-center w-full mt-20 font-geo text-stone-900 z-10"
            : "text-6xl text-center w-full mt-20 font-geo text-stone-200 z-10"
        }
      >
        Meet
      </p>
      <TextPressure
        text="Grady"
        className={
          theme == 0
            ? "text-stone-900 h-45 sm:h-100"
            : "text-stone-200 h-45 sm:h-100"
        }
        flex={false}
        scale={true}
      />
      <TrueFocus
        sentence="Dad Gamer Producer Programmer Rapper"
        blurAmount={8}
      />
    </div>
  );
}

export default About;
