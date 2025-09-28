import InfiniteScroll from "./InfiniteScroll";
import MaxCard from "./MaxCard";

function Max() {
  const devices = [
    {
      imageSrc: "https://i.imgur.com/dyOEQA3.png",
      altText: "Native Instruments Bite Wrapper",
      imageWidth: 250,
      imageHeight: 300,
      link: "https://arranged.gumroad.com/l/bite",
    },
    {
      imageSrc: "https://i.imgur.com/xOawYlS.png",
      altText: "Native Instruments Dirt Wrapper",
      imageWidth: 355,
      imageHeight: 300,
      link: "https://arranged.gumroad.com/l/dirt",
    },
    {
      imageSrc: "https://i.imgur.com/xYvO5D7.png",
      altText: "Native Instruments Freak Wrapper",
      imageWidth: 265,
      imageHeight: 440,
      link: "https://arranged.gumroad.com/l/freak",
    },
    {
      imageSrc: "https://i.imgur.com/YkQoaao.png",
      altText: "Soundtoys Little Alterboy Wrapper",
      imageWidth: 180,
      imageHeight: 378,
      link: "https://arranged.gumroad.com/l/alterboy",
    },
    {
      imageSrc: "https://i.imgur.com/eRhPhGW.png",
      altText: "Softube Tape Wrapper",
      imageWidth: 275,
      imageHeight: 300,
      link: "https://arranged.gumroad.com/l/tape",
    },
    {
      imageSrc: "https://i.imgur.com/tiTaUYO.png",
      altText: "Clipper - Max for Live Device",
      imageWidth: 188,
      imageHeight: 300,
      link: "https://arranged.gumroad.com/l/clipper",
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
        link={device.link}
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
