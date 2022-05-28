// Style
import styles from "./FavoriteButton.module.css";

export default function FavoriteButton({ favorite }) {
  return (
    <div className={styles.favorite_button}>
      {favorite ? (
        <i className="fa-solid fa-heart-circle-check fa-xl"></i>
      ) : (
        <i className="fa-solid fa-heart fa-xl"></i>
      )}
    </div>
  );
}
