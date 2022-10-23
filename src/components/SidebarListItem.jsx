import { MdErrorOutline } from "react-icons/md";

const SidebarListItem = ({ icon, link, text }) => {
  return (
    <li>
      <a href={link}>
        {icon}
        <div>{text}</div>
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
