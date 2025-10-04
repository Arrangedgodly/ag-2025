import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  SiAmazonmusic,
  SiApplemusic,
  SiTidal,
  SiYoutubemusic,
} from "react-icons/si";
import { FaBandcamp } from "react-icons/fa6";

const AlbumLinks = ({ amazon, apple, bandcamp, tidal, youtube }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ul
      className={
        theme == 0
          ? "menu menu-horizontal bg-stone-200 text-stone-800 rounded-box mt-4"
          : "menu menu-horizontal bg-stone-800 text-stone-200 rounded-box mt-4"
      }
    >
      <li>
        <a href={amazon} target="_blank">
          <SiAmazonmusic size="2rem" />
        </a>
      </li>
      <li>
        <a href={apple} target="_blank">
          <SiApplemusic size="2rem" />
        </a>
      </li>
      <li>
        <a href={bandcamp} target="_blank">
          <FaBandcamp size="2rem" />
        </a>
      </li>
      <li>
        <a href={tidal} target="_blank">
          <SiTidal size="2rem" />
        </a>
      </li>
      <li>
        <a href={youtube} target="_blank">
          <SiYoutubemusic size="2rem" />
        </a>
      </li>
    </ul>
  );
};

export default AlbumLinks;
