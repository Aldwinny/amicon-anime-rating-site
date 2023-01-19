import {
  BsArchiveFill,
  BsFillClockFill,
  BsFillCollectionPlayFill,
  BsFillHeartFill,
  BsFillPersonFill,
  BsFillStarFill,
} from "react-icons/bs";
import Logo from "../components/Logo";

import SidebarListItem from "../components/SidebarListItem";
import SidebarListLink from "../components/SidebarListLink";

const Sidebar = () => {
  /**
   * Fix Patterns -> new JSX element
   */
  return (
    <aside>
      <Logo className="pt-2 text-center pc:hidden" />
      <ul className="pl-5 mt-0 pc:mt-3">
        <SidebarListItem
          text="Genres"
          className="trans"
          icon={<BsArchiveFill />}
        />
        <SidebarListItem text="History" icon={<BsFillClockFill />} />
        <SidebarListItem
          text="Collections"
          icon={<BsFillCollectionPlayFill />}
        />
        <SidebarListItem text="Favorites" icon={<BsFillHeartFill />} />
        <SidebarListItem text="Rated" icon={<BsFillStarFill />} />
        <SidebarListItem text="Account" icon={<BsFillPersonFill />} />
      </ul>
      <ul className="mt-auto font-semibold pl-5 mb-4 mt-9">
        <SidebarListLink>About</SidebarListLink>
        <SidebarListLink>Contact Us</SidebarListLink>
      </ul>
      <p className="mb-24 pl-5">
        &copy; 2022 Amicon inc.
        <br />
        Not a real company
      </p>
    </aside>
  );
};

export default Sidebar;
