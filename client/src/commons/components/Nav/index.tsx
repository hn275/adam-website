import { NavLink, NavLinkProps } from "react-router-dom";

export function Nav() {
  const links = [
    { to: "/", content: "Home" },
    { to: "/services", content: "Services" },
    { to: "/about", content: "About" },
  ];

  const renderLinks = () => {
    return links.map((link, index) => (
      <Link key={index} to={link.to}>
        {link.content}
      </Link>
    ));
  };

  return (
    <>
      <li>{renderLinks()}</li>
    </>
  );
}

function Link({ to, children }: NavLinkProps) {
  return <NavLink to={to}>{children}</NavLink>;
}
