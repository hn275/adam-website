import { NavLink } from "react-router-dom";
import "./style.css";

interface PropType {
  to: string;
  children: React.ReactNode;
  handleClick?: () => void;
}

export const Link = ({ to, children, handleClick }: PropType) => {
  return (
    <NavLink
      style={({ isActive }) => ({
        fontWeight: isActive ? "600" : "normal",
      })}
      to={to}
      onClick={handleClick ? handleClick : () => null}
    >
      {children}
    </NavLink>
  );
};

export const PAGE_LINKS = [
  { id: 1, to: "/", content: "Home" },
  { id: 2, to: "/services", content: "Services" },
  { id: 3, to: "/about", content: "About" },
];
