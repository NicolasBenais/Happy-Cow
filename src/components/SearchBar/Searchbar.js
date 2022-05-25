import { useState } from "react";
import { Link } from "react-router-dom";

// Style
import styles from "./Searchbar.module.css";

export default function Searchbar() {
  const [onSearchBar, setOnSearchBar] = useState("");

  return (
    <div className={styles.searchbar_container}>
      <input
        className={styles.searchbar_input}
        placeholder="Search for city, region, or zipcode"
        value={onSearchBar}
        type="text"
        onChange={(event) => {
          setOnSearchBar(event.target.value);
        }}
      />
      <Link to="/search" state={onSearchBar}>
        <div className={styles.button}>
          <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
        </div>
      </Link>
    </div>
  );
}
