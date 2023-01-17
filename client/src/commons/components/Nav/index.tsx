import { NavLink, NavLinkProps } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", content: "Home" },
  { to: "/services", content: "Services" },
  { to: "/about", content: "About" },
];

export function Nav() {
  const renderLinks = () => {
    return NAV_LINKS.map((link) => (
      <li key={link.content}>
        <Link to={link.to}>{link.content}</Link>
      </li>
    ));
  };

  return (
    <>
      <ul>{renderLinks()}</ul>
    </>
  );
}

function Link({ to, children }: NavLinkProps) {
  return <NavLink to={to}>{children}</NavLink>;
}
