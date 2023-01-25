import { NavLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";

interface PropType {
  to: string;
  children: React.ReactNode;
  handleClick: () => void;
}

export const Link = ({ to, children, handleClick }: PropType) => {
  return (
    <NavLink to={to} onClick={handleClick}>
      <Text>{children}</Text>
    </NavLink>
  );
};

export const PAGE_LINKS = [
  { to: "/", content: "Home" },
  { to: "/services", content: "Services" },
  { to: "/about", content: "About" },
];
