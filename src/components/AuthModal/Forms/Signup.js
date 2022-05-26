import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

// Components
import Input from "../Input/Input";

// Style
import styles from "./Forms.module.css";

export default function Signup({ setIsTokenPresent }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    console.log("test");
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/signup", {
        email,
        username,
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
        <div className={styles.input_name}>Username</div>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <div className={styles.input_name}>Password</div>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
        <button className={styles.submit_btn} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
