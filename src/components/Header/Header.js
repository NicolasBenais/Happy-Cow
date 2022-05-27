import Logo from "../../assets/img/logo";
import { Link } from "react-router-dom";
import { useState } from "react";

// Components
import Modal from "../Modal/Modal";
import AuthModal from "../AuthModal/AuthModal";
import ProfileButton from "./ProfileButton/ProfileButton";
// import UserMenu from "./UserMenu/UserMenu";

// Style
import styles from "./Header.module.css";

export default function Header({ isTokenPresent, setIsTokenPresent }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AuthModal setIsTokenPresent={setIsTokenPresent} />
      </Modal>
      {/* <UserMenu /> */}
      <nav className={styles.left_header}>
        <Link to="/">
          <span
            style={{
              display: "block",
              marginRight: "16px",
              marginLeft: "16px",
            }}
          >
            <Logo width="180px" height="41x" />
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
        <button className={styles.addList_btn}>Add listing</button>
        {isTokenPresent ? (
          <ProfileButton
            isProfileMenuOpen={isProfileMenuOpen}
            setIsProfileMenuOpen={setIsProfileMenuOpen}
          />
        ) : (
          <button
            className={styles.login_btn}
            onClick={() => setIsModalOpen(true)}
          >
            Login / Join
          </button>
        )}
      </div>
    </header>
  );
}
