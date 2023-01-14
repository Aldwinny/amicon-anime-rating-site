import {
  BsSunFill,
  BsMoonFill,
  BsFillPersonFill,
  BsArchiveFill,
} from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

import Searchbar from "../components/Searchbar";
import ActionButton from "../components/ActionButton";
import { PALETTE } from "./Palette";
import { BiArrowBack, BiMenu } from "react-icons/bi";
import { useEffect } from "react";

/*
 * Navbar will have
 * 1. Place where you see your saved animes (Bookmarking)
 * 2. Place where you see your rated animes (Rated)
 * 3. Searchbar
 *
 * Sidebar will have
 * 1. Get anime by Genre
 * 2. Get anime by Random
 * 3.
 */

const Header = ({ isDark, darkModeCallback }) => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    document.getElementsByTagName("aside")[0].classList.toggle("open");
    setMenu(!menu);
  };

  useEffect(() => {
    if (menu) {
      document.getElementsByTagName("aside")[0].classList.add("open");
    }
  });

  return (
    <header>
      <nav>
        <ul>
          <li className="pc:hidden">
            <ActionButton
              action={openMenu}
              content={menu ? <BiArrowBack /> : <BiMenu />}
            />
          </li>
          <li className="logo">Amicon</li>
          <li className="m-auto">
            <Searchbar />
          </li>
          <li>
            <ActionButton
              content={
                isDark === PALETTE.LIGHT ? <BsMoonFill /> : <BsSunFill />
              }
              action={darkModeCallback}
            />
          </li>
          <li>
            <ActionButton content={<BsArchiveFill />} />
          </li>
          <li>
            <ActionButton content={<FaStar />} />
          </li>
          <li>
            <ActionButton content={<BsFillPersonFill />} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
