import { useParams } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import AnimatedContent from "./AnimatedContent";
import AlbumLinks from "./AlbumLinks";

const AlbumPageContent = ({ title, releaseDate, image, description, amazon, apple, bandcamp, tidal, youtube }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex min-w-screen flex-col items-center justify-center p-8 font-freckle">
      <div
        className={
          theme == 0
            ? "hero flex flex-col bg-stone-400 w-4xl p-4 rounded-xl shadow-2xl text-stone-800"
            : "hero flex flex-col bg-stone-600 w-4xl p-4 rounded-xl shadow-2xl text-stone-400"
        }
      >
        <div className="hero-content">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <h1 className="text-5xl font-bold text-center">{title}</h1>
        <p className="py-4 max-w-3xl text-center text-2xl">{description}</p>
        <p className="py-2 text-xl font-bold">Released: {releaseDate}</p>
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
  );
};

export default AlbumPage;
