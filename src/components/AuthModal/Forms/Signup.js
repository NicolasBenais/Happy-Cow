import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

// Components
import Input from "../Input/Input";

// Style
import styles from "./Forms.module.css";

export default function Signup({ setIsTokenPresent }) {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://happycow-nbns.herokuapp.com/signup",
        {
          email,
          firstname,
          lastname,
          password,
        }
      );
      Cookies.set("token", response.data.token);
      Cookies.set("firstname", response.data.firstname);
      Cookies.set("lastname", response.data.lastname);
      setIsTokenPresent(true);
    } catch (error) {
      console.log(error.message);
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
      <div className={styles.input_name}>Firstname</div>
      <Input
        type="text"
        placeholder="Firstname"
        value={firstname}
        setValue={setFirstname}
      />
      <div className={styles.input_name}>Lastname</div>
      <Input
        type="text"
        placeholder="Lastname"
        value={lastname}
        setValue={setLastname}
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
  );
}
