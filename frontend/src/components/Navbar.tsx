import { NavLink } from "react-router-dom";
import { changeTheme } from "../theme/themeController";
import Button from "./Button";
import ButtonIcon from "./ButtonIcon";
import { SunMoon } from "lucide-react";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-7"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            BookShelf
          </span>
        </a>

        <div className="w-md">
          <SearchInput />
        </div>

        <div className="inline-flex md:order-2 gap-4 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <NavLink to={"add"}>
            <Button label="Añadir libro" />
          </NavLink>
          <ButtonIcon
            onClick={changeTheme}
            icon={<SunMoon />}
            idTooltip="themeButton"
            tooltipText="Cambiar tema"
          />
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
