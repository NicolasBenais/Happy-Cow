import { useState } from "react";

// Components
import Input from "../Input/Input";

// Style
import styles from "./Forms.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
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
        <div className={styles.input_name}>Password</div>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
      </form>
      <button className={styles.submit_btn} type="submit">
        Login
      </button>
    </div>
  );
}
