import Noise from "./Noise";
import CircularText from "./CircularText";

function Home({ theme }) {
  return (
    <div
      className={
        theme == 0
          ? "bg-stone-100 text-slate-900 flex-1"
          : "bg-neutral text-neutral-content flex-1"
      }
    >
      <Noise />
      <CircularText
        text="ARRANGEDGODLY * PEUIMPORTE * "
        onHover="goBonkers"
        spinDuration={50}
      />
    </div>
  );
}

export default Home;
