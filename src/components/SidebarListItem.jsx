import { BsFillArchiveFill } from "react-icons/bs";

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
  icon: <BsFillArchiveFill />,
  link: "/",
  text: "unknown",
};

export default SidebarListItem;
