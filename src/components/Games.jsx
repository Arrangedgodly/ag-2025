import { NavLink } from "react-router";
import Prism from "./Prism";
import TiltedCard from "./TiltedCard";
import MagicGundenIcon from "../assets/magicgunden.png";

function Games() {
  return (
    <div className="flex flex-1 justify-center items-center p-10">
      <div className="absolute w-full h-full">
        <Prism />
      </div>
      <NavLink to="/magic-gunden" className="flex flex-col items-center">
        <TiltedCard
          containerWidth="200px"
          containerHeight="250px"
          rotateAmplitude={15}
          scaleOnHover={1.35}
          showMobileWarning={false}
          imageSrc={MagicGundenIcon}
          imageWidth="256px"
          imageHeight="256px"
          overlayContent={
            <p className="text-center text-4xl font-freckle w-full text-shadow-lg/30">Magic Gunden</p>
          }
          displayOverlayContent={true}
        />
      </NavLink>
    </div>
  );
}

export default Games;
