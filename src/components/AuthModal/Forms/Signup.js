import { useState } from "react";

// Components
import Input from "../Input/Input";

// Style
import styles from "./Forms.module.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
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
      </form>
      <button className={styles.submit_btn} type="submit">
        Sign Up
      </button>
    </div>
  );
}
