import { IconContext } from "react-icons";
import { MdErrorOutline } from "react-icons/md";

const SidebarListItem = ({ icon, link, text }) => {
  return (
    <li>
      <a href={link} className="flex flex-row my-1 p-2">
        <IconContext.Provider
          value={{
            size: 20,
            className: "mr-4",
            style: { transform: "translateY(4px)" },
          }}
        >
          <div>{icon}</div>
        </IconContext.Provider>
        <p className="text-lg">{text}</p>
      </a>
    </li>
  );
};

SidebarListItem.defaultProps = {
  icon: <MdErrorOutline />,
  link: "/",
  text: "unknown",
};

export default SidebarListItem;
