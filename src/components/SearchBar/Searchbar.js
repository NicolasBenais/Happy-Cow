import { useState } from "react";

// Style
import styles from "./Searchbar.module.css";

export default function Searchbar() {
  const [onSearchbar, setOnSearchbar] = useState("");

  const handleSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => {
            setOnSearchbar(event.target.value);
          }}
        />
      </form>
      <button type="submit">Loupe</button>
    </div>
  );
}
