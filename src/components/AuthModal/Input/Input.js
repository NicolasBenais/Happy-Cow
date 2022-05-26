// Style
import styles from "./Input.module.css";

export default function Input({ type, placeholder, value, setValue }) {
  return (
    <input
      className={styles.input_form}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />
  );
}
