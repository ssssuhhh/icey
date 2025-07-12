import hd from "./Header.module.css";
import line from "../assets/line.svg";
import menu from "../assets/menu.svg";

const Header = () => {
  return (
    <header className={hd.Header}>
      <div className={hd.Header_body}>
        <div className={hd.Header_title}>
          <div className={hd.icey}>ICEY</div>
        </div>
        <div className={hd.Header_menu}>
          <img className={hd.Menu_logo} src={menu} alt="menu" />
        </div>
      </div>
      <img className={hd.Line} src={line} alt="line" />
    </header>
  );
};

export default Header;
