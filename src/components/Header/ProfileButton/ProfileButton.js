import Cookies from "js-cookie";
import { useState } from "react";

// Components
import UserMenu from "../UserMenu/UserMenu";

// Assets
import ProfileIcone from "../../../assets/img/profileIcon";

// Styles
import styles from "./ProfileButton.module.css";

export default function ProfileButton({ setIsTokenPresent }) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const firstname = Cookies.get("firstname");
  const lastname = Cookies.get("lastname");

  return (
    <button
      className={styles.profile_button}
      onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
    >
      <div>
        <ProfileIcone />
        {isProfileMenuOpen && (
          <UserMenu
            isOpen={isProfileMenuOpen}
            setIsProfileMenuOpen={setIsProfileMenuOpen}
            setIsTokenPresent={setIsTokenPresent}
          />
        )}
        <span>
          {firstname.charAt(0).toLocaleUpperCase() + firstname.slice(1)}
          {lastname.toUpperCase()}
        </span>
        <i className="fa-solid fa-caret-down"></i>
      </div>
    </button>
  );
}
