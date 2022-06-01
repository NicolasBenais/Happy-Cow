import { useState } from "react";
import Cookies from "js-cookie";

// Components
import Input from "../Input/Input";

// Style
import styles from "./Forms.module.css";
import axios from "axios";

export default function Login({ setIsTokenPresent, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://happycow-nbns.herokuapp.com/login",
        {
          email,
          password,
        }
      );

      Cookies.set("token", response.data.token);
      Cookies.set("firstname", response.data.firstname);
      Cookies.set("lastname", response.data.lastname);
      setIsTokenPresent(true);
      onClose();
    } catch (error) {
      console.log(error.message);
      setError(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <form className={styles.form_modal} onSubmit={handleSubmit}>
      <div className={styles.input_name}>Email</div>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        setValue={setEmail}
      />
      <div className={styles.input_name}>Password</div>
      <Input
        type="password"
        placeholder="Password"
        value={password}
        setValue={setPassword}
      />
      {error && <div className={styles.error_message}>{errorMessage}</div>}
      <button className={styles.submit_btn} type="submit">
        Login
      </button>
    </form>
  );
}
