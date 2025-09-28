import { NavLink } from "react-router";

const DockIcon = ({ icon, link }) => {
  return (
    <NavLink to={link}>
      {icon}
    </NavLink>
  );
}

export default DockIcon;
