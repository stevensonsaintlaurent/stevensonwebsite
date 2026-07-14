import { Link } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "services", text: "services" },
  { id: 4, url: "portfolio", text: "portfolio" },
  { id: 5, url: "contact", text: "contact" },
  // { id: 6, url: "orders", text: "orders" },
];

const NavbarLinks = () => {
  return (
    <ul>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li Key={id}>
            <Link to={url}>{text}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
