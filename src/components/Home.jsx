import Noise from "./Noise";
import CircularText from "./CircularText";
import BounceCards from "./BounceCards";

function Home({ theme }) {
  const images = [
    "https://f4.bcbits.com/img/a1726130597_10.jpg",
    "https://f4.bcbits.com/img/a1655674144_10.jpg",
    "https://f4.bcbits.com/img/a3062194197_10.jpg",
    "https://f4.bcbits.com/img/a3758805720_10.jpg",
    "https://f4.bcbits.com/img/a0400007769_10.jpg",
  ];
  return (
    <div
      className={
        theme == 0
          ? "bg-stone-100 text-stone-900 flex-1 flex-col max-w-screen"
          : "bg-stone-900 text-stone-100 flex-1 flex-col max-w-screen"
      }
    >
      <Noise />
      <CircularText
        text="ARRANGEDGODLY * PEUIMPORTE * "
        onHover="goBonkers"
        spinDuration={50}
      />
      <BounceCards
        images={images}
        enableHover={true}
        containerWidth={'100vw'}
        containerHeight={300}
        animationDelay={1}
        animationStagger={0.2}
      />
    </div>
  );
}

export default Home;
