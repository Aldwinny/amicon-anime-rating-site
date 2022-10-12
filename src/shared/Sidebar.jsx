import SidebarListItem from "../components/SidebarListItem";

const Sidebar = () => {
  /**
   * Fix Patterns -> new JSX element
   */
  return (
    <aside>
      <ul className="sidebar-items">
        <SidebarListItem text="Genres" />
        <SidebarListItem text="History" />
        <SidebarListItem text="Collections" />
        <SidebarListItem text="Favorites" />
        <SidebarListItem text="Rated" />
      </ul>
      <ul className="sidebar-links">
        <li>About</li>
        <li>Contact us</li>
      </ul>
      <p className="footnote">
        &copy; 2022 Amicon inc.
        <br />
        Not a real company
      </p>
    </aside>
  );
};

export default Sidebar;
