import { logo } from "../assets";
import { navLinks } from "../constants";
import { Search, Button, Cart, ThemeToggle } from "./ui";
import {MobileNavbar} from "../components";
import styles from '../style';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={`bg-primaryDark  ${styles.paddingX}`}>
      <div className={`${styles.boxWidth} relative z-100`}>
        <div className="flex flex-1 items-center justify-between">
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
                   <NavLink to={`${navLink.path}`} className={({isActive}) => { return isActive ? 'text-primaryOrange' : '' }}>
                  {navLink.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Theme Toggle, Search, Cart, and Login Button */}
            <ThemeToggle />
            <Search />
            <Cart />
            <div className="hidden md:block">
            <Button btnText="Login" variant="secondary" size="small" link="login" />


            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
