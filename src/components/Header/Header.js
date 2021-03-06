import Logo from "../../assets/img/logo";
import { Link } from "react-router-dom";
import { useState } from "react";

// Components
import Modal from "../Modal/Modal";
import AuthModal from "../AuthModal/AuthModal";
import ProfileButton from "./ProfileButton/ProfileButton";

// Style
import styles from "./Header.module.css";

export default function Header({
  isTokenPresent,
  setIsTokenPresent,
  favorites,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Modal
        isTokenPresent={isTokenPresent}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <AuthModal
          setIsTokenPresent={setIsTokenPresent}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
      <nav className={styles.left_header}>
        <Link to="/">
          <span
            style={{
              display: "block",
              marginRight: "16px",
              marginLeft: "16px",
            }}
          >
            <Logo width="180px" height="41px" />
          </span>
        </Link>
        <nav className={styles.nav}>
          <span>Explore</span>
          <span>Forum</span>
          <span>Blog</span>
          <span>Community</span>
          <span>The App</span>
          <span>Shop</span>
          <span>More</span>
        </nav>
      </nav>
      <div className={styles.right_header}>
        <div className={styles.favorite_button_container}>
          <button className={styles.favorites_btn}>Favorites</button>
          {favorites.length > 0 && (
            <div className={styles.number_of_favorites}>{favorites.length}</div>
          )}
        </div>
        {isTokenPresent ? (
          <ProfileButton setIsTokenPresent={setIsTokenPresent} />
        ) : (
          <div>
            <button
              className={styles.login_btn_laptop}
              onClick={() => setIsModalOpen(true)}
            >
              Login / Join
            </button>
            <button
              className={styles.login_btn_mobile}
              onClick={() => setIsModalOpen(true)}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
