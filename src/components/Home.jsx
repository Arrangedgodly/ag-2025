import { useContext } from "react";
import Noise from "./Noise";
import CircularText from "./CircularText";
import BounceCards from "./BounceCards";
import CardDescription from "./CardDescription";
import { CardContext } from "../contexts/CardContext";
import { albums } from "../constants/albums";

function Home() {
  const { activeCard } = useContext(CardContext);

  return (
    <>
      <Noise />
      <CircularText
        text="ARRANGED GODLY * PEU IMPORTE * "
        onHover="goBonkers"
        spinDuration={50}
        className="my-10"
      />
      <BounceCards
        albums={albums}
        enableHover={true}
        containerWidth={"100vw"}
        containerHeight={300}
        animationDelay={1}
        animationStagger={0.2}
      />
      <ul className="timeline flex justify-center items-center">
        {albums[activeCard] && (
          <CardDescription
            title={albums[activeCard].title}
            releaseDate={albums[activeCard].releaseDate}
          />
        )}
      </ul>
    </>
  );
}

export default Home;
