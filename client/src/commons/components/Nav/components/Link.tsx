import { NavLink } from "react-router-dom";
import { Text, useTheme } from "@chakra-ui/react";
import "./styles.css";

interface PropType {
  to: string;
  children: React.ReactNode;
  handleClick?: () => void;
}

export const Link = ({ to, children, handleClick }: PropType) => {
  const { colors } = useTheme();
  return (
    <Text className="nav_link__content">
      <NavLink
        style={({ isActive }) => ({
          fontWeight: isActive ? "600" : "normal",
          color: isActive ? colors.brand.main : "",
        })}
        to={to}
        onClick={handleClick ? handleClick : () => null}
      >
        {children}
      </NavLink>
    </Text>
  );
};

export const PAGE_LINKS = [
  { to: "/", content: "Home" },
  { to: "/services", content: "Services" },
  { to: "/about", content: "About" },
];
