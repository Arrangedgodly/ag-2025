import { useContext } from "react";
import Noise from "./Noise";
import CircularText from "./CircularText";
import BounceCards from "./BounceCards";
import CardDescription from "./CardDescription";
import { CardContext } from "../contexts/CardContext";

function Home() {
  const { activeCard } = useContext(CardContext);

  const images = [
    "https://f4.bcbits.com/img/a0400007769_10.jpg",
    "https://f4.bcbits.com/img/a3758805720_10.jpg",
    "https://f4.bcbits.com/img/a3062194197_10.jpg",
    "https://f4.bcbits.com/img/a1655674144_10.jpg",
    "https://f4.bcbits.com/img/a1726130597_10.jpg",
  ];

  const albums = [
    { title: "Seasonal Aggression: The Mixtape", releaseDate: "Sept 2021" },
    {
      title: "Taxed, Tolled & Eternally Trolled",
      releaseDate: "Sept 2023",
    },
    {
      title: "One Seasoned Cracker",
      releaseDate: "May 2025",
    },
    {
      title: "Steal this Beat! Vol 1",
      releaseDate: "Aug 2025",
    },
    {
      title: "One Month to Move",
      releaseDate: "Oct 2025",
    },
  ];

  return (
    <>
      <Noise />
      <CircularText
        text="ARRANGED GODLY * PEU IMPORTE * "
        onHover="goBonkers"
        spinDuration={50}
        className="mt-10"
      />
      <div className="m-10"></div>
      <BounceCards
        images={images}
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
