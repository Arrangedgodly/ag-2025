import Noise from "./Noise";
import InfiniteScroll from "./InfiniteScroll";
import MaxCard from "./MaxCard";

function Max({ theme }) {
  const devices = [
    {
      imageSrc: "https://i.imgur.com/bS9nPld.png",
      altText: "Native Instruments Bite Wrapper",
      imageWidth: 250,
      imageHeight: 300,
    },
    {
      imageSrc: "https://i.imgur.com/xOawYlS.png",
      altText: "Native Instruments Dirt Wrapper",
      imageWidth: 355,
      imageHeight: 300,
    },
    {
      imageSrc: "https://i.imgur.com/xYvO5D7.png",
      altText: "Native Instruments Freak Wrapper",
      imageWidth: 265,
      imageHeight: 440,
    },
    {
      imageSrc: "https://i.imgur.com/YkQoaao.png",
      altText: "Soundtoys Little Alterboy Wrapper",
      imageWidth: 180,
      imageHeight: 378,
    },
    {
      imageSrc: "https://i.imgur.com/tiTaUYO.png",
      altText: "Clipper - Max for Live Device",
      imageWidth: 188,
      imageHeight: 300,
    },
  ];

  const items = devices.map((device, index) => ({
    content: (
      <MaxCard
        key={index}
        imageSrc={device.imageSrc}
        altText={device.altText}
        CaptionText={device.altText}
        imageWidth={device.imageWidth}
        containerWidth={device.imageWidth}
        containerHeight={device.imageHeight}
      />
    ),
  }));

  return (
    <div
      className={
        theme == 0
          ? "bg-stone-100 text-stone-900 flex-1 flex-col min-w-screen"
          : "bg-stone-900 text-stone-100 flex-1 flex-col min-w-screen"
      }
    >
      <Noise />
      <InfiniteScroll items={items} />
    </div>
  );
}

export default Max;
