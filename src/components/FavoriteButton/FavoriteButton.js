// Style
import styles from "./FavoriteButton.module.css";

export default function FavoriteButton({
  favorite,
  addToFavorites,
  removeFromFavorites,
  id,
}) {
  return (
    <div
      className={styles.favorite_button}
      onClick={() =>
        favorite ? removeFromFavorites(favorite) : addToFavorites(id)
      }
    >
      {favorite ? (
        <i className="fa-solid fa-heart-circle-check fa-xl"></i>
      ) : (
        <i className="fa-solid fa-heart fa-xl"></i>
      )}
    </div>
  );
}
