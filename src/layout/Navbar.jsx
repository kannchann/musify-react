import { logo } from "../assets";
import { navLinks } from "../constants";
import { Search, Button, Cart, ThemeToggle } from "../components";
import MobileNavbar from "./MobileNavbar";
import styles from '../style';

const Navbar = () => {
  return (
    <nav className={`bg-primaryDark ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="flex flex-1 items-center justify-between py-4">
        <MobileNavbar />
          <img src={logo} alt="logo" className="w-[100px] h-auto" />

          {/* Navigation Links and Icons */}
          <div className="flex flex-1 space-x-6 justify-end items-center">
            <ul className="list-none md:flex hidden justify-end items-center flex-1 space-x-5">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  className="cursor-pointer transition-all text-white hover:border-b-2 hover:border-primaryOrange"
                >
                  {navLink.title}
                </li>
              ))}
            </ul>

            {/* Theme Toggle, Search, Cart, and Login Button */}
            <ThemeToggle />
            <Search />
            <Cart />
            <div className="hidden md:block">
            <Button btnText="Login" variant="secondary" size="small" />


            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
