import { useState } from "react";
import Cookies from "js-cookie";

// Components
import Input from "../Input/Input";

// Style
import styles from "./Forms.module.css";
import axios from "axios";

export default function Login({ setIsTokenPresent }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });

      Cookies.set("token", response.data.token);
      setIsTokenPresent(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button className={styles.submit_btn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
