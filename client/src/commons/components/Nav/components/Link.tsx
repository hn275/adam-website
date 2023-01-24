import { NavLink } from "react-router-dom";

interface PropType {
  to: string;
  children: React.ReactNode;
}

export const Link = ({ to, children }: PropType) => {
  return <NavLink to={to}>{children}</NavLink>;
};
