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

  return (
    <>
      <InfiniteScroll items={items} />
    </>
  );
}

export default Max;
