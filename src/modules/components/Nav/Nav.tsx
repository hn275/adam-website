import { Link, PAGE_LINKS } from "./Link";
import { Drawer } from "./Drawer";
import { SearchBar } from "./SearchBar";
import { CartIcon } from "./CartIcon";
import { CartDrawer } from "./CartDrawer";

export function Nav() {
  return (
    <nav>
      <div className="lg:grid grid-cols-3 place-items-center lg:px-4 py-2">
        <ul className="hidden lg:flex w-full justify-start items-center gap-5">
          {PAGE_LINKS.map((link) => (
            <li key={link.id}>
              <Link to={link.to}>{link.content}</Link>
            </li>
          ))}
        </ul>

        <h1 className="text-center font-brand text-2xl text-brand">
          Johnson&Brooks
        </h1>

        <div className="w-full">
          <div className="block absolute right-2 lg:hidden">
            <Drawer />
          </div>

          <div className="hidden lg:flex items-center justify-end gap-3">
            <SearchBar />
            <CartIcon />
          </div>
        </div>
      </div>

      <CartDrawer />
    </nav>
  );
}
