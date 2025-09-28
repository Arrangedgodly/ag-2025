const MaxCard = ({
  imageSrc,
  altText,
  CaptionText,
  imageWidth,
  imageHeight,
  containerHeight,
  containerWidth,
  link,
}) => {
  return (
    <a href={link} target="_blank">
      <div className={`card max-h-${containerHeight} max-w-${containerWidth}`}>
        <figure>
          <img
            src={imageSrc}
            alt={altText}
            width={imageWidth}
            height={imageHeight}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-geo text-4xl text-center">{CaptionText}</h2>
        </div>
      </div>
    </a>
  );
};

export default MaxCard;
