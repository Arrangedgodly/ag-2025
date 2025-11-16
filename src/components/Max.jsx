import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Galaxy from './Galaxy';
import InfiniteScroll from "./InfiniteScroll";
import ElectricBorder from "./EletricBorder";
import MaxCard from "./MaxCard";
import devices from '../constants/devices';

function Max() {
  const items = devices.map((device, index) => ({
    content: (
      <ElectricBorder
        thickness={5}
        speed={0.7}
        chaos={0.4}
        color="#00ffd5ff"
        padding="1rem"
        children={
          <MaxCard
            key={index}
            imageSrc={device.imageSrc}
            altText={device.altText}
            CaptionText={device.altText}
            imageWidth={device.imageWidth}
            containerWidth={device.imageWidth}
            containerHeight={device.imageHeight}
            link={device.link}
          />
        }
      />
    ),
  }));
  const { theme } = useContext(ThemeContext);

  return (
    <>
    <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          left: "0",
        }}
      >
        <Galaxy 
          saturation={0.75}
          starSpeed={0.5}
          glowIntensity={theme == 0 ? 0.05 : 0.4}
          twinkleIntensity={0.5}
          density={3}
          rotationSpeed={0.2}
          repulsionStrength={6.5}
        />
      </div>
      <InfiniteScroll items={items} />
    </>
  );
}

export default Max;
