import { useState, useEffect } from "react";
import useViewModel from "./viewModel";
import classNames from "classnames";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { NavItem, isScrolled, isDrawer, handleScroll, handleDrawer } =
    useViewModel();
  const [path, setPath] = useState<string | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setPath(location.pathname);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location, handleScroll]);

  return (
    <nav
      className={`flex justify-between w-full text-white font-medium shadow-md fixed left-0 top-0 rounded-b-3xl z-50 transition-all duration-300 
         px-6 py-4 md:py-6 md:px-14 
        ${
          isScrolled || path !== "/"
            ? "bg-white text-black"
            : "backdrop-blur-sm text-white"
        }`}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        {path == "/" ? (
          isScrolled ? (
            <img src={`${import.meta.env.BASE_URL}Subtract.svg`} alt="Scrolled Logo" className="h-8" />
          ) : (
            <img src={`${import.meta.env.BASE_URL}firefly-logo.svg`} alt="Original Logo" className="h-8" />
          )
        ) : (
          <img src={`${import.meta.env.BASE_URL}Subtract.svg`} alt="Scrolled Logo" className="h-8" />
        )}
        <h1
          className={classNames("text-2xl font-bold tracking-wide", {
            "gradient-text3": isScrolled || path !== "/",
            "text-white": !isScrolled && path === "/",
          })}
        >
          Firefly
        </h1>
      </div>

      {/* Navigation */}
      <ul
        className={`hidden my-auto gap-3 ${
          isScrolled && path === "/" ? "text-color10" : ""
        } ${path !== "/" && "text-color10"} lg:flex`}
      >
        {NavItem.map((item) => (
          <li
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`cursor-pointer py-2 px-5 rounded-md ${
              path === item.path && path !== "/" && "bg-color13 text-navtext"
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>

      <div
        className={`lg:hidden ${
          isScrolled || path !== "/" ? "text-color10" : "text-white"
        } ${isDrawer ? "hidden" : ""}`}
      >
        <Menu fontSize="large" onClick={() => handleDrawer(true)} />
      </div>
      {isDrawer && (
        <div className="absolute top-0 right-0 bg-white w-full shadow-xl rounded-b-3xl">
          <ul className="pb-5">
            <li className="w-fit ml-auto my-5 mr-5">
              <Close
                fontSize="large"
                className="text-navtext"
                onClick={() => handleDrawer(false)}
              />
            </li>
            {NavItem.map((item) => (
              <li
                key={item.name}
                onClick={() => {
                  navigate(item.path), handleDrawer(false);
                }}
                className={`cursor-pointer text-center py-4 text-navtext ${
                  path === item.path && path !== "/" && "bg-color13"
                } ${path === "/" && item.name === "HOME" && "bg-color13"}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
