import Cookies from "js-cookie";

// Assets
import ProfileIcone from "../../../assets/img/profileIcon";

// Styles
import styles from "./ProfileButton.module.css";

export default function ProfileButton({
  isProfileMenuOpen,
  setIsProfileMenuOpen,
}) {
  const firstname = Cookies.get("firstname");
  const lastname = Cookies.get("lastname");

  return (
    <button
      className={styles.profile_button}
      onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
    >
      <div>
        <ProfileIcone />
        <span>
          {firstname}
          {lastname.toUpperCase()}
        </span>
        <i className="fa-solid fa-caret-down"></i>
      </div>
    </button>
  );
}
