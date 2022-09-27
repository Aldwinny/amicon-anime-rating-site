import { BsFillArchiveFill } from "react-icons/bs";

const Sidebar = () => {
  /**
   * Fix Patterns -> new JSX element
   */
  return (
    <aside>
      <ul className="sidebar-items">
        <li>
          <BsFillArchiveFill />
          <div>Genres</div>
        </li>
        <li>
          <BsFillArchiveFill />
          <div>History</div>
        </li>
        <li>
          <BsFillArchiveFill />
          <div>Collections</div>
        </li>
        <li>
          <BsFillArchiveFill />
          <div>Favorites</div>
        </li>
        <li>
          <BsFillArchiveFill />
          <div>Rated</div>
        </li>
      </ul>
      <ul className="sidebar-links">
        <li>About</li>
        <li>Contact us</li>
      </ul>
      <p className="footnote">
        &copy; Amicon inc.
        <br />
        Not a real company
      </p>
    </aside>
  );
};

export default Sidebar;
