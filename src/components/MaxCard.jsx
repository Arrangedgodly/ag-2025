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
  const small_width = containerWidth / 2;
  const small_height = containerHeight / 2;
  const imgStyle = {
    maxWidth: "65%",
    height: "auto",
  };

  return (
    <a href={link} target="_blank">
      <div
        className={`card max-h-${
          small_height
        } sm:max-h-${containerHeight} max-w-${
          small_width
        } sm:max-w-${containerWidth}`}
      >
        <figure>
          <img
            src={imageSrc}
            alt={altText}
            style={imgStyle}
          />
        </figure>
        <div className="card-body">
          <h2 className="font-geo text-xl sm:text-4xl w-[100%] text-center">
            {CaptionText}
          </h2>
        </div>
      </div>
    </a>
  );
};

export default MaxCard;
