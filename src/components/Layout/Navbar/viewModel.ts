import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../constants/path.route";
import { useCallback } from "react";
const useViewModel = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawer, setIsDrawer] = useState(false);
  const NavItem = [
    {
      name: "HOME",
      path: PATH.HOME,
    },
    {
      name: "DASHBOARD",
      path: PATH.DASHBOARD,
    },
    {
      name: "TEAM",
      path: PATH.TEAM,
    },
    {
      name: "PUBLICATIONS",
      path: PATH.PUBLICATIONS,
    },
    {
      name: "GALLERY",
      path: PATH.GALLERY,
    },
  ];
  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  const handleDrawer = (drawer: boolean) => {
    setIsDrawer(drawer);
  };

  return {
    NavItem,
    isScrolled,
    isDrawer,
    handleDrawer,
    handleScroll,
    useNavigate,
  };
};
export default useViewModel;
