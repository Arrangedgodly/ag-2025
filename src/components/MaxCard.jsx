import TiltedCard from "./TiltedCard";

const MaxCard = ({
  imageSrc,
  altText,
  CaptionText,
  imageWidth,
  imageHeight,
  containerHeight,
  containerWidth,
  overlayContent,
}) => {
  return (
    <TiltedCard
      imageSrc={imageSrc}
      altText={altText}
      CaptionText={CaptionText}
      imageWidth={imageWidth}
      imageHeight={imageHeight}
      containerHeight={containerHeight}
      containerWidth={containerWidth}
      overlayContent={overlayContent}
    />
  );
};

export default MaxCard;
