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
  link
}) => {
  return (
    <a href={link} target="_blank">
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
    </a>
  );
};

export default MaxCard;
