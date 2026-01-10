import { useParams } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import AnimatedContent from "./AnimatedContent";
import AlbumLinks from "./AlbumLinks";
import Beams from "./Beams";

const AlbumPageContent = ({
  title,
  releaseDate,
  image,
  description,
  amazon,
  apple,
  bandcamp,
  tidal,
  youtube,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-1 min-w-screen items-center justify-center p-2 sm:p-8 font-freckle">
      <div
        className={
          theme == 0
            ? "hero flex flex-col bg-stone-400 w-[95%] sm:w-4xl p-4 rounded-xl shadow-lg text-stone-800 opacity-95"
            : "hero flex flex-col bg-stone-600 w-[95%] sm:w-4xl p-4 rounded-xl shadow-lg text-stone-400 opacity-95"
        }
      >
        <div className="hero-content">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl w-[75%] h-auto"
          />
        </div>
        <h1 className="text-xl sm:text-5xl font-bold text-center">{title}</h1>
        <p className="py-4 sm:max-w-3xl text-center text-md sm:text-2xl w-[95%]">
          {description}
        </p>
        <p className="py-2 text-lg font-bold">Released: {releaseDate}</p>
        <AlbumLinks
          amazon={amazon}
          apple={apple}
          bandcamp={bandcamp}
          tidal={tidal}
          youtube={youtube}
        />
      </div>
    </div>
  );
};

const AlbumPage = ({ data }) => {
  const { url } = useParams();
  const activeAlbum = data.filter((album) => album.url === url);

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
        <Beams />
      </div>
      <div className="overflow-hidden">
        <AnimatedContent
          distance={300}
          direction="vertical"
          reverse={true}
          duration={2.3}
          scale={1.5}
          children={
            <AlbumPageContent
              title={activeAlbum[0].title}
              releaseDate={activeAlbum[0].releaseDate}
              image={activeAlbum[0].image}
              description={activeAlbum[0].description}
              amazon={activeAlbum[0].amazon}
              apple={activeAlbum[0].apple}
              bandcamp={activeAlbum[0].bandcamp}
              tidal={activeAlbum[0].tidal}
              youtube={activeAlbum[0].youtube}
            />
          }
        />
      </div>
    </>
  );
};

export default AlbumPage;
