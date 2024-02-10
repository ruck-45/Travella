// Dependencies
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

// Local Files
import "./NavBar.css";
import icon from "../globalAssets/logo.svg";
import { RootState } from "../store/store";
import { updateNavStatus } from "../store/navOpenStatusSlice";
import { updateToLoginStatus } from "../store/toLoginSlice";
import ButtonElement from "../globalElements/ButtonElement";
import UserAvatar from "./UserAvatar";
import { getCookie } from "../utils/cookies";
const menuItems = ["Home", "Services", "About", "Contact", "Log In"];

const NavBar = () => {
  const isLoggedIn = getCookie("token") ? true : false;
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const navOpenStatus = useSelector((state: RootState) => state.navOpenStatus.value);
  const dispatch = useDispatch();
  return (
    <Navbar
      isMenuOpen={navOpenStatus}
      onMenuOpenChange={() => {
        dispatch(updateNavStatus(!navOpenStatus));
      }}
      className="h-[5rem] nav z-[200] bg-white"
      maxWidth="xl"
      classNames={{ base: "bg-[rgba(0,0,0,0.4)]" }}
    >
      <NavbarContent>
        <NavbarMenuToggle aria-label={navOpenStatus ? "Close menu" : "Open menu"} className="lg:hidden" />
        <Image width={80} src={icon} alt="logo" radius="none" className="hidden lg:block" />
      </NavbarContent>

      <NavbarContent className="lg:hidden logo">
        <Link to="../Home">
          <Image width={80} src={icon} alt="logo" radius="none" />
        </Link>
      </NavbarContent>

      <NavbarContent className="lg:hidden">
        <div className="w-[5rem] h-[100%] bg-red"></div>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex" justify="center">
        <NavbarItem>
          <Link
            to="../Home"
            className={curTab === "Home" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            HOME
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            to="../Services"
            className={curTab === "Services" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            SERVICES
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            to="../About"
            className={curTab === "About" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            ABOUT
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            to="../Package"
            className={curTab === "About" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            PACKAGE
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            to="../Blog"
            className={curTab === "About" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            BLOG
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            to="../Contact"
            className={curTab === "Contact" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            CONTACT
          </Link>
        </NavbarItem>
        {isLoggedIn ? (
          <NavbarItem>
            <UserAvatar />
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden lg:flex">
            <ButtonElement
              to="../Auth"
              variant="light"
              label="LOGIN"
              radius="sm"
              className="w-full px-[8px] py-[10px] text-[1rem]"
              startContent={<FaUser />}
              onClickFunction={() => dispatch(updateToLoginStatus(true))}
            />
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu className="mt-[4.5rem] bg-white z-[200]">
        {menuItems.map((item, index) => {
          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={curTab === item ? "active" : "notActive"}
                to={index === 6 ? "../Auth" : `../${item}`}
                onClick={() => {
                  dispatch(updateNavStatus(!navOpenStatus));
                  dispatch(updateToLoginStatus(item === "Log In" ? true : false));
                }}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
