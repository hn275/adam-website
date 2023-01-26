import { NavLink } from "react-router-dom";
import { Text, Link as CUILink } from "@chakra-ui/react";
import "./styles.css";

interface PropType {
  to: string;
  children: React.ReactNode;
  handleClick?: () => void;
}

export const Link = ({ to, children, handleClick }: PropType) => {
  return (
    <NavLink
      style={({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
      })}
      to={to}
      onClick={handleClick ? handleClick : () => null}
    >
      <CUILink className="nav_link__content">
        <Text>{children}</Text>
      </CUILink>
    </NavLink>
  );
};

export const PAGE_LINKS = [
  { to: "/", content: "Home" },
  { to: "/services", content: "Services" },
  { to: "/about", content: "About" },
];
