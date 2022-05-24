import Logo from "../../assets/img/logo";

// Style
import styles from "./Header.module.css";
// Components
import Button from "../Button/Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo width={"160px"} height={"70px"} />
      <div className={styles.left_header}>
        <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        <Button className={"addList_btn"} text={"Add listing"} />
        <Button className={"login_btn"} text={"Login / Join"} />
      </div>
    </header>
  );
}
