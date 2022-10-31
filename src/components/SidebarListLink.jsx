const SidebarListLink = ({ link, children }) => {
  return (
    <li>
      <a href={link}>{children}</a>
    </li>
  );
};

SidebarListLink.defaultProps = {
  link: "/",
  children: "Text not found..",
};

export default SidebarListLink;
