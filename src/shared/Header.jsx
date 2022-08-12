import Todo from "../DEVELOPMENT/Todo";
import { FaRegUserCircle } from "react-icons/fa";
import Searchbar from "../components/Searchbar";

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

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="logo">Anime</li>
          <li>
            <Searchbar />
          </li>
          <li>
            <Todo context="Bookmark" />
          </li>
          <li>
            <Todo context="Rated" />
          </li>
          <li>
            <FaRegUserCircle color="white" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
