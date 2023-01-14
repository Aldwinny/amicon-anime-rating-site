import {
  BsArchiveFill,
  BsFillClockFill,
  BsFillCollectionPlayFill,
  BsFillHeartFill,
  BsFillStarFill,
} from "react-icons/bs";

import SidebarListItem from "../components/SidebarListItem";
import SidebarListLink from "../components/SidebarListLink";

const Sidebar = () => {
  /**
   * Fix Patterns -> new JSX element
   */
  return (
    <aside className="pl-5">
      <ul className="sidebar-items">
        <li className="logo">Amicon</li>
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
      </ul>
      <ul className="mt-auto font-semibold">
        <SidebarListLink>About</SidebarListLink>
        <SidebarListLink>Contact Us</SidebarListLink>
      </ul>
      <p className="mb-24">
        &copy; 2022 Amicon inc.
        <br />
        Not a real company
      </p>
    </aside>
  );
};

export default Sidebar;
