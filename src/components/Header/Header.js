import Logo from "../../assets/img/logo";
import { Link } from "react-router-dom";

// Style
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.left_header}>
        <Link to="/">
          <span style={{ marginRight: "16px", marginLeft: "16px" }}>
            <Logo width={"160px"} height={"70px"} />
          </span>
        </Link>
        <span>Explore</span>
        <span>Forum</span>
        <span>Blog</span>
        <span>Community</span>
        <span>The App</span>
        <span>Shop</span>
        <span>More</span>
      </nav>
      <div className={styles.right_header}>
        <i className="fa-solid fa-magnifying-glass fa-xl"></i>

        <button className={styles.addList_btn}>Add listing</button>

        <button className={styles.login_btn}>Login / Join</button>
      </div>
    </header>
  );
}
