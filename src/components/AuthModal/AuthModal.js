import { useState } from "react";

// Components
import Login from "./Forms/Login";
import Signup from "./Forms/Signup";

// Style
import styles from "./AuthModal.module.css";

// Assets
import loginImg from "../../assets/img/login-social.jpeg";

export default function AuthModal({ setIsTokenPresent }) {
  const [changeForm, setChangeForm] = useState(false);

  return (
    <div className={styles.modal_container}>
      <div className={styles.left_modal_container}>
        <img src={loginImg} alt="" />
        <div className={styles.text_modal}>
          <p>HappyCow</p>
          <p>Welcome to HappyCow by Nicolas !</p>
        </div>
      </div>
      <div className={styles.right_modal_container}>
        <div className={styles.top_modal_btns}>
          <div>
            <button
              className={`${styles.modal_btn} ${
                !changeForm ? styles.active_btn : ""
              }`}
              onClick={() => setChangeForm(false)}
            >
              Login
            </button>
          </div>
          <div>
            <button
              className={`${styles.modal_btn} ${
                changeForm ? styles.active_btn : ""
              }`}
              onClick={() => setChangeForm(true)}
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className={styles.form}>
          {changeForm ? (
            <Signup setIsTokenPresent={setIsTokenPresent} />
          ) : (
            <Login setIsTokenPresent={setIsTokenPresent} />
          )}
        </div>
      </div>
    </div>
  );
}
