import { FaHome } from "react-icons/fa";
import { LuListMusic } from "react-icons/lu";
import { FaInfoCircle } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import Dock from "./Dock";
import DockIcon from "./DockIcon";

function BottomDock() {
  const items = [
    {
      icon: <DockIcon icon={<FaHome size="2em" />} link={"/"} />,
      label: "Home",
    },
    {
      icon: <DockIcon icon={<LuListMusic size="2em" />} link={"/max"} />,
      label: "Max for Live",
    },
    {
      icon: <DockIcon icon={<FaInfoCircle size="2em" />} link={"/about"} />,
      label: "About Me",
    },
    {
      icon: (
        <DockIcon icon={<IoLogoGameControllerB size="2em" />} link={"/games"} />
      ),
      label: "Games",
    },
  ];

  return (
    <Dock
      items={items}
      panelHeight={30}
      baseItemSize={60}
      maginification={90}
      className="z-10"
    />
  );
}

export default BottomDock;
